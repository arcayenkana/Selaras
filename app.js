(function(){
"use strict";

/* ---------- Konten materi ---------- */
var MODS=[
{
 id:"emosi",name:"Mengenal Emosi dan Stres",short:"Emosi dan stres",icon:"wave",color:"var(--m-emosi)",minutes:25,
 intro:"Belajar membaca perasaanmu sendiri, mengenali tanda stres, dan tahu kapan harus minta bantuan.",
 goals:["Menyebut emosi dasar beserta fungsinya","Mengenali tanda stres pada tubuh, pikiran, dan perilaku","Membedakan stres yang wajar dan stres yang perlu bantuan","Mempraktikkan cara sederhana mengelola emosi dan stres"],
 istilah:[["Emosi","Reaksi alami tubuh dan pikiran terhadap sesuatu yang terjadi, misalnya senang, sedih, marah, atau takut."],["Suasana hati","Perasaan yang lebih lama dan lebih samar dibanding emosi. Bisa bertahan berjam-jam sampai berhari-hari."],["Stres","Respons tubuh dan pikiran saat menghadapi tuntutan yang terasa melebihi kemampuan."],["Coping","Cara kita menghadapi tekanan atau emosi yang sulit. Ada cara yang sehat dan ada yang merugikan."],["Menamai emosi","Mengatakan dengan kata-kata apa yang kamu rasakan, misalnya \"aku kesal\"."]],
 sections:[
 {"t":"Semua emosi itu normal","body":"<p><strong>Emosi</strong> adalah reaksi alami tubuh dan pikiran terhadap sesuatu yang terjadi. Tiap emosi dasar punya tugas:</p><ul><li><strong>Senang:</strong> memberi tanda bahwa sesuatu baik dan layak diulang.</li><li><strong>Sedih:</strong> memberi tanda ada yang hilang atau mengecewakan, dan mengajak kita mencari dukungan.</li><li><strong>Marah:</strong> memberi tanda ada batas yang dilanggar atau sesuatu yang terasa tidak adil.</li><li><strong>Takut:</strong> membuat kita waspada dan bersiap menghadapi bahaya.</li><li><strong>Jijik:</strong> melindungi kita dari hal yang bisa membahayakan.</li></ul><p>Karena tiap emosi punya fungsi, tidak ada emosi yang \"jelek\". Yang bisa baik atau buruk adalah <strong>tindakan</strong> yang kita pilih setelah merasakannya.</p><div class='callout'><b class='t'>Contoh</b>Kamu marah karena temanmu membocorkan rahasiamu. Marah itu wajar karena batasmu dilanggar. Pilihan tindakan: (1) membentaknya di depan teman-temanmu, (2) memblokirnya tanpa kata, atau (3) menarik napas lalu berkata, \"Aku kecewa kamu cerita itu ke orang lain.\" Perasaannya sama, dampaknya berbeda.</div><p><strong>Emosi dan suasana hati:</strong> emosi biasanya singkat dan ada pemicunya (menit sampai jam). Suasana hati lebih lama dan lebih samar (jam sampai hari).</p>","core":"Emosi itu normal dan berguna. Yang kita atur adalah tindakan, bukan perasaannya."},
 {"t":"Kenali sinyal dari tubuh dan pikiran","body":"<p>Stres dan emosi yang kuat jarang muncul sebagai kalimat. Biasanya <strong>tubuh memberi sinyal lebih dulu</strong>. Kenali tiga kelompok sinyal berikut:</p><ul><li><strong>Tubuh:</strong> jantung berdebar, napas pendek, sakit kepala, sakit perut, bahu tegang, telapak tangan dingin, sulit tidur atau justru tidur terus.</li><li><strong>Pikiran:</strong> sulit konsentrasi, mudah lupa, pikiran berputar, merasa kewalahan, membayangkan hal terburuk.</li><li><strong>Perilaku:</strong> gampang marah, menarik diri dari teman, menunda terus, pola makan berubah, malas melakukan hal yang biasanya disukai.</li></ul><div class='callout'><b class='t'>Contoh</b>Sakit perut tiap Senin pagi dan mendadak malas berangkat sekolah atau kuliah bisa jadi sinyal stres, terutama bila tidak ada penyebab medis yang jelas. Kalau gejala fisik terus berulang, periksakan juga ke tenaga kesehatan.</div><p><strong>Cek tubuh 30 detik:</strong></p><ol><li>Tutup mata dan tarik napas pelan.</li><li>Pindai dari kepala sampai kaki. Bagian mana yang tegang atau terasa berat?</li><li>Beri nama perasaanmu, lalu beri skor 1 sampai 10 (1 = sangat ringan, 10 = sangat kuat).</li></ol><p>Skor membantu kamu tahu kapan harus bertindak. Skor 1 sampai 4 biasanya cukup ditangani dengan napas atau jalan sebentar. Kalau skor 7 ke atas bertahan lama, ceritakan pada orang yang kamu percaya.</p>","core":"Tubuh sering tahu lebih dulu. Cek tubuh, pikiran, dan perilakumu secara berkala."},
 {"t":"Stres: kapan wajar, kapan perlu bantuan","body":"<p>Tidak semua stres buruk. <strong>Stres singkat</strong> menjelang ujian atau lomba bisa membuatmu fokus dan siap. Masalah muncul kalau stres <strong>berlangsung lama</strong> dan tidak sempat reda.</p><p>Tanyakan tiga hal ini:</p><ol><li><strong>Berapa lama?</strong> Beberapa hari lalu reda setelah acaranya lewat, atau sudah berminggu-minggu?</li><li><strong>Seberapa berat?</strong> Apakah mengganggu tidur, makan, belajar, atau hubunganmu dengan keluarga dan teman?</li><li><strong>Apakah reda saat pemicunya selesai?</strong> Kalau sudah selesai tetapi perasaan tetap berat, itu tanda untuk bicara.</li></ol><div class='callout'><b class='t'>Bandingkan</b><b>Wajar:</b> gugup tiga hari sebelum lomba, tidur agak terganggu, lega setelah selesai.<br><b>Perlu perhatian:</b> tiga minggu sulit tidur, sakit perut tiap hari mau berangkat, mulai menghindari teman, dan tidak ada yang berubah walau ujian sudah lewat.</div><p>Kalau jawabanmu mengarah ke \"perlu perhatian\", ceritakan pada <strong>guru BK, kader PIKR, orang tua, atau kakak</strong> yang kamu percaya. Puskesmas juga punya layanan kesehatan jiwa.</p><div class='callout warm'><b class='t'>Ingat</b>Meminta bantuan bukan tanda lemah. Itu langkah berani dan cara tercepat supaya beban terasa lebih ringan.</div>","core":"Lihat berapa lama, seberapa berat, dan apakah reda. Kalau mengganggu hidup sehari-hari, bicarakan."},
 {"t":"Lima cara mengelola stres","body":"<p>Pilih satu atau dua yang paling cocok denganmu, lalu latih sampai terbiasa.</p><ol><li><strong>Beri nama emosimu.</strong> Pakai rumus: \"Aku merasa <em>(emosi)</em> karena <em>(sebab)</em>.\" Contoh: \"Aku merasa cemas karena besok presentasi.\" Menamai perasaan membantu otak memprosesnya, sehingga terasa lebih bisa dikelola.</li><li><strong>Atur napas 4-6.</strong> Tarik napas lewat hidung 4 hitungan, hembuskan pelan lewat mulut 6 hitungan. Ulangi 5 kali. Hembusan yang lebih panjang membantu tubuh menurunkan ketegangan.</li><li><strong>Gerakkan tubuh.</strong> Jalan kaki 10 menit, peregangan, atau naik tangga.</li><li><strong>Pecah tugas besar.</strong> Contoh \"Tugas Biologi\" dipecah: cari 3 sumber (20 menit), tulis kerangka (25 menit), tulis bagian 1 (25 menit). Mulai dari bagian yang paling kecil.</li><li><strong>Cerita ke seseorang.</strong> Kalimat pembuka: \"Aku lagi butuh didengar, boleh cerita 10 menit?\" Kamu tidak harus meminta solusi.</li></ol><p><strong>Dasar yang sering terlupa:</strong> tidur cukup, makan teratur, dan minum air.</p><div class='callout warm'><b class='t'>Terasa membantu, tetapi sebenarnya tidak</b>Memendam semuanya, begadang demi tugas setiap malam, melampiaskan marah ke orang lain, atau menghindari masalah terus-menerus. Semuanya memberi lega sebentar, tetapi stresnya menumpuk.</div>","core":"Mulai dari langkah kecil: namai emosi, atur napas, pecah tugas, dan cerita ke orang yang dipercaya."}
 ],
 kasus:{judul:"Studi kasus: Raka dan minggu yang padat",
  cerita:"<p>Raka sedang sangat sibuk. Minggu ini ada ujian, rapat organisasi, dan orang tuanya berharap ia tetap berprestasi. Sejak tiga minggu lalu ia susah tidur, perutnya sakit setiap hari Senin, dan ia jadi gampang marah ke adiknya. Saat ditanya teman, Raka menjawab \"aku nggak apa-apa\".</p>",
  tanya:["Sinyal stres apa saja yang muncul pada Raka (tubuh, pikiran, perilaku)?","Menurutmu, kenapa Raka bilang \"nggak apa-apa\"?","Langkah kecil apa yang bisa Raka coba minggu ini, dan ke siapa ia bisa bercerita?"],
  aktivitas:{judul:"Peta emosi 3 menit",langkah:["Tulis tiga emosi yang kamu rasakan hari ini.","Beri skor 1 sampai 10 untuk masing-masing.","Tandai di bagian tubuh mana tiap emosi terasa.","Pilih satu hal kecil yang bisa kamu lakukan hari ini untuk emosi dengan skor tertinggi."]}},
 tes:[
 {"q":"Sebelum presentasi, jantung Sinta berdebar dan tangannya dingin. Temannya bilang, \"Tenang aja, nggak usah gugup.\" Pandangan mana yang paling sesuai dengan materi?","o":["Temannya benar: rasa gugup sebaiknya hilang dulu sebelum Sinta tampil","Gugup ringan sebelum tampil itu wajar dan bisa dikelola; yang dilatih adalah responsnya, bukan menghilangkan rasa gugupnya","Gugup menandakan Sinta belum siap, jadi presentasinya sebaiknya ditunda","Gugup cukup diabaikan, karena memperhatikannya justru memperburuk"],"a":1,"why":"Perasaan tidak perlu dihilangkan dulu. Menamai gugup, mengatur napas, dan memecah persiapan membantu Sinta merespons dengan lebih baik, sedangkan mengabaikannya biasanya tidak membuatnya reda."},
 {"q":"Mana pernyataan yang PALING TIDAK sesuai dengan materi tentang stres?","o":["Stres singkat sebelum ujian bisa membuat seseorang lebih siap","Sakit perut yang berulang setiap hari Senin bisa jadi sinyal stres di tubuh","Kalau sudah menguasai teknik napas, stres yang berlangsung berminggu-minggu tidak perlu dibicarakan dengan siapa pun","Menarik diri dari teman bisa menjadi perubahan perilaku akibat stres"],"a":2,"why":"Teknik napas membantu, tetapi stres yang lama dan mengganggu tidur, belajar, atau hubungan tetap perlu dibicarakan dengan orang dewasa tepercaya atau konselor."},
 {"q":"Raka sudah tiga minggu sulit tidur, tetapi saat ditanya ia menjawab, \"Aku nggak apa-apa.\" Respons teman yang paling membantu?","o":["Menjawab \"ya udah kalau gitu\" supaya Raka tidak merasa dipaksa, lalu menunggu ia bercerita sendiri","Mendesak Raka bercerita saat itu juga supaya ia cepat lega","Menyarankan Raka cukup banyak istirahat karena itu hanya capek biasa","Menyampaikan bahwa kamu memperhatikan ia sulit tidur belakangan ini, menawarkan diri mendengarkan tanpa menghakimi, dan mengingatkan bahwa ada guru BK atau kader PIKR bila ia mau"],"a":3,"why":"Menyampaikan kepedulian yang spesifik dan menawarkan pilihan lebih menolong daripada diam menunggu atau memaksa. Orang yang sedang stres sering menjawab \"nggak apa-apa\" sebelum merasa aman bercerita."},
 {"q":"Setelah menamai emosi, \"Aku kesal\", hasil yang paling realistis adalah...","o":["Rasa kesal pasti hilang dalam hitungan detik","Rasa kesal mungkin masih ada, tetapi terasa lebih bisa dipahami dan kamu lebih mudah memilih respons","Rasa kesal berubah menjadi sedih sehingga lebih mudah ditangani","Tidak ada perubahan apa pun; menamai emosi hanya berguna untuk dicatat"],"a":1,"why":"Menamai emosi tidak menghapusnya. Efeknya adalah membuat perasaan lebih jelas sehingga kamu bisa memilih respons, bukan sekadar bereaksi."},
 {"q":"Mana situasi yang paling menunjukkan perlunya bicara dengan guru BK atau orang dewasa tepercaya?","o":["Seminggu sulit tidur menjelang lomba, tetapi tetap beraktivitas dan nongkrong seperti biasa","Sesekali kesal pada adik setelah hari yang melelahkan","Selama tiga minggu sulit tidur, sakit perut setiap mau berangkat, dan mulai menghindari teman","Gugup berat sebelum tampil, lalu lega sesudahnya"],"a":2,"why":"Yang menjadi tanda adalah durasi yang lama, gejala tubuh yang berulang, dan perubahan perilaku yang mengganggu hidup sehari-hari. Stres singkat yang reda setelah peristiwanya lewat termasuk wajar."}
 ]
},
{
 id:"cemas",name:"Kecemasan dan Overthinking",short:"Cemas dan overthinking",icon:"spiral",color:"var(--m-cemas)",minutes:25,
 intro:"Kenali pikiran yang berputar-putar dan pelajari alat sederhana untuk menenangkannya.",
 goals:["Membedakan cemas yang wajar dan overthinking","Mengenali lingkaran pikiran yang membuat cemas menguat","Mempraktikkan dua alat: memeriksa pikiran dan menenangkan tubuh","Mengetahui tanda bahwa perlu bantuan profesional"],
 istilah:[["Cemas","Respons alami saat otak mengantisipasi sesuatu yang dianggap mengancam."],["Overthinking","Memutar pikiran yang sama berulang kali tanpa menghasilkan langkah nyata. Istilah sehari-hari, bukan diagnosis."],["Pikiran \"gimana kalau\"","Dugaan otak tentang hal buruk yang mungkin terjadi. Itu dugaan, bukan fakta."],["Menghindar","Menjauhi hal yang membuat cemas. Lega sebentar, tetapi rasa takut cenderung menguat."],["Meminta jaminan","Bertanya berulang supaya merasa aman, misalnya \"Kamu yakin dia nggak marah?\"."],["Serangan panik","Gelombang takut yang sangat kuat dan tiba-tiba, dengan jantung berdebar, sesak, dan gemetar. Biasanya memuncak lalu reda dalam beberapa menit."],["Grounding","Teknik menarik perhatian ke pancaindra di saat ini supaya pikiran berhenti berputar."]],
 sections:[
 {"t":"Cemas dan overthinking itu apa?","body":"<p><strong>Cemas</strong> adalah respons alami saat otak mengantisipasi sesuatu yang dianggap mengancam, misalnya ujian, tampil di depan umum, atau menunggu hasil. Dalam takaran wajar, cemas membuatmu bersiap.</p><p><strong>Overthinking</strong> adalah saat pikiran memutar hal yang sama berulang kali tanpa menghasilkan langkah nyata. Dua bentuk yang umum:</p><ul><li><strong>Memutar masa lalu:</strong> \"Kenapa tadi aku bilang begitu? Dia pasti ilfeel.\"</li><li><strong>Mengkhawatirkan masa depan:</strong> \"Gimana kalau aku gagal? Gimana kalau semua orang menertawakanku?\"</li></ul><div class='callout'><b class='t'>Bedakan</b><b>Cemas yang membantu:</b> ada pemicu jelas, sebanding dengan masalahnya, membuatmu bersiap (belajar, latihan), dan reda setelah lewat.<br><b>Overthinking:</b> berulang, tidak menghasilkan langkah, makin lama makin besar, dan membuatmu lelah.</div><p>Cara cepat membedakannya: tanya \"Setelah memikirkan ini, aku punya langkah baru atau tidak?\" Kalau tidak, besar kemungkinan kamu sedang memutar.</p><p class='small muted'>\"Overthinking\" adalah istilah sehari-hari, bukan diagnosis. Penilaian kecemasan dilakukan oleh tenaga profesional.</p>","core":"Cemas bisa membantu. Overthinking memutar tanpa langkah. Tanyakan: apakah aku punya langkah baru?"},
 {"t":"Lingkaran pikiran yang berputar","body":"<p>Overthinking sering berjalan seperti lingkaran. Pahami lingkarannya supaya kamu bisa memutusnya di salah satu titik.</p><ol><li><strong>Pemicu:</strong> pesan sudah dibaca tetapi belum dibalas.</li><li><strong>Pikiran \"gimana kalau\":</strong> \"Jangan-jangan dia marah sama aku.\"</li><li><strong>Tubuh tegang:</strong> dada sesak, perut mulas, sulit tidur.</li><li><strong>Menghindar atau meminta jaminan:</strong> membuka chat berkali-kali, bertanya ke banyak teman.</li><li><strong>Lega sebentar,</strong> lalu cemas kembali dan lebih kuat dari sebelumnya.</li></ol><div class='callout warm'><b class='t'>Kenapa terasa menolong, padahal tidak</b>Menghindar dan meminta jaminan memberi lega cepat. Otak lalu belajar, \"Tadi aman karena aku menghindar atau bertanya.\" Akibatnya kamu makin bergantung pada cara itu dan cemasnya makin sering datang.</div><p><strong>Titik yang bisa diputus:</strong> periksa pikirannya (langkah 2), tenangkan tubuh (langkah 3), atau kurangi menghindar dan meminta jaminan (langkah 4).</p>","core":"Lingkaran pikiran bisa diputus di beberapa titik. Menghindar dan minta jaminan justru memperkuatnya."},
 {"t":"Alat 1: periksa pikiranmu","body":"<p>Pikiran bukan fakta. Ia hanya dugaan otak. Uji dengan empat langkah:</p><ol><li><strong>Tulis pikirannya persis.</strong> Contoh: \"Dia pasti marah padaku.\"</li><li><strong>Cari bukti.</strong> Apa yang mendukung, apa yang menentang? Mendukung: belum dibalas 3 jam. Menentang: kemarin kami baik-baik saja, dia memang sering telat membalas kalau sedang les.</li><li><strong>Cari tiga kemungkinan lain.</strong> Baterai habis, sedang sibuk, ketiduran.</li><li><strong>Tes sahabat.</strong> Kalau sahabatku berpikir begini, aku akan bilang apa padanya?</li></ol><p><strong>Pisahkan dua kolom:</strong></p><ul><li><strong>Bisa kukendalikan:</strong> belajar 30 menit, mengirim satu pesan yang jelas, tidur tepat waktu.</li><li><strong>Tidak bisa kukendalikan:</strong> isi pikiran orang lain, kapan pesan dibalas, hasil yang belum keluar.</li></ul><p>Pilih satu langkah dari kolom pertama dan kerjakan hari ini.</p><div class='callout'><b class='t'>Waktu khawatir (15 menit)</b>Tentukan satu waktu tiap hari, misalnya jam 16.00. Tulis semua kekhawatiranmu di kertas. Di luar waktu itu, kalau pikiran muncul, catat satu kata lalu tunda sampai jadwalnya. Sering kali sebagian kekhawatiran sudah tidak terasa penting saat jadwalnya tiba.</div>","core":"Pikiran adalah dugaan. Uji dengan bukti, cari kemungkinan lain, lalu pilih langkah yang bisa kamu kendalikan."},
 {"t":"Alat 2: tenangkan tubuh, dan kapan cari bantuan","body":"<p><strong>Tenangkan tubuh dulu</strong>, baru berpikir. Dua teknik cepat:</p><ul><li><strong>Napas 4-6:</strong> tarik napas 4 hitungan, hembuskan 6 hitungan, ulangi 5 kali.</li><li><strong>Grounding 5-4-3-2-1:</strong> sebutkan 5 hal yang kamu lihat, 4 yang kamu sentuh, 3 yang kamu dengar, 2 yang kamu cium, 1 yang kamu kecap. Ini menarik perhatian dari pikiran ke saat ini.</li></ul><p><strong>Dasar-dasar:</strong> tidur cukup, kurangi kafein dan minuman energi, bergerak setiap hari.</p><div class='callout warm'><b class='t'>Kalau temanmu mengalami serangan panik</b>Temani dia, bicara pelan, ajak napas pelan bersama, dan jangan bilang \"jangan lebay\". Serangan panik biasanya memuncak lalu reda dalam beberapa menit. Kalau ini pertama kalinya, ada nyeri dada hebat, atau tidak kunjung reda, cari bantuan medis.</div><p><strong>Cari bantuan profesional</strong> (psikolog, puskesmas, atau konselor sekolah) kalau:</p><ul><li>serangan panik terjadi berulang,</li><li>cemas berat berlangsung berminggu-minggu,</li><li>kamu mulai menghindari sekolah atau teman karenanya.</li></ul><p>Kecemasan bisa ditangani. Kamu tidak perlu menunggu sampai parah untuk bertanya.</p>","core":"Tenangkan tubuh dulu. Kalau cemas berat, berulang, atau membuatmu menghindar, cari bantuan profesional."}
 ],
 kasus:{judul:"Studi kasus: Dinda dan centang dua",
  cerita:"<p>Dinda mengirim pesan ke sahabatnya jam 7 malam. Sudah centang dua, tapi tidak dibalas. Jam 10 ia mulai berpikir, \"Pasti dia marah. Aku salah ngomong kemarin.\" Ia membuka chat belasan kali, bertanya ke dua temannya apakah sahabatnya terlihat kesal, dan baru tertidur lewat jam 2 pagi. Besoknya ternyata sahabatnya tertidur lebih awal karena demam.</p>",
  tanya:["Di bagian mana lingkaran pikiran Dinda mulai berputar?","Apa yang bisa Dinda tanyakan pada dirinya sebelum percaya \"dia pasti marah\"?","Apa yang dikendalikan Dinda malam itu, dan apa yang tidak?"],
  aktivitas:{judul:"Grounding 5-4-3-2-1 dan uji satu pikiran",langkah:["Lakukan grounding 5-4-3-2-1 di tempatmu sekarang.","Tulis satu pikiran \"gimana kalau\" yang sering muncul.","Tulis satu bukti yang mendukung dan satu bukti yang menentangnya.","Tulis satu langkah kecil yang bisa kamu kendalikan hari ini."]}},
 tes:[
 {"q":"Setelah presentasi, Dinda terus memutar ulang, \"Tadi aku salah bicara di slide 3, pasti semua mengira aku bodoh.\" Langkah mana yang paling sesuai dengan materi?","o":["Menganalisis kesalahan itu sedetail mungkin sampai ketemu penyebab pastinya, itu tanda bertanggung jawab","Bertanya ke beberapa teman apakah tadi kelihatan buruk, supaya tenang","Menentukan satu hal yang bisa diperbaiki lain kali, lalu menguji pikiran \"semua mengira aku bodoh\" dengan bukti","Menahan pikiran itu agar tidak muncul sama sekali"],"a":2,"why":"Satu langkah perbaikan yang konkret memutus putaran pikiran, dan menguji pikiran dengan bukti memisahkan fakta dari dugaan. Menganalisis berlebihan dan meminta jaminan justru menjaga lingkaran itu."},
 {"q":"Kenapa meminta jaminan berulang (\"Kamu yakin dia nggak marah?\") cenderung tidak menolong dalam jangka panjang?","o":["Karena membuat orang lain ikut cemas","Lega yang didapat hanya sebentar, dan otak jadi bergantung pada jaminan dari luar untuk merasa aman","Karena jawaban yang diberikan biasanya terlalu singkat untuk menenangkan","Karena bertanya selalu dianggap mengganggu"],"a":1,"why":"Meminta jaminan memberi lega sesaat, tetapi cemas kembali dan kebutuhan bertanya makin sering. Itu bagian dari lingkaran yang membuat cemas menguat."},
 {"q":"Kapan grounding 5-4-3-2-1 paling cocok dipakai?","o":["Saat menyusun rencana belajar yang detail","Saat ingin memutuskan apakah perlu ke psikolog","Saat ingin menyelesaikan masalah dengan teman","Saat pikiran berputar dan tubuh terasa tegang, dan kamu perlu kembali ke saat ini"],"a":3,"why":"Grounding menarik perhatian dari pikiran ke pancaindra. Ia berguna menurunkan ketegangan, bukan untuk merencanakan atau memutuskan hal besar."},
 {"q":"Seorang pelajar atau mahasiswa mulai membolos pelajaran tertentu karena takut ditanya guru. Setiap membolos ia merasa lega. Dampak jangka panjang yang paling mungkin?","o":["Ketakutan mereda karena otak belajar bahwa situasi itu tidak berbahaya","Rasa takut cenderung menguat karena otak tidak pernah mengalami bahwa ia sanggup menghadapinya","Rasa takut pindah ke pelajaran lain, tetapi hilang di pelajaran itu","Tidak ada dampak karena hanya satu pelajaran"],"a":1,"why":"Lega setelah menghindar mengajarkan otak bahwa situasi itu memang berbahaya, sehingga takutnya menguat dan bisa meluas."},
 {"q":"Mana gambaran yang paling menunjukkan perlunya bantuan profesional untuk kecemasan?","o":["Cemas hampir setiap hari selama berminggu-minggu, disertai serangan panik, sampai ia menghindari aktivitas dan teman","Cemas berat sebelum ujian, tetapi hilang setelah ujian selesai","Cemas ringan yang reda dengan napas 4-6","Cemas karena menghadapi bahaya nyata, misalnya diikuti orang tak dikenal"],"a":0,"why":"Tanda utamanya: berat, berulang, berlangsung lama, dan membuat menghindari aktivitas penting. Cemas yang reda setelah pemicunya selesai, atau yang wajar karena bahaya nyata, adalah respons normal."}
 ]
},
{
 id:"diri",name:"Self-love dan Citra Diri",short:"Self-love dan citra diri",icon:"heart",color:"var(--m-diri)",minutes:25,
 intro:"Belajar bersikap baik pada diri sendiri, memahami pengaruh media sosial, dan mengubah suara dalam kepala.",
 goals:["Membedakan self-love, egois, dan memanjakan diri","Memahami kenapa media sosial memengaruhi citra diri","Mengubah suara \"juri\" di kepala menjadi suara \"pelatih\"","Membangun harga diri dari hal yang nyata"],
 istilah:[["Self-love","Memperlakukan diri dengan pengertian dan hormat, termasuk saat gagal."],["Self-compassion","Tiga bagian: baik pada diri, sadar bahwa semua orang pernah gagal, dan mengamati perasaan tanpa tenggelam."],["Citra diri","Cara kamu memandang dirimu: penampilan, kemampuan, dan nilaimu."],["Perbandingan sosial","Kebiasaan menilai diri dengan membandingkannya ke orang lain."],["Self-talk","Kalimat yang kamu ucapkan pada dirimu sendiri di dalam kepala."],["Harga diri","Penilaian kamu atas nilai dirimu sendiri, yang sehat bila dibangun dari hal nyata."]],
 sections:[
 {"t":"Self-love bukan egois","body":"<p><strong>Self-love</strong> bukan merasa lebih hebat dari orang lain. Ia berarti <strong>memperlakukan dirimu dengan pengertian</strong>, terutama saat kamu gagal atau salah. Para peneliti menyebutnya <em>self-compassion</em>, dengan tiga bagian:</p><ul><li><strong>Baik pada diri sendiri</strong>, bukan menghakimi. Contoh: \"Aku kecewa, tapi aku sudah berusaha.\"</li><li><strong>Sadar bahwa semua orang pernah gagal.</strong> \"Bukan cuma aku yang pernah begini.\"</li><li><strong>Mengamati perasaan tanpa tenggelam.</strong> \"Aku sedang sedih. Perasaan ini akan berubah.\"</li></ul><div class='callout'><b class='t'>Bedakan</b><b>Self-love:</b> mengakui salah, belajar, dan tetap bergerak.<br><b>Egois:</b> mengabaikan perasaan orang lain demi diri sendiri.<br><b>Memanjakan diri berlebihan:</b> menghindari tanggung jawab supaya nyaman sesaat.</div><p>Orang yang bersikap baik pada dirinya cenderung lebih berani mencoba lagi setelah gagal, karena kegagalan tidak terasa seperti vonis.</p>","core":"Self-love adalah bersikap baik dan realistis pada diri sendiri, bukan sombong atau menghindar."},
 {"t":"Citra diri dan media sosial","body":"<p><strong>Citra diri</strong> adalah cara kamu memandang dirimu: penampilan, kemampuan, dan nilaimu. Media sosial sangat memengaruhinya karena kita terus melihat orang lain.</p><p>Kenapa membandingkan diri dengan feed sering menyesatkan:</p><ul><li><strong>Sorotan, bukan keseharian.</strong> Orang memilih momen terbaik. Kamu membandingkan \"belakang panggung\" milikmu dengan \"panggung\" orang lain.</li><li><strong>Filter dan editan.</strong> Banyak foto sudah diubah dan kamu tidak melihat prosesnya.</li><li><strong>Algoritma.</strong> Aplikasi menampilkan hal yang membuatmu terus menonton, termasuk yang memancing rasa kurang.</li><li><strong>Like bukan ukuran nilai dirimu.</strong> Jumlahnya dipengaruhi jam unggah, algoritma, dan banyak hal lain.</li></ul><div class='callout'><b class='t'>Audit feed 3 langkah</b>1) Buka feed 5 menit, lalu tanya: aku merasa lebih baik atau lebih kurang?<br>2) Mute atau unfollow 3 akun yang sering membuatmu merasa kurang.<br>3) Ikuti 1 akun yang memberi ilmu, humor, atau inspirasi nyata.</div><p>Tambahan: tetapkan jam tanpa layar sebelum tidur, dan boleh sesekali mengunggah foto apa adanya.</p>","core":"Feed adalah sorotan terpilih. Kamu bisa mengatur isinya dan memperhatikan dampaknya pada perasaanmu."},
 {"t":"Suara dalam kepalamu","body":"<p>Kita semua punya suara di kepala. Ada yang bicara seperti <strong>pelatih</strong> yang baik, ada yang seperti <strong>juri</strong> yang kejam.</p><ul><li>Juri: \"Aku bodoh, selalu gagal.\" Pelatih: \"Aku belum paham bagian ini. Apa langkah berikutnya?\"</li><li>Juri: \"Mereka pasti menertawakanku.\" Pelatih: \"Aku gugup. Aku sudah latihan, dan itu cukup untuk mulai.\"</li><li>Juri: \"Aku jelek.\" Pelatih: \"Aku sedang tidak suka penampilanku hari ini. Itu tidak mengubah nilaiku.\"</li></ul><p><strong>Cara mengubahnya:</strong></p><ol><li><strong>Sadari</strong> kalimatnya. Tulis persis seperti yang kamu pikirkan.</li><li><strong>Beri jarak:</strong> ubah \"Aku bodoh\" menjadi \"Aku sedang berpikir bahwa aku bodoh.\"</li><li><strong>Tes sahabat:</strong> apakah kamu akan mengatakan kalimat itu pada sahabatmu?</li><li><strong>Tulis ulang</strong> dengan kalimat yang jujur dan menunjuk langkah.</li></ol><p>Kritik yang berguna menunjuk langkah berikutnya. Kritik yang hanya menyerang diri jarang membuat kita berkembang.</p>","core":"Ubah suara juri menjadi suara pelatih: jujur, menunjuk langkah, dan tidak menyerang dirimu."},
 {"t":"Membangun harga diri dari hal nyata","body":"<p>Harga diri yang sehat dibangun dari hal nyata, bukan dari like atau pujian.</p><ul><li><strong>Kenali kekuatanmu.</strong> Tulis 3 hal yang kamu lakukan dengan baik minggu ini, sekecil apa pun, misalnya membantu adik belajar, tepat waktu, atau berani bertanya.</li><li><strong>Pegang nilaimu.</strong> Jujur, peduli, rajin, atau berani. Bertindak sesuai nilai itu membuatmu menghargai diri.</li><li><strong>Bangun kebiasaan kecil.</strong> Konsisten pada hal kecil (tidur tepat waktu, membaca 10 menit) membangun rasa percaya diri.</li><li><strong>Rawat tubuhmu, jangan menghukumnya.</strong> Tidur, makan, dan gerak yang cukup.</li><li><strong>Cari teman yang menghargaimu apa adanya.</strong></li></ul><div class='callout warm'><b class='t'>Kapan perlu bicara</b>Kalau pikiran negatif tentang dirimu atau tubuhmu terus menguasai hari dan sulit dihentikan, atau pikiran tentang makan dan penampilan mulai mengatur hidupmu, ceritakan pada guru BK, orang tua, atau tenaga kesehatan. Itu bisa ditangani, dan kamu tidak harus menunggu sampai parah.</div>","core":"Harga diri tumbuh dari kekuatan, nilai, dan kebiasaan kecil. Bukan dari like atau pujian."}
 ],
 kasus:{judul:"Studi kasus: Nadia dan feed yang berisik",
  cerita:"<p>Tiap malam Nadia menggulir media sosial dan melihat teman-temannya liburan dengan foto yang cantik. Ia mulai merasa wajahnya berjerawat dan hidupnya membosankan. Kemarin ia mengunggah foto yang sudah diedit, lalu menghapusnya setelah satu jam karena likenya sedikit. Setelah itu ia bergumam, \"Aku memang nggak menarik.\"</p>",
  tanya:["Apa yang sebenarnya Nadia bandingkan?","Bagaimana versi \"pelatih\" dari kalimat \"aku memang nggak menarik\"?","Dua perubahan kecil apa yang bisa Nadia lakukan di feed-nya?"],
  aktivitas:{judul:"Surat untuk sahabat dan audit feed",langkah:["Bayangkan sahabatmu mengalami hal yang sedang kamu cemaskan. Tulis tiga kalimat yang kamu ucapkan padanya.","Bacakan kalimat itu untuk dirimu sendiri.","Buka media sosialmu dan pilih tiga akun yang sering membuatmu merasa kurang. Mute atau unfollow.","Ikuti satu akun baru yang memberi manfaat."]}},
 tes:[
 {"q":"Setelah gagal lolos seleksi organisasi, Tari berkata pada dirinya, \"Ya udah, memang aku nggak cocok.\" Respons mana yang paling sehat menurut materi?","o":["Mengubah kalimat menjadi \"Aku harus jauh lebih baik\" supaya lebih termotivasi","Mengakui rasa kecewa, lalu bertanya apa yang bisa dipelajari dan siapa yang bisa dimintai masukan","Meyakinkan diri, \"Aku yang terbaik, mereka yang salah menilai\"","Tidak memikirkannya sama sekali supaya tidak sedih"],"a":1,"why":"Suara \"pelatih\" mengakui perasaan dan menunjuk langkah berikutnya. Tuntutan yang lebih keras tetap kritik yang menyerang diri, dan menyangkal perasaan hanya menundanya."},
 {"q":"Mana yang paling mencerminkan self-compassion, bukan sekadar memanjakan diri?","o":["Membatalkan semua tugas karena hari ini terasa berat","Meyakinkan diri bahwa kegagalan tadi sama sekali tidak penting","Mengakui bahwa hari ini sulit dan itu wajar, tetap menyelesaikan satu tugas kecil, lalu istirahat","Menghukum diri dengan begadang supaya tidak mengulang kesalahan"],"a":2,"why":"Self-compassion berarti baik pada diri sekaligus tetap bergerak. Ia bukan menghindari tanggung jawab, bukan menyangkal, dan bukan menghukum."},
 {"q":"Feed media sosial sering membuat Nadia merasa kurang. Langkah mana yang paling selaras dengan materi?","o":["Berhenti memakai media sosial total selamanya","Tetap mengikuti semua akun, sambil mengingatkan diri bahwa semuanya palsu","Mengunggah foto yang diedit supaya mendapat banyak like dan merasa lebih baik","Mengamati perasaan setelah scroll, mute akun yang sering memicu rasa kurang, dan menambah akun yang bermanfaat"],"a":3,"why":"Kamu bisa mengatur isi feed dan memperhatikan dampaknya. Menutup diri total tidak realistis, dan mengejar like justru menjadikan harga diri bergantung pada angka."},
 {"q":"Temanmu berkata, \"Kamu terlalu baik ke diri sendiri, nanti jadi malas.\" Tanggapan yang paling tepat menurut materi?","o":["Self-compassion bukan berarti tanpa standar; orang yang baik pada dirinya cenderung lebih berani mencoba lagi setelah gagal","Setuju, kritik yang keras lebih efektif membuat berkembang","Benar, tetapi hanya berlaku untuk orang dewasa","Abaikan saja, pendapat orang lain tidak perlu dipertimbangkan sama sekali"],"a":0,"why":"Bersikap baik pada diri tidak sama dengan menurunkan standar. Justru sikap itu membuat orang lebih berani mencoba lagi."},
 {"q":"Kapan pikiran tentang tubuh atau penampilan perlu dibicarakan dengan orang dewasa atau tenaga kesehatan?","o":["Saat pikiran itu sesekali muncul setelah melihat foto di media sosial","Saat pikiran tentang tubuh atau makan terus mengatur hari-harinya dan sulit dihentikan","Hanya jika sudah ada masalah kesehatan fisik yang terlihat","Tidak perlu, karena itu hal biasa pada remaja"],"a":1,"why":"Pikiran yang menetap, menguasai hari, dan sulit dihentikan adalah tanda untuk bicara dengan orang yang dipercaya atau tenaga kesehatan, tanpa menunggu ada gejala fisik."}
 ]
},
{
 id:"bully",name:"Bullying dan Tekanan Teman Sebaya",short:"Bullying dan teman sebaya",icon:"shield",color:"var(--m-bully)",minutes:25,
 intro:"Mengenali bullying (termasuk di dunia maya), menolak ajakan negatif, dan tahu apa yang bisa dilakukan sebagai korban maupun saksi.",
 goals:["Mengenali bullying, termasuk cyberbullying, dan membedakannya dari bercanda dan konflik","Menolak tekanan teman sebaya dengan tegas","Mengetahui langkah aman bila menjadi korban","Mengetahui peran saksi dan apa yang bisa dilakukan"],
 istilah:[["Bullying","Perilaku menyakiti yang disengaja, berulang, dan ada ketimpangan kekuatan."],["Cyberbullying","Bullying lewat dunia maya: meme penghinaan, menyebar foto atau chat tanpa izin, akun palsu."],["Ketimpangan kekuatan","Satu pihak lebih populer, lebih banyak, atau lebih kuat sehingga pihak lain sulit membela diri."],["Tekanan teman sebaya","Dorongan dari teman untuk berpikir atau berperilaku sama. Bisa positif, bisa negatif."],["Saksi","Orang yang melihat atau mengetahui bullying terjadi. Sikapnya memengaruhi apakah bullying berlanjut."],["Bukti","Tangkapan layar, tanggal, dan nama akun yang disimpan untuk dilaporkan."]],
 sections:[
 {"t":"Apa itu bullying?","body":"<p><strong>Bullying</strong> adalah perilaku menyakiti yang memenuhi tiga ciri:</p><ol><li><strong>Disengaja</strong> untuk melukai atau mempermalukan.</li><li><strong>Berulang</strong> dari waktu ke waktu.</li><li><strong>Ada ketimpangan kekuatan:</strong> pelaku lebih populer, lebih banyak, atau lebih kuat, sehingga korban sulit membela diri.</li></ol><p>Bentuknya:</p><ul><li><strong>Fisik:</strong> memukul, mendorong, merusak atau mengambil barang.</li><li><strong>Verbal:</strong> mengejek, memberi julukan menyakitkan, mengancam.</li><li><strong>Sosial:</strong> mengucilkan, menyebar gosip, sengaja tidak mengajak.</li><li><strong>Siber (cyberbullying):</strong> meme penghinaan, menyebar foto atau chat tanpa izin, akun palsu, komentar menyerang.</li></ul><div class='callout'><b class='t'>Bedakan</b><b>Bercanda:</b> semua yang terlibat ikut tertawa dan bisa berhenti kalau diminta.<br><b>Konflik:</b> dua pihak setara berselisih, dan biasanya bisa dibicarakan.<br><b>Bullying:</b> ada yang terus terluka, sulit meminta berhenti, dan pihak lain tidak mau berhenti.</div><p>Dampaknya bisa berupa cemas, sulit konsentrasi, takut ke sekolah, nilai turun, dan merasa tidak berharga.</p>","core":"Bullying: disengaja, berulang, dan timpang. Beda dengan bercanda dan konflik biasa."},
 {"t":"Tekanan teman sebaya","body":"<p><strong>Tekanan teman sebaya</strong> adalah dorongan dari teman untuk berpikir atau berperilaku sama. Tidak selalu buruk: teman bisa mengajak belajar bareng atau ikut ekstrakurikuler. Tekanan negatif contohnya ajakan ikut mengejek, bolos, merokok, atau vape.</p><p>Menolak itu sulit karena kita butuh diterima. Itu normal. Siapkan kalimat sebelum situasinya datang. Ingat <strong>S-N-A-P</strong>:</p><ul><li><strong>Singkat:</strong> \"Nggak dulu, ya.\" Kamu tidak wajib memberi alasan panjang.</li><li><strong>Netral:</strong> pakai alasan yang tidak memancing debat: \"Aku ada urusan\" atau \"Ortuku nanya terus.\"</li><li><strong>Alternatif:</strong> \"Main futsal aja, yuk.\"</li><li><strong>Pergi:</strong> kalau terus ditekan, tinggalkan situasinya.</li></ul><div class='callout warm'><b class='t'>Kalau terus dipaksa</b>Ajakan yang tidak berhenti setelah kamu menolak adalah tanda tekanan yang tidak sehat. Ceritakan pada orang dewasa tepercaya dan cari teman yang menghargai penolakanmu.</div>","core":"Siapkan kalimat menolak sebelum situasinya datang: singkat, netral, tawarkan alternatif, atau pergi."},
 {"t":"Kalau kamu sasaran bullying","body":"<p>Kalau kamu dirundung, ingat dulu: <strong>ini bukan salahmu</strong>. Tidak ada yang pantas dirundung.</p><ol><li><strong>Jangan membalas dengan kekerasan.</strong> Itu bisa membuatmu terluka atau terkena masalah.</li><li><strong>Simpan bukti:</strong> tangkapan layar, tanggal, dan nama akun.</li><li><strong>Blokir dan laporkan</strong> akun lewat fitur platform.</li><li><strong>Ceritakan pada orang dewasa tepercaya:</strong> guru BK atau konselor kampus, orang tua, atau kader PIKR.</li><li><strong>Jaga dirimu:</strong> tidur, makan, dan bicara dengan teman yang mendukung.</li></ol><div class='callout'><b class='t'>Kalau sulit memulai bicara</b>Coba kalimat ini: \"Aku lagi ada masalah dan butuh bantuan. Boleh aku cerita?\" Atau kirim pesan tertulis kalau bicara langsung terasa berat.</div><p>Kalau kamu atau temanmu mengalami kekerasan, kamu juga bisa menghubungi layanan SAPA 129 (Kementerian PPPA). Daftar layanan ada di tombol Bantuan.</p>","core":"Ini bukan salahmu. Simpan bukti, jangan membalas dengan kekerasan, dan ceritakan pada orang dewasa tepercaya."},
 {"t":"Peran saksi, dan kalau kamu pelakunya","body":"<p><strong>Saksi</strong> punya pengaruh besar. Bullying sering berhenti lebih cepat saat orang di sekitarnya tidak ikut mendukung. Empat pilihan yang aman:</p><ul><li><strong>Alihkan:</strong> ganti topik atau ajak pelaku melakukan hal lain.</li><li><strong>Dekati korban</strong> setelahnya: \"Kamu baik-baik saja? Aku di sini.\"</li><li><strong>Ajak teman lain</strong> untuk tidak ikut tertawa atau menyebarkan.</li><li><strong>Laporkan</strong> ke guru BK atau orang dewasa tepercaya.</li></ul><p>Jangan menghadapi pelaku sendirian kalau berisiko. Di grup chat: jangan forward atau membalas dengan tawa, simpan bukti, dan kalau kamu admin, hapus pesan itu lalu tegur.</p><div class='callout warm'><b class='t'>Kalau kamu pernah jadi pelaku</b>Berhenti, minta maaf dengan tulus, dan tanyakan pada dirimu kenapa kamu melakukannya (ikut-ikutan, ingin diterima, melampiaskan marah). Konselor bisa membantu tanpa menghakimi.</div>","core":"Saksi punya pengaruh: jangan ikut menyebarkan, dekati korban, dan laporkan dengan aman."}
 ],
 kasus:{judul:"Studi kasus: Bima dan grup chat angkatan",
  cerita:"<p>Di grup chat angkatan, seseorang mengirim stiker hasil editan foto Rafi dengan tulisan yang mengejek. Banyak yang membalas dengan tawa. Bima menerima pesan pribadi, \"Forward ke grup angkatan sebelah, dong, lucu banget.\" Bima tahu Rafi belakangan sering menyendiri dan jarang hadir.</p>",
  tanya:["Apakah ini bercanda atau bullying? Apa yang membuatmu berpikir begitu?","Apa tiga pilihan yang dimiliki Bima, dan mana yang paling membantu Rafi?","Jika kamu jadi Bima, apa kalimat penolakan singkat yang akan kamu kirim?"],
  aktivitas:{judul:"Tiga kalimat menolak dan peta orang tepercaya",langkah:["Tulis tiga kalimat singkat untuk menolak ajakan yang tidak kamu setujui.","Tulis nama tiga orang dewasa atau kader yang bisa kamu hubungi kalau butuh bantuan.","Simpan kontak atau tanyakan jam mereka bisa dihubungi."]}},
 tes:[
 {"q":"Di grup chat, seseorang mengirim meme yang mengejek Rafi dan banyak yang membalas dengan tawa. Bima tidak ikut tertawa, tetapi juga tidak berkomentar. Bagaimana menurut materi?","o":["Sudah cukup; tidak ikut menyakiti berarti Bima sudah menjalankan peran saksi","Tidak ikut menertawakan sudah baik, tetapi masih ada langkah yang lebih menolong: menghubungi Rafi dan melapor ke orang dewasa tepercaya","Bima sama bersalahnya dengan pelaku","Bukan urusan Bima, karena Rafi tidak memintanya membantu"],"a":1,"why":"Tidak ikut menyakiti itu baik, tetapi peran saksi yang membantu mencakup mendekati korban dan melapor. Bima juga tidak sama bersalahnya dengan pelaku."},
 {"q":"Mana yang paling kuat menandakan bullying, bukan konflik biasa?","o":["Kata-kata kasar yang membuat kedua pihak menangis","Kejadian satu kali tetapi sangat menyakitkan","Satu pihak terus menjadi sasaran berulang dan sulit membela diri karena ada ketimpangan kekuatan","Banyak orang terlibat saling berdebat"],"a":2,"why":"Tandanya adalah berulang dan timpang. Kata kasar atau kejadian sekali bisa menyakiti, tetapi belum tentu bullying."},
 {"q":"Temanmu mengajak vape, \"Sekali aja biar nggak dibilang cupu.\" Respons mana yang paling sesuai dengan materi?","o":["\"Nggak dulu, ya.\" lalu mengajak futsal, atau pergi kalau tidak nyaman","Menjelaskan panjang lebar bahaya vape sampai ia paham","Ikut sekali supaya diterima, setelah itu menolak","Menyindirnya di depan teman lain supaya malu"],"a":0,"why":"Penolakan singkat dan jelas, dengan alternatif atau pergi, lebih sulit dibantah daripada penjelasan panjang. Ikut sekali justru membuka pintu ajakan berikutnya."},
 {"q":"Rafi bercerita pada Bima bahwa ia dirundung di grup, tetapi meminta, \"Jangan bilang siapa-siapa.\" Apa yang paling tepat dilakukan Bima?","o":["Menjaga janji sepenuhnya, karena melapor berarti mengkhianati kepercayaan","Menyebarkan ceritanya agar pelaku malu","Mendukung Rafi, menjelaskan bahwa Bima khawatir, lalu mendorong atau menemaninya bercerita ke guru BK atau orang dewasa tepercaya","Menghadapi pelaku sendirian malam itu juga"],"a":2,"why":"Rafi butuh didukung, dan bantuan orang dewasa melindunginya. Menemani lebih baik daripada diam, menyebarkan, atau melawan sendirian yang berisiko."},
 {"q":"Kamu pernah ikut menertawakan teman di chat, lalu sadar ia terluka. Langkah yang paling tepat menurut materi?","o":["Menghapus chat dan berharap semuanya terlupakan","Berhenti, meminta maaf dengan tulus, dan mencari tahu kenapa kamu melakukannya, bila perlu dengan bantuan konselor","Membela diri bahwa semua orang juga tertawa","Menunggu sampai temanmu yang memulai bicara"],"a":1,"why":"Bertanggung jawab berarti berhenti, minta maaf tulus, dan memahami alasannya. Menghapus bukti atau membela diri tidak memperbaiki rasa sakitnya."}
 ]
},
{"id": "seksual", "name": "Kekerasan Seksual dan Batasan Tubuh", "short": "Kekerasan seksual", "icon": "hand", "color": "var(--m-seksual)", "minutes": 25, "intro": "Memahami batas tubuh dan persetujuan, mengenali kekerasan seksual (termasuk online), dan tahu cara menolong diri sendiri dan teman.", "goals": ["Menjelaskan persetujuan (consent) dan batas tubuh dengan bahasa sederhana", "Mengenali bentuk kekerasan seksual, termasuk yang terjadi online dan dalam pacaran", "Mengenali pola bujukan pelaku (grooming) dan relasi kuasa", "Tahu langkah aman dan tempat melapor bila mengalaminya", "Tahu cara menjadi teman yang aman bagi korban"], "istilah": [["Persetujuan (consent)", "Kesediaan yang diberikan secara sukarela, sadar, dan jelas. Bisa ditarik kapan saja."], ["Kekerasan seksual", "Tindakan yang merendahkan, menyerang, atau memaksa terkait tubuh dan seksualitas seseorang tanpa persetujuannya. Bisa verbal, fisik, atau lewat dunia maya."], ["Relasi kuasa", "Keadaan saat satu pihak punya kekuasaan lebih, misalnya guru, dosen, senior, atasan, atau pasangan yang mengontrol."], ["Grooming", "Pendekatan bertahap oleh pelaku untuk mendapat kepercayaan dan membuat korban sulit menolak atau bercerita."], ["KBGO", "Kekerasan berbasis gender online, misalnya mengirim konten seksual yang tidak diminta, menyebar foto intim, atau mengancam akan menyebarkannya."], ["Pendamping", "Orang atau lembaga yang menemani korban mengurus kesehatan, perlindungan, dan pelaporan, tanpa menghakimi."]], "sections": [{"t": "Tubuhmu, batasmu, dan persetujuan", "body": "<p>Tubuhmu adalah milikmu. Kamu yang berhak menentukan siapa boleh menyentuh, melihat, atau meminta sesuatu darimu. Ini disebut <strong>batas tubuh</strong>.</p><p><strong>Persetujuan (consent)</strong> yang sah punya empat ciri:</p><ul><li><strong>Sukarela:</strong> tanpa tekanan, ancaman, bujukan berlebihan, atau rasa takut.</li><li><strong>Sadar:</strong> orangnya paham dan tidak sedang tidur, mabuk, atau tidak berdaya.</li><li><strong>Jelas:</strong> ada kata atau tanda yang tegas. <strong>Diam, bingung, atau tidak melawan bukan berarti setuju.</strong></li><li><strong>Bisa ditarik:</strong> boleh berubah pikiran kapan saja, meski sebelumnya sudah pernah setuju.</li></ul><div class='callout'><b class='t'>Contoh</b>Kamu setuju berfoto bersama, tetapi tidak setuju fotonya diunggah. Setuju pada satu hal tidak otomatis berarti setuju pada hal lain. Pacaran juga tidak berarti otomatis boleh menyentuh atau meminta apa pun.</div><p><strong>Persetujuan tidak sah</strong> bila ada tekanan atau ancaman, ada ketimpangan kekuasaan (misalnya guru dengan murid, senior dengan junior), seseorang tidak sadar, atau salah satu pihak masih anak-anak.</p><p><strong>Sentuhan aman dan tidak aman:</strong> sentuhan yang membuatmu nyaman dan boleh kamu tolak adalah aman. Sentuhan yang membuat takut, risih, atau diminta dirahasiakan adalah tanda bahaya, siapa pun pelakunya.</p>", "core": "Kamu berhak menentukan batas tubuhmu. Persetujuan harus sukarela, sadar, jelas, dan bisa ditarik. Diam bukan setuju."}, {"t": "Bentuk kekerasan seksual, termasuk online", "body": "<p>Kekerasan seksual tidak selalu berupa sentuhan fisik. Bentuknya bisa:</p><ul><li><strong>Verbal:</strong> komentar tentang tubuh, siulan atau godaan yang tidak diinginkan, ejekan seksual, ajakan yang terus dipaksakan.</li><li><strong>Fisik:</strong> menyentuh, meraba, atau memeluk tanpa persetujuan, serta pemaksaan hubungan seksual.</li><li><strong>Visual dan online (KBGO):</strong> mengirim foto atau pesan seksual yang tidak diminta, meminta foto atau video intim, menyebar konten intim, mengambil gambar tanpa izin, mengedit foto seseorang menjadi konten seksual, atau mengancam akan menyebarkannya (sering disebut sextortion).</li><li><strong>Pemaksaan:</strong> memaksa, mengancam, atau memanfaatkan jabatan agar seseorang mau menuruti permintaan seksual.</li></ul><p>Ada hal yang sering disalahpahami:</p><ul><li><strong>Pelaku sering orang yang dikenal:</strong> teman, pacar, senior, guru, dosen, bahkan keluarga, bukan hanya orang asing.</li><li><strong>Korban bisa siapa saja:</strong> semua gender dan semua usia.</li><li><strong>Pakaian tidak menjadi penyebab.</strong> Penyebabnya adalah keputusan pelaku.</li><li><strong>Dalam pacaran pun bisa terjadi.</strong> Memaksa, mengancam putus, atau memeras dengan foto adalah kekerasan.</li></ul><div class='callout warm'><b class='t'>Aturan hukum</b>Indonesia memiliki UU Tindak Pidana Kekerasan Seksual (UU TPKS, 2022) yang mengatur berbagai bentuk kekerasan seksual, termasuk yang dilakukan secara elektronik, serta hak korban atas pendampingan dan perlindungan. Sekolah dan kampus juga diwajibkan punya mekanisme pencegahan dan penanganan kekerasan.</div>", "core": "Kekerasan seksual bisa verbal, fisik, atau online, dan pelakunya sering orang yang dikenal. Penyebabnya keputusan pelaku, bukan korban."}, {"t": "Tanda bujukan dan relasi kuasa", "body": "<p>Banyak kasus tidak dimulai dengan paksaan, tetapi dengan <strong>pendekatan bertahap</strong> (grooming). Kenali pola berikut:</p><ol><li><strong>Perhatian dan pujian berlebihan,</strong> membuatmu merasa istimewa.</li><li><strong>Hadiah atau bantuan,</strong> lalu muncul rasa harus membalas.</li><li><strong>Menguji batas:</strong> candaan seksual, minta foto \"biasa\", lalu meminta yang lebih.</li><li><strong>Meminta dirahasiakan:</strong> \"Ini rahasia kita ya.\"</li><li><strong>Memisahkanmu dari orang lain,</strong> atau mengatakan orang lain tidak akan percaya.</li><li><strong>Ancaman atau rasa bersalah:</strong> \"Kalau kamu cerita, kamu yang kena masalah.\"</li></ol><div class='callout'><b class='t'>Aturan praktis</b>Perhatian yang aman tidak pernah meminta rahasia darimu dan tidak marah saat kamu menolak. Kalau sebuah permintaan membuatmu perlu menyembunyikan dari orang yang kamu percaya, anggap itu tanda bahaya.</div><p><strong>Relasi kuasa</strong> membuat menolak terasa sangat sulit. Orang yang punya kuasa atas nilai, jabatan, atau masa depanmu bisa memanfaatkannya. Kalau kamu merasa takut menolak karena akibatnya, itu bukan persetujuan. Pembenaran seperti \"aku kan lebih tua\", \"ini demi nilai\", atau \"kita sama-sama suka\" tidak mengubah hal itu.</p><p><strong>Menolak dengan tegas:</strong> \"Aku tidak mau.\" \"Berhenti.\" \"Aku tidak nyaman, tolong jangan lanjutkan.\" Kamu tidak wajib menjelaskan atau bersikap sopan kepada orang yang melanggar batasmu.</p>", "core": "Waspadai pola: perhatian berlebihan, hadiah, menguji batas, rahasia, dan ancaman. Rasa takut menolak karena kuasa bukan persetujuan."}, {"t": "Kalau kamu atau temanmu mengalaminya", "body": "<p>Pertama, ingat: <strong>ini bukan salahmu.</strong> Tidak ada alasan yang membenarkan kekerasan seksual. Reaksi tubuh seperti membeku, diam, atau menunda bercerita adalah respons yang umum dan bukan tanda setuju.</p><ol><li><strong>Cari tempat dan orang yang aman.</strong> Kalau ada bahaya langsung, hubungi 112.</li><li><strong>Ceritakan pada orang dewasa yang kamu percaya:</strong> orang tua, wali, guru BK, atau kader PIKR. Kamu boleh mulai dengan satu kalimat: \"Aku butuh bantuan, ada kejadian yang membuatku tidak nyaman.\"</li><li><strong>Simpan bukti bila memungkinkan.</strong> Jangan hapus chat. Ambil tangkapan layar yang memuat nama akun, tanggal, dan isi pesan. Simpan di tempat yang aman.</li><li><strong>Periksakan kesehatan secepatnya</strong> ke puskesmas, rumah sakit, atau layanan yang kamu percaya, terutama bila ada kontak fisik. Pemeriksaan melindungi kesehatanmu dan bisa membantu bila kamu memutuskan melapor.</li><li><strong>Hubungi layanan pengaduan dan pendampingan:</strong> SAPA 129 (Kementerian PPPA), UPTD PPA di daerahmu, atau Satgas pencegahan kekerasan di sekolah atau kampus. Pendampingan diberikan agar kamu tidak menghadapinya sendiri.</li><li><strong>Kamu yang menentukan langkah berikutnya.</strong> Melapor boleh dilakukan sekarang atau nanti, dengan dampingan.</li></ol><div class='callout warm'><b class='t'>Soal perasaan</b>Takut, malu, marah, kosong, atau merasa bersalah itu wajar. Bila perasaan itu terus mengganggu tidur, belajar, atau hubunganmu, bicarakan dengan konselor atau tenaga kesehatan jiwa. Pemulihan itu mungkin.</div><p class='small muted'>Isi nomor layanan bisa berubah. Tombol Bantuan di aplikasi menampilkan jalur bantuan yang tersedia.</p>", "core": "Ini bukan salahmu. Cari orang dan tempat yang aman, simpan bukti, periksa kesehatan, dan manfaatkan pendampingan."}, {"t": "Jadi teman yang aman dan ikut mencegah", "body": "<p>Saat temanmu bercerita, responsmu bisa menentukan apakah ia berani mencari bantuan.</p><p><strong>Yang membantu:</strong></p><ul><li><strong>Dengarkan dan percaya.</strong> \"Terima kasih sudah cerita. Aku percaya kamu.\"</li><li><strong>Tegaskan:</strong> \"Ini bukan salahmu.\"</li><li><strong>Tanyakan kebutuhannya:</strong> \"Apa yang bisa kubantu sekarang?\" Jangan memaksanya melapor atau memutuskan untuknya.</li><li><strong>Tawarkan menemani</strong> ke orang dewasa tepercaya, guru BK, atau layanan pendampingan.</li><li><strong>Jaga ceritanya.</strong> Libatkan orang lain hanya untuk keselamatan, dan sampaikan itu padanya.</li></ul><p><strong>Yang sebaiknya dihindari:</strong></p><ul><li>Menyalahkan (\"Kenapa kamu mau?\", \"Kenapa pakai baju itu?\").</li><li>Menginterogasi detail kejadian.</li><li>Menyebarkan cerita, foto, atau tangkapan layarnya, termasuk lewat \"hanya ke satu teman\".</li><li>Menyuruh berdamai atau diam demi nama baik.</li><li>Menghadapi pelaku sendirian, yang bisa membahayakan.</li></ul><p><strong>Sebagai saksi</strong> (di dunia nyata atau di grup chat): alihkan perhatian, dekati orang yang tidak nyaman dan tanya apakah ia baik-baik saja, tegur dengan tenang bila aman, atau minta bantuan orang dewasa. Jangan ikut tertawa atau meneruskan konten yang mempermalukan orang.</p><div class='callout'><b class='t'>Kalau kamu menyadari pernah melewati batas orang lain</b>Berhenti, akui, dan jangan menyalahkan orang itu. Belajar memahami persetujuan, dan bicarakan dengan konselor bila perlu. Mengakui itu awal untuk tidak mengulang.</div>", "core": "Dengarkan, percaya, jangan menyalahkan, jangan menyebarkan. Bantu sesuai kebutuhannya dan hubungkan dengan pendamping."}], "kasus": {"judul": "Studi kasus: Salsa dan pesan dari kakak tingkat", "cerita": "<p>Salsa baru masuk kuliah. Seorang kakak tingkat yang menjabat ketua kegiatan sering memujinya dan menawarkan bantuan tugas. Lama-lama ia mengirim candaan seksual dan meminta Salsa mengirim foto \"buat kenang-kenangan\". Salsa menolak. Ia membalas, \"Kalau nggak mau, aku bilang ke semua kalau kamu yang mendekatiku, dan kamu nggak akan dapat tempat di kegiatan ini.\" Salsa takut dan merasa mungkin ini salahnya karena sempat menerima bantuan.</p>", "tanya": ["Tanda bujukan dan relasi kuasa apa saja yang muncul?", "Apakah Salsa salah karena menerima bantuan? Kenapa?", "Langkah apa yang bisa Salsa ambil, dan siapa yang bisa menemaninya?"], "aktivitas": {"judul": "Peta orang tepercaya dan kalimat menolak", "langkah": ["Tulis tiga orang atau layanan yang bisa kamu hubungi bila ada yang melewati batasmu.", "Tulis dua kalimat tegas untuk menolak permintaan yang membuatmu tidak nyaman.", "Latih kalimat itu dengan suara pelan atau di depan cermin.", "Simpan kontak layanan SAPA 129 di ponselmu."]}}, "tes": [{"q": "Dika dan Mira berpacaran. Saat Dika mencoba memeluk lebih jauh, Mira diam dan tidak menepis karena takut Dika marah. Pandangan mana yang paling sesuai dengan materi?", "o": ["Diamnya Mira bisa dianggap setuju karena ia tidak menolak", "Karena mereka berpacaran, hal itu wajar dan tidak perlu persetujuan lagi", "Diam karena takut bukan persetujuan; Dika perlu memastikan Mira benar-benar nyaman dan berhenti bila ragu", "Persetujuan hanya perlu ditanyakan sekali di awal hubungan"], "a": 2, "why": "Persetujuan harus sukarela dan jelas. Diam karena takut bukan setuju, status pacaran tidak menghapus hak menolak, dan persetujuan bisa ditarik kapan saja."}, {"q": "Seorang senior mengancam menyebarkan rumor bila kamu tidak mengirim foto pribadi. Langkah pertama yang paling tepat?", "o": ["Tidak mengirim, menyimpan bukti (tangkapan layar dan nama akun), lalu menceritakan pada orang dewasa tepercaya atau layanan pengaduan", "Mengirim satu foto saja supaya urusannya selesai", "Menghapus seluruh chat agar tidak ada jejak", "Membalas dengan ancaman serupa supaya ia takut"], "a": 0, "why": "Mengirim foto tidak menghentikan pemerasan dan sering membuat permintaan bertambah. Bukti penting untuk pelaporan, dan menghadapi pelaku sendirian berisiko."}, {"q": "Temanmu bercerita bahwa dosennya menyentuhnya tanpa izin, lalu berkata, \"Mungkin aku yang salah paham.\" Respons yang paling membantu?", "o": ["Menanyakan detail kejadiannya satu per satu supaya yakin ia tidak salah", "Menyarankan diam supaya tidak jadi masalah", "Mendatangi dosen itu sendiri untuk memarahinya", "Mendengarkan, mengatakan bahwa kamu percaya dan ini bukan salahnya, lalu menawarkan menemaninya mencari pendampingan"], "a": 3, "why": "Teman yang aman mendengarkan, mempercayai, tidak menyalahkan, dan membantu sesuai kebutuhan korban. Menginterogasi, menyuruh diam, atau bertindak sendiri bisa membuat korban makin takut."}, {"q": "Seorang korban baru bercerita berbulan-bulan setelah kejadian dan tidak melawan saat itu. Kesimpulan yang paling sesuai dengan materi?", "o": ["Ceritanya diragukan karena ia tidak melawan dan terlambat melapor", "Menunda bercerita dan membeku adalah respons yang umum, karena rasa takut, malu, atau relasi kuasa; ini tidak berarti setuju", "Ia sebenarnya setuju", "Kejadian hanya dianggap nyata kalau langsung dilaporkan hari itu"], "a": 1, "why": "Banyak korban membeku, diam, atau menunda karena takut, malu, atau bergantung pada pelaku. Itu bukan persetujuan dan bukan alasan untuk meragukan ceritanya."}, {"q": "Foto intim seorang teman tersebar di grup chat. Seseorang mengirim ulang ke grup lain dengan alasan \"supaya orang tahu\". Mana pernyataan yang benar?", "o": ["Yang meneruskan tidak bersalah karena bukan pembuat foto", "Yang bersalah hanya teman yang difoto karena sudah mau difoto", "Sebaiknya didiamkan saja sampai orang lupa", "Meneruskan juga memperluas kekerasan; yang membantu adalah berhenti menyebarkan, menyimpan bukti, melapor, dan menjangkau korban"], "a": 3, "why": "Menyebarkan konten intim tanpa izin memperbesar kerugian korban. Langkah yang membantu adalah menghentikan penyebaran, menyimpan bukti, melapor, dan mendukung korban tanpa menyalahkan."}]},
{"id": "dev", "name": "Pengembangan Diri", "short": "Pengembangan diri", "icon": "sprout", "color": "var(--m-dev)", "minutes": 25, "intro": "Mengenal kekuatan dirimu, membangun pola pikir bertumbuh, dan membuat kebiasaan kecil yang bertahan tanpa membuatmu kelelahan.", "goals": ["Mengenali nilai, kekuatan, dan minat diri", "Membedakan pola pikir tetap dan pola pikir bertumbuh", "Menyusun tujuan kecil dan kebiasaan yang realistis", "Mengatur waktu dan fokus tanpa mengorbankan istirahat", "Mengenali tanda kelelahan berlebih dan kapan meminta bantuan"], "istilah": [["Pengembangan diri", "Usaha yang berkelanjutan untuk belajar dan bertumbuh, sesuai nilai dan kemampuanmu sendiri."], ["Pola pikir bertumbuh", "Keyakinan bahwa kemampuan bisa berkembang lewat latihan, strategi, dan bantuan. Lawannya pola pikir tetap."], ["Nilai diri", "Hal yang kamu anggap penting dalam hidup, misalnya jujur, peduli, atau belajar."], ["Kebiasaan kecil", "Tindakan sangat kecil yang dilakukan rutin sehingga mudah dipertahankan."], ["Prioritas", "Pilihan hal yang dikerjakan lebih dulu karena paling penting, bukan karena paling terasa mendesak."], ["Burnout", "Kelelahan fisik dan mental yang menumpuk akibat tekanan berkepanjangan, sering disertai hilangnya semangat."]], "sections": [{"t": "Mengenal kekuatan, nilai, dan minatmu", "body": "<p><strong>Pengembangan diri</strong> bukan berarti menjadi orang lain atau mengejar semua target sekaligus. Titik awalnya adalah mengenal dirimu sendiri.</p><ul><li><strong>Kekuatan:</strong> hal yang bisa kamu lakukan dengan baik atau yang membuatmu merasa bertenaga. Contoh: menjelaskan sesuatu, mendengarkan, merapikan, atau berani mencoba.</li><li><strong>Nilai:</strong> hal yang penting bagimu, misalnya jujur, peduli, belajar, atau kebebasan. Nilai membantumu memilih tujuan yang terasa bermakna.</li><li><strong>Minat:</strong> kegiatan yang membuatmu lupa waktu.</li></ul><div class='callout'><b class='t'>Tiga pertanyaan refleksi</b>1) Kapan terakhir kali aku merasa bangga pada diriku, dan apa yang kulakukan?<br>2) Apa yang sering orang minta tolong padaku?<br>3) Kegiatan apa yang kulakukan tanpa disuruh?</div><p>Kenali juga <strong>area yang ingin dilatih</strong>, tanpa menghakimi diri. Misalnya \"aku ingin lebih berani bicara di kelompok\" lebih membangun daripada \"aku pemalu dan payah\".</p><p>Minta masukan dari satu orang yang kamu percaya: \"Menurutmu, apa kekuatanku, dan apa satu hal yang bisa kulatih?\" Orang lain sering melihat hal yang tidak kita sadari.</p>", "core": "Mulai dari mengenal kekuatan, nilai, dan minatmu. Tujuan terasa lebih bermakna bila sejalan dengan itu."}, {"t": "Pola pikir bertumbuh", "body": "<p>Ada dua cara memandang kemampuan. <strong>Pola pikir tetap:</strong> \"Aku memang tidak bisa matematika.\" <strong>Pola pikir bertumbuh:</strong> \"Aku belum bisa, dan aku bisa mencari cara belajar yang cocok.\"</p><ul><li>Kata <strong>\"belum\"</strong> membuka jalan, sedangkan \"tidak bisa\" menutupnya.</li><li><strong>Kegagalan adalah data:</strong> bagian mana yang belum berhasil, dan apa yang bisa dicoba berbeda?</li><li><strong>Tantangan</strong> adalah tanda sedang belajar, bukan tanda bahwa kamu tidak mampu.</li><li><strong>Kritik yang berguna</strong> menunjuk langkah berikutnya, dipisahkan dari nilai dirimu.</li></ul><div class='callout'><b class='t'>Ubah kalimatnya</b>\"Aku gagal presentasi\" menjadi \"Presentasi kemarin belum berhasil. Aku bisa berlatih bagian pembukaan dan minta masukan.\"<br>\"Dia lebih pintar dariku\" menjadi \"Dia punya cara belajar yang bisa kupelajari.\"</div><div class='callout warm'><b class='t'>Catatan penting</b>Pola pikir bertumbuh bukan berarti hanya perlu berusaha lebih keras. Perlu <strong>strategi yang tepat</strong> dan <strong>bantuan</strong> dari guru, teman, atau mentor. Pola pikir ini juga tidak menuntutmu selalu positif. Kecewa saat gagal itu wajar.</div>", "core": "Kemampuan bisa berkembang dengan strategi dan bantuan. Ganti \"tidak bisa\" dengan \"belum bisa, dan aku bisa mencoba...\"."}, {"t": "Tujuan kecil dan kebiasaan yang bertahan", "body": "<p>Banyak orang membuat target besar, semangat beberapa hari, lalu berhenti. Penyebabnya sering bukan malas, melainkan target yang terlalu besar dan tidak jelas.</p><p><strong>Susun tujuan yang jelas:</strong></p><ol><li><strong>Spesifik:</strong> bukan \"rajin belajar\", tetapi \"membaca catatan Biologi 20 menit\".</li><li><strong>Terukur dan terjangkau:</strong> mulai dari yang pasti bisa kamu lakukan.</li><li><strong>Ada waktu dan pemicu:</strong> \"setelah makan malam\" lebih kuat daripada \"nanti kalau sempat\".</li></ol><p><strong>Cara membangun kebiasaan:</strong></p><ul><li><strong>Perkecil.</strong> Aturan dua menit: mulai dengan versi yang selesai dalam dua menit (menulis satu kalimat, membaca satu halaman).</li><li><strong>Tempelkan pada kebiasaan lama:</strong> \"Setelah menyikat gigi, aku menulis satu hal yang kusyukuri.\"</li><li><strong>Catat prosesnya,</strong> misalnya dengan mencentang hari yang berhasil.</li><li><strong>Kalau bolong, kembali di hari berikutnya.</strong> Satu hari terlewat tidak merusak semuanya. Usahakan jangan bolong dua hari berturut-turut.</li></ul><div class='callout'><b class='t'>Rayakan hal kecil</b>Beri apresiasi pada dirimu saat berhasil, misalnya dengan istirahat sebentar atau mendengarkan lagu. Rasa berhasil membantu kebiasaan bertahan.</div>", "core": "Kecilkan target, beri waktu dan pemicu yang jelas, dan kembali lagi bila bolong."}, {"t": "Waktu, fokus, dan menjaga diri dari kelelahan", "body": "<p>Mengembangkan diri tidak berarti penuh kegiatan setiap saat. <strong>Istirahat adalah bagian dari berkembang.</strong></p><p><strong>Tentukan prioritas:</strong> bagi tugas menjadi empat kelompok: penting dan mendesak (kerjakan sekarang), penting tidak mendesak (jadwalkan), mendesak tidak penting (batasi atau minta bantuan), tidak penting dan tidak mendesak (kurangi).</p><p><strong>Fokus satu hal:</strong> coba teknik 25 menit fokus lalu istirahat 5 menit. Simpan HP agak jauh saat bekerja. Berpindah-pindah tugas membuat pekerjaan lebih lama dan melelahkan.</p><p><strong>Waspadai perangkap:</strong></p><ul><li><strong>Membandingkan</strong> pencapaianmu dengan sorotan terbaik orang lain di media sosial.</li><li><strong>Produktif berlebihan:</strong> merasa bersalah bila istirahat.</li><li><strong>Mengambil semua kesempatan,</strong> padahal tubuh dan pikiranmu perlu jeda.</li></ul><div class='callout warm'><b class='t'>Tanda kelelahan berlebih (burnout)</b>Terus lelah walau sudah tidur, kehilangan semangat pada hal yang biasanya kamu sukai, mudah marah, sulit konsentrasi, atau merasa tidak berguna. Bila berlangsung lama, kurangi beban dan bicarakan dengan guru BK, orang tua, atau tenaga kesehatan.</div><p><strong>Latih keterampilan yang berguna di mana pun:</strong> berkomunikasi, bekerja sama, meminta masukan, dan mengelola keuangan sederhana. Pilih satu keterampilan untuk dilatih per bulan.</p>", "core": "Pilih prioritas, fokus satu hal, dan jadwalkan istirahat. Kelelahan yang berlarut perlu diperhatikan, bukan dipaksa."}], "kasus": {"judul": "Studi kasus: Bagas dan resolusi 20 poin", "cerita": "<p>Setiap Senin Bagas menulis resolusi: bangun jam 5, olahraga, membaca satu buku seminggu, belajar bahasa Inggris dua jam, dan 16 hal lain. Tiga hari pertama ia semangat. Hari keempat ia kesiangan, dan sejak itu ia berhenti semua. Ia berkata pada temannya, \"Aku memang nggak disiplin. Beda sama dia, hidupnya rapi banget di Instagram.\"</p>", "tanya": ["Menurutmu, kenapa rencana Bagas tidak bertahan?", "Apa yang bisa Bagas ubah dari kalimat \"aku memang nggak disiplin\"?", "Jika kamu jadi Bagas, kebiasaan kecil apa yang akan kamu mulai minggu ini?"], "aktivitas": {"judul": "Satu kebiasaan kecil minggu ini", "langkah": ["Pilih satu kebiasaan yang ingin kamu bangun.", "Perkecil sampai bisa selesai dalam dua menit.", "Tentukan pemicunya: \"Setelah ... aku akan ...\".", "Tulis satu hal yang akan kamu lakukan bila hari itu bolong."]}}, "tes": [{"q": "Bagas gagal tes seleksi lomba dan berkata, \"Aku memang tidak berbakat.\" Respons mana yang paling sesuai dengan pola pikir bertumbuh?", "o": ["Menerima bahwa bakat tidak bisa diubah, lalu berhenti mencoba", "Mengakui kecewa, mencari tahu bagian yang belum berhasil, lalu meminta masukan dan mencoba strategi baru", "Mengatakan pada diri sendiri bahwa ia pasti menang tahun depan tanpa perlu berlatih", "Menyalahkan juri agar tidak terlalu kecewa"], "a": 1, "why": "Pola pikir bertumbuh mengakui perasaan, lalu menjadikan kegagalan sebagai data untuk strategi baru dan masukan. Yakin tanpa berlatih atau menyalahkan pihak lain tidak membangun kemampuan."}, {"q": "Mana tujuan yang paling mungkin bertahan menurut materi?", "o": ["Mulai besok bangun jam 4, olahraga satu jam, dan belajar tiga jam setiap hari", "Pokoknya lebih rajin belajar", "Setelah makan malam, membaca satu halaman catatan selama dua menit", "Menunggu waktu yang pas sebelum mulai"], "a": 2, "why": "Tujuan yang kecil, spesifik, dan punya pemicu waktu lebih mudah dipertahankan. Target besar atau samar sering membuat orang cepat berhenti."}, {"q": "Setelah tiga hari rajin, Dina bolong dua hari karena sakit. Ia merasa gagal total. Apa yang paling sesuai dengan materi?", "o": ["Kembali melanjutkan versi kecil kebiasaan itu di hari berikutnya, dan memaklumi bahwa sakit adalah alasan yang wajar", "Berhenti karena rantainya sudah putus", "Memulai ulang dengan target yang lebih besar untuk menebus", "Menunggu hari Senin depan supaya mulainya rapi"], "a": 0, "why": "Yang penting adalah kembali, bukan tidak pernah bolong. Menaikkan target untuk menebus atau menunggu awal minggu justru membuat kebiasaan sulit dilanjutkan."}, {"q": "Raya merasa harus mengikuti lima organisasi dan tiga kursus agar terlihat berkembang, padahal ia sering sulit tidur dan kehilangan semangat. Respons yang paling tepat?", "o": ["Menambah kegiatan supaya lebih sibuk dan tidak sempat memikirkan lelahnya", "Menganggap lelah itu tanda kurang disiplin", "Berhenti total dari semua kegiatan dan tidak mencoba apa pun lagi", "Mengurangi beban, memilih yang sesuai dengan nilainya, dan membicarakan kelelahannya dengan orang tepercaya atau guru BK"], "a": 3, "why": "Kelelahan berlebih adalah sinyal untuk memangkas beban dan mencari dukungan. Berkembang bukan soal jumlah kegiatan, dan berhenti total juga bukan satu-satunya pilihan."}, {"q": "Melihat feed temannya yang tampak sangat produktif, Fajar merasa tertinggal. Langkah mana yang paling sesuai dengan materi?", "o": ["Menyalin seluruh rutinitas temannya", "Mengingat bahwa feed adalah sorotan terpilih, lalu membandingkan dirinya dengan dirinya sendiri bulan lalu dan memilih satu langkah kecil", "Memutuskan bahwa temannya hanya pamer", "Tidak melakukan apa pun karena sudah terlambat"], "a": 1, "why": "Perbandingan paling berguna adalah dengan dirimu sendiri di waktu lalu. Menyalin rutinitas orang lain atau menyerah tidak mempertimbangkan nilai dan kondisimu."}]}
];
var CHALLENGES=[
 "Tulis tiga hal yang kamu syukuri hari ini.",
 "Jalan kaki 10 menit tanpa memegang HP.",
 "Beri nama pada emosimu tiga kali hari ini, misalnya \"aku lelah\" atau \"aku senang\".",
 "Kirim pesan baik ke satu teman.",
 "Tidur 30 menit lebih awal malam ini.",
 "Tulis satu kalimat tegas untuk menolak hal yang tidak kamu nyaman lakukan.",
 "Mute satu akun yang sering membuatmu merasa kurang.",
 "Sarapan dulu sebelum aktivitas hari ini.",
 "Tulis satu kekhawatiran, lalu tulis mana yang bisa kamu kendalikan dan mana yang tidak.",
 "Ngobrol 10 menit dengan orang yang kamu percaya.",
 "Lakukan satu hal yang kamu suka selama 15 menit.",
 "Tulis satu hal yang kamu lakukan dengan baik hari ini.",
 "Pilih satu tugas kecil dan kerjakan fokus selama 25 menit.",
 "Pilih satu kebiasaan kecil dan kerjakan versi dua menitnya.",
 "Ucapkan satu kalimat baik untuk dirimu sendiri, seperti yang akan kamu ucapkan ke sahabat."
];
var LEVELS=[{n:"Pemula",min:0},{n:"Pendengar",min:100},{n:"Sahabat",min:250},{n:"Duta",min:500},{n:"Kader Muda",min:800}];
/* ---------- Segmen PIKR ---------- */
var SEG=[
 {id:"berani",n:"Berani",age:"10–14 tahun",c:"var(--seg-berani)"},
 {id:"beraksi",n:"Beraksi",age:"15–19 tahun",c:"var(--seg-beraksi)"},
 {id:"kolab",n:"Berkolaborasi",age:"20–24 tahun",c:"var(--seg-kolab)"}
];
function segOf(id){for(var i=0;i<SEG.length;i++)if(SEG[i].id===id)return SEG[i];return null;}
function segLabel(id){var s=segOf(id);return s?s.n+" ("+s.age+")":"";}

var MOODS=[
 {n:1,l:"Berat",f:"M8.5 17.5Q12 14 15.5 17.5"},
 {n:2,l:"Kurang baik",f:"M9 17Q12 15.5 15 17"},
 {n:3,l:"Biasa",f:"M9 16h6"},
 {n:4,l:"Baik",f:"M8.5 14.5Q12 18.5 15.5 14.5"},
 {n:5,l:"Senang",f:"M8 14Q12 19.5 16 14"}
];
var MOOD_TIP={
 1:"Hari ini terasa berat. Kamu tidak harus melewatinya sendirian. Pelan-pelan dulu. Pertimbangkan bercerita ke seseorang yang kamu percaya.",
 2:"Kurang baik itu boleh. Satu hal kecil bisa membantu: minum air, jalan sebentar, atau menulis satu hal yang mengganjal.",
 3:"Biasa saja juga oke. Mau coba tantangan hari ini supaya harimu sedikit lebih berwarna?",
 4:"Senang mendengarnya. Catat apa yang membuat harimu baik supaya bisa kamu ulangi.",
 5:"Mantap. Bagikan energi baikmu ke satu teman hari ini."
};

/* ---------- Ikon ---------- */
var ICONS={
 home:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M10 20v-5.5h4V20"/>',
 book:'<path d="M4 4.5h6.5A2.5 2.5 0 0 1 13 7v13a2 2 0 0 0-2-2H4z"/><path d="M20 4.5h-6.5A2.5 2.5 0 0 0 11 7v13a2 2 0 0 1 2-2h7z"/>',
 trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H4.5A3 3 0 0 0 8 10M16 6h3.500A3 3 0 0 1 16 10"/><path d="M12 13v4M8.500 20h7M10 17h4"/>',
 user:'<circle cx="12" cy="8" r="3.500"/><path d="M5 20c.8-3.600 3.600-5.500 7-5.500s6.200 1.900 7 5.500"/>',
 chart:'<path d="M5 20V10M12 20V4M19 20v-7"/>',
 check:'<path d="m5 12.500 4.500 4.500L19 7.500"/>',
 lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
 left:'<path d="M15 5l-7 7 7 7"/>',
 right:'<path d="M9 5l7 7-7 7"/>',
 ring:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.500"/><path d="m5.600 5.600 3.900 3.900M14.500 14.500l3.900 3.900M18.400 5.600l-3.900 3.900M9.500 14.500l-3.900 3.900"/>',
 wave:'<path d="M2 12c2.500-6 4.500-6 7 0s4.500 6 7 0 3-5 6-4"/>',
 spiral:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.500"/><circle cx="12" cy="12" r="2"/>',
 heart:'<path d="M12 21s-8-5-8-11a4.500 4.500 0 0 1 8-2.800A4.500 4.500 0 0 1 20 10c0 6-8 11-8 11z"/>',
 shield:'<path d="M12 3 5 6v5.500c0 4.500 3 8 7 9.500 4-1.500 7-5 7-9.500V6z"/>',
 flame:'<path d="M12 3c1 3.500 5 5.500 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 .3 1.500 1 2 2 2-.5-3 0-5 1-8z"/>',
 star:'<path d="m12 3.500 2.600 5.300 5.900.9-4.300 4.100 1 5.800L12 16.800 6.800 19.600l1-5.800L3.500 9.700l5.900-.9z"/>',
 trend:'<path d="M4 17l6-6 4 4 6-7"/><path d="M15 8h5v5"/>',
 diamond:'<path d="M12 3l8 9-8 9-8-9z"/>',
 bolt:'<path d="M13 3 5 13.500h6L10 21l8-10.500h-6z"/>',
 chat:'<path d="M4 5h16v11H9l-5 4z"/>',
 wind:'<path d="M3 9h10a3 3 0 1 0-3-3M3 15h14a3 3 0 1 1-3 3M3 12h7"/>',
 download:'<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
 hand:'<path d="M8 12.5V6.5a1.5 1.5 0 0 1 3 0V11M11 10.5V5a1.5 1.5 0 0 1 3 0v5.500M14 10V6.500a1.5 1.5 0 0 1 3 0V14c0 3.500-2.200 6-5.500 6-2.500 0-4-1.200-5.500-3.500L4 13.500c-.6-1 .6-2 1.600-1.300L8 14"/>',
 sprout:'<path d="M12 21v-8"/><path d="M12 13c0-4 3-6.500 7-6.500 0 4-2.500 6.500-7 6.500z"/><path d="M12 15.500c0-3-2.200-5-6-5 0 3.500 2 5 6 5z"/>',
 people:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.6-3.3 3-5 6-5s5.4 1.7 6 5M15.5 15c2.5 0 4.6 1.4 5.5 4.5"/>'
};
function ic(n,cls){return '<svg class="ic '+(cls||'')+'" viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[n]||'')+'</svg>';}
ICONS.help='<circle cx="12" cy="12" r="9"/><path d="M9.5 9.500a2.500 2.500 0 1 1 3.500 2.300c-.7.300-1 .9-1 1.700M12 17h.01"/>';
ICONS.calendar='<rect x="4" y="5" width="16" height="15" rx="3"/><path d="M8 3v4M16 3v4M4 10h16"/>';
function face(m){return '<svg class="face" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9 10v.01M15 10v.01"/><path d="'+m.f+'"/></svg>';}

/* ---------- Helpers ---------- */
function $(s,r){return (r||document).querySelector(s);}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});}
function pad(n){return n<10?"0"+n:""+n;}
function dkey(d){d=d||new Date();return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());}
function avg(a){return a.length?a.reduce(function(x,y){return x+y;},0)/a.length:null;}
function fmt1(n){return n==null?"-":(Math.round(n*10)/10).toString().replace(".",",");}
function mod(id){for(var i=0;i<MODS.length;i++)if(MODS[i].id===id)return MODS[i];return null;}

/* ---------- State ---------- */
var LS="ruangjeda.v1",memCopy=null;
function blank(){return {nick:"",seg:"",pikrRead:false,minat:false,sec:{},pre:{},post:{},chal:{},mood:{},puas:null,seen:[]};}
function load(){
  var raw=null;
  try{raw=localStorage.getItem(LS);}catch(e){}
  if(!raw)raw=memCopy;
  var s=blank();
  if(raw){try{var o=JSON.parse(raw);for(var k in s){if(o[k]!==undefined)s[k]=o[k];}}catch(e){}}
  return s;
}
var S=load();
function persist(){
  var j=JSON.stringify(S);memCopy=j;
  try{localStorage.setItem(LS,j);}catch(e){}
}

function secCount(m){var a=S.sec[m.id]||[];var c=0;for(var i=0;i<5;i++)if(a[i])c++;return c;}
function modItemsDone(m){return secCount(m)+(S.pre[m.id]!=null?1:0)+(S.post[m.id]!=null?1:0);}
function modComplete(m){return secCount(m)===5&&S.pre[m.id]!=null&&S.post[m.id]!=null;}
function points(s){
  s=s||S;var p=0;
  MODS.forEach(function(m){
    var a=s.sec[m.id]||[];for(var i=0;i<5;i++)if(a[i])p+=10;
    if(s.pre[m.id]!=null)p+=10;
    if(s.post[m.id]!=null)p+=10*s.post[m.id];
  });
  p+=15*Object.keys(s.chal).length;
  p+=5*Object.keys(s.mood).length;
  if(s.puas)p+=20;
  if(s.pikrRead)p+=10;
  return p;
}
function levelOf(p){var l=LEVELS[0];for(var i=0;i<LEVELS.length;i++)if(p>=LEVELS[i].min)l=LEVELS[i];return l;}
function nextLevel(p){for(var i=0;i<LEVELS.length;i++)if(p<LEVELS[i].min)return LEVELS[i];return null;}
function streak(){
  var days={};Object.keys(S.chal).forEach(function(k){days[k]=1;});Object.keys(S.mood).forEach(function(k){days[k]=1;});
  var d=new Date(),c=0;
  if(!days[dkey(d)])d.setDate(d.getDate()-1);
  while(days[dkey(d)]){c++;d.setDate(d.getDate()-1);}
  return c;
}
var BADGES=[
 {id:"first",n:"Langkah pertama",i:"star",h:"Baca satu materi",t:function(){return MODS.some(function(m){return secCount(m)>0;});}},
 {id:"m_emosi",n:"Paham emosi",i:"wave",h:"Tuntaskan modul Emosi dan Stres",t:function(){return modComplete(mod("emosi"));}},
 {id:"m_cemas",n:"Penenang pikiran",i:"spiral",h:"Tuntaskan modul Cemas dan Overthinking",t:function(){return modComplete(mod("cemas"));}},
 {id:"m_diri",n:"Sahabat diri",i:"heart",h:"Tuntaskan modul Self-love dan Citra Diri",t:function(){return modComplete(mod("diri"));}},
 {id:"m_bully",n:"Pelindung teman",i:"shield",h:"Tuntaskan modul Bullying dan Teman Sebaya",t:function(){return modComplete(mod("bully"));}},
 {id:"m_seksual",n:"Paham batas",i:"hand",h:"Tuntaskan modul Kekerasan Seksual dan Batasan Tubuh",t:function(){return modComplete(mod("seksual"));}},
 {id:"m_dev",n:"Terus bertumbuh",i:"sprout",h:"Tuntaskan modul Pengembangan Diri",t:function(){return modComplete(mod("dev"));}},
 {id:"naik",n:"Nilai naik",i:"trend",h:"Skor post-test lebih tinggi dari pre-test",t:function(){return MODS.some(function(m){return S.pre[m.id]!=null&&S.post[m.id]!=null&&S.post[m.id]>S.pre[m.id];});}},
 {id:"sempurna",n:"Skor sempurna",i:"diamond",h:"Dapat 5 dari 5 di sebuah post-test",t:function(){return MODS.some(function(m){return S.post[m.id]===5;});}},
 {id:"streak3",n:"3 hari beruntun",i:"flame",h:"Check-in atau tantangan 3 hari berturut-turut",t:function(){return streak()>=3;}},
 {id:"chal5",n:"5 tantangan",i:"bolt",h:"Selesaikan 5 tantangan harian",t:function(){return Object.keys(S.chal).length>=5;}},
 {id:"semua",n:"Semua modul tuntas",i:"trophy",h:"Tuntaskan semua modul",t:function(){return MODS.every(modComplete);}},
 {id:"survei",n:"Suara kamu",i:"chat",h:"Isi survei singkat di Profil",t:function(){return !!S.puas;}},
 {id:"pikr",n:"Kenal PIKR",i:"people",h:"Baca FAQ bagian PIKR",t:function(){return !!S.pikrRead;}}
];
function earned(){return BADGES.filter(function(b){return b.t();});}

/* ---------- Sinkronisasi (db) ---------- */
var DB=null,USER=null,DL=null,UID=null,CANW=null,ADMIN=false,SYNC="local",BOARD=[],docRef=null,syncT=null,syncing=false,dirty=false;
function payload(){
  var mods={};
  MODS.forEach(function(m){mods[m.id]={pre:S.pre[m.id]==null?null:S.pre[m.id],post:S.post[m.id]==null?null:S.post[m.id],sec:secCount(m),done:modComplete(m)};});
  return {nick:S.nick,seg:S.seg||"",pikrRead:!!S.pikrRead,minat:!!S.minat,pts:points(),badges:earned().length,mods:mods,puas:S.puas||null,upd:Date.now()};
}
function queueSync(){
  if(!docRef||!S.nick)return;
  clearTimeout(syncT);syncT=setTimeout(flush,1500);
}
function flush(){
  if(!docRef)return;
  if(syncing){dirty=true;return;}
  syncing=true;
  docRef.set(payload()).then(function(){SYNC="online";}).catch(function(e){
    if(e&&e.code==="invalid_argument"){SYNC="read";docRef=null;}
  }).then(function(){
    syncing=false;
    if(dirty){dirty=false;queueSync();}
    if(R.v==="board")render();
  });
}
function initCaps(){
  var cl=window.claude;
  if(!cl||!cl.use){return;}
  var p=[];
  p.push(cl.use("user").then(function(u){USER=u;}).catch(function(){}));
  p.push(cl.use("db").then(function(d){DB=d;}).catch(function(){}));
  p.push(cl.use("downloads").then(function(d){DL=d;}).catch(function(){}));
  Promise.all(p).then(function(){
    if(!USER)return null;
    return Promise.all([USER.id(),USER.can("data.write"),USER.canEdit()]).then(function(r){UID=r[0];CANW=r[1];ADMIN=!!r[2];});
  }).catch(function(){}).then(function(){
    if(DB){
      SYNC="read";
      try{
        DB.collection("participants").limit(1000).onSnapshot(function(snap){
          BOARD=snap.docs.map(function(d){var x=d.data()||{};x._id=d.id;return x;});
          if(R.v==="board"||R.v==="rekap")render();
        },function(){SYNC="local";if(R.v==="board")render();});
      }catch(e){}
      if(UID&&CANW!==false){
        try{docRef=DB.doc("participants/"+UID);SYNC="online";if(S.nick)queueSync();}catch(e){docRef=null;}
      }
    }
    if(R.v!=="onb"&&R.v!=="test"&&R.v!=="napas")render();
  });
}

/* ---------- Perubahan state ---------- */
var toastT=null;
function toast(msg){
  var t=$("#toast");t.textContent=msg;t.classList.remove("hide");
  clearTimeout(toastT);toastT=setTimeout(function(){t.classList.add("hide");},2600);
}
function afterChange(msg){
  persist();
  var newB=[];
  BADGES.forEach(function(b){if(b.t()&&S.seen.indexOf(b.id)<0){S.seen.push(b.id);newB.push(b);}});
  if(newB.length){persist();toast((msg?msg+"  ":"")+"Badge baru: "+newB[0].n);}
  else if(msg)toast(msg);
  queueSync();
}

/* ---------- Routing ---------- */
var R={v:"home"};
var svOpen=false,T=null,BR=null,boardTab="ind",boardSeg=null,faqTab="app",resetConfirm=false,SV={a:0,b:0,c:0,d:0,e:0},onbErr="",OB=null;
function go(r){stopBreath();OB=null;R=r;resetConfirm=false;render();window.scrollTo(0,0);}
function pikrName(){return PIKR_CFG.nama||"PIKR";}

function render(){
  var v=R.v,html="";
  var open={welcome:1,onb:1,napas:1,faq:1,fasil:1};
  if(!S.nick&&!open[v]){R={v:"welcome"};v="welcome";}
  else if(S.nick&&!S.seg&&!open[v]){R={v:"onb"};v="onb";}
  switch(v){
    case "welcome":html=vWelcome();break;
    case "onb":html=vOnb();break;
    case "home":html=vHome();break;
    case "mods":html=vMods();break;
    case "mod":html=vMod();break;
    case "read":html=vRead();break;
    case "test":html=vTest();break;
    case "board":html=vBoard();break;
    case "me":html=vMe();break;
    case "rekap":html=vRekap();break;
    case "napas":html=vNapas();break;
    case "chal":html=vChal();break;
    case "badge":html=vBadge();break;
    case "faq":html=vFaq();break;
    case "fasil":html=vFasil();break;
    default:html=vHome();
  }
  $("#view").innerHTML=html;
  renderTabs();
}
function renderTabs(){
  var hide=(!S.nick||!S.seg||R.v==="welcome"||R.v==="onb"||R.v==="test");
  $("#tabbar").classList.toggle("hide",hide);
  if(hide)return;
  var map={mod:"mods",read:"mods",napas:"home",chal:"home",badge:"home",fasil:"me",rekap:"me"};
  var cur=map[R.v]||R.v;
  var items=[["home","Beranda","home"],["mods","Belajar","book"],["board","Peringkat","trophy"],["faq","FAQ","help"],["me","Profil","user"]];
  $("#tabs").innerHTML=items.map(function(i){
    return '<button data-a="nav" data-v="'+i[0]+'"'+(cur===i[0]?' aria-current="page"':'')+'>'+ic(i[2])+'<span>'+i[1]+'</span></button>';
  }).join("");
}

/* ---------- Komponen KV ---------- */
function kvArt(){return '<svg class="kv-art" viewBox="0 0 400 220" preserveAspectRatio="xMaxYMax slice" aria-hidden="true"><circle cx="340" cy="52" r="86" fill="#fff" fill-opacity=".07"/><circle cx="340" cy="52" r="48" fill="#fff" fill-opacity=".08"/><path d="M0 160C70 128 130 192 210 160S340 128 400 160V220H0Z" fill="#fff" fill-opacity=".07"/><path d="M0 188C80 160 140 214 220 186S350 164 400 190V220H0Z" fill="#fff" fill-opacity=".08"/></svg>';}
function brandMark(){return '<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><rect x="5" y="4" width="6" height="24" rx="3" fill="currentColor"/><rect x="21" y="4" width="6" height="24" rx="3" fill="currentColor"/><circle cx="16" cy="16" r="3" fill="currentColor" opacity=".55"/></svg>';}
function topbar(onKv){
  return '<div class="top'+(onKv?' on-kv':'')+'"><div class="brand">'+brandMark()+'<div>Selaras</div></div>'+
  '<button class="helpbtn" data-a="help" aria-label="Butuh bantuan sekarang">'+ic("ring")+'<span>Bantuan</span></button></div>';
}
function kvHead(eb,t,sub,extra){
  return '<div class="kv head">'+kvArt()+topbar(true)+'<div class="kvtxt">'+(eb?'<div class="eyebrow">'+esc(eb)+'</div>':'')+'<h1>'+esc(t)+'</h1>'+(sub?'<p style="margin:6px 0 0">'+esc(sub)+'</p>':'')+(extra||'')+'</div></div>';
}
function backBtn(to,label){return '<button class="btn ghost small" data-a="nav" data-v="'+to+'" style="align-self:flex-start">'+ic("left")+' '+esc(label||"Kembali")+'</button>';}

function randNick(){
  var a=["Tenang","Berani","Ceria","Teduh","Gigih","Ramah","Jernih","Sabar"],b=["Kunang","Elang","Lumba","Camar","Rusa","Kijang","Bintang","Awan"];
  return a[Math.floor(Math.random()*a.length)]+b[Math.floor(Math.random()*b.length)]+(10+Math.floor(Math.random()*90));
}

/* ---------- Sambutan dan profil ---------- */
function vWelcome(){
  function step(n,c,t,d){return '<div class="stp"><span class="sn" style="--c:'+c+'">'+n+'</span><div><b>'+t+'</b><div class="muted">'+d+'</div></div></div>';}
  function why(t){return '<li>'+t+'</li>';}
  return '<div class="kv full welcome">'+kvArt()+topbar(true)+'<div class="kvtxt"><p class="hello">Selamat datang di Selaras</p><h1>Kenali dirimu. Jaga perasaanmu.</h1>'+
   '<p style="margin:12px 0 0">Belajar singkat tentang emosi, batas tubuh, dan pengembangan diri. Gratis dan anonim.</p>'+
   '<div class="row" style="margin-top:22px"><button class="btn onkv" data-a="start">Mulai sekarang</button><button class="btn onkv2" data-a="why">Kenapa ini penting?</button></div></div></div>'+
  '<div class="story">'+
   '<section id="why"><p class="kicker">Masalahnya</p><h2>Banyak remaja menghadapinya sendirian</h2>'+
    '<div class="fact"><b>1 dari 3</b><p>remaja usia 10–17 tahun di Indonesia mengalami masalah kesehatan mental.<sup>1</sup></p></div>'+
    '<div class="fact"><b>2,6%</b><p>dari remaja bermasalah itu yang pernah memakai layanan atau konseling.<sup>1</sup></p></div>'+
    '<div class="fact"><b>8 dari 100</b><p>remaja usia 13–17 tahun pernah mengalami kekerasan seksual, di antara laki-laki maupun perempuan.<sup>2</sup></p></div>'+
   '</section>'+
   '<section><p class="kicker">Kenapa bisa begitu</p><h2>Bukan karena mereka tidak peduli</h2>'+
    '<ul class="why">'+why('Belum punya kata untuk menyebut apa yang dirasakan.')+why('Takut dicap lemah, aneh, atau lebay.')+why('Tidak tahu harus bercerita ke siapa, atau ke mana mencari bantuan.')+'</ul>'+
    '<p class="muted">Akibatnya, masalah yang masih kecil dipendam sampai terasa besar.</p></section>'+
   '<section><p class="kicker">Yang Selaras lakukan</p><h2>Satu langkah awal, dalam 5 menit</h2>'+
    step(1,'var(--m-emosi)','Kenali','Enam modul singkat: emosi, cemas, citra diri, bullying, kekerasan seksual, dan pengembangan diri.')+
    step(2,'var(--m-diri)','Latih','Check-in harian dan tantangan kecil yang mudah dicoba.')+
    step(3,'var(--m-bully)','Cari bantuan','Tahu siapa dan ke mana harus pergi saat butuh bicara.')+
   '</section>'+
   '<section class="endcta"><button class="btn primary block" data-a="start">Mulai sekarang</button>'+
    '<button class="btn ghost block" data-a="nav" data-v="faq">Baca pertanyaan umum</button>'+
    '<p class="small muted">Selaras adalah materi edukasi, bukan pengganti psikolog atau konselor. Kalau kamu butuh bicara sekarang, tombol Bantuan ada di pojok atas.</p>'+
    '<p class="small muted src"><sup>1</sup> I-NAMHS 2022, survei nasional kesehatan mental remaja usia 10–17 tahun (UGM dan mitra). <sup>2</sup> SNPHAR 2024, KemenPPPA: kekerasan seksual seumur hidup pada usia 13–17 tahun, sekitar 8% pada anak laki-laki dan 9% pada anak perempuan.</p></section>'+
  '</div>';
}
function vOnb(){
  var editing=!!S.nick,complete=editing&&!S.seg;
  if(!OB)OB={nick:S.nick||"",seg:S.seg||""};
  var title=!editing?"Satu langkah lagi":(complete?"Lengkapi profilmu":"Ubah profilmu");
  var sub=!editing?"Pilih nama panggilan dan segmen. Tanpa nama asli, tanpa daftar akun.":"Nama panggilan dan segmen tampil di peringkat.";
  return '<div class="kv head">'+kvArt()+topbar(true)+'<div class="kvtxt"><h1>'+title+'</h1><p style="margin:6px 0 0">'+sub+'</p></div></div>'+
  '<div class="stack"><div class="card stack">'+
   '<div class="field"><label for="nick">Nama panggilan (bukan nama asli)</label>'+
   '<div class="row" style="flex-wrap:nowrap"><input class="input grow" id="nick" maxlength="16" autocomplete="off" value="'+esc(OB.nick)+'" placeholder="contoh: TenangKunang42"><button class="btn" data-a="randNick" type="button">Acak</button></div></div>'+
   '<div class="field"><div class="lbl" id="segLbl">Pilih segmenmu, sesuai usia</div><div class="segs" role="group" aria-labelledby="segLbl">'+
   SEG.map(function(s){return '<button type="button" class="segc" style="--c:'+s.c+'" data-a="segPick" data-v="'+s.id+'" aria-pressed="'+(OB.seg===s.id)+'"><span class="sd">'+esc(s.n.charAt(0))+'</span><span><b>'+esc(s.n)+'</b><span class="small muted">'+esc(s.age)+'</span></span></button>';}).join("")+'</div>'+
   '<div class="small muted">Usiamu tidak disimpan, hanya segmennya. Segmen dipakai supaya peringkat adil.</div></div>'+
   '<div class="err" id="onbErr">'+esc(onbErr)+'</div>'+
   '<button class="btn primary block" data-a="saveNick">'+(editing?"Simpan":"Mulai belajar")+'</button>'+
   (editing&&S.seg?'<button class="btn ghost block" data-a="nav" data-v="me">Batal</button>':'')+
   (!editing?'<button class="btn ghost block" data-a="nav" data-v="welcome">Kembali</button>':'')+
  '</div>'+
  '<p class="small muted">Yang dibagikan ke peringkat dan rekap hanya nama panggilan, segmen, poin, skor kuis, dan apakah kamu tertarik pada PIKR. Check-in suasana hatimu hanya tersimpan di HP ini.</p></div>';
}

/* ---------- Beranda ---------- */
function todayChallenge(off){
  var d=new Date(),day=Math.floor((d.getTime()-d.getTimezoneOffset()*60000)/86400000);
  return CHALLENGES[(day+(off||0))%CHALLENGES.length];
}
function moodRow(mood){
  return '<div class="mood" role="group" aria-label="Suasana hati">'+MOODS.map(function(m){return '<button data-a="mood" data-n="'+m.n+'" aria-pressed="'+(mood===m.n)+'">'+face(m)+'<span>'+m.l+'</span></button>';}).join("")+'</div>';
}
var MENU=[["mods","Belajar","book","var(--m-emosi)"],["chal","Tantangan","bolt","var(--m-bully)"],["board","Peringkat","trophy","var(--seg-kolab)"],["badge","Badge","star","var(--m-diri)"]];
function vHome(){
  var p=points(),lv=levelOf(p),nx=nextLevel(p),st=streak(),today=dkey(),mood=S.mood[today];
  var pct=nx?Math.round((p-lv.min)/(nx.min-lv.min)*100):100;
  var ns=nextStep(),ch=todayChallenge(0),chDone=!!S.chal[today];
  var h='<div class="kv full">'+kvArt()+topbar(true)+'<div class="kvtxt"><p class="hello">Halo, '+esc(S.nick)+'</p><h1>'+(mood?"Terima kasih sudah check-in":"Lagi ngerasa gimana hari ini?")+'</h1>'+moodRow(mood)+
   (mood?'<div class="reply"><div>'+esc(MOOD_TIP[mood])+'</div>'+(mood<=2?'<div class="row"><button class="btn small onkv" data-a="help">'+ic("ring")+' Butuh bicara?</button><button class="btn small onkv2" data-a="nav" data-v="napas">Coba tenangkan diri</button></div>':'')+'</div>':
     '<p class="small" style="margin:12px 0 0">Hanya tersimpan di HP ini. +5 poin sekali sehari.</p>')+'</div></div>';
  h+='<div class="stack roomy"><div class="card wallet stack">'+
   '<div class="w-top"><div><div class="eyebrow">Poinmu</div><b class="big num">'+p+'</b></div><div class="w-r"><span class="chip warm">'+esc(lv.n)+'</span>'+(st>0?'<span class="streak">'+ic("flame")+st+' hari</span>':'')+'</div></div>'+
   '<div><div class="bar warm" role="progressbar" aria-valuenow="'+pct+'" aria-valuemin="0" aria-valuemax="100"><i style="width:'+pct+'%"></i></div><div class="small muted" style="margin-top:6px">'+(nx?(nx.min-p)+' poin lagi menuju '+esc(nx.n):'Level tertinggi tercapai')+'</div></div>'+
   (ns?'<button class="cont" data-a="open" data-id="'+ns.m.id+'"><span class="glyph" style="--c:'+ns.m.color+'">'+ic(ns.m.icon)+'</span><span class="grow"><b>Lanjutkan belajar</b><br><span class="small muted">'+esc(ns.m.short)+', '+ns.label.toLowerCase()+'</span></span>'+ic("right")+'</button>':
      '<div class="cont done"><span class="glyph" style="--c:var(--ok)">'+ic("check")+'</span><span class="grow"><b>Semua modul tuntas</b><br><span class="small muted">Lanjutkan dengan tantangan harian.</span></span></div>')+
  '</div>';
  h+='<div class="menu">'+MENU.map(function(m){
    return '<button data-a="nav" data-v="'+m[0]+'"><span class="mi" style="--c:'+m[3]+'">'+ic(m[2])+'</span><span>'+m[1]+'</span></button>';
  }).join("")+'</div>';
  h+='<div class="card '+(chDone?'':'warm')+'"><div class="eyebrow">Tantangan hari ini, +15 poin</div><h3 style="margin:6px 0 14px">'+esc(ch)+'</h3>'+
   (chDone?'<span class="chip ok">'+ic("check")+' Selesai</span>':'<button class="btn primary" data-a="chal">Sudah kulakukan</button>')+'</div></div>';
  return h;
}
function nextStep(){
  for(var i=0;i<MODS.length;i++){
    var m=MODS[i];if(modComplete(m))continue;
    var sc=secCount(m);
    var label=S.pre[m.id]==null?"Mulai dengan pre-test":(sc<5?"Lanjut membaca":"Kerjakan post-test");
    return {m:m,label:label};
  }
  return null;
}

function vMods(){
  return kvHead("Belajar","Modul belajar","Urutan tiap modul: pre-test, 4 materi, studi kasus, lalu post-test.")+'<div class="stack">'+
  MODS.map(function(m){
    var d=modItemsDone(m),pc=Math.round(d/7*100);
    return '<button class="mod" data-a="open" data-id="'+m.id+'"><span class="glyph" style="--c:'+m.color+'">'+ic(m.icon)+'</span><span class="grow"><h3>'+esc(m.name)+'</h3><span class="small muted">'+m.minutes+' menit, '+(modComplete(m)?'tuntas':d+' dari 7 langkah')+'</span><div class="bar"><i style="width:'+pc+'%"></i></div></span>'+ic("right")+'</button>';
  }).join("")+'</div>';
}

/* ---------- Tantangan dan badge ---------- */
function vChal(){
  var today=dkey(),done=!!S.chal[today],st=streak(),n=Object.keys(S.chal).length,names=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],days=[];
  for(var i=6;i>=0;i--){var d=new Date();d.setDate(d.getDate()-i);days.push({d:d,t:i===0});}
  return kvHead("Tantangan","Satu langkah kecil hari ini","Kebiasaan kecil yang konsisten lebih berguna daripada satu usaha besar.")+'<div class="stack">'+
   '<div class="card '+(done?'':'warm')+' stack"><div class="eyebrow">Tantangan hari ini, +15 poin</div><h2 style="font-size:1.25rem;margin:0">'+esc(todayChallenge(0))+'</h2>'+
   (done?'<span class="chip ok" style="align-self:flex-start">'+ic("check")+' Selesai</span>':'<button class="btn primary" data-a="chal" style="align-self:flex-start">Sudah kulakukan</button>')+'</div>'+
   '<div class="card stack"><div class="row" style="justify-content:space-between"><h2 style="margin:0">Seminggu terakhir</h2><span class="streak">'+ic("flame")+st+' hari beruntun</span></div>'+
   '<div class="week">'+days.map(function(x){var k=dkey(x.d),on=!!(S.chal[k]||S.mood[k]);return '<div class="wd'+(on?' on':'')+(x.t?' today':'')+'"><span>'+(on?ic("check"):x.d.getDate())+'</span>'+names[x.d.getDay()]+'</div>';}).join("")+'</div>'+
   '<div class="small muted">Hari aktif dihitung dari check-in suasana hati atau tantangan.</div></div>'+
   '<div class="card stack"><div class="row" style="justify-content:space-between"><h3 style="margin:0">Menuju badge 5 tantangan</h3><b class="num">'+Math.min(n,5)+'/5</b></div><div class="bar warm"><i style="width:'+Math.min(100,n/5*100)+'%"></i></div></div>'+
   '<div class="card flat"><div class="eyebrow">Besok</div><p style="margin:4px 0 0" class="muted">'+esc(todayChallenge(1))+'</p></div></div>';
}
function vBadge(){
  var got=earned().map(function(b){return b.id;});
  return kvHead("Koleksi",got.length+" dari "+BADGES.length+" badge","Selesaikan modul dan tantangan untuk membuka badge baru.")+'<div class="stack">'+
   BADGES.map(function(b){var on=got.indexOf(b.id)>=0;return '<div class="bl'+(on?'':' off')+'"><span class="medal">'+ic(on?b.i:"lock")+'</span><div class="grow"><b>'+esc(b.n)+'</b><div class="small muted">'+esc(b.h)+'</div></div>'+(on?'<span class="chip ok">Terbuka</span>':'')+'</div>';}).join("")+'</div>';
}

/* ---------- Peringkat ---------- */
function lvName(p){return levelOf(p||0).n;}
function vBoard(){
  if(boardSeg===null)boardSeg=S.seg||"semua";
  var rows=BOARD.slice().sort(function(a,b){return (b.pts||0)-(a.pts||0)||(a.upd||0)-(b.upd||0);});
  var chipTxt=SYNC==="online"?'<span class="chip ok">Tersambung</span>':(SYNC==="read"?'<span class="chip warm">Hanya melihat</span>':'<span class="chip plain">Mode HP saja</span>');
  var h=kvHead("Peringkat","Peringkat","Poin dari membaca, kuis, check-in, dan tantangan.")+'<div class="stack">';
  h+='<div class="row">'+chipTxt+'<span class="small muted">'+(SYNC==="online"?"Skormu ikut tampil di peringkat.":(SYNC==="read"?"Skormu belum bisa dikirim dari akun ini.":"Peringkat bersama belum tersambung. Poinmu tetap tersimpan di HP ini."))+'</span></div>';
  h+='<div class="tabs" role="group"><button data-a="btab" data-t="ind" aria-pressed="'+(boardTab==="ind")+'">Individu</button><button data-a="btab" data-t="kls" aria-pressed="'+(boardTab==="kls")+'">Kelompok</button></div>';
  if(boardTab==="ind"){
    h+='<div class="fchips" role="group" aria-label="Filter segmen"><button class="fchip" data-a="bseg" data-s="semua" aria-pressed="'+(boardSeg==="semua")+'">Semua</button>'+
      SEG.map(function(s){return '<button class="fchip" style="--c:'+s.c+'" data-a="bseg" data-s="'+s.id+'" aria-pressed="'+(boardSeg===s.id)+'"><i></i>'+esc(s.n)+'</button>';}).join("")+'</div>';
    var list=boardSeg==="semua"?rows:rows.filter(function(r){return r.seg===boardSeg;});
    if(!list.length){
      var p=points();
      if(!rows.length||boardSeg===S.seg||boardSeg==="semua")h+='<div class="rank me"><div class="pos">-</div><div class="grow"><div class="nm">'+esc(S.nick)+' (kamu)</div><div class="small muted">'+esc(lvName(p))+'</div></div><div class="pts">'+p+'</div></div>';
      h+='<div class="card flat"><p class="muted" style="margin:0">'+(SYNC==="local"?"Peringkat bersama akan muncul saat peserta lain tersambung.":"Belum ada peserta di kelompok ini. Jadilah yang pertama menyelesaikan satu modul.")+'</p></div>';
    }else{
      var meIdx=-1;list.forEach(function(r,i){if(UID&&r._id===UID)meIdx=i;});
      h+=list.slice(0,20).map(function(r,i){return rankRow(r,i+1,UID&&r._id===UID);}).join("");
      if(meIdx>=20)h+='<div class="small muted" style="text-align:center">...</div>'+rankRow(list[meIdx],meIdx+1,true);
    }
  }else{
    var g=SEG.map(function(s){var m=rows.filter(function(r){return r.seg===s.id;});return {s:s,n:m.length,a:m.length?m.reduce(function(a,r){return a+(r.pts||0);},0)/m.length:0};}).sort(function(a,b){return b.a-a.a;});
    h+='<p class="small muted" style="margin:0">Tiga segmen PIKR, diurutkan dari rata-rata poin per anggota supaya adil bagi segmen yang jumlah pesertanya berbeda.</p>'+g.map(function(x,i){
      return '<div class="rank'+(S.seg===x.s.id?' me':'')+'"><div class="pos">'+(i+1)+'</div><div class="grow"><div class="nm"><span class="chip seg" style="--c:'+x.s.c+'">'+esc(x.s.n)+'</span></div><div class="small muted">'+esc(x.s.age)+', '+x.n+' peserta</div></div><div class="pts">'+(x.n?Math.round(x.a):"-")+'</div></div>';
    }).join("");
  }
  return h+'</div>';
}
function rankRow(r,pos,me){
  var s=segOf(r.seg);
  return '<div class="rank'+(me?' me':'')+'"><div class="pos">'+pos+'</div><div class="grow"><div class="nm">'+esc(r.nick||"Peserta")+(me?" (kamu)":"")+'</div><div class="small muted">'+esc(lvName(r.pts))+(s?", "+esc(s.n):"")+'</div></div><div class="pts">'+(r.pts||0)+'</div></div>';
}

/* ---------- Profil ---------- */
function vMe(){
  var p=points(),lv=levelOf(p),nx=nextLevel(p),pct=nx?Math.round((p-lv.min)/(nx.min-lv.min)*100):100,got=earned().map(function(b){return b.id;}),seg=segOf(S.seg);
  var h=kvHead("Profilmu",S.nick,"",'<div class="row" style="margin-top:10px"><span class="chip warm">'+esc(lv.n)+'</span>'+(seg?'<span class="chip seg" style="--c:'+seg.c+'">'+esc(seg.n)+', '+esc(seg.age)+'</span>':'')+'</div>')+'<div class="stack">';
  h+='<div class="card stack"><div><div class="eyebrow">Poin</div><b class="big num">'+p+'</b></div><div><div class="bar warm"><i style="width:'+pct+'%"></i></div><div class="small muted" style="margin-top:6px">'+(nx?(nx.min-p)+' poin lagi menuju '+esc(nx.n):'Level tertinggi tercapai')+'</div></div>'+
   '<button class="btn small" data-a="rename" style="align-self:flex-start">Ganti nama atau segmen</button></div>';
  h+='<div class="card"><div class="sechead" style="margin:0 0 10px"><h2 style="margin:0">Badge</h2><button data-a="nav" data-v="badge">Lihat semua</button></div><div class="badges">'+BADGES.slice(0,6).map(function(b){var on=got.indexOf(b.id)>=0;return '<div class="badge'+(on?'':' off')+'"><span class="medal">'+ic(on?b.i:"lock")+'</span><b>'+esc(b.n)+'</b></div>';}).join("")+'</div></div>';
  if(!S.puas){
    var ok=SV.a&&SV.b&&SV.c&&SV.d&&SV.e;
    if(!svOpen){h+='<button class="mod" data-a="svOpen"><span class="glyph" style="--c:var(--m-diri)">'+ic("chat")+'</span><span class="grow"><h3>Survei singkat</h3><span class="small muted">5 pertanyaan, +20 poin</span></span>'+ic("right")+'</button>';}else{
    h+='<div class="card stack"><div><h2>Survei singkat</h2><p class="small muted" style="margin:0">Jawabanmu membantu kader PIKR memperbaiki Selaras. +20 poin. 1 = tidak setuju, 5 = sangat setuju.</p></div>'+
     [["a","Selaras mudah dipakai."],["b","Materinya membantu aku memahami diri sendiri."],["c","Aku akan mengajak temanku memakainya."],["d","Setelah memakai Selaras, aku lebih paham apa itu PIKR."],["e","Aku tertarik ikut kegiatan PIKR."]].map(function(q){
      return '<div><div style="font-weight:600;margin-bottom:6px">'+q[1]+'</div><div class="rate">'+[1,2,3,4,5].map(function(n){return '<button data-a="rate" data-k="'+q[0]+'" data-n="'+n+'" aria-pressed="'+(SV[q[0]]===n)+'">'+n+'</button>';}).join("")+'</div></div>';
     }).join("")+'<button class="btn primary" data-a="sendSurvey"'+(ok?'':' disabled')+'>Kirim survei</button></div>';}
  }else{
    h+='<div class="card soft"><h3>Terima kasih sudah mengisi survei</h3><p class="small muted" style="margin:0">Jawabanmu sudah tercatat.</p></div>';
  }
  h+='<div class="card soft stack"><div><h3>Untuk kader dan fasilitator</h3><p class="small muted" style="margin:0">Panduan menyampaikan modul, rencana sesi, dan protokol keselamatan.'+(ADMIN?' Rekap hasil trial hanya terlihat oleh akun editor.':'')+'</p></div><div class="row"><button class="btn" data-a="fasil" data-k="">Buka panduan fasilitator</button>'+(ADMIN?'<button class="btn primary" data-a="nav" data-v="rekap">'+ic("chart")+' Rekap trial</button>':'')+'</div></div>';
  h+='<div class="card flat stack"><h3>Data kamu</h3><p class="small muted" style="margin:0">Progres belajar dan check-in tersimpan di HP ini. Nama panggilan, segmen, poin, skor kuis, dan apakah kamu tertarik pada PIKR dikirim ke peringkat dan rekap bila tersambung. Tidak ada nama asli, nomor HP, atau isi catatanmu.</p>'+
   (resetConfirm?'<div class="row"><button class="btn small" data-a="resetYes" style="color:var(--bad);border-color:var(--bad)">Ya, hapus semua</button><button class="btn small ghost" data-a="resetNo">Batal</button></div>':'<button class="btn small" data-a="resetAsk" style="align-self:flex-start">Hapus data saya</button>')+'</div>';
  return h+'</div>';
}

/* ---------- Rekap kader ---------- */
function vRekap(){
  if(!ADMIN)return vHome();
  var rows=BOARD,n=rows.length;
  var h=topbar()+'<div class="stack">'+backBtn("me","Profil")+'<div><div class="eyebrow">Untuk kader PIKR</div><h1 style="font-size:1.6rem">Rekap trial</h1><p class="muted" style="margin:6px 0 0">Ringkasan dari peserta yang tersambung. Nama panggilan saja, tanpa data pribadi.</p></div>';
  var avgPts=avg(rows.map(function(r){return r.pts||0;}));
  var allDone=rows.filter(function(r){return r.mods&&MODS.every(function(m){return r.mods[m.id]&&r.mods[m.id].done;});}).length;
  h+='<div class="stats"><div class="stat"><b class="num">'+n+'</b><span>peserta</span></div><div class="stat"><b class="num">'+(avgPts==null?"-":Math.round(avgPts))+'</b><span>rata-rata poin</span></div><div class="stat"><b class="num">'+allDone+'</b><span>tuntas semua</span></div></div>';
  h+='<div class="card"><h2>Pre-test dan post-test</h2><div class="scroll-x" style="margin-top:8px"><table class="table"><thead><tr><th>Modul</th><th>Pre</th><th>Post</th><th>Naik</th><th>Tuntas</th></tr></thead><tbody>'+
   MODS.map(function(m){
    var pre=[],post=[],dl=[],dn=0;
    rows.forEach(function(r){var x=r.mods&&r.mods[m.id];if(!x)return;if(typeof x.pre==="number")pre.push(x.pre);if(typeof x.post==="number")post.push(x.post);if(typeof x.pre==="number"&&typeof x.post==="number")dl.push(x.post-x.pre);if(x.done)dn++;});
    var d=avg(dl);
    return '<tr><td>'+esc(m.short)+'</td><td>'+fmt1(avg(pre))+' <span class="muted">('+pre.length+')</span></td><td>'+fmt1(avg(post))+' <span class="muted">('+post.length+')</span></td><td>'+(d==null?"-":(d>0?"+":"")+fmt1(d))+'</td><td>'+dn+'</td></tr>';
   }).join("")+'</tbody></table></div><p class="small muted" style="margin:8px 0 0">Skor rata-rata dari 5. Angka dalam kurung adalah jumlah peserta. Naik dihitung dari peserta yang punya pre dan post.</p></div>';
  h+=segRekap(rows,n);
  var pu=rows.filter(function(r){return r.puas;});
  h+='<div class="card"><h2>Kepuasan</h2>'+(pu.length?
   [["a","Mudah dipakai"],["b","Materi membantu"],["c","Akan mengajak teman"],["d","Lebih paham apa itu PIKR"],["e","Tertarik ikut kegiatan PIKR"]].map(function(q){var a=avg(pu.filter(function(r){return typeof r.puas[q[0]]==="number";}).map(function(r){return r.puas[q[0]];}));return '<div class="row" style="justify-content:space-between;padding-block:6px;border-bottom:1px solid var(--line)"><span>'+q[1]+'</span><b class="num">'+fmt1(a)+' / 5</b></div>';}).join("")+'<p class="small muted" style="margin:8px 0 0">'+pu.length+' responden</p>':'<p class="muted" style="margin:6px 0 0">Belum ada yang mengisi survei.</p>')+'</div>';
  h+='<button class="btn" data-a="fasil" data-k="">Panduan fasilitator</button>';
  h+='<button class="btn primary" data-a="csv"'+(DL&&n?'':' disabled')+'>'+ic("download")+' Unduh data (CSV)</button>';
  if(!DL)h+='<p class="small muted">Fitur unduh tidak tersedia di tampilan ini.</p>';
  return h+'</div>';
}
function segRekap(rows,n){
  function pc(x){return n?Math.round(x/n*100)+"%":"-";}
  var baca=rows.filter(function(r){return !!r.pikrRead;}).length,minat=rows.filter(function(r){return !!r.minat;}).length;
  var line=SEG.map(function(s){
    var m=rows.filter(function(r){return r.seg===s.id;});
    var a=avg(m.map(function(r){return r.pts||0;}));
    var dn=m.filter(function(r){return r.mods&&MODS.every(function(x){return r.mods[x.id]&&r.mods[x.id].done;});}).length;
    var mi=m.filter(function(r){return !!r.minat;}).length;
    return '<tr><td>'+esc(s.n)+' <span class="muted">'+esc(s.age.replace(" tahun",""))+'</span></td><td>'+m.length+'</td><td>'+(a==null?"-":Math.round(a))+'</td><td>'+dn+'</td><td>'+mi+'</td></tr>';
  }).join("");
  var none=rows.filter(function(r){return !segOf(r.seg);}).length;
  return '<div class="card"><h2>Segmen dan PIKR</h2><div class="scroll-x" style="margin-top:8px"><table class="table"><thead><tr><th>Segmen</th><th>Peserta</th><th>Poin rata-rata</th><th>Tuntas</th><th>Tertarik PIKR</th></tr></thead><tbody>'+line+'</tbody></table></div>'+
   '<div class="row" style="justify-content:space-between;padding-block:8px;border-bottom:1px solid var(--line);margin-top:6px"><span>Membaca FAQ bagian PIKR</span><b class="num">'+baca+' ('+pc(baca)+')</b></div>'+
   '<div class="row" style="justify-content:space-between;padding-block:8px"><span>Tertarik tahu lebih lanjut</span><b class="num">'+minat+' ('+pc(minat)+')</b></div>'+
   (none?'<p class="small muted" style="margin:6px 0 0">'+none+' peserta belum memilih segmen.</p>':'')+
   '<p class="small muted" style="margin:6px 0 0">Minat hanya mencatat bahwa peserta ingin tahu lebih lanjut, bukan jumlah pendaftar.</p></div>';
}
function exportCsv(){
  var head=["nama_panggilan","segmen","baca_faq_pikr","minat_pikr","poin","level"];
  MODS.forEach(function(m){head.push("pre_"+m.id,"post_"+m.id);});
  head.push("puas_mudah","puas_materi","puas_ajak","puas_paham_pikr","puas_tertarik_pikr");
  var lines=[head.join(",")];
  BOARD.forEach(function(r){
    var s=segOf(r.seg);
    var row=[r.nick,s?s.n:"",r.pikrRead?1:0,r.minat?1:0,r.pts||0,lvName(r.pts)];
    MODS.forEach(function(m){var x=r.mods&&r.mods[m.id]||{};row.push(x.pre,x.post);});
    var u=r.puas||{};
    row.push(u.a,u.b,u.c,u.d,u.e);
    lines.push(row.map(csvCell).join(","));
  });
  DL.save({filename:"rekap-selaras.csv",data:"﻿"+lines.join("\n")}).then(function(){toast("Data siap diunduh");}).catch(function(e){if(!e||e.code!=="declined")toast("Unduhan tidak berhasil");});
}

/* ---------- Napas ---------- */
function vNapas(){
  return kvHead("Tenang sebentar","Latihan napas 4-6","Tarik napas 4 hitungan, hembuskan 6 hitungan. Lima putaran, sekitar 50 detik.")+'<div class="stack">'+
  '<div class="card stack" style="text-align:center">'+
  '<div class="orb-wrap"><div class="orb" id="orb" aria-hidden="true">4</div></div>'+
  '<div id="brTxt" style="font-weight:700;font-size:1.2rem" role="status" aria-live="polite">Siap?</div><div class="small muted" id="brSub"></div>'+
  '<button class="btn primary block" data-a="brStart" id="brBtn">Mulai</button></div>'+
  '<p class="small muted">Kalau pusing, berhenti dan bernapas biasa. Latihan ini membantu menenangkan, tetapi bukan pengganti bantuan profesional.</p></div>';
}
function stepBtn(state,num,title,sub,attrs){
  var dot=state==="done"?ic("check"):(state==="locked"?ic("lock"):num);
  return '<button class="step '+state+'" '+attrs+(state==="locked"?' disabled':'')+'><span class="dot">'+dot+'</span><span class="grow"><b>'+esc(title)+'</b><br><span class="small muted">'+esc(sub)+'</span></span>'+(state==="locked"?'':ic("right"))+'</button>';
}

function goalsHtml(m){
  var g='<div class="callout" style="margin:12px 0 0"><b class="t">Tujuan belajar</b><ul style="margin:4px 0 0;padding-left:1.2em">'+m.goals.map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul></div>';
  g+='<details class="gl"><summary>Istilah penting ('+m.istilah.length+')</summary><dl>'+m.istilah.map(function(x){return '<dt>'+esc(x[0])+'</dt><dd>'+esc(x[1])+'</dd>';}).join("")+'</dl></details>';
  return g;
}

function vMod(){
  var m=mod(R.id),secs=S.sec[m.id]||[],preDone=S.pre[m.id]!=null,allRead=secCount(m)===5,postDone=S.post[m.id]!=null;
  var h=kvHead("Modul",m.name,m.intro)+'<div class="stack">'+backBtn("mods","Semua modul");
  h+='<div class="card">'+goalsHtml(m)+'</div>';
  h+=stepBtn(preDone?"done":"ready",1,"Pre-test","Skor kamu: "+(preDone?S.pre[m.id]+" dari 5":"5 soal untuk mengukur titik awal"),preDone?'disabled':'data-a="test" data-id="'+m.id+'" data-k="pre"');
  if(preDone){h=h.replace(/(<button class="step done"[^>]*) disabled/,"$1 data-a=\"noop\"");}
  m.sections.forEach(function(s,i){
    var st=secs[i]?"done":(preDone?"ready":"locked");
    h+=stepBtn(st,i+2,"Materi "+(i+1)+": "+s.t,preDone?"3 sampai 5 menit":"Kerjakan pre-test dulu",'data-a="read" data-id="'+m.id+'" data-i="'+i+'"');
  });
  var stk=secs[4]?"done":(preDone?"ready":"locked");
  h+=stepBtn(stk,6,"Studi kasus dan aktivitas",preDone?m.kasus.judul:"Kerjakan pre-test dulu",'data-a="read" data-id="'+m.id+'" data-i="4"');
  var stp=postDone?"done":(allRead?"ready":"locked");
  h+=stepBtn(stp,7,"Post-test",postDone?"Skor terbaikmu: "+S.post[m.id]+" dari 5 (pre-test "+S.pre[m.id]+"). Ketuk untuk mengulang.":(allRead?"5 soal dengan pembahasan":"Selesaikan semua materi dulu"),'data-a="test" data-id="'+m.id+'" data-k="post"');
  h+='</div>';
  return h;
}

function vRead(){
  var m=mod(R.id),i=R.i,secs=S.sec[m.id]||[],done=!!secs[i];
  var h=topbar()+'<div class="stack"><button class="btn ghost small" data-a="open" data-id="'+m.id+'" style="align-self:flex-start">'+ic("left")+' '+esc(m.short)+'</button>';
  if(i<4){
    var s=m.sections[i];
    h+='<div class="card"><div class="eyebrow">Materi '+(i+1)+' dari 4</div><h1 style="font-size:1.5rem;margin:6px 0 14px">'+esc(s.t)+'</h1><div class="prose">'+s.body+'</div>'+(s.core?'<div class="callout warm" style="margin:6px 0 0"><b class="t">Intinya</b>'+esc(s.core)+'</div>':'')+'</div>';
  }else{
    var k=m.kasus;
    h+='<div class="card"><div class="eyebrow">Studi kasus</div><h1 style="font-size:1.4rem;margin:6px 0 12px">'+esc(k.judul)+'</h1><div class="prose">'+k.cerita+
      '<div class="callout"><b class="t">Renungkan</b><ol style="margin:4px 0 0">'+k.tanya.map(function(q){return '<li>'+esc(q)+'</li>';}).join("")+'</ol></div></div></div>'+
      '<div class="card warm"><div class="eyebrow">Aktivitas</div><h2 style="margin:4px 0 8px">'+esc(k.aktivitas.judul)+'</h2><ol style="margin:0;padding-left:1.2em">'+k.aktivitas.langkah.map(function(q){return '<li style="margin-bottom:6px">'+esc(q)+'</li>';}).join("")+'</ol></div>';
  }
  h+='<div class="row">'+(i>0?'<button class="btn" data-a="read" data-id="'+m.id+'" data-i="'+(i-1)+'">'+ic("left")+' Sebelumnya</button>':'')+
   '<button class="btn primary grow" data-a="doneRead" data-id="'+m.id+'" data-i="'+i+'">'+(done?(i<4?"Lanjut":"Kembali ke modul"):(i<4?"Selesai, lanjut (+10 poin)":"Selesai (+10 poin)"))+'</button></div></div>';
  return h;
}

function vTest(){
  var m=mod(T.id),q=m.tes[T.i],post=T.kind==="post",L="ABCD";
  var h='<div class="stack" style="padding-top:8px"><div class="row" style="justify-content:space-between"><button class="btn ghost small" data-a="quitTest">'+ic("left")+' Keluar</button><span class="chip plain num">'+(T.i+1)+' / '+m.tes.length+'</span></div>';
  if(T.done){
    var sc=T.ans.reduce(function(a,b,i){return a+(b===m.tes[i].a?1:0);},0);
    var pre=S.pre[m.id];
    h+='<div class="card stack"><div class="eyebrow">'+(post?"Post-test":"Pre-test")+' selesai</div><h1 style="font-size:2.4rem">'+sc+' <span class="muted" style="font-size:1.2rem">dari 5</span></h1>';
    if(post){
      h+='<p>'+(pre!=null?(sc>pre?'Naik '+(sc-pre)+' poin dari pre-test ('+pre+'). Hasil belajarmu terlihat.':(sc===pre?'Sama dengan pre-test ('+pre+'). Coba baca ulang materi lalu ulangi post-test.':'Pre-test kamu '+pre+'. Tidak apa-apa, baca ulang materi dan coba lagi.')):'')+'</p><p class="small muted">Skor terbaik yang dihitung. +'+(10*sc)+' poin dari post-test ini.</p>';
    }else{
      h+='<p>Ini titik awalmu, bukan nilai. Sekarang baca materinya, lalu kerjakan post-test untuk melihat perkembanganmu.</p><p class="small muted">+10 poin untuk menyelesaikan pre-test.</p>';
    }
    h+='<button class="btn primary block" data-a="open" data-id="'+m.id+'">Kembali ke modul</button></div></div>';
    return h;
  }
  h+='<div class="card stack"><div class="eyebrow">'+(post?"Post-test":"Pre-test")+', '+esc(m.short)+'</div><h2 style="font-size:1.2rem">'+esc(q.q)+'</h2><p class="small muted" style="margin:0">Pilih jawaban yang paling tepat. Beberapa pilihan mungkin terdengar masuk akal.</p><div class="stack" style="gap:8px">'+
   q.o.map(function(o,i){
    var cls="opt",pr="false",dis="";
    if(T.sel===i)pr="true";
    if(T.locked){dis=" disabled";if(i===q.a)cls+=" right";else if(i===T.sel)cls+=" wrong";}
    return '<button class="'+cls+'" data-a="pick" data-i="'+i+'" aria-pressed="'+pr+'"'+dis+'><span class="k">'+L[i]+'</span><span>'+esc(o)+'</span></button>';
   }).join("")+'</div>';
  if(T.locked){
    h+='<div class="callout '+(T.sel===q.a?'':'warm')+'"><b class="t">'+(T.sel===q.a?"Tepat":"Belum tepat")+'</b>'+esc(q.why)+'</div>';
  }
  var ready=post?T.locked:(T.sel!=null);
  h+='<button class="btn primary block" data-a="nextQ"'+(ready?'':' disabled')+'>'+(T.i<m.tes.length-1?"Lanjut":"Lihat skor")+'</button></div></div>';
  return h;
}

function csvCell(v){v=v==null?"":String(v);return /[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v;}

function stopBreath(){if(BR){clearTimeout(BR.t);clearInterval(BR.c);BR=null;}}
function startBreath(){}
function runBreath(){
  stopBreath();
  var orb=$("#orb"),tx=$("#brTxt"),sub=$("#brSub"),btn=$("#brBtn");
  if(!orb)return;
  var still=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  BR={round:0,t:null,c:null};
  btn.textContent="Berhenti";btn.setAttribute("data-a","brStop");
  function phase(kind){
    var secs=kind==="in"?4:6,left=secs;
    tx.textContent=kind==="in"?"Tarik napas":"Hembuskan pelan";
    sub.textContent="Putaran "+BR.round+" dari 5";
    orb.textContent=left;
    if(!still){orb.style.transition="transform "+secs+"s ease-in-out";orb.style.transform=kind==="in"?"scale(1.35)":"scale(.75)";}
    clearInterval(BR.c);
    BR.c=setInterval(function(){left--;if(left>0)orb.textContent=left;},1000);
    BR.t=setTimeout(function(){
      if(kind==="in"){phase("out");}
      else if(BR.round>=5){finish();}
      else{BR.round++;phase("in");}
    },secs*1000);
  }
  function finish(){
    clearInterval(BR.c);BR=null;
    tx.textContent="Selesai";sub.textContent="Rasakan tubuhmu sebentar. Bagaimana perasaanmu sekarang?";orb.textContent="";
    btn.textContent="Ulangi";btn.setAttribute("data-a","brStart");
  }
  BR.round=1;phase("in");
}

var FASIL_INFO=[{"k":"umum","icon":"user","t":"Peran dan prinsip fasilitator","sub":"Baca ini dulu sebelum sesi pertama","html":"<h3>Peranmu</h3><p>Fasilitator bukan konselor atau psikolog. Tugasmu menyampaikan materi, memandu diskusi dengan aman, dan <strong>merujuk</strong> peserta yang membutuhkan bantuan lebih. Kamu tidak perlu punya semua jawaban. \"Aku nggak tahu, kita tanyakan ke guru BK ya\" adalah jawaban yang baik.</p><h3>Prinsip</h3><ul><li><strong>Aman dulu.</strong> Keselamatan dan kenyamanan peserta lebih penting daripada menyelesaikan materi.</li><li><strong>Tidak menghakimi.</strong> Semua jawaban diterima. Tidak ada jawaban yang ditertawakan.</li><li><strong>Sukarela.</strong> Peserta boleh melewati pertanyaan (pass) tanpa alasan.</li><li><strong>Bahasa sehari-hari.</strong> Hindari istilah klinis. Jelaskan dengan contoh dari kehidupan mereka.</li><li><strong>Fokus pada pola, bukan orang.</strong> Jangan menyebut nama teman, guru, atau keluarga saat berbagi cerita.</li><li><strong>Edukasi, bukan diagnosis.</strong> Jangan mengatakan \"kamu depresi\" atau \"kamu kena gangguan kecemasan\".</li></ul><h3>Kesepakatan bersama (bacakan di awal)</h3><ol><li>Kita saling menghormati dan tidak menertawakan jawaban orang lain.</li><li>Boleh pass. Tidak ada yang dipaksa bercerita.</li><li>Cerita pribadi tidak dibawa keluar ruangan tanpa izin. Pengecualiannya kalau ada yang berisiko dalam bahaya: kita akan membantu mencarikan bantuan.</li><li>Kita tidak menyebut nama orang lain dalam cerita.</li><li>Boleh keluar sebentar kalau butuh jeda.</li></ol><h3>Kalimat yang membantu dan yang sebaiknya dihindari</h3><div class='scroll-x'><table class='table'><thead><tr><th>Hindari</th><th>Coba</th></tr></thead><tbody><tr><td>\"Ah, gitu aja stres.\"</td><td>\"Kedengarannya berat. Terima kasih sudah cerita.\"</td></tr><tr><td>\"Kamu harus kuat dan bersyukur aja.\"</td><td>\"Wajar kalau kamu merasa begitu.\"</td></tr><tr><td>\"Kenapa kamu nggak...?\"</td><td>\"Apa yang sudah kamu coba sejauh ini?\"</td></tr><tr><td>\"Jangan bilang siapa-siapa ya.\"</td><td>\"Aku mau bantu. Mungkin kita perlu melibatkan orang dewasa lain, dan kita cari bareng.\"</td></tr><tr><td>\"Kamu depresi, ya?\"</td><td>\"Yang kamu ceritakan layak diperiksa tenaga profesional.\"</td></tr></tbody></table></div><h3>Batasan peranmu</h3><ul><li>Tidak mendiagnosis dan tidak menyarankan obat atau dosis.</li><li>Tidak memaksa peserta bercerita atau menyebut pengalaman pribadinya.</li><li>Tidak menjanjikan kerahasiaan mutlak. Kalau ada risiko keselamatan, orang dewasa yang berwenang harus dilibatkan.</li><li>Tidak menggantikan konselor. Selalu sebutkan jalur bantuan (guru BK, puskesmas, layanan konseling).</li></ul>"},{"k":"segmen","icon":"people","t":"Menyesuaikan dengan segmen","sub":"Berani, Beraksi, dan Berkolaborasi","html":"<h3>Tiga segmen PIKR</h3><ul><li><strong>Berani:</strong> 10–14 tahun</li><li><strong>Beraksi:</strong> 15–19 tahun</li><li><strong>Berkolaborasi:</strong> 20–24 tahun</li></ul><p>Peserta memilih segmen sendiri di aplikasi, dan peringkat kelompok dihitung per segmen. Saran di bawah ini dari tim pembuat aplikasi, <strong>bukan ketentuan resmi PIKR</strong>. Sesuaikan dengan pedoman PIKR di tempatmu.</p><h3>Berani, 10–14 tahun</h3><ul><li>Pakai kalimat pendek dan contoh yang dekat: teman, grup chat, game, media sosial.</li><li>Sesi lebih singkat (30 sampai 40 menit) dengan lebih banyak permainan dan gerak.</li><li>Bahas topik citra diri dan cemas secara sederhana. Hindari detail tentang tubuh.</li><li>Pastikan izin dari sekolah dan orang tua atau wali sesuai kebijakan penyelenggara, dan selalu ada pendamping dewasa di ruangan.</li></ul><h3>Beraksi, 15–19 tahun</h3><ul><li>Andalkan diskusi studi kasus, role-play singkat, dan pertanyaan pemantik.</li><li>Tema yang dekat: tekanan akademik, pertemanan, relasi, dan media sosial.</li><li>Beri ruang berpendapat dan jangan menggurui. Tanda bahaya tetap ditangani lewat Protokol keselamatan.</li><li>Ajak peserta yang antusias mencoba peran sebagai pendidik sebaya.</li></ul><h3>Berkolaborasi, 20–24 tahun</h3><ul><li>Perlakukan peserta sebagai rekan, bukan murid.</li><li>Tema yang dekat: transisi kuliah dan kerja, tekanan masa depan, dan relasi.</li><li>Ajak menjadi co-fasilitator, konselor sebaya, atau penggerak proyek kolaborasi.</li><li>Ganti rujukan guru BK dengan konselor kampus, layanan komunitas, atau puskesmas.</li></ul><h3>Kalau sesi terpaksa campur</h3><ul><li>Bagi diskusi per segmen, lalu bahas bersama.</li><li>Jangan membandingkan skor atau usia peserta di depan umum.</li><li>Jaga agar peserta yang lebih tua tidak mendominasi.</li></ul><div class='callout warm'><b class='t'>Ingat</b>Untuk peserta di bawah 18 tahun, ikuti kebijakan penyelenggara tentang izin dan pendampingan, termasuk saat membahas topik sensitif.</div>"},{"k":"siap","icon":"check","t":"Persiapan dan checklist","sub":"H-7, H-1, hari H, dan setelah sesi","html":"<h3>H-7</h3><ul><li>Dapatkan izin dari sekolah atau pihak terkait, dan koordinasikan dengan guru BK.</li><li>Siapkan <strong>daftar rujukan lokal</strong>: nama dan kontak guru BK, puskesmas terdekat, psikolog atau layanan konseling yang tersedia.</li><li>Pastikan link Selaras bisa dibuka peserta (pengaturan berbagi sudah benar). Uji di minimal 2 HP berbeda.</li><li>Tentukan siapa orang dewasa yang siaga di sekolah bila ada peserta membutuhkan bantuan.</li></ul><h3>H-1</h3><ul><li>Cetak poster QR: QR utama, QR per modul (akhiran #emosi, #cemas, #diri, #bully, #seksual, atau #dev), dan QR FAQ PIKR (akhiran #pikr) untuk poster promosi.</li><li>Siapkan kertas, spidol, dan kesepakatan bersama yang ditulis besar.</li><li>Baca ulang rencana sesi modul dan kunci diskusi studi kasus.</li><li>Siapkan satu tempat tenang untuk peserta yang butuh jeda.</li></ul><h3>Hari H</h3><ul><li>Datang 20 menit lebih awal. Uji sinyal dan QR.</li><li>Atur kursi berkelompok atau melingkar.</li><li>Tulis kesepakatan bersama di papan.</li><li>Pastikan guru BK atau orang dewasa lain berada dekat ruangan.</li></ul><h3>Setelah sesi</h3><ul><li>Tindak lanjuti peserta yang kamu rujuk sesuai protokol.</li><li>Catat kejadian khusus secara singkat dan faktual.</li><li>Unduh rekap, bandingkan skor pre-test dan post-test.</li><li>Lakukan evaluasi singkat dengan guru BK atau tim PIKR.</li></ul>"},{"k":"protokol","icon":"ring","t":"Protokol keselamatan","sub":"Jika ada peserta yang membutuhkan bantuan","html":"<div class='callout warm'><b class='t'>Prinsip utama</b>Kamu tidak harus menyelesaikan masalah peserta. Tugasmu mendengarkan, menjaga peserta tetap aman, dan menghubungkannya dengan orang dewasa atau tenaga yang berwenang.</div><h3>A. Peserta menangis atau kewalahan</h3><ul><li>Tetap tenang dan hentikan kegiatan sebentar bila perlu.</li><li>Beri ruang. Tawarkan air, atau keluar sebentar dengan teman atau pendamping.</li><li>Jangan memaksa menjelaskan atau menyorotnya di depan peserta lain.</li><li>Setelah sesi, tanyakan kabarnya secara pribadi dan tawarkan bertemu guru BK.</li></ul><h3>B. Peserta menyebut ingin mengakhiri hidup atau menyakiti diri</h3><p>Ini bisa lewat ucapan, tulisan di aktivitas, atau komentar. Anggap serius, apa pun nadanya.</p><ol><li>Ajak bicara secara pribadi di tempat aman, dengan orang dewasa lain terlihat dekat.</li><li>Dengarkan tanpa menghakimi. Tanyakan langsung dan tenang: \"Apakah kamu sedang berpikir untuk mengakhiri hidupmu?\" Bertanya langsung tidak menanamkan ide.</li><li>Jangan berjanji merahasiakan. Katakan: \"Aku peduli dengan keselamatanmu, jadi aku perlu melibatkan orang dewasa yang bisa membantu.\"</li><li><strong>Jangan tinggalkan dia sendirian.</strong> Segera libatkan guru BK atau konselor, wali kelas atau pembina, atau orang tua sesuai kebijakan penyelenggara.</li><li>Jika ada bahaya langsung (ada rencana, alat, atau sudah melukai diri): hubungi <strong>112</strong> atau antar ke IGD terdekat sambil menemani.</li><li>Untuk berkonsultasi, kamu atau peserta bisa menghubungi layanan konseling kesehatan jiwa: 119 lalu tekan 8 (SEJIWA, Kementerian Kesehatan).</li><li>Jangan membahas cara atau detail metode, dan jangan menjanjikan \"semuanya akan baik-baik saja\". Cukup katakan bahwa ada orang yang mau membantu.</li><li>Catat kejadian secara singkat dan faktual, lalu pastikan ada tindak lanjut.</li></ol><h3>C. Peserta menyampaikan kekerasan atau pelecehan</h3><ul><li>Dengarkan dan percaya. Katakan: \"Terima kasih sudah berani cerita. Ini bukan salahmu.\"</li><li>Jangan menginterogasi atau meminta detail berulang-ulang.</li><li>Jangan berjanji merahasiakan. Jelaskan bahwa kamu perlu melibatkan orang dewasa yang berwenang untuk melindunginya.</li><li>Catat apa yang dikatakan dengan kata-katanya sendiri.</li><li>Laporkan ke guru BK atau kepala sekolah atau pimpinan lembaga sesuai prosedur perlindungan anak. SAPA 129 (Kementerian PPPA) juga menerima laporan.</li><li>Jika bahaya terjadi saat ini juga, hubungi 112.</li></ul><h3>D. Ada yang menertawakan atau meremehkan</h3><ul><li>Hentikan dengan tenang dan ingatkan kesepakatan bersama.</li><li>Jangan mempermalukan orangnya di depan peserta lain. Bicarakan secara pribadi.</li><li>Beri contoh respons yang menghargai.</li></ul><h3>E. Peserta diam atau tidak mau ikut</h3><ul><li>Biarkan. Boleh pass.</li><li>Beri peran lain: mencatat, menjaga waktu, atau membagi kertas.</li><li>Jangan menyorot atau memaksa.</li></ul><h3>F. Peserta menyebut nama orang lain</h3><ul><li>Hentikan dengan lembut: \"Kita tidak menyebut nama ya, supaya aman untuk semua. Kita bahas polanya dan solusinya.\"</li><li>Tawarkan bicara pribadi setelah sesi.</li></ul><h3>G. Peserta bertanya di luar kemampuanmu</h3><p>Misalnya soal obat, diagnosis, atau masalah keluarga yang berat. Katakan: \"Aku bukan tenaga kesehatan, jadi aku nggak bisa jawab itu. Kita cari ke psikolog atau puskesmas ya.\"</p><div class='callout warm'><b class='t'>Setelah kejadian</b>Ceritakan pada guru BK atau rekan fasilitator. Kamu juga boleh merasa terguncang. Jaga dirimu, dan jangan membawa beban ini sendirian. Nomor layanan dapat berubah, jadi pastikan daftar rujukanmu diperbarui.</div>"},{"k":"app","icon":"chart","t":"Memakai Selaras di sesi","sub":"QR, pre-test dan post-test, rekap, dan privasi","html":"<h3>Sebelum sesi</h3><ul><li>Pastikan link bisa dibuka peserta. Uji di 2 HP berbeda dan di sinyal yang sama dengan ruangan.</li><li>Cetak QR utama. Untuk QR per modul, tambahkan akhiran pada link: <strong>#emosi</strong>, <strong>#cemas</strong>, <strong>#diri</strong>, <strong>#bully</strong>, <strong>#seksual</strong>, atau <strong>#dev</strong>. Akhiran <strong>#pikr</strong> langsung membuka menu FAQ bagian PIKR, cocok untuk poster promosi.</li><li>Siapkan rencana cadangan bila internet buruk: berpasangan satu HP, atau sampaikan materi secara lisan lalu isi pre-test dan post-test setelahnya.</li></ul><h3>Saat sesi</h3><ol><li>Tunjukkan QR. Peserta mengisi <strong>nama panggilan (bukan nama asli)</strong> dan memilih segmen sesuai usia (Berani 10–14, Beraksi 15–19, Berkolaborasi 20–24 tahun). Usia tidak disimpan, hanya segmennya.</li><li>Peserta mengerjakan <strong>pre-test sendiri-sendiri</strong> tanpa membuka materi. Tegaskan bahwa ini bukan nilai.</li><li>Materi disampaikan secara tatap muka. Peserta boleh membuka materi di HP sebagai pendamping.</li><li>Peserta mengerjakan <strong>post-test</strong>. Bahas bersama soal yang sering salah.</li><li>Ajak peserta mencoba tantangan harian dan check-in suasana hati di rumah.</li></ol><h3>Peringkat</h3><ul><li>Peringkat bersama hanya muncul bila peserta tersambung dan punya akses menulis. Kalau tidak, poin tetap tersimpan di HP masing-masing.</li><li>Jangan meminta peserta menyebut skor di depan peserta lain. Fokuskan pada perkembangan, bukan peringkat.</li><li>Peringkat kelompok mengikuti tiga segmen dan dihitung dari rata-rata poin per anggota, supaya adil bagi segmen yang jumlah pesertanya berbeda.</li></ul><h3>Rekap untuk kader</h3><ul><li>Tab <strong>Rekap</strong> hanya tampil untuk akun dengan akses editor.</li><li>Kolom <strong>Naik</strong> adalah rata-rata selisih post-test dan pre-test peserta yang mengerjakan keduanya.</li><li>Kartu <strong>Segmen dan PIKR</strong> menunjukkan jumlah peserta tiap segmen, berapa yang membaca FAQ bagian PIKR, dan berapa yang tertarik tahu lebih lanjut.</li><li>Tombol <strong>Unduh data (CSV)</strong> menghasilkan file yang bisa dibuka di Excel atau Google Sheets.</li></ul><h3>Privasi peserta</h3><ul><li>Aplikasi tidak meminta nama asli, nomor HP, atau email.</li><li>Check-in suasana hati hanya tersimpan di HP peserta dan tidak masuk rekap.</li><li>Yang masuk rekap hanya nama panggilan, segmen, poin, skor pre-test dan post-test, minat pada PIKR, dan jawaban survei.</li></ul>"},{"k":"promo","icon":"people","t":"Mempromosikan PIKR","sub":"Pitch, saluran, etika, dan cara mengukur hasilnya","html":"<h3>Tujuan</h3><p>Remaja di Bandung yang belum kenal PIKR menjadi <strong>tahu</strong> apa itu PIKR, <strong>paham</strong> manfaatnya, dan <strong>tahu cara menghubungi atau bergabung</strong>. Tujuannya bukan memaksa orang mendaftar. Orang yang merasa nyaman lebih mungkin datang sendiri.</p><h3>Pesan inti (pilih dua saja tiap kesempatan)</h3><ul><li>PIKR dikelola <strong>dari, oleh, dan untuk remaja</strong>.</li><li>Bukan hanya untuk yang sedang bermasalah. Bisa untuk belajar, mencari teman, dan berlatih memimpin atau menyampaikan informasi.</li><li>Ada teman sebaya yang dilatih untuk mendengarkan tanpa menghakimi.</li><li>Topiknya luas, dari gizi dan keterampilan hidup sampai kesehatan mental.</li><li>Selaras gratis, tanpa daftar akun, dan cukup memakai nama panggilan.</li></ul><div class='callout'><b class='t'>Pitch 30 detik (untuk di kelas, kampus, atau komunitas)</b>\"Pernah stres atau overthinking tapi bingung mau cerita ke siapa? Itu dialami banyak remaja. PIKR adalah Pusat Informasi dan Konseling Remaja, tempat remaja belajar dan saling mendengarkan, dikelola dari, oleh, dan untuk remaja. Kami buat Selaras, aplikasi singkat tentang kesehatan mental yang bisa kamu buka lewat QR tanpa daftar. Coba satu modul 5 menit, dan kalau tertarik, kenalan sama PIKR.\"</div><div class='callout'><b class='t'>Pitch 10 detik (untuk poster dan story)</b>\"Stres? Overthinking? Kenalan sama PIKR. Scan QR, belajar 5 menit di Selaras.\"</div><h3>Saluran</h3><ul><li>Poster QR di mading, kantin, perpustakaan, ruang BK atau OSIS, sekretariat ekstrakurikuler, dan kampus, dengan izin pengelola tempat.</li><li>Grup WhatsApp angkatan, kelas, OSIS, ekskul, atau komunitas, lewat perwakilan yang kamu kenal. Jangan memasukkan orang ke grup tanpa izin.</li><li>Instagram dan TikTok PIKR: video 15 sampai 30 detik seperti tips singkat atau mitos dan fakta tentang PIKR.</li><li>Slot 5 menit di apel, MPLS, kegiatan OSIS, atau ospek, bersama guru BK atau bagian kemahasiswaan.</li><li>Kerja sama dengan guru BK, OSIS, puskesmas, karang taruna, dan komunitas remaja.</li><li>Acara terbuka yang berizin, misalnya bazar sekolah, acara komunitas, atau car free day, dengan stan kecil dan QR.</li></ul><h3>Contoh keterangan untuk Instagram</h3><div class='callout'>Pernah overthinking sampai susah tidur? Kamu nggak sendirian. Kenalan sama PIKR, tempat remaja belajar dan saling mendengarkan. Coba Selaras, 5 menit aja. Scan QR di poster atau cek link di bio. #Selaras #PIKR #Bandung #KesehatanMentalRemaja</div><h3>Etika promosi</h3><ul><li>Dapatkan izin sekolah atau pengelola tempat sebelum menempel poster atau masuk kelas.</li><li>Jangan menekan, jangan menjanjikan hasil (misalnya \"pasti sembuh\"), dan jangan menyebut PIKR sebagai pengganti psikolog.</li><li>Jangan memajang wajah, nama, atau cerita pribadi peserta tanpa izin tertulis, dan izin orang tua bagi yang berusia di bawah 18 tahun.</li><li>Jangan mengumpulkan nomor HP atau akun media sosial remaja lewat Selaras. Aplikasi ini memang tidak memintanya.</li><li>Sertakan jalur bantuan di materi promosi yang membahas kesehatan mental, dan hindari bahasa yang menakut-nakuti atau meremehkan.</li><li>Pastikan kontak dan jadwal PIKR benar sebelum dicetak.</li></ul><h3>Mengukur hasilnya</h3><ul><li>Di Rekap, kartu <strong>Segmen dan PIKR</strong> menunjukkan jumlah peserta per segmen, berapa yang membaca FAQ bagian PIKR, dan berapa yang tertarik tahu lebih lanjut.</li><li>Survei menanyakan apakah peserta <strong>lebih paham apa itu PIKR</strong> dan apakah <strong>tertarik ikut kegiatan PIKR</strong>.</li><li>Dari sisi PIKR sendiri: catat jumlah pendaftar atau kunjungan baru tiap minggu, lalu bandingkan dengan sebelum kampanye.</li><li>Tanyakan pada pendaftar baru, \"Tahu PIKR dari mana?\"</li></ul><div class='callout warm'><b class='t'>Batas pengukuran</b>Rekap hanya mengukur peserta yang membuka aplikasi. Angka minat bukan jumlah pendaftar. Pendaftaran tetap terjadi lewat kontak PIKR.</div>"},{"k":"evaluasi","icon":"trend","t":"Evaluasi dan tindak lanjut","sub":"Membaca rekap dan refleksi fasilitator","html":"<h3>Membaca rekap</h3><ul><li><strong>Skor pre-test rendah</strong> berarti topiknya memang baru bagi peserta. Itu wajar, jangan dianggap kegagalan.</li><li><strong>Kenaikan besar</strong> pada satu modul menunjukkan materi dan cara menyampaikannya cocok.</li><li><strong>Kenaikan kecil atau turun</strong>: periksa soal yang paling sering salah, lalu diskusikan ulang konsepnya di pertemuan berikutnya.</li><li><strong>Banyak yang tidak menyelesaikan post-test</strong>: mungkin waktu terlalu singkat atau sinyal buruk.</li></ul><div class='callout warm'><b class='t'>Hati-hati menafsirkan</b>Skor naik berarti pengetahuan bertambah. Itu belum membuktikan perilaku berubah. Untuk melihat dampak jangka panjang, perlu tindak lanjut dalam beberapa minggu.</div><h3>Refleksi fasilitator (setelah tiap sesi)</h3><ol><li>Bagian mana yang membuat peserta paling terlibat?</li><li>Bagian mana yang terasa membingungkan atau terlalu cepat?</li><li>Adakah peserta yang perlu ditindaklanjuti? Siapa yang akan menghubungi, dan kapan?</li><li>Apa satu hal yang akan kamu ubah di sesi berikutnya?</li></ol><h3>Tindak lanjut yang disarankan</h3><ul><li>Kirim pengingat tantangan harian ke peserta lewat grup PIKR.</li><li>Adakan sesi tanya jawab singkat 2 minggu kemudian.</li><li>Ulangi survei kepuasan dan bandingkan hasilnya.</li></ul>"}];
var FASIL_MOD={"emosi": {"tujuan": ["Peserta dapat menyebut emosi dasar dan fungsinya", "Peserta dapat mengenali sinyal stres dari tubuh, pikiran, dan perilaku", "Peserta tahu kapan harus meminta bantuan dan kepada siapa", "Peserta mencoba satu cara mengelola stres"], "persiapan": ["HP peserta (berpasangan bila kurang)", "Kertas dan spidol", "Poster QR modul (link dengan akhiran #emosi)", "Papan tulis atau flipchart", "Daftar kontak rujukan lokal"], "ice": {"judul": "Cuaca hatiku", "langkah": ["Minta peserta menyebut cuaca yang menggambarkan perasaannya sekarang (cerah, mendung, hujan, badai), dalam satu kata atau gerakan.", "Boleh pass.", "Rangkum: berbagai perasaan itu hadir bersamaan dan semuanya wajar."]}, "pemantik": ["Kapan terakhir kali kamu merasa sangat marah, dan apa yang kamu lakukan?", "Kalau stres, bagian tubuh mana yang biasanya duluan terasa?", "Kenapa banyak orang bilang \"aku nggak apa-apa\" padahal sebenarnya tidak?"], "inti": [["Semua emosi itu normal", "Tulis lima emosi dasar di papan dan minta peserta menyebut fungsinya sebelum kamu menjelaskan.", "Anggapan \"emosi negatif itu buruk\" dan \"laki-laki tidak boleh menangis\". Luruskan dengan lembut."], ["Sinyal dari tubuh dan pikiran", "Ajak peserta melakukan cek tubuh 30 detik bersama.", "Menganggap gejala fisik pasti dibuat-buat. Ingatkan perlunya pemeriksaan medis bila gejala berulang."], ["Stres: wajar atau perlu bantuan", "Gunakan tiga pertanyaan penentu (berapa lama, seberapa berat, reda atau tidak). Gambar tabel dua kolom.", "Kesan bahwa semua stres harus dihilangkan, atau sebaliknya semua stres boleh diabaikan."], ["Lima cara mengelola stres", "Lakukan napas 4-6 bersama selama 1 menit. Minta peserta memilih satu cara untuk dicoba minggu ini.", "Jawaban tunggal seperti \"yang penting kuat saja\". Tegaskan ada beberapa langkah praktis dan ada bantuan orang dewasa."]], "kunci": ["<strong>Tubuh:</strong> sulit tidur, sakit perut tiap Senin. <strong>Pikiran:</strong> tertekan harus masuk tiga besar. <strong>Perilaku:</strong> mudah marah pada adik, menarik diri, berkata \"nggak apa-apa\".", "Raka mungkin takut dianggap lemah atau mengecewakan orang tua. Jangan menebak berlebihan. Pakai ini untuk membantu peserta memahami kenapa orang menutup diri.", "Langkah kecil: napas, tidur lebih awal, memecah tugas, bercerita ke satu orang (guru BK, kakak, kader). Ia juga bisa bilang ke orang tua, \"Aku lagi kewalahan.\""], "aktivitas": ["Bagikan kertas. Peserta mengerjakan Peta emosi 3 menit secara individu.", "Minta 2 sampai 3 sukarelawan berbagi satu emosi (tidak perlu menyebut penyebabnya).", "Tutup dengan satu napas panjang bersama."], "waspada": ["Peserta yang tiba-tiba diam atau menangis saat membahas stres: beri jeda dan tawarkan keluar sebentar, jangan menyorotnya.", "Jawaban yang menyiratkan keinginan menyakiti diri: ikuti Protokol keselamatan dan jangan lanjutkan sebagai bahan diskusi."], "penutup": "Hari ini kita belajar bahwa semua perasaan itu normal dan ada caranya untuk mengelolanya. Kalau perasaanmu terasa berat berhari-hari, ceritakan pada orang yang kamu percaya. Tombol Bantuan ada di aplikasi."}, "cemas": {"tujuan": ["Peserta dapat membedakan cemas yang wajar dan overthinking", "Peserta mengenali lingkaran pikiran yang membuat cemas menguat", "Peserta mencoba dua alat: memeriksa pikiran dan menenangkan tubuh", "Peserta tahu tanda yang perlu bantuan profesional"], "persiapan": ["HP peserta (berpasangan bila kurang)", "Kertas dan spidol", "Poster QR modul (link dengan akhiran #cemas)", "Papan tulis untuk menggambar lingkaran pikiran", "Daftar kontak rujukan lokal"], "ice": {"judul": "Tebak penjelasannya", "langkah": ["Bacakan situasi: \"Pesanmu sudah dibaca tiga jam, belum dibalas.\"", "Peserta menulis tiga kemungkinan penjelasan, mulai dari yang paling buruk sampai yang biasa saja.", "Bahas: satu kejadian bisa punya banyak penjelasan, dan otak sering memilih yang paling menakutkan."]}, "pemantik": ["Hal apa yang paling sering kamu pikirkan sampai susah tidur?", "Apa bedanya merencanakan dengan overthinking menurutmu?", "Apa yang biasanya kamu lakukan saat cemas, dan apakah itu membantu?"], "inti": [["Cemas dan overthinking itu apa?", "Tanyakan, \"Setelah memikirkan ini, aku punya langkah baru atau tidak?\" dan minta contoh dari peserta.", "Menganggap cemas selalu buruk atau overthinking tanda pintar. Tegaskan ini istilah sehari-hari, bukan diagnosis."], ["Lingkaran pikiran yang berputar", "Gambar lingkaran lima langkah di papan. Minta peserta menunjuk titik yang paling mudah diputus.", "Menganggap meminta jaminan itu manja. Jelaskan bahwa otak belajar bergantung pada jaminan."], ["Alat 1: periksa pikiranmu", "Latihan bersama dengan satu pikiran contoh. Tuliskan empat langkahnya di papan.", "Menyuruh \"jangan dipikirin\". Itu jarang berhasil. Gunakan alat yang diajarkan."], ["Alat 2: tenangkan tubuh", "Praktikkan grounding 5-4-3-2-1 bersama selama 2 menit.", "Mendiagnosis peserta. Jangan bilang \"kamu gangguan kecemasan\". Katakan \"layak diperiksa tenaga profesional\"."]], "kunci": ["Putaran mulai di langkah 2: \"dia pasti marah\" dari satu kejadian (centang dua) tanpa bukti.", "Pertanyaan yang bisa Dinda ajukan: apa buktinya, ada kemungkinan lain, dan kalau temanku yang mengalami, aku bilang apa.", "<strong>Bisa dikendalikan:</strong> tidur tepat waktu, mengirim satu pesan yang jelas besok. <strong>Tidak bisa:</strong> kapan atau bagaimana sahabatnya membalas. Membuka chat belasan kali dan bertanya ke teman justru menguatkan lingkaran."], "aktivitas": ["Pimpin grounding 5-4-3-2-1 pelan-pelan (2 menit).", "Peserta menulis satu pikiran \"gimana kalau\" lalu mengujinya dengan bukti.", "Pasangan boleh saling membaca bila nyaman. Jangan memaksa."], "waspada": ["Peserta yang terlihat sangat cemas atau mengalami serangan panik di sesi: hentikan sebentar, ajak napas pelan, temani, dan jangan menyuruh \"tenang saja\".", "Bila peserta menyebut cemas berat berminggu-minggu: tawarkan bicara dengan guru BK setelah sesi."], "penutup": "Pikiran bukan fakta. Kalau pikiranmu berputar, coba periksa buktinya dan tenangkan tubuhmu dulu. Kalau cemas terasa berat atau berulang, bicarakan dengan guru BK atau tenaga kesehatan."}, "diri": {"tujuan": ["Peserta dapat membedakan self-love, egois, dan memanjakan diri", "Peserta memahami pengaruh media sosial pada citra diri", "Peserta mengubah suara \"juri\" menjadi suara \"pelatih\"", "Peserta mengenali kekuatan dirinya"], "persiapan": ["HP peserta (berpasangan bila kurang)", "Kertas dan spidol", "Poster QR modul (link dengan akhiran #diri)", "Papan tulis untuk tabel juri dan pelatih", "Daftar kontak rujukan lokal"], "ice": {"judul": "Satu hal yang kulakukan dengan baik", "langkah": ["Minta peserta menulis satu hal yang mereka lakukan dengan baik minggu ini, sekecil apa pun.", "Boleh pass atau menyimpannya sendiri.", "Sebutkan bahwa banyak orang merasa canggung memuji diri sendiri, dan itu bisa dilatih."]}, "pemantik": ["Akun apa yang paling sering membuatmu merasa kurang, dan kenapa?", "Kalau sahabatmu bilang \"aku jelek\", kamu jawab apa? Lalu apa yang kamu katakan pada dirimu sendiri?", "Apa bedanya percaya diri dan sombong menurutmu?"], "inti": [["Self-love bukan egois", "Gunakan tiga kolom: self-love, egois, memanjakan diri. Minta peserta mengelompokkan contoh perilaku.", "Menganggap self-love itu manja atau tidak ada standar. Tegaskan self-love tetap berarti bertanggung jawab."], ["Citra diri dan media sosial", "Ajak audit feed 3 langkah dan minta peserta menyebut satu perubahan yang bisa dilakukan.", "Menyalahkan media sosial sepenuhnya. Fokus pada apa yang bisa diatur peserta."], ["Suara dalam kepalamu", "Tuliskan tabel juri dan pelatih di papan. Minta peserta mengubah satu kalimat juri menjadi kalimat pelatih.", "Meminta peserta \"berpikir positif saja\". Kalimat pelatih harus jujur dan menunjuk langkah, bukan hanya manis."], ["Membangun harga diri dari hal nyata", "Ajak peserta menyebut satu kekuatan dan satu nilai yang mereka pegang.", "Memuji penampilan fisik peserta sebagai contoh. Hindari komentar tentang tubuh."]], "kunci": ["Nadia membandingkan feed-nya yang apa adanya (jerawat, malam hari) dengan sorotan terbaik orang lain.", "Versi pelatih: \"Aku lagi merasa kurang menarik. Itu perasaan, bukan fakta. Aku bisa...\" lalu tunjuk satu langkah kecil.", "Perubahan yang bisa dilakukan: mute 3 akun pemicu, ikuti akun yang bermanfaat, jam tanpa layar sebelum tidur, dan sesekali mengunggah apa adanya."], "aktivitas": ["Surat untuk sahabat (5 menit): peserta menulis tiga kalimat yang akan mereka ucapkan pada sahabat yang mengalami hal serupa, lalu membacakannya untuk diri sendiri.", "Audit feed: peserta mute atau unfollow tiga akun saat itu juga bila nyaman."], "waspada": ["Topik penampilan dan tubuh bisa sensitif. Jangan mengomentari tubuh peserta, dan jangan menyebut target berat badan atau diet.", "Peserta yang mengatakan membenci tubuhnya atau mengatur makan secara ekstrem: temui secara pribadi setelah sesi dan rujuk ke guru BK atau tenaga kesehatan."], "penutup": "Kamu bukan hasil dari angka like atau penilaian orang lain. Bersikaplah pada dirimu seperti kamu bersikap pada sahabat. Kalau pikiran negatif tentang dirimu terasa menguasai hari, ceritakan pada orang yang kamu percaya."}, "bully": {"tujuan": ["Peserta mengenali bullying, termasuk cyberbullying, dan membedakannya dari bercanda dan konflik", "Peserta berlatih menolak tekanan teman sebaya", "Peserta tahu langkah aman bila menjadi korban", "Peserta mengenali peran saksi dan pilihan yang aman"], "persiapan": ["HP peserta (berpasangan bila kurang)", "Kertas kecil untuk menulis anonim", "Poster QR modul (link dengan akhiran #bully)", "Papan tulis", "Daftar kontak rujukan lokal"], "ice": {"judul": "Garis tipis", "langkah": ["Bagikan kertas kecil. Peserta menulis anonim satu hal yang sering dianggap candaan padahal menyakitkan.", "Kumpulkan, acak, lalu bacakan beberapa tanpa menyebut siapa penulisnya.", "Bahas: kenapa sesuatu bisa terasa lucu bagi satu orang dan menyakitkan bagi orang lain."]}, "pemantik": ["Kapan candaan berubah menjadi bullying?", "Kenapa banyak orang diam saat melihat temannya dirundung?", "Siapa orang dewasa di sekolah atau kampus yang kamu percaya?"], "inti": [["Apa itu bullying?", "Tuliskan tiga ciri (disengaja, berulang, timpang). Minta peserta mengelompokkan contoh ke bercanda, konflik, atau bullying.", "Menganggap bullying hanya kekerasan fisik. Tegaskan bentuk verbal, sosial, dan siber."], ["Tekanan teman sebaya", "Praktikkan S-N-A-P berpasangan dengan satu situasi, misalnya ajakan bolos.", "Menyalahkan korban tekanan karena \"mau-mau saja\". Akui bahwa menolak itu sulit."], ["Kalau kamu sasaran bullying", "Tekankan kalimat \"ini bukan salahmu\". Ajak peserta menyebutkan siapa yang bisa dihubungi.", "Menyarankan membalas dengan kekerasan. Arahkan ke langkah aman dan bukti."], ["Peran saksi, dan kalau kamu pelakunya", "Bahas empat pilihan aman (alihkan, dekati, ajak teman, laporkan) dan minta peserta memilih yang paling realistis.", "Meminta peserta menghadapi pelaku sendirian. Pastikan mereka tahu ada pilihan yang aman."]], "kunci": ["Ini bullying siber: berulang (banyak yang ikut) dan timpang (Rafi sendirian, makin menyendiri).", "Pilihan Bima: meneruskan (ikut menyakiti), diam (tidak membantu), atau tidak menyebarkan, mendekati Rafi, dan melapor (paling membantu).", "Contoh kalimat: \"Nggak, aku nggak mau forward. Kasihan Rafi.\" Lalu kirim pesan ke Rafi: \"Aku di sini kalau kamu butuh teman cerita.\""], "aktivitas": ["Peserta menulis tiga kalimat menolak, lalu berlatih berpasangan (1 menit per orang).", "Peserta menulis tiga orang dewasa tepercaya dan menyimpan kontaknya."], "waspada": ["Jangan meminta peserta menyebut nama pelaku atau korban di depan peserta lain. Bila ada yang menyebut, arahkan membicarakannya setelah sesi.", "Pengungkapan kekerasan atau pelecehan: ikuti Protokol keselamatan dan libatkan guru BK.", "Hindari role-play yang meminta peserta memerankan pelaku secara menyakitkan."], "penutup": "Bullying bisa dihentikan, dan setiap orang punya peran. Kalau kamu atau temanmu dirundung, ini bukan salahmu dan kamu berhak meminta bantuan. Tombol Bantuan ada di aplikasi."}, "seksual": {"tujuan": ["Peserta memahami batas tubuh dan persetujuan", "Peserta mengenali bentuk kekerasan seksual, termasuk online, dan pola bujukan", "Peserta tahu langkah aman dan jalur melapor", "Peserta tahu cara menjadi teman yang aman dan tidak menyalahkan korban"], "persiapan": ["Daftar rujukan lokal yang sudah dicek: guru BK atau Satgas, UPTD PPA, puskesmas, kontak SAPA 129", "Satu orang dewasa atau konselor yang siaga selama sesi dan sesudahnya", "Kotak pertanyaan anonim (kertas kecil dan kotak)", "Poster QR modul (link dengan akhiran #seksual)", "Kesepakatan bersama yang ditulis besar, termasuk hak untuk pass dan keluar sebentar"], "ice": {"judul": "Batas itu boleh berbeda", "langkah": ["Minta peserta menyebut satu hal yang mereka tidak nyaman bila dilakukan orang lain tanpa izin, misalnya meminjam barang tanpa bilang atau membuka HP.", "Tegaskan bahwa batas tiap orang bisa berbeda, dan menghormatinya adalah dasar persetujuan.", "Hindari contoh yang bersifat seksual pada tahap ini."]}, "pemantik": ["Apa bedanya sopan dengan wajib menuruti?", "Kenapa kadang sulit mengatakan \"tidak\" kepada orang yang lebih tua atau berkuasa?", "Kalau ada teman yang bercerita hal seperti ini, apa yang ingin kamu dengar kalau kamu jadi dia?"], "inti": [["Tubuhmu, batasmu, dan persetujuan", "Tulis empat ciri persetujuan di papan dan minta contoh situasi sehari-hari (tanpa konten seksual eksplisit).", "Menganggap diam berarti setuju atau pacaran berarti otomatis boleh. Luruskan dengan tenang."], ["Bentuk kekerasan seksual, termasuk online", "Gunakan bahasa lugas tetapi tidak vulgar. Jelaskan bentuk verbal, fisik, dan online.", "Menganggap korban hanya perempuan atau penyebabnya pakaian. Tegaskan penyebabnya keputusan pelaku dan korban bisa siapa saja."], ["Tanda bujukan dan relasi kuasa", "Gambar tangga pola bujukan dari perhatian berlebihan sampai ancaman. Minta peserta menunjuk tanda yang paling mudah dikenali.", "Menganggap korban salah karena menerima bantuan atau hadiah. Tegaskan itu bagian dari cara pelaku bekerja."], ["Jalur bantuan dan menjadi teman yang aman", "Bahas langkah pertama, bukti, dan jalur melapor. Latih kalimat \"Aku percaya kamu, ini bukan salahmu\" secara berpasangan.", "Menghadapi pelaku sendirian atau menyebarkan cerita. Arahkan ke pendamping."]], "kunci": ["Tanda: pujian dan bantuan berlebihan, minta foto, ancaman membuka rumor, dan relasi kuasa (ketua kegiatan dan penentu tempat).", "Salsa tidak salah. Menerima bantuan bukan persetujuan, dan ancaman menunjukkan pelaku sengaja menekan.", "Langkah: tidak mengirim foto, menyimpan bukti, bercerita pada orang tepercaya, menghubungi Satgas atau pendamping, dan menjangkau SAPA 129. Ia boleh ditemani saat melapor."], "aktivitas": ["Peserta menulis tiga orang atau layanan yang bisa dihubungi dan dua kalimat tegas untuk menolak (secara pribadi, tidak perlu dibacakan).", "Pandu latihan berpasangan untuk kalimat dukungan kepada teman yang bercerita.", "Kumpulkan pertanyaan anonim dan jawab beberapa di akhir; rujukkan sisanya pada konselor."], "waspada": ["Jangan meminta peserta menceritakan pengalamannya di depan kelompok. Bila ada yang mengungkapkan, hentikan dengan lembut dan ikuti Protokol keselamatan bagian C.", "Jangan melakukan role-play yang memerankan pelaku atau korban kekerasan seksual.", "Hindari detail eksplisit. Untuk segmen Berani gunakan bahasa batas tubuh dan sentuhan aman atau tidak aman, dan libatkan guru atau orang tua sesuai kebijakan.", "Pastikan ada orang dewasa atau konselor yang siaga, karena sesi ini bisa memicu ingatan peserta."], "penutup": "Tubuhmu milikmu, dan kamu berhak berkata tidak. Kalau ada yang melewati batasmu, ini bukan salahmu, dan ada orang yang siap membantu. Tombol Bantuan ada di aplikasi."}, "dev": {"tujuan": ["Peserta mengenali kekuatan, nilai, dan minatnya", "Peserta memahami pola pikir bertumbuh", "Peserta menyusun satu kebiasaan kecil yang realistis", "Peserta tahu pentingnya istirahat dan tanda kelelahan berlebih"], "persiapan": ["HP peserta (berpasangan bila kurang)", "Kertas dan spidol", "Poster QR modul (link dengan akhiran #dev)", "Papan tulis untuk tabel pola pikir tetap dan bertumbuh", "Daftar kontak rujukan lokal"], "ice": {"judul": "Satu hal yang sedang kupelajari", "langkah": ["Minta peserta menyebut satu hal yang sedang atau ingin mereka pelajari, sekecil apa pun.", "Boleh pass.", "Rangkum: belajar hal baru dimulai dari mengakui bahwa kita belum bisa."]}, "pemantik": ["Hal apa yang dulu kamu pikir tidak bisa, tapi ternyata bisa?", "Kenapa target besar sering berhenti di tengah jalan?", "Kapan kamu merasa terlalu banyak yang harus dikejar?"], "inti": [["Mengenal kekuatan, nilai, dan minatmu", "Ajak peserta menjawab tiga pertanyaan refleksi, lalu saling menyebut satu kekuatan temannya.", "Menganggap kekuatan hanya prestasi akademik. Luaskan ke sikap dan keterampilan sosial."], ["Pola pikir bertumbuh", "Tulis tabel dua kolom dan ajak peserta mengubah kalimat tetap menjadi kalimat bertumbuh.", "Menganggap cukup berpikir positif. Tekankan perlunya strategi dan bantuan."], ["Tujuan kecil dan kebiasaan yang bertahan", "Praktikkan perkecil kebiasaan menjadi versi dua menit dan tulis pemicunya.", "Menganggap gagal bila bolong sehari. Tegaskan kembali di hari berikutnya."], ["Waktu, fokus, dan menjaga diri dari kelelahan", "Gunakan empat kuadran prioritas dengan contoh tugas peserta. Bahas tanda burnout.", "Menganggap istirahat sebagai kemalasan. Tegaskan istirahat bagian dari berkembang."]], "kunci": ["Rencana terlalu besar dan tidak spesifik, tidak ada pemicu, dan langsung menyerah setelah satu kali bolong.", "Ubah menjadi \"Aku belum konsisten. Aku bisa mulai dari kebiasaan yang lebih kecil.\" Perbandingan dengan feed juga perlu dibahas.", "Contoh: membaca satu halaman setelah makan malam, atau menulis tiga kata tentang hari ini sebelum tidur."], "aktivitas": ["Peserta menulis satu kebiasaan kecil dengan rumus \"Setelah ..., aku akan ...\".", "Berpasangan, saling membacakan dan memberi satu saran penyederhanaan.", "Ajak mencoba dalam satu minggu dan bagikan pengalamannya di pertemuan berikutnya."], "waspada": ["Hindari memuji pencapaian akademik saja atau membandingkan peserta.", "Peserta yang tampak sangat lelah, kehilangan semangat, atau menyebut merasa tidak berguna: temui secara pribadi setelah sesi dan rujuk ke guru BK atau tenaga kesehatan.", "Jangan memberi target atau rutinitas yang ekstrem, termasuk soal tidur, makan, atau olahraga."], "penutup": "Berkembang itu soal langkah kecil yang konsisten, bukan mengejar semuanya sekaligus. Beristirahat boleh, dan kalau kamu merasa kewalahan, ceritakan pada orang yang kamu percaya."}};
var FASIL_TL=[["0 – 5","Pembukaan dan kesepakatan bersama","Sambut peserta, bacakan kesepakatan bersama, jelaskan tujuan sesi dan bahwa ini bukan penilaian."],["5 – 10","Pre-test lewat QR","Peserta mengisi nama panggilan dan mengerjakan pre-test sendiri, tanpa membuka materi."],["10 – 18","Ice-breaker dan pertanyaan pemantik","Lakukan ice-breaker, lalu ajukan 1 sampai 2 pertanyaan pemantik."],["18 – 36","Pemaparan inti","Empat bagian materi, sekitar 4 menit tiap bagian, selingi tanya jawab dan satu praktik."],["36 – 46","Studi kasus","Kelompok 4 sampai 5 orang berdiskusi 6 menit, lalu pleno 4 menit."],["46 – 52","Aktivitas","Pandu aktivitas sesuai modul."],["52 – 58","Post-test","Peserta mengerjakan post-test, lalu bahas soal yang sering salah."],["58 – 60","Penutup","Sampaikan pesan kunci, tunjukkan tombol Bantuan, kenalkan PIKR lewat menu FAQ bagian PIKR (1 menit), dan ajak mencoba tantangan harian."]];
function fasilItem(k,t,sub,icon,color){return '<button class="mod" data-a="fasil" data-k="'+k+'"><span class="glyph" style="background:'+color+'">'+ic(icon)+'</span><span class="grow"><h3>'+esc(t)+'</h3><span class="small muted">'+esc(sub)+'</span></span>'+ic("right")+'</button>';}
function lst(tag,a){return '<'+tag+'>'+a.map(function(x){return '<li>'+x+'</li>';}).join("")+'</'+tag+'>';}
function planHtml(m){
  var f=FASIL_MOD[m.id],h='';
  function sec(t,body){h+='<div class="card"><h2>'+t+'</h2><div class="prose">'+body+'</div></div>';}
  h+='<div class="card"><div class="row" style="flex-wrap:nowrap;align-items:flex-start"><span class="glyph" style="--c:'+m.color+'">'+ic(m.icon)+'</span><div class="grow"><div class="eyebrow">Rencana sesi 60 menit</div><h1 style="font-size:1.4rem">'+esc(m.name)+'</h1></div></div></div>';
  sec("Tujuan sesi",lst("ul",f.tujuan));
  sec("Yang perlu disiapkan",lst("ul",f.persiapan));
  var rows=FASIL_TL.map(function(r,i){
    var c=r[2];
    if(i===2)c="Lakukan ice-breaker \""+f.ice.judul+"\", lalu ajukan 1 sampai 2 pertanyaan pemantik.";
    if(i===5)c="Pandu aktivitas \""+m.kasus.aktivitas.judul+"\".";
    return '<tr><td style="white-space:nowrap">'+r[0]+'</td><td><b>'+r[1]+'</b></td><td>'+c+'</td></tr>';
  }).join("");
  sec("Alur sesi",'<div class="scroll-x"><table class="table"><thead><tr><th>Menit</th><th>Kegiatan</th><th>Cara</th></tr></thead><tbody>'+rows+'</tbody></table></div><p class="small muted" style="margin-top:8px">Versi 30 menit: pembukaan 3, pre-test 5, dua bagian materi pilihan 10, studi kasus 7, post-test dan penutup 5.</p>');
  sec("Ice-breaker: "+f.ice.judul,lst("ol",f.ice.langkah));
  sec("Pertanyaan pemantik",lst("ul",f.pemantik));
  sec("Membawakan tiap materi",f.inti.map(function(x,i){return '<h3>Materi '+(i+1)+': '+x[0]+'</h3><p><strong>Cara membawakan:</strong> '+x[1]+'</p><p><strong>Salah paham yang sering muncul:</strong> '+x[2]+'</p>';}).join(""));
  sec("Kunci diskusi: "+m.kasus.judul.replace(/^Studi kasus: /,""),'<p class="small muted">Gunakan sebagai panduan, bukan jawaban tunggal. Biarkan peserta menyampaikan pendapatnya dulu.</p>'+lst("ol",f.kunci));
  sec("Memandu aktivitas: "+m.kasus.aktivitas.judul,lst("ol",f.aktivitas));
  sec("Yang perlu diwaspadai",lst("ul",f.waspada)+'<p class="small">Pegangan utama ada di <button class="btn small" data-a="fasil" data-k="protokol">Protokol keselamatan</button></p>');
  sec("Kalimat penutup",'<div class="callout warm" style="margin:0">'+esc(f.penutup)+'</div>');
  return h;
}

function vFasil(){
  var k=R.k||"",h=topbar()+'<div class="stack">';
  if(!k){
    if(S.nick)h+=backBtn("me","Profil");
    h+='<div><div class="eyebrow">Untuk kader dan fasilitator</div><h1 style="font-size:1.6rem">Panduan fasilitator</h1><p class="muted" style="margin:6px 0 0">Panduan menyampaikan Selaras secara tatap muka, dari persiapan sampai tindak lanjut. Baca Peran dan prinsip serta Protokol keselamatan sebelum sesi pertama.</p></div>';
    FASIL_INFO.forEach(function(x){h+=fasilItem(x.k,x.t,x.sub,x.icon,"var(--accent)");});
    h+='<div class="eyebrow" style="margin-top:6px">Rencana sesi per modul (60 menit)</div>';
    MODS.forEach(function(m){h+=fasilItem(m.id,m.name,"Alur sesi, pertanyaan pemantik, kunci diskusi",m.icon,m.color);});
  }else{
    h+='<button class="btn ghost small" data-a="fasil" data-k="" style="align-self:flex-start">'+ic("left")+' Panduan fasilitator</button>';
    var info=null;FASIL_INFO.forEach(function(x){if(x.k===k)info=x;});
    var m=mod(k);
    if(info)h+='<div class="card"><div class="eyebrow">'+esc(info.sub)+'</div><h1 style="font-size:1.5rem;margin:6px 0 14px">'+esc(info.t)+'</h1><div class="prose">'+info.html+'</div></div>';
    else if(m)h+=planHtml(m);
    else h+='<div class="card"><p>Halaman tidak ditemukan.</p></div>';
  }
  return h+'</div>';
}


/* Data PIKR. Isi lalu publikasikan ulang. Kolom kosong tidak ditampilkan. */
var PIKR_CFG={"nama":"","deskripsi":"","instagram":"","whatsapp":"","lokasi":"","jadwal":"","tautan":"","rujukan":"","kelompok":[]};

function ajakText(){
  var C=PIKR_CFG;
  return "Aku lagi pakai Selaras, aplikasi belajar kesehatan mental untuk remaja. Cuma 5 menit, tanpa daftar akun. "+(C.tautan?"Buka di sini: "+C.tautan:"Minta link atau QR-nya ke kader PIKR ya.");
}

function pikrContact(){
  var C=PIKR_CFG,rows=[];
  if(C.instagram)rows.push(["Instagram",'<a href="https://www.instagram.com/'+encodeURIComponent(C.instagram)+'" target="_blank" rel="noopener">@'+esc(C.instagram)+'</a>']);
  if(C.whatsapp)rows.push(["WhatsApp",'<a href="https://wa.me/'+encodeURIComponent(C.whatsapp)+'" target="_blank" rel="noopener">'+esc(C.whatsapp)+'</a>']);
  if(C.lokasi)rows.push(["Lokasi",esc(C.lokasi)]);
  if(C.jadwal)rows.push(["Jadwal",esc(C.jadwal)]);
  var h='';
  if(rows.length){
    h+='<div>'+rows.map(function(r){return '<div class="contact"><b style="min-width:5.5em">'+r[0]+'</b><span style="min-width:0;overflow-wrap:anywhere">'+r[1]+'</span></div>';}).join("")+'</div>';
    h+='<p style="margin-top:10px">Bingung mulai dari mana? Kirim pesan singkat: "Halo, aku mau tahu soal PIKR." Itu sudah cukup.</p>';
  }else{
    h+='<p>Kontak PIKR di daerahmu belum ditampilkan di sini. Kamu bisa mulai dengan cara ini:</p>'+lst("ul",[
      'Tanya guru BK atau pembina OSIS: "Di sekolah kita ada PIKR atau PIK Remaja?"',
      'Di kampus, tanya ke bagian kemahasiswaan.',
      'Di lingkungan rumah, tanya pengurus RW, kelurahan, atau karang taruna.',
      'Tanya dinas yang menangani pengendalian penduduk dan keluarga berencana di kotamu, atau perwakilan BKKBN di provinsimu.',
      'Kalau belum ada PIKR di tempatmu, sampaikan ide membentuknya kepada pihak sekolah atau kelurahan dan tanyakan caranya.']);
  }
  return h;
}

function localCard(){
  var C=PIKR_CFG;
  if(C.rujukan)return '<div class="card flat"><h3>Rujukan di sekitarmu</h3><p class="small muted" style="margin:0">'+esc(C.rujukan)+'</p></div>';
  return '<div class="card flat"><h3>Di sekitarmu</h3><p class="small muted" style="margin:0">Banyak puskesmas punya layanan kesehatan jiwa dan layanan kesehatan remaja (PKPR). Tanyakan juga ke kader '+esc(pikrName())+' atau guru BK tentang layanan konseling yang tersedia di sekolah atau kotamu.</p></div>';
}

/* ---------- FAQ ---------- */
var FAQ_APP=[
 ["Apa itu Selaras?","<p>Selaras adalah aplikasi belajar singkat tentang kesehatan mental remaja. Isinya enam modul (emosi dan stres, cemas dan overthinking, self-love dan citra diri, bullying dan tekanan teman sebaya, kekerasan seksual dan batasan tubuh, serta pengembangan diri), kuis, dan tantangan harian. Cukup 5 sampai 7 menit sekali buka, gratis, dan tanpa daftar akun.</p>"],
 ["Apakah Selaras pengganti psikolog atau konselor?","<p><strong>Bukan.</strong> Selaras adalah materi edukasi. Ia tidak mendiagnosis dan tidak menggantikan psikolog, psikiater, atau konselor. Kalau perasaanmu terasa berat berhari-hari atau mengganggu tidur, belajar, dan hubunganmu, bicaralah dengan orang yang kamu percaya atau tenaga profesional.</p>"],
 ["Data apa yang tersimpan, dan siapa yang bisa melihat?","<ul><li>Kamu memakai <strong>nama panggilan</strong>, bukan nama asli. Tidak ada nomor HP atau email.</li><li><strong>Check-in suasana hati</strong> hanya tersimpan di HP-mu.</li><li>Yang dikirim ke peringkat dan rekap kader hanya nama panggilan, segmen, poin, skor kuis, jawaban survei, dan apakah kamu tertarik pada PIKR.</li><li>Kamu bisa menghapus datamu kapan saja lewat Profil, tombol Hapus data saya.</li></ul>"],
 ["Kenapa ada pre-test dan post-test?","<p>Pre-test mengukur titik awalmu, dan post-test mengukur apa yang sudah kamu pelajari. <strong>Ini bukan nilai.</strong> Skor pre-test yang rendah itu wajar karena topiknya memang baru. Kader PIKR memakai hasilnya untuk memperbaiki materi.</p>"],
 ["Bagaimana poin, level, dan badge bekerja?","<ul><li>Membaca satu materi: +10</li><li>Menyelesaikan pre-test: +10</li><li>Post-test: +10 untuk tiap jawaban benar (skor terbaik yang dihitung)</li><li>Check-in suasana hati: +5 sekali sehari</li><li>Tantangan harian: +15</li><li>Survei: +20</li><li>Membaca FAQ bagian PIKR: +10</li></ul><p>Poin menaikkan level dari Pemula sampai Kader Muda. Badge terbuka saat kamu mencapai tonggak tertentu, dan kamu bisa melihat caranya di menu Badge.</p>"],
 ["Kenapa aku diminta memilih segmen?","<p>Segmen mengikuti pembagian PIKR berdasarkan usia: Berani (10–14 tahun), Beraksi (15–19 tahun), dan Berkolaborasi (20–24 tahun). Di Selaras, segmen dipakai untuk mengelompokkan peringkat supaya adil. Pilih sesuai usiamu. <strong>Usiamu tidak disimpan</strong>, hanya segmennya.</p>"],
 ["Aku butuh bicara dengan seseorang sekarang","<p>Ketuk tombol <strong>Bantuan</strong> di pojok atas untuk melihat orang dan layanan yang bisa dihubungi. Kamu tidak harus menghadapi ini sendirian.</p><button class='btn small' data-a='help'>Buka Bantuan</button>"]
];
var PIKR_FAQ=[
 ["Apa itu PIKR?","<p><strong>PIKR</strong> adalah singkatan dari <strong>Pusat Informasi dan Konseling Remaja</strong>. Ini adalah wadah kegiatan untuk remaja yang <strong>dikelola dari, oleh, dan untuk remaja</strong>. Programnya dijalankan BKKBN dan ada di sekolah, kampus, atau lingkungan tempat tinggal.</p><p>Jadi PIKR bukan kantor yang menyeramkan. Pengelolanya adalah remaja sebaya, dan siapa pun boleh bergabung sebagai partisipan, anggota, atau pengurus.</p>"],
 ["Ngapain aja di PIKR?","<ul><li><strong>Informasi:</strong> topik yang biasa dibahas antara lain pendewasaan usia perkawinan, kesehatan reproduksi, bahaya NAPZA dan HIV/AIDS, keterampilan hidup, kesetaraan gender, gizi, dan bahaya rokok.</li><li><strong>Konseling sebaya:</strong> ngobrol dengan teman sebaya yang dilatih mendengarkan dan membantu mencari jalan keluar.</li><li><strong>Kegiatan:</strong> penyuluhan, seminar, pameran, serta kegiatan seru seperti olahraga, kesenian, dan bedah buku.</li><li><strong>Kesehatan mental:</strong> lewat Selaras ini, PIKR mengajak remaja belajar mengelola emosi, cemas, citra diri, dan menghadapi bullying.</li></ul>"],
 ["Apa itu segmen Berani, Beraksi, dan Berkolaborasi?","<p>PIKR mengelompokkan remaja ke dalam tiga segmen sesuai usia:</p><ul><li><strong>Berani:</strong> 10–14 tahun</li><li><strong>Beraksi:</strong> 15–19 tahun</li><li><strong>Berkolaborasi:</strong> 20–24 tahun</li></ul><p>Bentuk kegiatan tiap segmen bisa berbeda di tiap PIKR, jadi tanyakan langsung ke PIKR di tempatmu.</p>"],
 ["Siapa saja yang ada di PIKR?","<ul><li><strong>Pendidik Sebaya:</strong> teman sebaya yang dilatih menyampaikan informasi kepada remaja lain.</li><li><strong>Konselor Sebaya:</strong> teman sebaya yang dilatih mendengarkan dan membantu temannya mencari solusi.</li><li><strong>Pengurus dan anggota:</strong> remaja yang ikut mengelola dan menjalankan kegiatan.</li></ul>"],
 ["Batas yang perlu kamu tahu","<p>Konselor sebaya <strong>bukan psikolog atau psikiater</strong>. Mereka mendengarkan, memberi informasi, dan membantu menghubungkanmu dengan bantuan profesional bila perlu. Untuk kondisi berat atau darurat, hubungi tenaga profesional lewat tombol Bantuan.</p><p>Tanyakan juga aturan kerahasiaan di PIKR tempatmu, supaya kamu tahu apa yang dijaga dan kapan orang dewasa perlu dilibatkan.</p>"],
 ["Mitos dan fakta","<div class='scroll-x'><table class='table'><thead><tr><th>Mitos</th><th>Fakta</th></tr></thead><tbody><tr><td>PIKR cuma untuk anak OSIS atau anak pintar.</td><td>Dikelola dari, oleh, dan untuk remaja. Siapa pun bisa ikut sebagai partisipan, anggota, atau pengurus.</td></tr><tr><td>Ke PIKR berarti kamu punya masalah.</td><td>Kamu bisa bergabung untuk belajar, mencari teman, atau berlatih menyampaikan informasi. Konseling hanya salah satu layanan.</td></tr><tr><td>PIKR cuma ceramah.</td><td>Ada konseling sebaya, penyuluhan, seminar, olahraga, kesenian, dan bedah buku.</td></tr><tr><td>PIKR bisa menggantikan psikolog.</td><td>Tidak. Konselor sebaya mendengarkan dan membantu merujuk. Kondisi berat perlu tenaga profesional.</td></tr></tbody></table></div>"]
];
function vFaq(){
  var h=kvHead("FAQ","Pertanyaan umum","Tentang Selaras dan PIKR.")+'<div class="stack">';
  h+='<div class="tabs" role="group"><button data-a="faqTab" data-t="app" aria-pressed="'+(faqTab==="app")+'">Selaras</button><button data-a="faqTab" data-t="pikr" aria-pressed="'+(faqTab==="pikr")+'">PIKR</button></div>';
  var list=faqTab==="pikr"?PIKR_FAQ:FAQ_APP;
  list.forEach(function(x,i){h+='<details class="faq"'+(i===0?' open':'')+'><summary>'+esc(x[0])+'</summary><div class="prose">'+x[1]+'</div></details>';});
  if(faqTab==="pikr"){
    h+='<details class="faq"><summary>Cara bergabung dan menghubungi</summary><div class="prose">'+pikrContact()+'</div></details>';
    h+='<div class="card stack">';
    if(S.nick&&S.seg){
      h+=(S.pikrRead?'<span class="chip ok" style="align-self:flex-start">'+ic("check")+' Sudah dibaca</span>':'<button class="btn primary block" data-a="pikrDone">Sudah kubaca (+10 poin)</button>');
      h+='<button class="btn block" data-a="minat" aria-pressed="'+(!!S.minat)+'">'+(S.minat?"Minatmu tercatat. Ketuk untuk membatalkan":"Aku tertarik tahu lebih lanjut")+'</button>'+
         '<p class="small muted" style="margin:0">Yang tercatat hanya bahwa kamu tertarik, tanpa nama asli atau kontak. Untuk bergabung, hubungi PIKR lewat kontak di atas.</p>';
    }else{
      h+='<p style="margin:0">Mau belajar mengelola stres, cemas, dan citra diri? Selaras gratis dan tanpa daftar akun.</p><button class="btn primary block" data-a="start">Mulai belajar di Selaras</button>';
    }
    h+='</div>';
    h+='<div class="card"><h3>Ajak temanmu</h3><p class="small muted">Salin pesan ini lalu kirim ke temanmu.</p><div class="callout" id="ajakTxt" style="user-select:text">'+esc(ajakText())+'</div><button class="btn small" data-a="copyAjak">Salin pesan</button></div>';
    h+='<p class="small muted">Informasi tentang PIKR di sini bersifat umum. Kegiatan dan aturan di tiap PIKR bisa berbeda, jadi tanyakan langsung ke PIKR di tempatmu.</p>';
  }
  return h+'</div>';
}

/* ---------- Bantuan ---------- */
function helpSheet(){
  return '<div class="scrim" data-a="closeHelp"><div class="sheet" role="dialog" aria-modal="true" aria-label="Bantuan" data-stop="1">'+
  '<div class="row" style="justify-content:space-between;margin-bottom:10px"><h2 style="font-size:1.35rem">Butuh bicara sekarang?</h2><button class="iconbtn" data-a="closeHelp" aria-label="Tutup">&times;</button></div>'+
  '<p>Kamu tidak harus menghadapi ini sendirian. Pilih satu orang yang kamu percaya dan ceritakan, meski singkat.</p>'+
  '<div class="stack" style="gap:10px">'+
  '<div class="card flat"><h3>Orang di dekatmu</h3><p class="small muted" style="margin:0">Guru BK, konselor kampus, wali kelas, kader PIKR, orang tua, atau kakak. Mereka bisa menemanimu mencari bantuan lanjutan.</p></div>'+
  localCard()+
  '<div class="card flat"><h3>Konseling kesehatan jiwa</h3><p class="small muted" style="margin:0">Hubungi 119 lalu tekan 8 (layanan SEJIWA, Kementerian Kesehatan). Atau datang ke puskesmas terdekat dan minta layanan kesehatan jiwa.</p></div>'+
  '<div class="card flat"><h3>Bullying dan kekerasan</h3><p class="small muted" style="margin:0">SAPA 129 (Kementerian PPPA) menerima laporan kekerasan pada anak dan perempuan.</p></div>'+
  '<div class="card" style="border-color:var(--bad)"><h3 style="color:var(--bad)">Dalam bahaya atau ingin menyakiti diri</h3><p class="small" style="margin:0">Hubungi 112 atau pergi ke IGD terdekat sekarang, dan jangan sendirian. Beri tahu orang dewasa di dekatmu bahwa kamu butuh bantuan saat ini juga.</p></div>'+
  '</div><p class="small muted" style="margin-top:12px">Nomor layanan bisa berubah. Kader PIKR membantu memastikan informasi terbaru.</p></div></div>';
}

/* ---------- Event ---------- */
var H={
 nav:function(d){
   var v=d.v;
   if(v==="rekap"&&!ADMIN)v="home";
   if(v==="me"){SV={a:0,b:0,c:0,d:0,e:0};}
   go({v:v});
 },
 start:function(){go({v:"onb"});},
 open:function(d){go({v:"mod",id:d.id});},
 read:function(d){var m=mod(d.id);if(S.pre[m.id]==null){toast("Kerjakan pre-test dulu");return;}go({v:"read",id:d.id,i:+d.i});},
 doneRead:function(d){
   var m=mod(d.id),i=+d.i,secs=S.sec[m.id]||[];
   if(!secs[i]){secs[i]=1;S.sec[m.id]=secs;afterChange("+10 poin");}
   if(i<4)go({v:"read",id:d.id,i:i+1});else go({v:"mod",id:d.id});
 },
 test:function(d){
   var m=mod(d.id);
   if(d.k==="pre"&&S.pre[m.id]!=null)return;
   if(d.k==="post"&&secCount(m)<5){toast("Selesaikan semua materi dulu");return;}
   T={id:d.id,kind:d.k,i:0,sel:null,locked:false,ans:[],done:false};
   R={v:"test"};stopBreath();render();window.scrollTo(0,0);
 },
 pick:function(d){
   if(!T||T.locked)return;
   T.sel=+d.i;
   if(T.kind==="post")T.locked=true;
   render();
 },
 nextQ:function(){
   if(!T||T.sel==null)return;
   var m=mod(T.id);
   T.ans.push(T.sel);
   if(T.i<m.tes.length-1){T.i++;T.sel=null;T.locked=false;render();window.scrollTo(0,0);return;}
   var sc=T.ans.reduce(function(a,b,i){return a+(b===m.tes[i].a?1:0);},0);
   if(T.kind==="pre"){if(S.pre[m.id]==null)S.pre[m.id]=sc;afterChange("+10 poin");}
   else{var prev=S.post[m.id];if(prev==null||sc>prev)S.post[m.id]=sc;afterChange("Skor tersimpan");}
   T.done=true;render();window.scrollTo(0,0);
 },
 quitTest:function(){var id=T&&T.id;T=null;go({v:"mod",id:id});},
 mood:function(d){
   var k=dkey();if(S.mood[k]==null){S.mood[k]=+d.n;afterChange("+5 poin");}else{S.mood[k]=+d.n;persist();}
   render();
 },
 chal:function(){var k=dkey();if(!S.chal[k]){S.chal[k]=1;afterChange("+15 poin");}render();},
 help:function(){$("#overlay").innerHTML=helpSheet();},
 closeHelp:function(){$("#overlay").innerHTML="";},
 btab:function(d){boardTab=d.t;render();},
 bseg:function(d){boardSeg=d.s;render();},
 faqTab:function(d){faqTab=d.t;render();},
 rename:function(){OB=null;R={v:"onb"};render();window.scrollTo(0,0);},
 randNick:function(){var n=$("#nick");if(n)n.value=randNick();},
 segPick:function(d){
   var n=$("#nick");
   OB=OB||{nick:"",seg:""};
   if(n)OB.nick=n.value||"";
   OB.seg=d.v;render();
 },
 saveNick:function(){
   var n=($("#nick").value||"").trim();
   function bad(m){onbErr=m;$("#onbErr").textContent=m;}
   if(!/^[A-Za-z0-9 _\-]{3,16}$/.test(n)){bad("Nama panggilan 3 sampai 16 karakter: huruf, angka, spasi, _ atau -.");return;}
   if(!OB||!OB.seg){bad("Pilih segmenmu dulu.");return;}
   var first=!S.nick;
   S.nick=n;S.seg=OB.seg;OB=null;onbErr="";persist();queueSync();
   go({v:first?"home":"me"});
   if(first)toast("Selamat datang, "+n);
 },
 rate:function(d){SV[d.k]=+d.n;render();},
 sendSurvey:function(){if(SV.a&&SV.b&&SV.c&&SV.d&&SV.e){S.puas={a:SV.a,b:SV.b,c:SV.c,d:SV.d,e:SV.e};afterChange("+20 poin, terima kasih");render();}},
 resetAsk:function(){resetConfirm=true;render();},
 svOpen:function(){svOpen=true;render();},
 why:function(){var e=document.getElementById("why");if(e)e.scrollIntoView({behavior:window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});},
 resetNo:function(){resetConfirm=false;render();},
 resetYes:function(){
   var ref=docRef;docRef=null;clearTimeout(syncT);
   if(ref){ref.delete().catch(function(){});}
   S=blank();persist();SV={a:0,b:0,c:0,d:0,e:0};boardSeg=null;
   if(ref){setTimeout(function(){docRef=ref;},500);}
   go({v:"welcome"});
 },
 csv:function(){if(DL)exportCsv();},
 brStart:function(){runBreath();},
 brStop:function(){stopBreath();var b=$("#brBtn"),t=$("#brTxt"),o=$("#orb");if(b){b.textContent="Mulai";b.setAttribute("data-a","brStart");}if(t)t.textContent="Siap?";if(o){o.style.transform="scale(.75)";o.textContent="4";}var s=$("#brSub");if(s)s.textContent="";},
 noop:function(){},
 fasil:function(d){go({v:"fasil",k:d.k||""});},
 pikrDone:function(){if(!S.pikrRead){S.pikrRead=true;afterChange("+10 poin");}render();},
 minat:function(){S.minat=!S.minat;afterChange(S.minat?"Minatmu tercatat":"Minat dibatalkan");render();},
 copyAjak:function(){
   var t=ajakText();
   function fb(){toast("Tekan lama pada teks untuk menyalin");}
   try{
     if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){toast("Pesan disalin");},fb);}else fb();
   }catch(e){fb();}
 }
};
document.addEventListener("click",function(e){
  var el=e.target.closest("[data-a]");
  if(!el)return;
  if(el.getAttribute("data-a")==="closeHelp"&&e.target.closest("[data-stop]")&&!e.target.closest("button[data-a='closeHelp']"))return;
  var f=H[el.getAttribute("data-a")];
  if(f){e.preventDefault();f(el.dataset,el);}
});
document.addEventListener("keydown",function(e){if(e.key==="Escape")H.closeHelp();});

/* ---------- Mulai ---------- */
(function boot(){
  var hsh=(location.hash||"").replace("#","");
  var map={emosi:1,cemas:1,diri:1,bully:1,seksual:1,dev:1};
  if(hsh==="fasilitator"){R={v:"fasil",k:""};}
  else if(hsh==="pikr"||hsh==="faq"){R={v:"faq"};faqTab=hsh==="pikr"?"pikr":"app";}
  else if(!S.nick){R={v:"welcome"};}
  else{
    if(map[hsh])R={v:"mod",id:hsh};
    else if(hsh==="peringkat")R={v:"board"};
    else if(hsh==="modul")R={v:"mods"};
    else if(hsh==="napas")R={v:"napas"};
    else if(hsh==="bantuan"){R={v:"home"};}
  }
  render();
  if(S.nick&&hsh==="bantuan")H.help();
  initCaps();
})();

})();
