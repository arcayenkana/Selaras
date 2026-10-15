/* Penghubung ke backend Google Apps Script.
   Menyediakan antarmuka kecil (user, db, downloads) yang dipakai app.js.
   Bila backendUrl kosong, file ini tidak melakukan apa pun dan aplikasi berjalan lokal. */
(function () {
  "use strict";
  var C = window.SELARAS_CONFIG || {};
  var BASE = (C.backendUrl || "").trim();
  if (window.claude || !BASE) return;

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) {} }

  function randId() {
    var a = new Uint8Array(12), s = "";
    try { crypto.getRandomValues(a); } catch (e) { for (var i = 0; i < 12; i++) a[i] = Math.floor(Math.random() * 256); }
    for (var j = 0; j < a.length; j++) s += ("0" + a[j].toString(16)).slice(-2);
    return "u" + s;
  }
  function uid() {
    var u = lsGet("selaras.uid");
    if (!u) { u = randId(); lsSet("selaras.uid", u); }
    return u;
  }

  // Kunci admin lewat tautan: https://situsmu/#admin=KUNCI
  var m = /^#admin=(.+)$/.exec(location.hash || "");
  if (m) {
    lsSet("selaras.admin", decodeURIComponent(m[1]));
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
  }

  function url(qs) { return BASE + (BASE.indexOf("?") > -1 ? "&" : "?") + qs; }
  function getJson(qs) {
    return fetch(url(qs), { method: "GET" }).then(function (r) { return r.json(); });
  }
  function postJson(obj) {
    return fetch(BASE, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(obj)
    }).then(function (r) { return r.json(); }).then(function (j) {
      if (j && j.error) { var e = new Error(j.error); e.code = "invalid_argument"; throw e; }
      return j;
    });
  }

  var listeners = [], timer = null, busy = false;
  function pollOnce() {
    if (busy) return Promise.resolve();
    busy = true;
    return getJson("action=list").then(function (j) {
      var rows = (j && j.rows) || [];
      var snap = { docs: rows.map(function (r) { return { id: r.id, data: function () { return r.data; } }; }) };
      listeners.forEach(function (l) { try { l.ok(snap); } catch (e) {} });
    }).catch(function () {
      listeners.forEach(function (l) { if (l.err) try { l.err(); } catch (e) {} });
    }).then(function () { busy = false; });
  }
  function startPoll() {
    if (timer) return;
    pollOnce();
    timer = setInterval(function () { if (!document.hidden) pollOnce(); }, Math.max(8000, C.pollMs || 20000));
    document.addEventListener("visibilitychange", function () { if (!document.hidden) pollOnce(); });
  }

  var userCap = {
    id: function () { return Promise.resolve(uid()); },
    can: function () { return Promise.resolve(true); },
    canEdit: function () {
      var k = lsGet("selaras.admin");
      if (!k) return Promise.resolve(false);
      return getJson("action=admin&key=" + encodeURIComponent(k)).then(function (j) {
        if (!(j && j.ok)) lsDel("selaras.admin");
        return !!(j && j.ok);
      }).catch(function () { return false; });
    }
  };
  var dbCap = {
    collection: function () {
      var q = {
        limit: function () { return q; },
        onSnapshot: function (ok, err) {
          var l = { ok: ok, err: err };
          listeners.push(l); startPoll();
          return function () { listeners = listeners.filter(function (x) { return x !== l; }); };
        }
      };
      return q;
    },
    doc: function (path) {
      var id = String(path).split("/")[1];
      return {
        set: function (data) { return postJson({ action: "set", id: id, data: data }).then(function () { pollOnce(); }); },
        delete: function () { return postJson({ action: "delete", id: id }).then(function () { pollOnce(); }); }
      };
    }
  };
  var dlCap = {
    save: function (o) {
      return new Promise(function (res, rej) {
        try {
          var blob = new Blob([o.data], { type: "text/csv;charset=utf-8" });
          var a = document.createElement("a");
          a.href = URL.createObjectURL(blob); a.download = o.filename || "data.csv";
          document.body.appendChild(a); a.click();
          setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
          res();
        } catch (e) { rej(e); }
      });
    }
  };
  window.claude = {
    use: function (name) {
      if (name === "user") return Promise.resolve(userCap);
      if (name === "db") return Promise.resolve(dbCap);
      if (name === "downloads") return Promise.resolve(dlCap);
      return Promise.reject(new Error("unsupported"));
    }
  };
})();
