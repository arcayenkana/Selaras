/**
 * Backend Selaras (Google Apps Script + Google Sheets).
 * Menyimpan satu baris per peserta di sheet "participants".
 * Isi: id, updated, json (nama panggilan, segmen, poin, skor kuis, jawaban survei).
 * Tidak menyimpan nama asli, nomor HP, atau email.
 */
var SHEET = "participants";

function sh_() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName(SHEET);
  if (!s) { s = ss.insertSheet(SHEET); s.appendRow(["id", "updated", "json"]); }
  return s;
}
function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
function findRow_(s, id) {
  var n = s.getLastRow() - 1;
  if (n < 1) return -1;
  var ids = s.getRange(2, 1, n, 1).getValues();
  for (var i = 0; i < ids.length; i++) if (ids[i][0] === id) return i + 2;
  return -1;
}

function doGet(e) {
  var a = (e && e.parameter && e.parameter.action) || "list";
  if (a === "admin") {
    var k = PropertiesService.getScriptProperties().getProperty("ADMIN_KEY");
    return out_({ ok: !!k && e.parameter.key === k });
  }
  if (a === "list") {
    var cache = CacheService.getScriptCache();
    var hit = cache.get("list");
    if (hit) return ContentService.createTextOutput(hit).setMimeType(ContentService.MimeType.JSON);
    var s = sh_(), v = s.getDataRange().getValues(), rows = [];
    for (var i = 1; i < v.length; i++) {
      try { rows.push({ id: v[i][0], data: JSON.parse(v[i][2]) }); } catch (x) {}
    }
    var txt = JSON.stringify({ rows: rows });
    try { if (txt.length < 90000) cache.put("list", txt, 10); } catch (x) {}
    return ContentService.createTextOutput(txt).setMimeType(ContentService.MimeType.JSON);
  }
  return out_({ error: "bad_action" });
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var b = JSON.parse(e.postData.contents);
    var id = String(b.id || "");
    if (!/^[A-Za-z0-9_-]{8,48}$/.test(id)) return out_({ error: "bad_id" });
    var s = sh_(), row = findRow_(s, id);
    if (b.action === "delete") {
      if (row > 0) s.deleteRow(row);
    } else if (b.action === "set") {
      var d = b.data || {};
      var json = JSON.stringify(d);
      if (json.length > 8000) return out_({ error: "too_large" });
      if (typeof d.nick !== "string" || d.nick.length > 24) return out_({ error: "bad_data" });
      var vals = [[id, new Date(), json]];
      if (row > 0) s.getRange(row, 1, 1, 3).setValues(vals); else s.appendRow(vals[0]);
    } else {
      return out_({ error: "bad_action" });
    }
    CacheService.getScriptCache().remove("list");
    return out_({ ok: true });
  } catch (err) {
    return out_({ error: "server" });
  } finally {
    lock.releaseLock();
  }
}
