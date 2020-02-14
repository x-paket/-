
$( function($){
var quiz = {
multiList: [
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

//11-15
{
ques: " Wabah demam berdarah di seputar wilayah Gresik memasuki fase krusial. Hingga kemarin jumlah pasien yang terjangkit belum turun. Kondisi ini pula yang membuat Pemkab merealisasikan program fogging di lokasi-lokasi rawan demam berdarah. Dalam program ini Pemkab mengalokasikan dana Rp 300 juta. <br> Pernyataan yang sesuai dengan paragraf di atas adalah ....",
ans: " Jumlah pasien penderita demam berdarah belum turun sehingga perlu dilakukan fogging",
ansSel: [" Wabah demam berdarah terjadi di seputar wilayah Surabaya dan sekitarnya", " Fogging tidak perlu dilakukan lagi, karena jumlah pasien sudah berkurang"," Pemkab mengalokasikan dana Rp 100 juta untuk melakukan fogging di Gresik"]
},
{
ques: " Wabah demam berdarah di seputar wilayah Gresik memasuki fase krusial. Hingga kemarin jumlah pasien yang terjangkit belum turun. Kondisi ini pula yang membuat Pemkab merealisasikan program fogging di lokasi-lokasi rawan demam berdarah. Dalam program ini Pemkab mengalokasikan dana Rp 300 juta. <br> Antonim kata rawan adalah ....",
ans: "Aman",
ansSel: ["Gawat", "Darurat","Tentram"]
},
{
ques: " Wabah demam berdarah di seputar wilayah Gresik memasuki fase krusial. Hingga kemarin jumlah pasien yang terjangkit belum turun. Kondisi ini pula yang membuat Pemkab merealisasikan program fogging di lokasi-lokasi rawan demam berdarah. Dalam program ini Pemkab mengalokasikan dana Rp 300 juta. <br> Kata krusial dalam paragraf di atas memilik arti ....",
ans: "Gawat / genting",
ansSel: ["Aman", "Awal","Tenang"]
},

{
ques: " Perhatikan pantun di bawah ini!<br>Anak kecil bermain bumbung<br>Ke dalam pasar cobalah cari<br> ........................ <br> ........................<br> Kalimat yang tepat untuk melengkapi pantun bagian isi adalah...",
ans: "Ketika kecil rajin belajar<br>Sesudah besar senanglah hati",
ansSel: ["Janganlah kita pergi ke pasar<br>Kalau tidak ingin membeli", "Cobalah kita bersabar<br>Nanti pasti bisa sendiri","Ketika kecil jangan kurang ajar <br>kelak besar tidak mandiri"]
},
{
ques: "         Awalnya usaha Pak Usman sangat maju. Karena banyak persaingan dagang yang lebih maju, usahanya jadi lesu. Lama-lama, semua barang dagangan dan tokonya dijual untuk menutupi utang-utangnya. <br> Ungkapan untuk keadaan tersebut adalah ....",
ans: "Gulung tikar",
ansSel: ["Banting tulang", "Angkat tangan","Ringan tangan"]
},
//16-20
{
ques: "Bacalah pantun berikut!<br>Anak ayam turun sepuluh <br> Mati satu tinggallah sembilan<br>Tuntutlah ilmu bersungguh-sungguh <br> Satupun jangan ketinggalan <br> Pesan yang terkandung dalam pantun di atas adalah ....",
ans: "Mecari ilmu harus bersungguh-sungguh",
ansSel: ["Mencari ilmu dengan santai", "Semua ilmu harus dicari","Semua ilmu pasti berguna"]
},

{
ques: "Untuk membuka gambar gunakan koneksi internet! <br> <img src=http://1.bp.blogspot.com/-UKVndAw-lX0/VkrQWTjaYRI/AAAAAAAABg8/V0yhW3hF4Qg/s1600/kerja.png> <br> 48. Paragraf yang tepat untuk gambar berikut adalah...",
ans: "Seluruh warga RT 01 sedang bergotong royong membersihkan lingkungan terutama sungai, agar terbebas dari banjir ",
ansSel: ["Warga kampung sedang menanam tanaman di pinggir kali untuk mencegah banjir", "Seluruh siswa kelas VI SD Sukar Maju bergotong royong membersihkan selokan air","Para pekerja bekerja keras menyelesaikan pembangunan tanggul sungai untuk mencegah banjir"]
},

{
ques: "<strong>Teks I </strong><br> Meski seabrek proyek perbaikan jalan dilakukan, jumlah jalan rusak di Surabaya masih cukup banyak. Bahkan, beberapa jalan utama yang baru saja diperbaiki, ternyata kini rusak lagi.<br><strong> Teks 2</strong><br> Saat ini jalur utama penghubung Gresik-Sidoarjo itu rusak parah. Kerusakan ini cukup mengejutkan. Sebenarnya jalur itu pernah mengalami kerusakan yang sama dan diperbaiki pertengahan 2011 silam. Namun kini kondisinya kembali rusak.<br>Persamaan tema kedua teks di atas adalah ....",
ans: "Kerusakan jalan",
ansSel: ["Perbaikan jalan utama", "Proyek perbaikan jalan","Jalur utama jalan"]
},

{
ques: " .... Indonesia merupakan negara yang subur, sehingga apapun yang kita tanam akan menghasilkan sesuatu yang bermanfaat bagi kehidupan. Padi menguning, hutan menghijau, dan kekayaan alam melimpah. <br> Kalimat yang tepat untuk melengkapi paragraf tersebut adalah ....",
ans: "Aku bangga dan senang memiliki tanah air Indonesia",
ansSel: ["Indonesia adalah negara yang subur dan makmur", "Keindahan alam Indonesia sangat membanggakan dunia","Cintailah hasil produk dalam negeri Indonesia"]
},

{
ques: "<em>Hari ini adalah hari Minggu. Pada hari ini ada kegiatan yang dilaksanakan di kampungku. .......................... . Kerja bakti ini wajib diikuti oleh seluruh warga, baik yang sudah dewasa atau yang masih remaja seperti aku. Ada yang membersihkan selokan, memotong ranting pohon, menyapu halaman dan jalan dan sebagainya. Karena itulah dalam lomba Green and Clean yang diselenggarakan Pemerintah Kota Surabaya, kampungku masuk 10 besar.</em> <br> Kalimat yang tepat untuk melengkapi paragraf tersebut adalah...",
ans: "Kegiatan tersebut adalah kerja bakti masal",
ansSel: ["Kegiatan hanya diikuti oleh orang dewasa", "Kegiatan tersebut hanya seminggu sekali","Aku mengikuti kegiatan itu sampai selesai"]
},
//11-15
{
ques: " <em><strong>Bacalah paragraf di bawah ini</strong> </em><br> Dampak radiasi nuklir tidak terjadi begitu saja saat terjadi ledakan atau kebocoran. Sebenarnya, secara alami tubuh manusia memiliki sistem kekebalan untuk melindungi diri dari kerusakan sel akibat radiasi maupun zat kimia berbahaya lainnya. Namun, radiasi pada tingkatan tertentu tidak bisa ditoleransi oleh tubuh. Inilah yang mengakibatkan berbagai dampak negatif radiasi nuklir.<br> <br>  Makna kalimat <em>Dampak radiasi nuklir tidak terjadi begitu saja saat terjadi ledakan atau kebocoran</em> adalah….",
ans: "Dampak radiasi nuklir tidak langsung terjadi saat ada ledakan atau kebocoran.",
ansSel: ["Dampak radiasi nuklir tidak dapat terjadi saat ada kebocoran.", "Radiasi nuklir terjadi ketika ada ledakan atau kebocoran .","Dampak radiasi nuklir sangat berbahaya ketika terjadi ledakan."]
},
{
ques: "<em><strong>Bacalah paragraf di bawah ini</strong> </em><br> Dampak radiasi nuklir tidak terjadi begitu saja saat terjadi ledakan atau kebocoran. Sebenarnya, secara alami tubuh manusia memiliki sistem kekebalan untuk melindungi diri dari kerusakan sel akibat radiasi maupun zat kimia berbahaya lainnya. Namun, radiasi pada tingkatan tertentu tidak bisa ditoleransi oleh tubuh. Inilah yang mengakibatkan berbagai dampak negatif radiasi nuklir.<br> <br>Makna kata <em><strong>radiasi</strong></em> dalam paragraf di atas adalah …",
ans: "Pancaran gelombang",
ansSel: ["Arus listrik", "Jaringan listrik","Hembusan udara"]
},
{
ques: "<em><strong>Bacalah paragraf di bawah ini</strong> </em><br> Dampak radiasi nuklir tidak terjadi begitu saja saat terjadi ledakan atau kebocoran. Sebenarnya, secara alami tubuh manusia memiliki sistem kekebalan untuk melindungi diri dari kerusakan sel akibat radiasi maupun zat kimia berbahaya lainnya. Namun, radiasi pada tingkatan tertentu tidak bisa ditoleransi oleh tubuh. Inilah yang mengakibatkan berbagai dampak negatif radiasi nuklir.<br> <br>16. Antonim kata <em>negatif</em> dalam paragraf di atas adalah …",
ans: "Positif",
ansSel: ["Posesif", "Selektif","Agresif"]
},

{
ques: "<em>Perhatikan ilustrasi berikut !</em><br> 	Biaya yang dikeluarkan keluarga Pak Doni untuk kebutuhan sehari-hari semakin besar. Akan tetapi, penghasilannya sebagai buruh pabrik tidak kunjung bertambah. Akhirnya, keluarga Pak Doni kesulitan dalam memenuhi kebutuhan.<br> <br>  Peribahasa yang tepat untuk ilustrasi di atas adalah …",
ans: "Besar pasak dari pada tiang.",
ansSel: ["Sekali mendayung, dua tiga pulau terlampaui.", "Bagai air di daunt alas.","Bagai telur di ujung tanduk."]
},
{
ques: "<em>Perhatikan ilustrasi berikut !</em><br>Roni adalah anak yang sangat baik. Dia senang membantu temannya yang sedang dalam kesulitan. Dia juga selalu membantu orang tuanya dalam mengerjakan pekerjaan rumah. <br> Ungkapan yang tepat untuk sifat Roni adalah …",
ans: "Ringan tangan",
ansSel: ["Main tangan", "Berpangku tangan","Sembunyi tangan"]
},
//16-20
{
ques: "<em><strong>Perhatikan teks di bawah ini !</strong></em><br> <center>Teks 1 </center><br>Liburan yang lalu, saya berlibur di rumah nenek. Di sana saya belajar menanam jagung di kebun nenek. Waktu saya akan pulang, tanaman jagung itu sudah tumbuh dengan subur. Saya senang sekali dan berpesan pada nenek agar menjaga tanaman jagung saya.<br> <center>Teks 2 </center> <br>Sayang sekali jika liburan tidak diisi dengan hal-hal yang menyenangkan. Aku mengisi liburan dengan berkunjung ke rumah nenek. Rumah nenek berada di desa sehingga aku dapat melakukan kegiatan yang tidak dapat dilakukan di kota, misalnya bermain di sawah, menanam padi, mandi di sungai, dan lainnya. <br> <br> Persamaan kedua teks tersebut adalah …",
ans: "Berlibur di rumah nenek",
ansSel: ["Main di sawah", "Liburan bersama keluarga","Menanam jagung"]
},

{
ques: "Dalam rangka memperingati hari pramuka, SD Sukamaju melaksanakan kegiatan Persami. Kegiatan diselenggarakan pada tanggal 13 dan 14 Agustus 2012. Kegiatan tersebut dimeriahkan dengan berbagai lomba, seperti mendirikan tenda, lomba baris-berbaris, lomba semapur, morse, api unggun, dan menjelajah alam. <br> <br Isi laporan tersebut adalah …",
ans: "Peringatan hari Pramuka di SD Sukamaju.",
ansSel: ["Kegiatan pramuka di SD Sukamaju.", "Kegiatan Persami dilaksanakan tanggal 13 dan 14 Agustus 2012.","Kegiatan Persami dimeriahkan dengan berbagai lomba."]
},

{
ques: " <em><strong>Bacalah kutipan cerita berikut !</strong></em> <br>Sudah satu bulan fani dan teman-temannya berlatih tari Melayu. Kini mereka sudah mahir. Mereka berharap dalam lomba nanti bisa menang. Akhirnya, saat perlombaan pun tiba. Fani dan teman-temannya dapat menampilkan gerakan yang gemulai. Riuh rendah sorakan penonton menyambut tarian mereka.<br>Simpulan isi cerita tersebut adalah …",
ans: "Pentas tari Fani dan teman-temannya mendapat sambutan dari penonton.",
ansSel: ["Fani dan teman-temannya berlatih tari Melayu selama satu bulan.", "Fani dan teman-temannya mengikuti lomba tari.","Fani dan teman-temannya memenangkan lomba tari."]
},

{
ques: "Dalam rangka memperingati hari pramuka, SD Sukamaju melaksanakan kegiatan Persami. <em>Kegiatan diselenggarakan pada tanggal 13 dan 14 Agustus 2012</em>. Kegiatan tersebut dimeriahkan dengan berbagai lomba, seperti mendirikan tenda, lomba baris-berbaris, lomba semapur, morse, api unggun, dan menjelajah alam. <br> <br> 26. Perbaikan kalimat laporan yang dicetak miring adalah..",
ans: "Kegiatan Persami diselenggarakan pada tanggal 13 dan 14 Agustus 2012.",
ansSel: ["Kegiatan Persami terselenggarakan pada tanggal 13 dan 14 Agustus 2012.", "Kegiatan Persami terselenggara pada tanggal 13 dan 14 Agustus 2012.","Kegiatan Persami diselenggara pada tanggal 13 dan 14 Agustus 2012."]
},

{
ques: "<em> Pada hari Saptu, 17 Nopember 2012</em> telah dilaksanakan pengamatan terhadap pertumbuhan tanaman bunga yang sudah ditanam sejak sebulan yang lalu. <br> <br> Perbaikan kata yang dicetak miring dalam laporan di atas adalah …",
ans: "Pada hari Sabtu, 17 November 2012",
ansSel: ["Pada hari Sabtu, 17 Nov 2012", "Pada hari Sabtu, 17 Nopember 2012","Pada hari Sabtu, 17 Nop 2012"]
},

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! <br> untuk membuka gambar, gunakan koneksi internet atau data mobile</justify>",
intro: "SOAL UJIAN NASIONAL SEKOLAH DASAR",
allRandom: true,
title: "<b>BAHASA INDONESIA PAKET TRY OUT B</b>"
};
$("#quizArea").jQuizMe(quiz, options);
});