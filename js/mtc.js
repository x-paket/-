
$( function($){
var quiz = {
multiList: [
//1-5 MTK 2 TH 2012-2013
{
ques: "Hasil dari 25 x 4 – 18 : 6 =...",
ans: "97",
ansSel: ["103", "75","25"]
},
{
ques: "Dani mempunyai 65 kelereng. Ketika bermain kalah 25. Kemudian Dani membeli lagi 15 kelereng, maka jumlah kelereng Dani sekarang adalah....",
ans: "55",
ansSel: ["40", "25","30"]
},
{
ques: "Hasil dari -25 – (-35) + 45 adalah.....",
ans: "55",
ansSel: ["105", "15","-15"]
},
{
ques: "Jarak pada peta kota Surabaya dan kota Kediri adalah 9 cm. Jika skala peta itu 1  :  2.000.000, maka jarak sebenarnya antara kota Surabaya dan kota Kediri adalah.....km",
ans: "180",
ansSel: ["90", "18","9"]
},
{
ques: "Faktor persekutuan terbesar (FPB) dari 80 dan 120 adalah....",
ans: "23 x 5 ",
ansSel: ["22 x 3 x 5", "22 x 32 x 5","23 x 3 x 5"]
},
//6-10
{
ques: "Kelipatan persekutuan terkecil (KPK) dari 28, 36, dan 72 adalah....",
ans: "504",
ansSel: ["454", "252","108"]
},
{
ques: "Petugas jaga di 3 pos ronda perumahan Pondok Jati memukul kentongan secara bersamaan pada pukul 19.30, selanjutnya petugas pos ronda A memukul kentongan setiap 15 menit, pos ronda B setiap 30 menit, dan pos ronda C setiap 45 menit. Mereka memukul kentongan secara bersamaan kembali pada pukul .....",
ans: "21.00 ",
ansSel: ["20.15", "19.45","20.00"]
},
{
ques: "Seorang donatur akan membagikan 36 tas dan 48 baju kepada beberapa anak yatim piatu, setiap anak mendapat jenis barang yang sama banyak. Banyak anak paling banyak yang menerima bagian adalah...",
ans: "12",
ansSel: ["24", "6","4"]
},
{
ques: "Hasil dari 352<sup>2</sup> + 302<sup>2</sup>  adalah.....",
ans: "2.125 ",
ansSel: ["5.125", "725","1.125"]
},
{
ques: "Hasil dari √ 21.952  =.....",
ans: "28",
ansSel: ["18", "22","32"]
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

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! <br> untuk membuka gambar, gunakan koneksi internet atau data mobile</justify>",
intro: "Soal UN SD - MATEMATIKA C ",
allRandom: true,
title: "Soal UN SD - MATEMATIKA <br>"
};
$("#quizArea").jQuizMe(quiz, options);
});