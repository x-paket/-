
$( function($){
var quiz = {
multiList: [
//1-5
{
ques: "<strong><center> Peduli Kesehatan Tulang </center></strong> <br> <br> 	Osteoporosis merupakan penyakit tulang yang selalu mengintai siapa pun. Osteoporosis berupa menurunnya kepadatan tulang lebih cepat daripada yang dapat direstrukturasi oleh tubuh. Penyakit ini berkembang tanpa gejala yang kelihatan sehingga dikenal dengan <em>silent disease.</em><br> 	Gaya hidup tidak sehat dan minimnya nutrisi bagi kesehatan tulang, yaitu kalsium, vitamin, dan protein menyebabkan kepadatan tulang menurun lebih cepat. Massa tulang yang rendah dan penurunan kualitas jaringan tulang dapat menimbulkan kerapuhan tulang. Hal ini dapat menjadi penghalang bagi penderita dalam menjalankan setiap aktivitasnya. <br> 	Penyebab lainnya, seperti tingkat pengetahuan masyarakat yang masih rendah mengenai cara pencegahan osteoporosis di Tanah Air. Hal ini terlihat dari rendahnya konsumsi kalsium rata – rata masyarakat sebesar 254 mg/hari (hanya seperempat dari standart internasional sebesar 1.000 – 1.200 mg/hari  untuk dewasa).<br>	Kepadatan tulang yang menurun kerap dikaitkan dengan kurangnya asupan nutrisi yang tepat, kurangnya aktivitas olahraga, serta masalah hormone esterogen pada wanita. Hal ini dapat dicegah dengan memperkaya asupan nutrisi yang masuk ke tubuh, yakni makanan yang mengandung vitamin, protein, dan kalsium sesuai kebutuhan tubuh. Selain nutrisi, olahraga yang tepat dan paparan sinar matahari yang singkat sebelum pukul 9 pagi dan sesudah pukul 3 sore amat bermanfaat bagi kelangsungan tulang yang sehat. Berolahraga dengan baik, benar, terukur, dan teratur dapat ,meningkatkan daya tahan tubuh, serta memperkuat dan melenturkan otot dan sendi. Selain itu, mengatur pola hidup yang baik sejak dini, seperti menghindari merokok, tidak meminum alcohol, serta tidak mengonsumsi kopi, kafein, dan sodium secara berlebihan juga bermanfaat bagi kesehatan tulang. <br> <strong>(dikutip dengan pengubahan Kompas, 14 Agustus 2012) <br> <br>Bagaimana cara mencegah osteoporosis ?",
ans: "Memperkaya asupan nutrisi yang masuk kedalam tubuh.",
ansSel: ["Mengkonsumsi kalsium rata – rata 254 mg/ hari", "Selalu berolahraga selama tiga jam per hari","Selalu mengkonsumsi kopi, kafein, dan sodium setiap hari"]
},
{
ques: "<strong><center> Peduli Kesehatan Tulang </center></strong> <br> <br> 	Osteoporosis merupakan penyakit tulang yang selalu mengintai siapa pun. Osteoporosis berupa menurunnya kepadatan tulang lebih cepat daripada yang dapat direstrukturasi oleh tubuh. Penyakit ini berkembang tanpa gejala yang kelihatan sehingga dikenal dengan <em>silent disease.</em><br> 	Gaya hidup tidak sehat dan minimnya nutrisi bagi kesehatan tulang, yaitu kalsium, vitamin, dan protein menyebabkan kepadatan tulang menurun lebih cepat. Massa tulang yang rendah dan penurunan kualitas jaringan tulang dapat menimbulkan kerapuhan tulang. Hal ini dapat menjadi penghalang bagi penderita dalam menjalankan setiap aktivitasnya. <br> 	Penyebab lainnya, seperti tingkat pengetahuan masyarakat yang masih rendah mengenai cara pencegahan osteoporosis di Tanah Air. Hal ini terlihat dari rendahnya konsumsi kalsium rata – rata masyarakat sebesar 254 mg/hari (hanya seperempat dari standart internasional sebesar 1.000 – 1.200 mg/hari  untuk dewasa).<br>	Kepadatan tulang yang menurun kerap dikaitkan dengan kurangnya asupan nutrisi yang tepat, kurangnya aktivitas olahraga, serta masalah hormone esterogen pada wanita. Hal ini dapat dicegah dengan memperkaya asupan nutrisi yang masuk ke tubuh, yakni makanan yang mengandung vitamin, protein, dan kalsium sesuai kebutuhan tubuh. Selain nutrisi, olahraga yang tepat dan paparan sinar matahari yang singkat sebelum pukul 9 pagi dan sesudah pukul 3 sore amat bermanfaat bagi kelangsungan tulang yang sehat. Berolahraga dengan baik, benar, terukur, dan teratur dapat ,meningkatkan daya tahan tubuh, serta memperkuat dan melenturkan otot dan sendi. Selain itu, mengatur pola hidup yang baik sejak dini, seperti menghindari merokok, tidak meminum alcohol, serta tidak mengonsumsi kopi, kafein, dan sodium secara berlebihan juga bermanfaat bagi kesehatan tulang. <br> <strong>(dikutip dengan pengubahan Kompas, 14 Agustus 2012) <br> <br>Kalimat tanya yang sesuai dengan isi paragaraf kedua adalah ……………",
ans: "Apa penyebab kepadatan tulang menurun lebih cepat ?",
ansSel: ["Kapan mulai terjadi gejala osteoporosis ?", "Siapa saja yang bisa terkena osteoporosis ?","Mengapa kualitas jaringan tulang dapat menurun ?"]
},
{
ques: "<strong><center> Peduli Kesehatan Tulang </center></strong> <br> <br> 	Osteoporosis merupakan penyakit tulang yang selalu mengintai siapa pun. Osteoporosis berupa menurunnya kepadatan tulang lebih cepat daripada yang dapat direstrukturasi oleh tubuh. Penyakit ini berkembang tanpa gejala yang kelihatan sehingga dikenal dengan <em>silent disease.</em><br> 	Gaya hidup tidak sehat dan minimnya nutrisi bagi kesehatan tulang, yaitu kalsium, vitamin, dan protein menyebabkan kepadatan tulang menurun lebih cepat. Massa tulang yang rendah dan penurunan kualitas jaringan tulang dapat menimbulkan kerapuhan tulang. Hal ini dapat menjadi penghalang bagi penderita dalam menjalankan setiap aktivitasnya. <br> 	Penyebab lainnya, seperti tingkat pengetahuan masyarakat yang masih rendah mengenai cara pencegahan osteoporosis di Tanah Air. Hal ini terlihat dari rendahnya konsumsi kalsium rata – rata masyarakat sebesar 254 mg/hari (hanya seperempat dari standart internasional sebesar 1.000 – 1.200 mg/hari  untuk dewasa).<br>	Kepadatan tulang yang menurun kerap dikaitkan dengan kurangnya asupan nutrisi yang tepat, kurangnya aktivitas olahraga, serta masalah hormone esterogen pada wanita. Hal ini dapat dicegah dengan memperkaya asupan nutrisi yang masuk ke tubuh, yakni makanan yang mengandung vitamin, protein, dan kalsium sesuai kebutuhan tubuh. Selain nutrisi, olahraga yang tepat dan paparan sinar matahari yang singkat sebelum pukul 9 pagi dan sesudah pukul 3 sore amat bermanfaat bagi kelangsungan tulang yang sehat. Berolahraga dengan baik, benar, terukur, dan teratur dapat ,meningkatkan daya tahan tubuh, serta memperkuat dan melenturkan otot dan sendi. Selain itu, mengatur pola hidup yang baik sejak dini, seperti menghindari merokok, tidak meminum alcohol, serta tidak mengonsumsi kopi, kafein, dan sodium secara berlebihan juga bermanfaat bagi kesehatan tulang. <br> <strong>(dikutip dengan pengubahan Kompas, 14 Agustus 2012) <br> <br>Ide pokok paragraph keempat dalam bacaan tersebut adalah ……………..",
ans: "Penyebab dan pencegahan osteoporosis",
ansSel: ["Gaya hidup sehat", "Penyebab kerapuhan tulang","Fungsi nutrisi terhadap tulang"]
},
{
ques: "<strong><center> Peduli Kesehatan Tulang </center></strong> <br> <br> 	Osteoporosis merupakan penyakit tulang yang selalu mengintai siapa pun. Osteoporosis berupa menurunnya kepadatan tulang lebih cepat daripada yang dapat direstrukturasi oleh tubuh. Penyakit ini berkembang tanpa gejala yang kelihatan sehingga dikenal dengan <em>silent disease.</em><br> 	Gaya hidup tidak sehat dan minimnya nutrisi bagi kesehatan tulang, yaitu kalsium, vitamin, dan protein menyebabkan kepadatan tulang menurun lebih cepat. Massa tulang yang rendah dan penurunan kualitas jaringan tulang dapat menimbulkan kerapuhan tulang. Hal ini dapat menjadi penghalang bagi penderita dalam menjalankan setiap aktivitasnya. <br> 	Penyebab lainnya, seperti tingkat pengetahuan masyarakat yang masih rendah mengenai cara pencegahan osteoporosis di Tanah Air. Hal ini terlihat dari rendahnya konsumsi kalsium rata – rata masyarakat sebesar 254 mg/hari (hanya seperempat dari standart internasional sebesar 1.000 – 1.200 mg/hari  untuk dewasa).<br>	Kepadatan tulang yang menurun kerap dikaitkan dengan kurangnya asupan nutrisi yang tepat, kurangnya aktivitas olahraga, serta masalah hormone esterogen pada wanita. Hal ini dapat dicegah dengan memperkaya asupan nutrisi yang masuk ke tubuh, yakni makanan yang mengandung vitamin, protein, dan kalsium sesuai kebutuhan tubuh. Selain nutrisi, olahraga yang tepat dan paparan sinar matahari yang singkat sebelum pukul 9 pagi dan sesudah pukul 3 sore amat bermanfaat bagi kelangsungan tulang yang sehat. Berolahraga dengan baik, benar, terukur, dan teratur dapat ,meningkatkan daya tahan tubuh, serta memperkuat dan melenturkan otot dan sendi. Selain itu, mengatur pola hidup yang baik sejak dini, seperti menghindari merokok, tidak meminum alcohol, serta tidak mengonsumsi kopi, kafein, dan sodium secara berlebihan juga bermanfaat bagi kesehatan tulang. <br> <strong>(dikutip dengan pengubahan Kompas, 14 Agustus 2012) <br> <br>Pernyataan yang sesuai dengan paragraf ketiga dalam bacaan tersebut adalah ………….",
ans: "Rendahnya konsumsi kalsium rata – rata masyarakat Indonesia menyebabkan meningkatnya pasien osteoporosis.",
ansSel: ["Gaya hidup tak sehat dan minimnya asupan nutrisi merupakan penyebab osteoporosis.", "Salah satu pencegahan osteoporosis adalah dengan memperkaya asupan nutrisi yang masuk ke tubuh, seperti makanan yang mengandung vitamin, protein, dan kalsium.","Osteoporosis adalah penyakit tulang yang dapat mengintai siapa pun."]
},
{
ques: "Ia berkuliah di Fakultas Kedokteran . . . . ia bercita – cita menjadi dokter.<br> Kata hubung yang tepat untuk melengkapi kalimat diatas adalah ………",
ans: "Karena",
ansSel: ["Oleh karena itu", "Sebagaimana","Sehingga"]
},
//6-10
{
ques: "Guru	: “Perhatikan bukit yang ada di depan sana, apa pendapat kalian?” <br> Budi		: “Memprihatinkan sekali Pak, bukit telah gundul.” <br>Guru	: “Betul, hari ini kita akan melakukan penanaman pohon di bukit itu!” <br>Lurah	:  “Atas nama masyarakat di sini mengucapkan terima kasih atas reboisasi terhadap lingkungan kami.” <br>Topik pembicaraan di atas adalah ....",
ans: "Reboisasi di bukit gundul",
ansSel: ["Reboisasi di kelurahan", "Reboisasi di lingkungan masing-masing","Reboisasi di sekolahan"]
},
{
ques: "Semakin sempitnya lahan pertanian mendorong ilmuwan Jepang mencari solusinya. Mereka membuat teknologi pertanian yang unik. Teknologi itu memungkinkan orang menanam padi di lantai bawah tanah gedung bertingkat. Teknologi pertanian ini dikembangkan oleh perusahaan pertanian bernama Pasona O2. Sistem pertanian tersebut menggunakan media air. Cahaya, air, dan kelembaban udaranya diatur oleh komputer. Pasona O2 telah menemukan solusi mengatasi sempitnya lahan pertanian. Selain itu juga dimaksudkan sebagai bentuk kampanye pengenalan kembali profesi petani bagi warga Jepang. <br>lingkasan yang tepat paragaf tersebut adalah ....",
ans: "Pasona O2 telah menemukan solusi mengatasi sempitnya lahan pertanian",
ansSel: ["Semakin sempit lahan pertanian membuat warga Jepang tidak mau menanam lagi", "Perusahaan pertanian bernama Pasona O2","Warga jepang berotensi sebagai petani"]
},
{
ques: "Semakin sempitnya lahan pertanian mendorong ilmuwan Jepang mencari solusinya. Mereka membuat teknologi pertanian yang unik. Teknologi itu memungkinkan orang menanam padi di lantai bawah tanah gedung bertingkat. Teknologi pertanian ini dikembangkan oleh perusahaan pertanian bernama Pasona O2. Sistem pertanian tersebut menggunakan media air. Cahaya, air, dan kelembaban udaranya diatur oleh komputer. Pasona O2 telah menemukan solusi mengatasi sempitnya lahan pertanian. Selain itu juga dimaksudkan sebagai bentuk kampanye pengenalan kembali profesi petani bagi warga Jepang. <br> Tema pargraf tersebut adalah ....",
ans: "Teknologi pertanaian",
ansSel: ["Teknologi perusahaan", "Teknologi petani Jepang","Teknologi media air"]
},
{
ques: "Semakin sempitnya lahan pertanian mendorong ilmuwan Jepang mencari solusinya. Mereka membuat teknologi pertanian yang unik. Teknologi itu memungkinkan orang menanam padi di lantai bawah tanah gedung bertingkat. Teknologi pertanian ini dikembangkan oleh perusahaan pertanian bernama Pasona O2. Sistem pertanian tersebut menggunakan media air. Cahaya, air, dan kelembaban udaranya diatur oleh komputer. Pasona O2 telah menemukan solusi mengatasi sempitnya lahan pertanian. Selain itu juga dimaksudkan sebagai bentuk kampanye pengenalan kembali profesi petani bagi warga Jepang. <br> Pesan yang terkandung dalam paragraf di atas adalah ....",
ans: "Lahan yang sempit bukan halangan untuk pertanian",
ansSel: ["Teknologi canggih di perusahaan Pasona O2", "Kampanye petani Jepang yang sangat cepat","Perusahaan Pasona O2 yang sangat canggih dan maju"]
},
{
ques: "<center><strong>Ulah Manusia Jua</strong></center> <br> Awan hanya lewat mengejek <br> Tak mau turun sebagai hujan <br> Aku membuat tanah ini becek <br> Membawa sejuk dan kesuburan <br><br> <br> Hanya panas terik matahari <br> Memanggang debu setiap hari<br>  <br> Hutan hilang, burungpun musnah <br> Tanah...gersang tandus terpecah <br> <br> <strong>Pernyataan yang sesuai dengan isi puisi tersebut adalah ....</strong> ",
ans: "Alam yang gersang karena musim kemarau",
ansSel: ["Keindahan alam tanah air", "Alam Indonesia pada musim penghujan","Alam dan kekayaan tanah air"]
},
//11-15
{
ques: " <center><strong>Ulah Manusia Jua</strong></center> <br> Awan hanya lewat mengejek <br> Tak mau turun sebagai hujan <br> Aku membuat tanah ini becek <br> Membawa sejuk dan kesuburan <br><br> <br> Hanya panas terik matahari <br> Memanggang debu setiap hari<br>  <br> Hutan hilang, burungpun musnah <br> Tanah...gersang tandus terpecah <br> <br> 32. Makna kata <em>gersang</em> pada puisi di atas adalah ....",
ans: "Kering",
ansSel: ["Subur", "Layu","Mulai tumbuh"]
},
{
ques: "(1)Beri garam secukupnya<br> (2)Pastikan bagian bawah telur sudah matang <br> (3)Panaskan wajan yang sudah ada minyaknya <br> (4) Sajikan telur yang sudah matang tersebut <br>(5) Pecahkan telur dan tuangkan ke wajan<br> Urutan cara membuat telur mata sapi sesuai dengan kalimat acak adalah ....",
ans: "3 – 5 – 1 – 2 – 4",
ansSel: ["3 – 5 – 4 – 1 – 2", "3 – 5 – 2 – 4 – 1","3 – 4 – 1 – 5 – 2"]
},
{
ques: "(1)Wanda juga mempunyai banyak majalah anak<br> (2)Mereka berencana ingin membuat perpustakaan <br> (3)Wanda dan Umi bersahabat <br> (4) Umi memiliki banyak buku cerita<br>Urutan kalimat yang tepat agar menjadi paragraf yang padan adalah ....",
ans: "3 – 4 – 1 – 2 ",
ansSel: ["4 – 2 – 3 – 1 ", "3 – 4 – 2 – 1","2 – 3 – 1 – 4"]
},

{
ques: "Perhatikan puisi di bawah ini<br> <strong><center>Sahabat</center></strong><br>Saat aku mulai mengerti hidup <br> Aku butuh seorang sahabat<br> Yang selalu ada di dekatku <br> Saat jantung berdetak <br> Sampai mata tertutup <br> Aku akan tertawa dan menangis bersama <br> Tak ada kata putus <br> Meski masa akan terhapus<br> Yakinlah hati kita tetap menyatu <br> Sumber : Bravo, vol. 4/no. 54/Juli 2011 <br>  Kata mata tertutup dalam puisi di atas bermakna …",
ans: "Meninggal",
ansSel: ["Mengantuk", "Tidur","Pergi"]
},
{
ques: "Dita sakit demam berdarah<br>Ia dirawat di Rumah Sakit Siti Hajar <br> <br> Gabungan dua kalimat tersebut yang tepat adalah ....",
ans: "Dita sakit demam berdarah sehingga dirawat di Rumah Sakit Siti Hajar",
ansSel: ["Dita sakit demam berdarah apabila dirawat di Rumah Sakit Siti Hajar", "Dita sakit demam berdarah karena dirawat di Rumah Sakit Siti Hajar","Dita sakit demam berdarah setelah dirawat di Rumah Sakit Siti Hajar"]
},
//16-20
{
ques: "…. aku rajin belajar, aku akan meraih nilai ujian tinggi. <br>Kata hubung yang tepat untuk melengkapi kalimat di atas adalah ….",
ans: "Seandainya",
ansSel: ["Setelah", "Seolah-olah","Supaya"]
},

{
ques: "Pak Andi di ajukan ke meja hijau ......... melakukan kejahatan.<br> Kata hubung yang tepat kalimat rumpang di atas adalah ....",
ans: "Karena",
ansSel: ["Bila", "Meskipun","Ketika"]
},

{
ques: " Yth (1) Seluruh warga RT 09 <br>                   di tempat <br> Dengan hormat, <br> Sehubungan adanya kunjungan walikota Surabaya, hari ini mewakili Pengurus RT 09 mengajak seluruh warga untuk ikut serta dalam kegiatan kerja bakti yang akan dilaksanakan pada (2) <br> Hari	  	: Minggu <br> Tanggal 		: 24 Februari 2013 <br> Waktu	 	: Pukul 06.30 – selesai<br> Tempat  		: Pos Keamanan RT 09 <br> ...................................................................................... <br> <br> <br>Kalimat efektif yang tepat untuk melengkapi surat undangan tersebut adalah .... ",
ans: "Atas kehadiran bapak, kami mengucapkan terima kasih",
ansSel: ["Kehadiran bapak-bapak saya tunggu secepatnya", "Kami mengucapkan terima kasih, atas kehadiran para bapak-bapak","Terima kasih banyak kami ucapkan kepada para bapak-bapak"]
},

{
ques: "Yth (1) Seluruh warga RT 09 <br>                   di tempat <br> Dengan hormat, <br> Sehubungan adanya kunjungan walikota Surabaya, hari ini mewakili Pengurus RT 09 mengajak seluruh warga untuk ikut serta dalam kegiatan kerja bakti yang akan dilaksanakan pada (2) <br> Hari	  	: Minggu <br> Tanggal 		: 24 Februari 2013 <br> Waktu	 	: Pukul 06.30 – selesai<br> Tempat  		: Pos Keamanan RT 09 <br> ...................................................................................... <br> <br> <br>Tanda baca yang tepat untuk melengkapi no (1) dan (2) adalah .... ",
ans: "Titik (.) dan titik dua (:)",
ansSel: ["Titik dua (:) dan koma (,)", "Koma (,) dan titik (.)","Titik (.) dan koma (,)"]
},

{
ques: "<center><strong>Pengumuman</strong> </center><br>Dalam menghadapi musim hujan bulan November 2012 sekaligus untuk mengantisipasi banjir, Kampung Segunting akan mengadakan kerja bakti ....<br>Kalimat yang tepat untuk melengkapi pengumuman tersebut adalah ....",
ans: "Kerja bakti itu adalah membersihkan saluran air di lingkungan masing-masing",
ansSel: ["Kerja bakti itu adalah membersihkan saluran air ke lingkungan masing-masing", "Kerja bakti itu adalah membersihkan saluran air kepada lingkungan masing-masing","Kerja bakti itu adalah membersihkan saluran air dari lingkungan masing-masing"]
},

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! <br> untuk membuka gambar, gunakan koneksi internet atau data mobile</justify>",
intro: "SOAL UJIAN NASIONAL SEKOLAH DASAR",
allRandom: true,
title: "<b>BAHASA INDONESIA PAKET E</b>"
};
$("#quizArea").jQuizMe(quiz, options);
});
