
$( function($){
var quiz = {
multiList: [
//11-15
{
ques: "Jika kita memanaskan mentega, maka mentega akan menjadi cair. Hal ini menunjukkan perubahan wujud yang disebut  ....",
ans: "mencair",
ansSel: ["membeku", "menguap","mengembun"]
},
{
ques: "Pada saat terkena cairan spirtus atau bensin, biasanya terasa dingin bersamaan dengan menguapnya cairan tersebut dari kulit tubuh. Hal ini disebabkan karena ….",
ans: "pada waktu spirtus menguap memerlukan panas yang diambil dari kulit tubuh",
ansSel: ["pirtus atau bensin cenderung mencair", "pirtus atau bensin cenderung menguap","pada waktu spirtus mencair tidak memerlukan panas yang diambil dari kulit tubuh"]
},
{
ques: "Perpindahan panas pada saat kita berjemur di bawah matahari, yaitu … ",
ans: "radiasi",
ansSel: ["konveksi", "konduksi","aliran"]
},

{
ques: "Pada saat kita menyeterika baju, maka supaya tidak panas sebaiknya kita memegang bagian yang atas setrika. Bagain tersebut terbuat dari bahan ....",
ans: "isolator",
ansSel: ["konduktor", "semikonduktor","superkonduktor"]
},
{
ques: "Sel surya menyerap energi yang berasal dari ....",
ans: "sinar matahari",
ansSel: ["air terjun", "panas bumi ","angin"]
},
//16-20
{
ques: "Sebelum kita memasuki gua, sebaiknya kita harus mengetahui panjang gua tersebut supaya kita tidak tersesat di dalamnya. Cara yang tepat untuk mengetahui panjang gua dengan menggunakan sifat bunyi, yaitu ….",
ans: "pemantulan",
ansSel: ["gaun", "perambatan","gema "]
},

{
ques: "Pada saat kamu pergi ke sekolah, ibumu hendak mengatarmu dengan mobil meskipun jarak rumah dengan sekolahmu dekat. Karena ibu ada acara mendadak, kemudia ia tidak bisa mengantarkan kamu ke sekolah.  Kemudian kamu pergi ke sekolah menggunakan sepeda ontel. Kasus ini menunjukkan bahwa kamu telah melakukan penghematan …..",
ans: "bensin",
ansSel: ["energi kinetic", "biaya sekolah","energi potensial"]
},

{
ques: "Terjadinya siang dan malam akibat dari ….",
ans: "rotasi bumi",
ansSel: ["rotasi bulan", "revolusi bumi","revolusi bulan"]
},

{
ques: "Bumi berevolusi mengelilingi matahari selama ….",
ans: "365,25 hari",
ansSel: ["366 hari", "365,5 hari","365 hari"]
},

{
ques: "Planet ini tampak sangat indah. Mempunyai cincin yang mengelilingi planet itu. Planet tersebut adalah ….",
ans: "Saturnus",
ansSel: ["Mars ", "Uranus","Yupiter"]
},
//11-15
{
ques: "Gejala-gejala penyakit berikut harus diwaspadai karena merupakan gejala terserang penyakit influenza, yaitu ....",
ans: "demam, sakit kepala, dan hidung berlendir",
ansSel: ["bintik merah di kulit dan badan lemas", "mata berkunang-kunang dan badan lemas","mual, perut kembung, dan susah buang air"]
},
{
ques: "Contoh benda yang mengalami perubahan wujud secara menyublim adalah ....",
ans: "kapur barus",
ansSel: ["air", "spiritus","lilin"]
},
{
ques: "Perubahan wujud benda dapat dimanfaatkan dalam kehidupan sehari-hari, seperti dicontohkan oleh peristiwa penguapan berikut, yaitu ....",
ans: "pembuatan garam dengan bahan baku air laut",
ansSel: ["menutup makanan untuk menghindari bau yang berlebihan", "membuat patung dari bahan baku lilin","proses pembuatan es krim"]
},

{
ques: "Dalam kaleng kemasan parfum atau kaleng cat semprot (pilok), adakalanya tertulis “jangan dibuang  ke tempat pembakaran sampah” atau ditempatkan di tempat yang dekat api. Hal ini disebabkan ....",
ans: "jika dibakar atau dikenai panas tinggi akan mencemari lingkungan",
ansSel: ["jika kaleng terkena panas tinggi akan menimbulkan ledakan yang berbahaya", "sisa-sisa parfum atau cat jika dibakar akan mengeluarkan aroma menyengat","jika kaleng terbakar ajab mengeluarkan bahan beracun"]
},
{
ques: "Sepotong besi panjangnya 30 cm. Besi itu dipanaskan di salah satu ujungnya. Lama-kelamaan, bagiann ujung besi lainnya juga terkena panas. Perpindahan panas pada peristiwa tersebut terjadi secara ....",
ans: "konduksi",
ansSel: ["konveksi", "radiasi","konvergensi"]
},
//16-20
{
ques: "Energi alternatif tersedia di sekitar kita. Salah satu contoh pemanfaatannya adalah ....",
ans: "angin untuk pembangkit listrik",
ansSel: ["bensin untuk bahan baker kendaraan", "solar untuk bahan baker mesin-mesin pabrik","gas untuk keperluan memasak di rumah"]
},

{
ques: "Sebuah peti besar dan sangat berat hendak dinaikkan dari lantai satu ke lantai dua di suatu gedung bertingkat. Pesawat sederhana yang tepat untuk digunakan mengangkat peti tersebut adalah ....",
ans: "bidang miring",
ansSel: ["pengungkit", "katrol","roda"]
},

{
ques: "Untuk menghasilkan air dalam memenuhi kebutuhan rumah tangga, banyak orang menggunakan pompa air listrik. Agar penggunaan energi listrik lebih hemat, usaha yang dapat dilakukan adalah ....",
ans: "membuat bak penampungan air sebelum digunakan",
ansSel: ["mengoperasikan pompa air setiap membutuhkan air", "menggunakan pompa air listrik pada malam hari saja","membuat resapan air di halaman rumah"]
},

{
ques: "Biodiesel (biosolar) merupakan pemanfaatan salah satu jenis sumber daya alam, yaitu sumber daya alam ....",
ans: "tumbuhan",
ansSel: ["hewan", "fosil","anorganik"]
},

{
ques: "Salah satu kegiatan yang dapat merusak kelestarian sumber daya alam adalah ....",
ans: "membiarkan kebun ditumbuhi berbagai macam tumbuhan liar",
ansSel: ["mengurangi penggunaan plastic untuk keperluan sehari-hari", "mengolah sampah menjadi pupuk atau bahan kerajinan tangan","menggunakan racun/insektisida untuk membasmi hama tanaman"]
},
//11-15
{
ques: "Penyakit aids merupakan jenis penyakit yang menular. Salah satu cara mencegah penularan penyakit ini adalah ….",
ans: "Senantiasa menggunakan jarum suntik yang baru dan steril",
ansSel: ["Menghidari percikan ludah penderita", "Tidak bergaul dengan penderita","Tidak semeja makan dengan penderita"]
},
{
ques: "Perhatikan fungsi bagian tumbuhan berikut! <br>1.Pengangkut air dan mineral dari akar ke daun, buah, dan bunga.<br>2.Menyerap air dan mineral dari dalam tanah.<br>3.Tempat tumbuhnya daun, bunga, dan buah.<br>4.Bernapas <br> Fungsi batang ditunjukkan oleh pernyataan nomer ….",
ans: "1) dan 3)",
ansSel: ["1) dan 2)", "2) dan 3)","2) dan 4)"]
},
{
ques: "Berikut contoh simbiosis mutualisme adalah ....",
ans: "hubungan antara lebah dan bunga",
ansSel: ["hubungan antara tumbuhan anggrek dan pohon", "hubungan antara tumbuhan tali putri dan tumbuhan pagar","hubungan antara manusia dan cacing perut"]
},

{
ques: "Berikut alur rantai makanan  yang benar adalah ....",
ans: "tumbuhan →  belalang → katak  → ular",
ansSel: ["belalang →  katak → ulat  → tumbuhan", "tumbuhan  → belalang →  ular →  katak","belalang →  tumbuhan → katak  → ular"]
},
{
ques: "Perhatikan rantai makanan di bawah ini! <br> Padi  →  burung  →  musang  →  elang  →  pengurai <br> Berdasarkan rantai makanan di atas, musang berperan sebagai ….",
ans: "Konsumen II",
ansSel: ["Konsumen I", "Produsen","Konsumen III"]
},
//16-20
{
ques: "Perhatikan gambar hewan laut berikut! <br> <img src=http://4.bp.blogspot.com/-oO_2xazO4WY/Vjswjvc-Q4I/AAAAAAAABgM/ATpQHVgBXzY/s1600/26.png> <br> Hewan laut tersebut untuk menghilangkan jejak dengan mengeluarkan …",
ans: "tinta",
ansSel: ["racun", "air","bau"]
},

{
ques: "Perubahan wujud di bawah ini yang disebut dengan peristiwa menyublim adalah ....",
ans: "kamper di lemari pakaian habis",
ansSel: ["mentega dipanaskan", "terjadinya kabut di daerah pegunungan","pakaian basah menjadi kering"]
},

{
ques: "Kegiatan yang memanfaatkan proses perubahan wujud benda cair menjadi padat adalah ….",
ans: "Air di dalam freezer lemari es",
ansSel: ["Mentega dipanaskan", "Lilin yang dipanaskan","Terjadinya kabut di daerah pegunungan"]
},

{
ques: "Jenis perpindahan panas pada saat kita memegang panci yang dipanaskan adalah ....",
ans: "konduksi",
ansSel: ["radiasi", "konveksi","aliran"]
},

{
ques: "Besi yang diletakkan pada tempat yang memiliki udara yang lembab akan mengalami ....",
ans: "perkaratan",
ansSel: ["pembakaran ", "pendinginan","pembusukkan"]
},

//11-15
{
ques: "Akhir­akhir ini banyak sekali bencana alam yang terjadi di Indonesia. Contoh gunung meletus di Yogyakarta. Dampak positif yang ditimbulkan akibat gunung meletus adalah ….",
ans: "abu vulkanik dapat menjadi subur",
ansSel: ["runtuhnya rumah-rumah", "rusaknya ekosistem sawah","terjadi awan panas yang menyembur ke udara"]
},
{
ques: "Urutan planet-planet mulai dari yang terdekat dengan matahari adalah ....",
ans: "Merkurius-Venus-Bumi- Mars",
ansSel: ["Merkurius-Bumi-Mars- Venus", "Merkurius-Mars-Venus- Bumi","Merkurius-Bumi-Mars- Neptunus"]
},
{
ques: "Jenis sumber daya alam yang berasal dari tumbuhan purba yang telah mati berjuta-juta tahun yang lalu dan banyak digunakan sebagai bahan bakar untuk keperluan industri dan rumah tangga adalah ....",
ans: "minyak bumi",
ansSel: ["batubara", "emas dan perak","besi dan timah"]
},

{
ques: "Pada malam hari setelah belajar, Andika mematikan lampu yang besar, dan ia hanya menyalakan lampu yang kecil. Berkaitan dengan penghematan energi, tindakan tersebut bermanfaat untuk ….",
ans: "Menghemat penggunaan energi listrik",
ansSel: ["Menjaga kesehatan mata Andika", "Memudahkan Andika tidur","Mengurangi nyamuk yang dating"]
},
{
ques: "Benda-benda yang prinsip kerjanya menggunakan gaya pegas adalah ….",
ans: "jungkat-jungkit dan panah",
ansSel: ["ketepel dan panah", "gunting dan engsel","katrol dan roda"]
},
//16-20
{
ques: "Energi yang terdapat pada inti atom merupakan energy kimia yang dapat berfungsi untuk menghasilkan energi ….",
ans: "nuklir",
ansSel: ["listrik", "kimia","cahaya"]
},

{
ques: "Salah satu manfaat bunyi pantul bagi hewan kelelawar adalah ….",
ans: "menghindari dinding penghalang ketika terbang di malam",
ansSel: ["mengukur panjang gua", "mendeteksi keberadaan ikan","mendeteksi keberadaan mangasanya"]
},

{
ques: "Jenis perpindahan panas pada saat kita memegang panci yang dipanaskan adalah ....",
ans: "konveksi",
ansSel: ["radiasi", "konduksi","aliran"]
},

{
ques: "Besi yang diletakkan pada tempat yang memiliki udara yang lembab akan mengalami ....",
ans: "perkaratan",
ansSel: ["pembakaran", "pendinginan","pembusukkan"]
},

{
ques: "Kegiatan penebangan pohon dihutan akan menyebabkan ....",
ans: "erosi",
ansSel: ["hutan menjadi produktif", "cadangan air tanah tetap","suplai karbon dioksida berkurang"]
},

//11-15
{
ques: "Proses yang terjadi pada organ pernafasan yang disebut alveolus adalah….",
ans: "Pertukaran oksigen dan karbondioksida",
ansSel: ["Tempat keluarnya karbondioksida", "Tempat masuknya oksigen","Proses oksidasi"]
},
{
ques: "Gunakan Koneksi Internet Untuk Melihat Gambar Lebih Jelas! <br> <img src=http://4.bp.blogspot.com/-tkadHwB8r7c/Vk695FPkgtI/AAAAAAAABhY/RgaS0qSC-j4/s1600/dahi.png> <br> Dari gambar tersebut yang menunjukkan tulang dahi adalah....",
ans: "1",
ansSel: ["2", "3","4"]
},
{
ques: "Kalsium merupakan zat gizi yang penting bagi tubuh. Salah satu fungsi kalsium adalah….",
ans: "Membantu pembentukan tulang dan gigi",
ansSel: ["Meningkatkan daya tahan tubuh", "Mencegah penyakit gondok","Mencegah anemia"]
},

{
ques: "Seorang perempuan pada masa puber sudah mulai memproduksi sel telur. Kemampuan ini ditandai oleh ciri perkembangan fisiknya yaitu ...",
ans: "Mengalami menstruasi",
ansSel: ["Payudara membesar", "Tumbuh rambut disekitar ketiak","Pinggulnya bertambah besar dan lebar"]
},
{
ques: "Penyakit panu disebabkan oleh jamur yang tumbuh dan berkembang pada kulit. Penyakit ini dapat dicegah dengan cara",
ans: "Tidak memakai pakaian bergilir",
ansSel: ["Menggunakan masker", "Tidak menggunakan jarum suntik bekas","Tidak menggunakan alat makan yang sama"]
},
//16-20
{
ques: "Sifat- sifat bahan berikut yang merupakan sifat kain wol adalah….",
ans: "Menghangatkan tubuh",
ansSel: ["Menyerap keringat", "Tahan terhadap air","Jika disentuh terasa halus"]
},

{
ques: "Pada saat kamu pergi ke sekolah, ibumu hendak mengatarmu dengan mobil meskipun jarak rumah dengan sekolahmu dekat. Karena ibu ada acara mendadak, kemudia ia tidak bisa mengantarkan kamu ke sekolah.  Kemudian kamu pergi ke sekolah menggunakan sepeda ontel. Kasus ini menunjukkan bahwa kamu telah melakukan penghematan …..",
ans: "bensin",
ansSel: ["energi kinetic", "biaya sekolah","energi potensial"]
},

{
ques: "Seseorang tukang bangunan sedang kesulitan untuk memasukan sebuah logam berbentuk tabung kedalam tabung logam lain yang berdiameter sama. Cara yang paling mudah agar logam tersebut dapat dimasukkan ke logam lain adalah….",
ans: "Memanaskan salah satu logam sehingga memuai",
ansSel: ["Mendinginkan salah satu logam sehingga menyusut", "Memberikan jarak untuk tempat memuai","Memanaskan agar mencair"]
},

{
ques: "Gunakan Koneksi Internet Untuk Melihat Gambar Lebih Jelas! <br> <img src=http://3.bp.blogspot.com/-vi_dAzH3VD8/Vk7AB9zLryI/AAAAAAAABhk/iD6TqpCSCJs/s1600/biola.png> <br> Gaya yang dimanfaatkan seperti gambar tersebut adalah….",
ans: "Gaya gesek",
ansSel: ["Gaya dorong", "Gaya tarik","Gaya tarik"]
},

{
ques: "Gunakan Koneksi Internet Untuk Melihat Gambar Lebih Jelas ! <br> <img src=http://1.bp.blogspot.com/-8ulPz0GidjM/Vk7AzKA8-YI/AAAAAAAABhs/yp9IH5WeCfY/s1600/bunyi.png> <br> Sumber bunyi alat musik pada gambar tersebut ditunjukkan oleh nomor….",
ans: "1",
ansSel: ["2 ", "3","4"]
},

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! <br> Gunakan Koneksi Internet Apabila Gambar Tidak Terlihat Jelas</justify>",
intro: "Soal UN SD - IPA PAKET TRY OUT B",
allRandom: true,
title: "Soal UN SD - IPA <br>"
};
$("#quizArea").jQuizMe(quiz, options);
});