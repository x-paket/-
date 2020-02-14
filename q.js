
$( function($){
var quiz = {
multiList: [
//1-5
{
ques: "<strong><center> Lahar Dingin Merapi Membawa Korban </center></strong> <br> <br> Lahar dingin Gunung Merapi menelan korban diwilayah Menggong, Kepuharjo, Cangkringan, Sleman Yogyakarta Seorang penambang pasir tewas. Dia diduga tak mengindahkan sinyal bahaya kala puncak Merapi diguyur hujan lebat.Selain itu, sopir truk pengangkut pasir yang bernama Subagyo dilaporkan mengalami luka-luka saat berusaha menyelamatkan diri dari kepungan material vulkanis yang mengalir deras dari hulu sungai Gendol. <br> Arus lahar dingin juga menghanyutkan dua truk dan menenggelamkan satu alat berat. <br> Sementara itu empat truk lain terjebak ditengah aliran karena sopir terlambat menepi. Operator backhue (alat berat) selamat setelah mendapat pertolongan dengan ditarik menggunakan seutas tali oleh para relawan. <br> Identitas korban tewas belum diketahui. Dia dievakuasi di dusun suruh, Argomulyo. Lokasi itu berjarak tiga kilometer dari manggong. <br> <strong>Sumber : Jawa Pos, 13 Februari 2013. <br> <br> Mengapa penambang pasir itu menjadi korban ?",
ans: "Dia tak mengindahkan sinyal bahaya kala puncak gunung merapi diguyur hujan",
ansSel: ["Dia terjebak di dalam aliran material vulkanis yang mengalir deras dari hulu sungai Gendol", "Dia terlambat menepi dan terjebak aliran lahar dingin dari puncak gunung merapi","Dia hanyut oleh aliran lahar dingin bersama material vulkanis gunung merapi"]
},
{
ques: "<strong> <center> Lahar Dingin Merapi Membawa Korban </center></strong> <br> <br> Lahar dingin Gunung Merapi menelan korban diwilayah Menggong, Kepuharjo, Cangkringan, Sleman Yogyakarta Seorang penambang pasir tewas. Dia diduga tak mengindahkan sinyal bahaya kala puncak Merapi diguyur hujan lebat.Selain itu, sopir truk pengangkut pasir yang bernama Subagyo dilaporkan mengalami luka-luka saat berusaha menyelamatkan diri dari kepungan material vulkanis yang mengalir deras dari hulu sungai Gendol. <br> Arus lahar dingin juga menghanyutkan dua truk dan menenggelamkan satu alat berat. <br> Sementara itu empat truk lain terjebak ditengah aliran karena sopir terlambat menepi. Operator backhue (alat berat) selamat setelah mendapat pertolongan dengan ditarik menggunakan seutas tali oleh para relawan. <br> Identitas korban tewas belum diketahui. Dia dievakuasi di dusun suruh, Argomulyo. Lokasi itu berjarak tiga kilometer dari manggong. <br> <strong>Sumber : Jawa Pos, 13 Februari 2013. <br> <br> Kalimat tanya yang sesuai dengan isi paragraf kedua adalah  .....",
ans: "Mengapa sopir pengangkut pasir juga dilaporkan mengalami luka-luka?",
ansSel: ["Di mana lahar dingin Gunung Merapi menelan korban?", "Berapa jarak lokasi tempat korban dievakuasi dengan tempat kejadian?","Siapa yang memberi pertolongan untuk menyelamatkan operator alat berat?"]
},
{
ques: "<strong> <center> Lahar Dingin Merapi Membawa Korban </center></strong> <br> <br> Lahar dingin Gunung Merapi menelan korban diwilayah Menggong, Kepuharjo, Cangkringan, Sleman Yogyakarta Seorang penambang pasir tewas. Dia diduga tak mengindahkan sinyal bahaya kala puncak Merapi diguyur hujan lebat.<br>Selain itu, sopir truk pengangkut pasir yang bernama Subagyo dilaporkan mengalami luka-luka saat berusaha menyelamatkan diri dari kepungan material vulkanis yang mengalir deras dari hulu sungai Gendol.  Arus lahar dingin juga menghanyutkan dua truk dan menenggelamkan satu alat berat. <br> Sementara itu empat truk lain terjebak ditengah aliran karena sopir terlambat menepi. Operator backhue (alat berat) selamat setelah mendapat pertolongan dengan ditarik menggunakan seutas tali oleh para relawan. <br> Identitas korban tewas belum diketahui. Dia dievakuasi di dusun suruh, Argomulyo. Lokasi itu berjarak tiga kilometer dari manggong. <br> <strong>Sumber : Jawa Pos, 13 Februari 2013. <br> <br> Ide pokok paragraf kesatu terdapat pada kalimat  .....",
ans: "Pertama",
ansSel: ["Kedua", "Ketiga","Keempat"]
},
{
ques: "<strong> <center> Lahar Dingin Merapi Membawa Korban </center></strong> <br> <br> Lahar dingin Gunung Merapi menelan korban diwilayah Menggong, Kepuharjo, Cangkringan, Sleman Yogyakarta Seorang penambang pasir tewas. Dia diduga tak mengindahkan sinyal bahaya kala puncak Merapi diguyur hujan lebat.<br>Selain itu, sopir truk pengangkut pasir yang bernama Subagyo dilaporkan mengalami luka-luka saat berusaha menyelamatkan diri dari kepungan material vulkanis yang mengalir deras dari hulu sungai Gendol.  Arus lahar dingin juga menghanyutkan dua truk dan menenggelamkan satu alat berat. <br> Sementara itu empat truk lain terjebak ditengah aliran karena sopir terlambat menepi. Operator backhue (alat berat) selamat setelah mendapat pertolongan dengan ditarik menggunakan seutas tali oleh para relawan. <br> Identitas korban tewas belum diketahui. Dia dievakuasi di dusun suruh, Argomulyo. Lokasi itu berjarak tiga kilometer dari manggong. <br> <strong>Sumber : Jawa Pos, 13 Februari 2013. <br> <br> Pernyataan yang sesuai dengan paragraf ketiga pada bacaan tersebut adalah  ... .",
ans: "Operator backhoe selamat setelah mendapat pertolongan dengan ditarik meggunakan seutas tali oleh para relawan",
ansSel: ["Arus lahar dingin juga menghanyutkan dua truk dan menenggelamkan satu alat berat", "Dia diduga tak mengindahkan sinyal bahaya kala puncak merapi di guyur hujan lebat","Lokasi itu berjarak tiga kilometer dari Manggong"]
},
{
ques: "(1) Bongkahan batu-batu granit berukuran besar menjadi cirri khas pantai-pantai di Belitung.  (2)Batu-batu itu beraneka bentuk yang tersebar di pantai. (3) Keberadaan batu-batu itu memperindah keindahan di sepanjang pantai. (4) Apalagi ditambah pasir putih yang bersih pada siang hari.<br> Kalimat utama pada paragraph di atas pada kalimat  ……",
ans: "(1)",
ansSel: ["(2)", "(3)","(4)"]
},
//6-10
{
ques: "Tari :”Tari, beli, ya? Ini koran dan majalahku masih banyak.” <br> Diva :” Wah, Tari. Maaf, Tar, ini aku baru beli majalah dari Rangga.” <br> Tari :” Jadi, Rangga baru dari sini, ya?” <br> Diva : “Iya, baru saja.” <br> Tari :”Wah, harus kuhajar dia! Dia selalu mendahului aku.” (menaiki sepedanya dan buru-buru pergi). <br> Diva : (heran)”He, Tari. Tunggu!Kenapa kamu mau menghajar Rangga?” “Jangan, Tar Tar, Tari, jangan!” <br> Ade:  “Kenapa, Tari, Diva?” <br> Diva : “Entahlah!” <br> <br> Tokoh utama kutipan drama di atas adalah . . .",
ans: "Tari dan Diva",
ansSel: ["Tari dan Ade", "Diva dan Ade","Tari, Diva, Ade"]
},
{
ques: "Tari :”Tari, beli, ya? Ini koran dan majalahku masih banyak.” <br> Diva :” Wah, Tari. Maaf, Tar, ini aku baru beli majalah dari Rangga.” <br> Tari :” Jadi, Rangga baru dari sini, ya?” <br> Diva : “Iya, baru saja.” <br> Tari :”Wah, harus kuhajar dia! Dia selalu mendahului aku.” (menaiki sepedanya dan buru-buru pergi). <br> Diva : (heran)”He, Tari. Tunggu!Kenapa kamu mau menghajar Rangga?” “Jangan, Tar Tar, Tari, jangan!” <br> Ade:  “Kenapa, Tari, Diva?” <br> Diva : “Entahlah!” <br> <br> Latar suasana tempat kutipan drama di atas adalah . . .",
ans: "Tegang",
ansSel: ["Sepi", "Gembira","Syahdu"]
},
{
ques: "Tari :”Tari, beli, ya? Ini koran dan majalahku masih banyak.” <br> Diva :” Wah, Tari. Maaf, Tar, ini aku baru beli majalah dari Rangga.” <br> Tari :” Jadi, Rangga baru dari sini, ya?” <br> Diva : “Iya, baru saja.” <br> Tari :”Wah, harus kuhajar dia! Dia selalu mendahului aku.” (menaiki sepedanya dan buru-buru pergi). <br> Diva : (heran)”He, Tari. Tunggu!Kenapa kamu mau menghajar Rangga?” “Jangan, Tar Tar, Tari, jangan!” <br> Ade:  “Kenapa, Tari, Diva?” <br> Diva : “Entahlah!” <br> <br> Amanat kutipan drama di atas adalah . . .",
ans: "Jangan mudah marah",
ansSel: ["Jangan berpura-pura tidak tahu", "Selesaikan masalah sampai ke akarnya","Tolong-menolonglah dalam kebaikan"]
},
{
ques: "Bacalah cuplikan laporan berikut !<br>Senin, 18 Juli 2014, pukul 08.00 Kompleks Pasar Rabu Jalan Merpati tebakar. Api berkobar membakar semua yang ada disekitarnya. Para pedagang dan pengunjung panik berlarian menyelamatkan diri. Api baru padam beberapa jam setelah petugas pemadam kebakaran datang kelokasi kejadian. Jeritan orang-orang membuat suasana semakin mencekam.<br> Topik cuplikan diatas adalah...",
ans: "Peristiwa kebakaran",
ansSel: ["Kejadian minggu pagi", "Tugas pemadam ke bakaran","Kepanikan para pengunjung"]
},
{
ques: "Siswa-siswa kelas VI SDN Seruyu berlatih mengarang untuk membuat majalah dinding. Mereka dilatih oleh seorang wartawan yang bernama Pak Amar. Hasil karangan Eky merupakan karangan terbaik dan akan dipajangkan pada majalah dinding edisi pertama.<br>Ringkasan yang tepat untuk paragraf diatas adalah...",
ans: "Siswa-siswi kelas VI SDN Seruyu berlatih mengarang untuk mengisi majalah dinding",
ansSel: ["Siswa-siswi kelas VI dilatih oleh seorang wartawan yang bernama Pak Amar", "SDN Seruyu membuat majalah dinding untuk para siswanya","Pak Amar seorang wartawan pandai mengarang."]
},
//11-15
{
ques: " … Wajah keduanya mirip . Bedanya pandu berkulit sawo matang , sedangkan Pande agak putih . Jarak waktu kelahiran mereka hanya berselang sepuluh menit . Namun, keduanya anak yang cerdas , mereka selalu mendengarkan nasihat orang tua agar gemar membaca . <br>Kalimat yang sesuai untuk melengkapi awal paragraph diatas adalah …",
ans: "Pandu dan pande anak kembar",
ansSel: ["Pandu dan pande saudara sepupu", "Pandu dan pande kakak beradik","Pandu dan pande bersahabat dekat"]
},
{
ques: "Pada saat terkena cairan spirtus atau bensin, biasanya terasa dingin bersamaan dengan menguapnya cairan tersebut dari kulit tubuh. Hal ini disebabkan karena ….",
ans: "pada waktu spirtus menguap memerlukan panas yang diambil dari kulit tubuh",
ansSel: ["pirtus atau bensin cenderung mencair", "pirtus atau bensin cenderung menguap","pada waktu spirtus mencair tidak memerlukan panas yang diambil dari kulit tubuh"]
},
{
ques: "Perhatikan puisi di bawah ini<br> <strong><center>Sahabat</center></strong><br>Saat aku mulai mengerti hidup <br> Aku butuh seorang sahabat<br> Yang selalu ada di dekatku <br> Saat jantung berdetak <br> Sampai mata tertutup <br> Aku akan tertawa dan menangis bersama <br> Tak ada kata putus <br> Meski masa akan terhapus<br> Yakinlah hati kita tetap menyatu <br> Sumber : Bravo, vol. 4/no. 54/Juli 2011 <br> Apabila puisi di atas diubah kedalam prosa akan menjadi …",
ans: "Sahabat adalah orang yang selalu ada didekatku sejak hidup sampai mati. Persahabatan tidak mengenal kata putus dan hati dua orang sahabat pasti akan menyatu.",
ansSel: ["Sahabat selalu ada saat marah, sedih, senang, sial, dan saat kita membutuhkannya. Tiada kata yang lebih indah dari sebuah persahabatan", "Sahabat yakin dapat membantu kita kapan pun kita membutuhkannya, karena itulah guna sorang sahabat.","Apabila kita mempunyai sahabat, kita harus bisa menjaganya karena hanya sahabat yang bisa membantu."]
},

{
ques: "Perhatikan puisi di bawah ini<br> <strong><center>Sahabat</center></strong><br>Saat aku mulai mengerti hidup <br> Aku butuh seorang sahabat<br> Yang selalu ada di dekatku <br> Saat jantung berdetak <br> Sampai mata tertutup <br> Aku akan tertawa dan menangis bersama <br> Tak ada kata putus <br> Meski masa akan terhapus<br> Yakinlah hati kita tetap menyatu <br> Sumber : Bravo, vol. 4/no. 54/Juli 2011 <br>  Kata mata tertutup dalam puisi di atas bermakna …",
ans: "Meninggal",
ansSel: ["Mengantuk", "Tidur","Pergi"]
},
{
ques: "Ali rajin belajar. <br>Ali menjadi juara kelas. <br> Kedua kalimat tersebut jika disusun  menjadi kalimat majemuk adalah ….",
ans: "Ali rajin belajar sehingga menjadi juara kelas.",
ansSel: ["Ali rajin belajar jika menjadi juara kelas.", "Ali rajin belajar ketika menjadi juara kelas.","Ali rajin belajar sedangkan menjadi juara kelas."]
},
//16-20
{
ques: "…. aku rajin belajar, aku akan meraih nilai ujian tinggi. <br>Kata hubung yang tepat untuk melengkapi kalimat di atas adalah ….",
ans: "Seandainya",
ansSel: ["Setelah", "Seolah-olah","Supaya"]
},

{
ques: "Untuk membuka gambar gunakan koneksi internet! <br> <img src=http://1.bp.blogspot.com/-vIPAoiYnwF8/VkWW_gSQmmI/AAAAAAAABgc/CIylsIf1Ywo/s320/surat.PNG> <br> Kalimat yang tepat untuk melengkapi surat undangan tersebut adalah ….",
ans: "Memberikan pendapat dalam karyawisata nanti.",
ansSel: ["Mengizinkan anak Bapak/Ibu untuk ikut karyawisata.", "Ikut serta dalam  kegiatan karyawisata tersebut.","Menjaga karyawisata tersebut agar berjalan dengan aman."]
},

{
ques: " ... Ulangan tersebut akan dilaksanakan pada hari Senin tanggal 9 Maret 2014. Materi yang akan diujikan adalah BAB VII–IX. Semua siswa kelas VI harap mempersiapkan diri.<br>Kalimat yang tepat untuk mengawali pengumuman di atas adalah   ...",
ans: "Diberitahukan kepada siswa kelas VI bahwa akan diadakan ulangan IPA.",
ansSel: ["Diadakan ulangan IPA materi BAB VII–IX.", "Diberitahukan kepada siswa kelas VI bahwa akan diadakan ulangan.","Ulangan IPA dilaksanakan pada Hari Senin tanggal 9 Maret 2014."]
},

{
ques: "Pak Jumali akan mendonorkan darahnya dan harus mengisi formulir terlebih dahulu. Beliau berprofesi sebagai guru, lahir di Surabaya pada tanggal 5 Maret 1965. Beragama Islam dan bertempat tinggal di Jl. Asem III-A / 24 Surabaya. Telah menyelesaikan kuliahnya pada tahun 2000 dan memiliki gelar sebagai Sarjana Pendidikan. Sudah menikah, bergolongan darah AB.<br>Saat mengisi formulir donor darah, masih ada data yang kosong. Seharusnya di isi...",
ans: "Laki-laki",
ansSel: ["Telah menikah", "AB","48 tahun"]
},

{
ques: "Bacalah Pantun berikut !<br>Burung pungguk terbang jauh<br>Hinggap di dahan mencari makan <br> … <br>… <br>Larik pantun di atas yang tepat untuk melengkapi bagian isi adalah …",
ans: "Hidup jangan mencari musuh<br>Lebih baik mencari kawan",
ansSel: ["Jangan suka membuat gaduh <br>Karena ayah ibu pasti marah", "Awas jangan mudah terpengaruh <br> Karena kamu akan tertipu","Kalau kamu suka tantangan <br>Lebih baik keluar rumah "]
},

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! untuk membuka gambar, gunakan koneksi internet atau data mobile</justify>",
intro: "SOAL UJIAN NASIONAL SEKOLAH DASAR",
allRandom: true,
title: "<b>BAHASA INDONESIA PAKET A</b>"
};
$("#quizArea").jQuizMe(quiz, options);
});

