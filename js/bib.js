
$( function($){
var quiz = {
multiList: [
//1-5
{
ques: "<strong><center>Sekolah Dasar di Gunung Kidul Ditutup</center></strong> <br> <br> Pada tahun 2001 hingga sekarang, 33 sekolah dasar (SD) di Kabupaten Gunung Kidul Daerah Istimewa Yogyakarta.ditutup karena jumlah siswanya semakin berkurang. Sekolah Dasar yang ditutup itu, kemudian digabung dengan SD yang berdekatan. Sekolah dasar yang ditutup pada tahun 2001 ada 12 sekolah, kemudian menyusul 20 SD pada tahun 2002.<br>Penutupan sekolah dasar yang ada di daerah ini menyebabkan sebagian besar gedung sekolah itu rusak tidak terurus. Sejumlah gedung sekolah yang masih layak digunakan telah diminta oleh pemerintah desa setempat untuk kegiatan masyarakat. <br> Dinas Pendidikan Gunungkidul tidak berkeberatan jika gedung sekolah itu digunakan untuk kegiatan masyarkat desa, meskipun secara administrasi masih milik pemerintah <br> kabupaten sehingga apabila pemerintah desa akan menggunakan gedung tersebut harus melalui proses perijinan. Adapun pemanfaatan gedung-gedung bekas sekolah dasar tersebut, belum diputuskan oleh pemerintah daerah setempat.<br> Apa yang menyebabkan sekolah dasar di Kabupaten Gunung Kidul Daerah Istimewa Yogyakarta ditutup? ",
ans: "Jumlah siswanya semakin berkurang",
ansSel: ["Daya tampung sekolah tidak mencukupi", "Jumlah siswa yang semakin meningkat","Akan dilakukan pembangunan gedung baru"]
},
{
ques: "<strong><center>Sekolah Dasar di Gunung Kidul Ditutup</center></strong> <br> <br> Pada tahun 2001 hingga sekarang, 33 sekolah dasar (SD) di Kabupaten Gunung Kidul Daerah Istimewa Yogyakarta.ditutup karena jumlah siswanya semakin berkurang. Sekolah Dasar yang ditutup itu, kemudian digabung dengan SD yang berdekatan. Sekolah dasar yang ditutup pada tahun 2001 ada 12 sekolah, kemudian menyusul 20 SD pada tahun 2002.<br>Penutupan sekolah dasar yang ada di daerah ini menyebabkan sebagian besar gedung sekolah itu rusak tidak terurus. Sejumlah gedung sekolah yang masih layak digunakan telah diminta oleh pemerintah desa setempat untuk kegiatan masyarakat. <br> Dinas Pendidikan Gunungkidul tidak berkeberatan jika gedung sekolah itu digunakan untuk kegiatan masyarkat desa, meskipun secara administrasi masih milik pemerintah <br> kabupaten sehingga apabila pemerintah desa akan menggunakan gedung tersebut harus melalui proses perijinan. Adapun pemanfaatan gedung-gedung bekas sekolah dasar tersebut, belum diputuskan oleh pemerintah daerah setempat.<br>Bagaimanakah kondisi gedung sekolah setelah dilakukan penutupan?",
ans: "sebagian besar gedung sekolah rusak dan tidak terurus",
ansSel: ["sejumlah gedung sekolah masih layak digunakan", "digabung dengan SD yang berdekatan","diambil alih oleh pemerintah kabupaten"]
},
{
ques: "<strong><center>Sekolah Dasar di Gunung Kidul Ditutup</center></strong> <br> <br> Pada tahun 2001 hingga sekarang, 33 sekolah dasar (SD) di Kabupaten Gunung Kidul Daerah Istimewa Yogyakarta.ditutup karena jumlah siswanya semakin berkurang. Sekolah Dasar yang ditutup itu, kemudian digabung dengan SD yang berdekatan. Sekolah dasar yang ditutup pada tahun 2001 ada 12 sekolah, kemudian menyusul 20 SD pada tahun 2002.<br>Penutupan sekolah dasar yang ada di daerah ini menyebabkan sebagian besar gedung sekolah itu rusak tidak terurus. Sejumlah gedung sekolah yang masih layak digunakan telah diminta oleh pemerintah desa setempat untuk kegiatan masyarakat. <br> Dinas Pendidikan Gunungkidul tidak berkeberatan jika gedung sekolah itu digunakan untuk kegiatan masyarkat desa, meskipun secara administrasi masih milik pemerintah <br> kabupaten sehingga apabila pemerintah desa akan menggunakan gedung tersebut harus melalui proses perijinan. Adapun pemanfaatan gedung-gedung bekas sekolah dasar tersebut, belum diputuskan oleh pemerintah daerah setempat.<br>Ide pokok paragraf kesatu adalah.....",
ans: "Pada tahun 2001 hingga sekarang, 33 sekolah dasar (SD) di Kabupaten Gunung Kidul Daerah Istimewa Yogyakarta, ditutup karena jumlah siswanya semakin berkurang",
ansSel: ["Gedung sekolah dimanfaatkan untuk kegiatan masyarakat desa", "Sekolah Dasar yang ditutup itu, kemudian digabung dengan SD yang berdekatan","Sekolah dasar yang ditutup pada tahun 2001 ada 12 sekolah, kemudian menyusul 20 SD pada tahun 2002"]
},
{
ques: "<strong><center>Sekolah Dasar di Gunung Kidul Ditutup</center></strong> <br> <br> Pada tahun 2001 hingga sekarang, 33 sekolah dasar (SD) di Kabupaten Gunung Kidul Daerah Istimewa Yogyakarta.ditutup karena jumlah siswanya semakin berkurang. Sekolah Dasar yang ditutup itu, kemudian digabung dengan SD yang berdekatan. Sekolah dasar yang ditutup pada tahun 2001 ada 12 sekolah, kemudian menyusul 20 SD pada tahun 2002.<br>Penutupan sekolah dasar yang ada di daerah ini menyebabkan sebagian besar gedung sekolah itu rusak tidak terurus. Sejumlah gedung sekolah yang masih layak digunakan telah diminta oleh pemerintah desa setempat untuk kegiatan masyarakat. <br> Dinas Pendidikan Gunungkidul tidak berkeberatan jika gedung sekolah itu digunakan untuk kegiatan masyarkat desa, meskipun secara administrasi masih milik pemerintah <br> kabupaten sehingga apabila pemerintah desa akan menggunakan gedung tersebut harus melalui proses perijinan. Adapun pemanfaatan gedung-gedung bekas sekolah dasar tersebut, belum diputuskan oleh pemerintah daerah setempat.<br>Kalimat yang sesuai dengan paragraf ketiga adalah....",
ans: "Dinas Pendidikan Gunungkidul setuju jika gedung sekolah itu digunakan untuk kegiatan masyarakat desa",
ansSel: ["Pemerintah daerah tidak setuju jika gedung sekolah itu digunakan untuk kegiatan masyarakat", "Gedung-gedung sekolah yang rusak harus segera diperbaiki","Pemerintah Kabupaten harus mengajukan ijin jika akan menggunakan gedung SD"]
},
{
ques: "Bacalah petunjuk di bawah ini! <br>(1) Lepaskan steker dari stopkontak <br>(2) Tekan tombol power pada remote <br>(3) Atur volume suara yang diinginkan<br>(4) Pilih saluran yang diinginkan <br> (5) Colokkan steker pada stopkontak <br>(6) Jika sudah selesai tekan tombol power pada remote<br> Urutan pemakaian televisi yang benar adalah...",
ans: "(5) → (2) → (4) → (3) → (1) → (6)",
ansSel: [" (5) → (2) → (4) → (3) → (6) → (1)", "(5) → (2) → (4) → (6) → (1) → (3)","(5) → (2) → (4) → (1) → (3) → (6)"]
},
//6-10
{
ques: "Perhatikan teks drama berikut ini!<br> Danu	: “kenapa kamu bersedih, Ton? (sambil menghampiri Anton) <br> Anton	: “Nilai ulanganku jelek sekali, Nu”.Aku memang banyak bermain akhir-akhir ini. (tertunduk lesu di bangku kelas) <br>Danu	: “Sudahlah, Ton” jangan bersedih jadikan ini sebuah pelajaran agar kamu lebih rajin belajar<br>Anto	: “Aku dimarahi ayahku”.<br> Danu	: “Mintalah maaf pada ayahmu, dan berjanji tidak mengulang lagi”.<br> Tokoh utama pada teks drama di atas adalah...",
ans: "Anton",
ansSel: ["Danu", "Ayah Anton","Ayah Danu"]
},
{
ques: "Perhatikan teks drama berikut ini!<br> Danu	: “kenapa kamu bersedih, Ton? (sambil menghampiri Anton) <br> Anton	: “Nilai ulanganku jelek sekali, Nu”.Aku memang banyak bermain akhir-akhir ini. (tertunduk lesu di bangku kelas) <br>Danu	: “Sudahlah, Ton” jangan bersedih jadikan ini sebuah pelajaran agar kamu lebih rajin belajar<br>Anto	: “Aku dimarahi ayahku”.<br> Danu	: “Mintalah maaf pada ayahmu, dan berjanji tidak mengulang lagi”.<br>Latar suasana cuplikan drama di atas adalah...",
ans: "sedih",
ansSel: ["bingung", "takut","kacau"]
},
{
ques: "Perhatikan teks drama berikut ini!<br> Danu	: “kenapa kamu bersedih, Ton? (sambil menghampiri Anton) <br> Anton	: “Nilai ulanganku jelek sekali, Nu”.Aku memang banyak bermain akhir-akhir ini. (tertunduk lesu di bangku kelas) <br>Danu	: “Sudahlah, Ton” jangan bersedih jadikan ini sebuah pelajaran agar kamu lebih rajin belajar<br>Anto	: “Aku dimarahi ayahku”.<br> Danu	: “Mintalah maaf pada ayahmu, dan berjanji tidak mengulang lagi”.<br>Amanat yang terkandung dalam cuplikan teks drama di atas adalah...",
ans: "sebagai pelajar kita harus rajin belajar",
ansSel: ["jangan takut berkata jujur", "kalau salah harus bertanggung jawab","jangan mengulangi kesalahan yang sama"]
},
{
ques: "(1) Indonesia adalah negara yang kaya akan kebudayaan daerah. (2) Hal ini dikarenakan Indonesia terdiri dari beraneka ragam suku bangsa. (3) Setiap suku bangsa memiliki budaya masing-masing yang khas. (4) Budaya-budaya suku bangsa tersebut memperkaya khasanah bangsa.<br> Kalimat utama paragraf tersebut terdapat pada nomor...",
ans: "(1)",
ansSel: ["(2)", "(3)","(4)"]
},
{
ques: "Produk tanaman hidroponik konon lebih tinggi nilainya dibanding produksi tanaman dengan menggunakan tanah biasa. Di samping itu, tanaman hidroponik kebanyakan bebas dari hama dan penyakit. Juga ada kemudahan karena caranya sudah dibakukan sehingga memudahkan para penanam. <br>Pernyataan yang sesuai dengan isi paragraf tersebut di atas adalah...",
ans: "Tanaman hidroponik bernilai tinggi karena bebas hama dan penyakit serta mudah penanamannya.",
ansSel: ["Tanaman hidroponik di tanam di air dan bebas dari hama dan penyakit", "Tanaman hidroponik adalah tanaman yang bernilai jual tinggi dibanding tanaman lain","Tanaman hidroponik bebas hama dan penyakit karena sulit menanamnya"]
},
//11-15
{
ques: "Produk tanaman hidroponik konon lebih tinggi nilainya dibanding produksi tanaman dengan menggunakan tanah biasa. Di samping itu, tanaman hidroponik kebanyakan bebas dari hama dan penyakit. Juga ada kemudahan karena caranya sudah dibakukan sehingga memudahkan para penanam. <br>Arti kata hidroponik adalah...",
ans: "c. Bercocok tanam dengan media air",
ansSel: ["b. Bercocok tanam tanpa menggunakan tanah", "a. Bercocok tanam dengan media tanah","d. Bercocok tanam di lahan sempit"]
},
{
ques: "Produk tanaman hidroponik konon lebih tinggi nilainya dibanding produksi tanaman dengan menggunakan tanah biasa. Di samping itu, tanaman hidroponik kebanyakan bebas dari hama dan penyakit. Juga ada kemudahan karena caranya sudah dibakukan sehingga memudahkan para penanam. <br>Antonim kata kemudahan adalah...",
ans: "kesulitan",
ansSel: ["gampang", "sulit","kegampangan"]
},
{
ques: "Rasti adalah anak yang sopan dalam bergaul. Jika ia bermain ke rumah teman-temannya selalu mengucapkan salam bila datang, serta mohon ijin bila ingin pulang. <br> Peribahasa yang tepat terhadap perilaku Rasti adalah...",
ans: "Datang tampak muka, pergi tampak punggung",
ansSel: ["Air beriak tanda tak dalam", "Dalam laut dapat diduga, dalam hati siapa yang tahu","Seperti ilmu padi, semakin berisi semakin merunduk"]
},

{
ques: "Rima berasal dari keluarga yang berkecukupan dan terpandang di kampungnya. Namun demikian ia tidak bersikap sombong dan merendahkan orang lain. Ia juga berteman dengan siapa saja tanpa membeda-bedakan. <br> Ungkapan yang sesuai dengan ilustrasi di atas adalah...",
ans: "rendah hati ",
ansSel: ["lapang hati", "hati putih","besar hati"]
},
{
ques: "Tinta hitam untuk menulis <br> Pensil warna untuk melukis <br> Ilmu itu tak pernah habis<br> Turun temurun ke ahli waris <br> Pesan yang terkandung dalam pantun di atas adalah...",
ans: "Ilmu tak ternilai harganya sehingga bisa menjadi sebuah warisan",
ansSel: ["Ilmu dapat membuat kita memiliki banyak warisan", "Ilmu adalah harta yang bisa diberikan kepada ahli waris","Ilmu adalah sesuatu yang dapat diwariskan secara turun temurun"]
},
//16-20
{
ques: "<strong>Teks 1 </strong><br>Dalam seminggu ini hujan turun terus-menerus. Oleh karena itu banyak ruas jalan di Surabaya yang tergenang. Hal ini berdampak terhadap kemacetan lalu lalu lintas. <br><strong>Teks 2 </strong> <br> Kemacetan lalu lintas di Surabaya disebabkan banyaknya kendaraan. Selain itu, kurangnya kesadaran pengguna jalan yang melanggar rambu lalu lintas,<br> Persamaan kedua teks di atas adalah . . .",
ans: "kemacetan lalu lintas",
ansSel: ["hujan deras selama seminggu", "pelanggaran rambu lalu lintas","banyaknya kendaraan"]
},

{
ques: "Untuk membuka gambar gunakan koneksi internet! <br> <img src=http://1.bp.blogspot.com/-SQeEOHjTn8k/VkrIUyRbkzI/AAAAAAAABgs/YgLa-MbJLZ0/s320/jadwal.png> <br>  Pernyataan yang sesuai dengan jadwal Kapal Motor di atas adalah...",
ans: "KM Dobon Solo tujuan Ambon berangkat tanggal 14-01-2013 pukul 14.00 tiba tanggal 24-01-2013 pukul 08.00 ",
ansSel: ["KM Ceremai tujuan Ambon berangkat tanggal 01-01-2013 tiba tanggal 11-01-2013 pukul 16.00", "KM Lambelu berangkat tanggal 11-01-2013 tiba di Ambon 15-01-2013 pukul 21.00","KM Gunung Dempo tujuan Ambon berangkat tanggal 07-01-2013 tiba tanggal 15-01-2013 pukul 13.00  "]
},

{
ques: "Untuk membuka gambar gunakan koneksi internet! <br> <img src=http://1.bp.blogspot.com/-SQeEOHjTn8k/VkrIUyRbkzI/AAAAAAAABgs/YgLa-MbJLZ0/s320/jadwal.png> <br>Kapal Motor yang menempuh perjalanan menuju Ambon selama 10 hari adalah...",
ans: "KM Dobon Solo",
ansSel: ["KM Gunung Dempo", "KM Lambelu","KM Ceremai"]
},

{
ques: "<em>Kamu boleh bermain bola.</em><br><em>Telah menyelesaikan tugas sekolah.</em> <br> Kata hubung yang tepat untuk menggabungkan dua kalimat di atas adalah...<br>",
ans: "apabila",
ansSel: ["andaikan", "tetapi","atau"]
},

{
ques: "<em>Pada musim hujan tahun ini banyak pohon bertumbangan.........diterjang angin puting beliung.</em><br> Kata hubung yang tepat untuk melengkapi kalimat tersebut di atas adalah...",
ans: "karena",
ansSel: ["sehingga", "sebab","dengan"]
},

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! <br> Agar gambar terlihat, gunakan koneksi internet atau data mobile</justify>",
intro: "SOAL UJIAN NASIONAL SEKOLAH DASAR",
allRandom: true,
title: "<b>BAHASA INDONESIA PAKET B</b>"
};
$("#quizArea").jQuizMe(quiz, options);
});

