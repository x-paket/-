
$( function($){
var quiz = {
multiList: [
//1-5 MTK 2 TH 2012-2013
{
ques: "4.506 + 13.035 – 11 .491 = ....",
ans: "6.050",
ansSel: ["6.150", "6.090","6.020"]
},
{
ques: "6.048 : 16 x 2 = ....",
ans: "756",
ansSel: ["378 ", "336","189"]
},
{
ques: "(-23) – 15 + 9 = ....",
ans: "-29",
ansSel: ["1 ", "17","29"]
},
{
ques: "Sebuah perusahaan ekspor ikan mempunyai ruang pendingin. Suhu di dalam ruangan tersebut –12oC. Saat ikan akan dikirim suhu dinaikan 8oC. Jika suhu di luar ruangan 26oC, selisih suhu di luar ruangan dan di dalam ruangan pendingin setelah dinaikkan adalah ....",
ans: "30oC",
ansSel: ["-30oC", "22oC","24oC"]
},
{
ques: "Pak Mardi menyiapkan 12 karung beras untuk bantuan bencana alam. Setiap karung berisi 30 kg. Beras tersebut akan dipindahkan ke dalam kantong plastik. Setiap kantong plastik memuat 5 kg beras. Banyak kantong yang dibutuhkan Pak Mardi adalah ....",
ans: "72",
ansSel: ["62", "47","37"]
},
//6-10
{
ques: "23,16 – 8,4 = ....",
ans: "14,76",
ansSel: ["15,12", "22,32 ","31,56"]
},
{
ques: "Di pasar ibu membeli 5,75 kg gula dan kg tepung terigu. Dalam perjalanan pulang ibu singgah ke rumah nenek untuk memberikan2kg gula yang dibelinya. Berat belanjaan ibu sekarang ....",
ans: "4 kg",
ansSel: ["9 kg", "7,5 kg","2 kg"]
},
{
ques: "Pak Badu membeli sebidang tanah seharga Rp20.000.000,00. Tanah itu dijual dan mendapat untung 15%, keuntungan Pak Badu adalah ....",
ans: "Rp3.000.000,00",
ansSel: ["Rp2.000.000,00", "Rp23.000.000,00","Rp27.500.000,00"]
},
{
ques: "Kelipatan Persekutuan Terkecil (KPK) dari 24,36,dan 48 adalah ....",
ans: "l44",
ansSel: ["72", "12","6"]
},
{
ques: "Adi menabung setiap 4 hari sekali dan Beni setiap 6 hari sekali. Jika pada tanggal 20 April mereka rnenabung bersama-sama, maka mereka akan menabung bersama-sama lagi pada tanggal .... ",
ans: "2 Mei",
ansSel: ["3 Mei", "4 Mei","1 Mei"]
},
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

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! <br> untuk membuka gambar, gunakan koneksi internet atau data mobile</justify>",
intro: "Soal UN SD - MATEMATIKA E",
allRandom: true,
title: "Soal UN SD - MATEMATIKA <br>"
};
$("#quizArea").jQuizMe(quiz, options);
});