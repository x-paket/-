
$( function($){
var quiz = {
multiList: [
//1-5 MTK 2 TH 2012-2013
//11-15
{
ques: "Faktor Persekutuan Terbesar (FPB) dari 30, 45, dan 90 adalah ….",
ans: "15",
ansSel: ["30", "10","5"]
},
{
ques: "Pak Ali rnembeli 75 buku tulis dan 45 pensil yang akan diberikan kepada anak yatim. Barang tersebut akan dikemas dengan jenis dan jumlah yang sarna. Kemasan terbanyak yang bisa diberikan adalah .... ",
ans: "15",
ansSel: ["120", "225","9"]

},
{
ques: "Ibu membeli 2kg beras seharga Rp12.000,00. Jika ibu mernbeli 6 kg beras, maka ibu harus membayar ..,.",
ans: "Rp36,000,00",
ansSel: ["Rp48.000,00", "Rp72.000,00","Rp96.000,00"]

},
{
ques: "Pada Peta, jarak kota Surabaya dan Ngawi 15 cm. Peta tersebut berskala I :1.000.000. Jarak sebenarnya kedua kota itu adalah ... km.",
ans: "150",
ansSel: ["1.500", "15.000","115"]
},
{
ques: "Diketahui luas sebuah persegi 1.296 cm2 .Panjang sisinya adalah …cm.",
ans: "34",
ansSel: ["361", "324","648"]
},
//16-20
{
ques: "Umur adik Budi sekarang 2 tahun 5 bulan. Dia mulai dapat berjalan sejak usia 13 bulan. Jadi adik Budi sudah bisa berjalan selama .…",
ans: "16 bulan",
ansSel: ["15 bulan", "29 bulan","30 bulan"]
},

{
ques: "Ayah membeli tali 8 m, digunakan untuk tali jemuran 45 dm dan 150 cm untuk tali pagar. Sisa tali ayah adalah ... m.",
ans: "2",
ansSel: ["3", "3,35","3,5"]
},

{
ques: "Sebuah truk membawa bantuan korban lahar dingin di Yogyakarta terdiri dari 4,5 ton beras, 5 kuintal jagung dan 250 kg gula. Berat total muatan truk tersebut adalah …kg.",
ans: "5.250",
ansSel: ["1.200", "5.700","45.750"]
},
{
ques: "Pak Budi mempunyai tanah seluas 2,5 ha. Dijual 600 m2. Disumbangkan untuk panti asuhan seluas 1.800 m2. Sisa tanah pak Budi adalah .... m2",
ans: "22.600",
ansSel: ["1.100", "23.400","23.600"]
},

{
ques: "Satu galon air minum berisi 19 liter. Air tersebut sudah digunakan untuk minum 7.500 ml. Sisa air dalam galon adalah ... liter.",
ans: "11,5",
ansSel: ["10,5", "5,5","12,5"]
},

//11-15
{
ques: "Dalam gedung pertemuan terdapat 36 meja dan 90 kursi. Meja dan kursi tersebut disusun menjadi beberapa kelompok. Jika setiap kelompok terdiri dari meja dan kursi yang berjumlah sama, maka paling banyak kelompok yang dapat dibentuk adalah . . . .",
ans: "18",
ansSel: ["12", "24","30"]
},
{
ques: "Hasil dari 422<sup>2</sup> - 202<sup>2</sup> = . . . .",
ans: "1.364",
ansSel: ["1.624", "1.724","1.264"]
},
{
ques: "Sebuah bak mandi berbentuk kubus berisi penuh dengan air. Jika volume bak mandi 42.875 dm3. Panjang rusuk bak mandi tersebut adalah . . . dm",
ans: "35",
ansSel: ["65", "75","85"]
},

{
ques: "Fatma belajar Matematika 1 jam 15 menit. Kemudian belajar PKn 80 menit. Jika Fatma selesai belajar pada pukul 21.00, maka ia memulai belajar pada pukul . . . . ",
ans: "18.25",
ansSel: ["19.05", "19.25","19.35"]
},
{
ques: "Irma membuat roti membutuhkan  3,5 kg gula; 45 ons tepung terigu dan 250 gram mentega. Berat bahan seluruhnya yang dibutuhkan untuk membuat roti adalah ... kg",
ans: "8,25",
ansSel: ["10,5", "33","289,5"]
},
//16-20
{
ques: "Riza mengendarai mobil dari Surabaya menuju Madiun dengan kecepatan 70 km/jam. Jarak kedua kota tersebut adalah 245 km. Jika berangkat pukul 09.30, maka Riza tiba di Madiun pukul....",
ans: "13.00",
ansSel: ["12.00", "06.30","04.15"]
},

{
ques: "Suatu bangun datar mempunyai ciri-ciri sebagai berikut: <br>Mempunyai dua pasang sisi sejajar <br>Keempat sisinya sama panjang <br>Sudut-sudut yang berhadapan sama besar <br> Mempunyai dua buah diagonal berpotongan saling tegak lurus<br>Bangun tersebut adalah….",
ans: "belah ketupat",
ansSel: ["jajargenjang", "trapesium","bujur sangkar"]
},

{
ques: "Irfan memiliki kardus berbentuk balok dengan ukuran panjang 35 cm, lebar 20 cm, dan tinggi 18cm. Volume kardus tersebut adalah ...cm3.",
ans: "12.600",
ansSel: ["3.380", "73","292"]
},

{
ques: "Untuk membuka gambar gunakan koneksi internet! <br> <img src=http://3.bp.blogspot.com/-ZuhJgB5Ivlk/VlPe1ZxAd3I/AAAAAAAABiM/1rhdJrO61f0/s1600/diag.png> <br> Rata-rata nilai UTS dari diagram di atas adalah . . . .",
ans: "7,7",
ansSel: ["7,2", "8,1","8,2"]
},

{
ques: "Berikut adalah data berat badan sekelompok balita (kg):<br>22	   20	20	19	25	306  <br>28	   24	22	26	26	26 <br>Median data di atas adalah . . . .",
ans: "23",
ansSel: ["24,5", "27","27,5"]
},

//11-15
{
ques: "Sebuah bak mandi berbentuk kubus mempunyai volume 3.375 liter panjang rusuk bak mandi tersebut adalah......",
ans: "15 dm ",
ansSel: ["15 m", "25 dm","25 m"]
},
{
ques: "Jumlah umur kakek dan umur ayah adalah 1 abad 10 windu, umur bibi 5 lustrum. Jumlah umur mereka adalah..... tahun",
ans: "205 ",
ansSel: ["275", "250 ","200"]
},
{
ques: "Sebuah tangki mempunyai volume 250 dm3. Jika kosong kosong tersebut dialiri air dengan debit 50 liter/menit, maka waktu yang diperlukan untuk mengisi penuh bak mandi tersebut adalah.....menit",
ans: "5",
ansSel: ["50", "25","2,5"]
},

{
ques: "Ibu membeli 1,4 kg beras, 15 hg tepung terigu, dan 1,5 dag gula. Berat seluruh barang belanjaan ibu adalah......gram",
ans: "2.915 ",
ansSel: ["1.915", "4.915","3.915"]
},
{
ques: "Tyo mengendarai sepeda motor dengan kecepatan rata-rata 30 km/jam. Ia menempuh jarak 285 km. Jika ia berangkat pada pukul 06.00 WIB, maka ia akan sampai di tempat tujuan pada pukul....WIB",
ans: "15.30",
ansSel: ["16.25", "18.50","18.50"]
},
//16-20
{
ques: "Perhatikan sifat-sifat bangun datar di bawah ini!<br>Mempunyai dua sisi yang sama panjang <br>Mempunyai dua sudut yang sama besar <br>Mempunyai tiga buah sisi <br>Berdasarkan data diatas bangun datar tersebut adalah..." ,
ans: "segitiga sama kaki ",
ansSel: ["segitiga sama sisi", "Segitiga siku-siku","Segitiga sembarang"]
},

{
ques: "Untuk membuka gambar gunakan koneksi internet! <br> <img src=http://2.bp.blogspot.com/-H--Y3UQzda8/VlPqJx3a3QI/AAAAAAAABik/168IODDAias/s1600/lingkaran.png> <br>Luas daerah bangun di atas adalah....cm2",
ans: "942",
ansSel: ["628", "314","1.256"]
},

{
ques: "Untuk membuka gambar gunakan koneksi internet! <br> <img src=http://4.bp.blogspot.com/-2rBdFX3OeLg/VlPpS_uCshI/AAAAAAAABic/060Eo9sMKqA/s1600/g.png> <br> Gambar di atas merupakan jaring-jaring bangun....",
ans: "Prisma segitiga ",
ansSel: ["Limas segiempat", "Kerucut","Limas segitiga"]
},

{
ques: "Sebuah bak mandi berukuran panjang 1,5 m, lebar 9 dm, dan tinggi 50 cm. Jika bak mandi tersebut ¾ nya diisi air, maka volume air dalam bak tersebut adalah.......liter",
ans: "506,25 ",
ansSel: ["675", "168,75","337,5"]
},

{
ques: "Nilai ulangan Matematika Eka semester I adalah 5,  6,  9,  8,  5,  7,  7,5  8,5  9  dan  6.  <br>Nilai rata-rata ulangan Matematika Eka adalah . . .",
ans: "7,0",
ansSel: ["7,1", "7,5","8,2"]
},

//11-15
{
ques: "Hasil dari 242 – 152 adalah .....",
ans: "315",
ansSel: ["801", "351","810"]
},
{
ques: "Raja memiliki sebuah akuarium berbentuk kubus. Jika akuarium tersebut penuh berisi air dengan volume 216.000 cm3, maka tinggi akuarium tersebut adalah ...",
ans: "6 dm",
ansSel: ["600 dm", "60 dm","0,6 dm"]
},
{
ques: "Ibu pergi ke pasar 30 menit yang lalu dan akan tiba di rumah 90 menit lagi, sekarang pukul 07.30. Pukul berapa ibu tiba di rumah ?",
ans: "09.00",
ansSel: ["09.30", "08.30","08.00"]
},
{
ques: "Bibi Ria menuang kecap dari botol selama 60 detik. Volume kecap dalam botol adalah 100 ml. Debit aliran kecap dari botol adalah .....",
ans: "100 ml/menit",
ansSel: ["10 ml/detik", "10 ml/menit","100 ml/detik"]
},
{
ques: "Bu Sulastri mempunyai tanah seluas 5,5 hm2. Seluas 230 dam2 dari tanah tersebut ditanami bayam sedangkan sisanya ditanami kangkung. Berapa are luas tanah yang ditanami kangkung ?",
ans: "320 are",
ansSel: ["330 are", "220 are","230 are"]
},
//16-20
{
ques: "Sebuah mobil menempuh jarak sejauh 90 km. Kecepatan rata-rata 40 km/jam. Mobil tiba di tempat tujuan pada pukul 12.45. Pukul berapa mobil itu berangkat ?",
ans: "10.30",
ansSel: ["15.00", "11.30","15.00"]
},

{
ques: "Sebuah bangun datar memiliki sifat-sifat sebagai berikut :<br>Memiliki 2 simetri lipat <br>Memiliki simetri putar tingkat 2 <br>Keempat sisinya sama panjang <br>Sudut-sudut yang berhadapan sama besar <br> Bangun datar apakah yang dimaksud ?",
ans: "Layang – layang",
ansSel: ["Persegi Panjang", "Persegi","Belah Ketupat"]
},

{
ques: "Sebuah akuarium berukuran panjang 200 cm, lebar 1 m dan tingginya 150 cm. Jika akuarium tersebut akan diisi air hingga penuh, banyak air yang dibutuhkan adalah .....",
ans: "30 liter",
ansSel: ["3000 liter", "300 liter","30.000 liter"]
},
{
ques: "Harga beras per kg (dalam rupiah) 8 stand di pasar pegirian adalah sebagai berikut : <br> 7500	7700	7500	8500	8000	8500	9000 8300 <br> Rata-rata harga beras tersebut adalah .....",
ans: "8.125",
ansSel: ["8.500", "7.500","7.125"]
},

{
ques: "Median dari data 9, 8, 9, 5, 6, 8, 7, 6, 6 dan 5 adalah .....",
ans: "6,5",
ansSel: ["6", "7,5","7"]
},


],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! <br> untuk membuka gambar, gunakan koneksi internet atau data mobile</justify>",
intro: "Soal UN SD - MATEMATIKA TRY OUT B",
allRandom: true,
title: "Soal UN SD - MATEMATIKA <br>"
};
$("#quizArea").jQuizMe(quiz, options);
});
