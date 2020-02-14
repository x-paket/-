
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
{
ques: "Data umur siswa kelas VI SDN Perak Utara II sebagai berikut: <br> <em>10, 12, 11, 13, 13, 11, 12, 10, 12, 13, 14, 11, 12, 12, 13</em> <br> Median data tersebut adalah....",
ans: "12",
ansSel: ["11", "13","14"]
},
{
ques: "Data banyak buku di sebuah perpustakaan sebagai berikut:<br> Buku cerita ada 55 eksemplar, buku pelajaran ada 69 eksemplar, buku pengetahuan ada 30 eksemplar, dan majalah ada 75 eksemplar.<br> Modus dari buku di perpustakaan adalah....",
ans: "majalah",
ansSel: ["buku pelajaran", "buku Cerita","buku pengetahuan"]
},
{
ques: "Hasil dari 225 + 75 : 5 x 20 adalah ....",
ans: "525",
ansSel: ["725", "925","1.200"]
},
{
ques: "Pada pesta ulang tahun Rita, ayahnya mengundang 100 anak yatim. Ternyata ada 7 anak yatim yang tidak hadir. Jika biaya makan dan minum tiap anak Rp15.750,00, maka biaya keseluruhan untuk makan dan minum anak yatim adalah ...",
ans: "Rp1.464.750,00",
ansSel: ["Rp1.480.500,00", "Rp1.559.250,00","Rp1.685.250,00"]
},
{
ques: "Hasil dari 1.600 : 40 x (-24) – (-34) adalah ...",
ans: "-926",
ansSel: ["-994", "926","994"]
},
//6-10
{
ques: "Ibu membeli gula 2kg, digunakan membuat kue 0.5kg. Dua hari kemudian ibu membeli gula lagi1 kg. Maka gula yang dimiliki ibu sekarang adalah ... kg",
ans: "2,5kg",
ansSel: ["2kg", "0,5kg","1,5kg"]
},
{
ques: "Perbandingan berat badan Farid dan Gustom 6 : 4. Jika berat badan Gustom 24 kg, maka jumlah berat badan keduanya adalah . . . kg.",
ans: "40",
ansSel: ["60", "72","36"]
},
{
ques: "Faktor Persekutuan Terbesar (FPB) dari 126 dan 84 dalam bentuk faktorisasi prima adalah . . . . ",
ans: "2 x 3 x 7 2<sup>2</sup> x 32 x 7",
ansSel: [" 2<sup>2</sup> x 32 x 7", "2<sup>2</sup> x 3 x 7","2<sup>2</sup>x 32 x 7"]
},
{
ques: "Kelipatan Persekutuan Terkecil (KPK) dari 24, 48, dan 60 adalah . . . .",
ans: "240",
ansSel: ["120", "80","60"]
},
{
ques: "Irma, Atin dan Anissa mengikuti latihan renang di klub yang sama. Irma berlatih 3 hari sekali, Atin 6 hari sekali, dan Anissa 8 hari sekali. Jika pada tanggal 13 Februari 2012 mereka latihan bersama, maka mereka akan latihan bersama-sama lagi pada tanggal . . . . ",
ans: "8 Maret 2012",
ansSel: ["7 Maret 2012", "18 Maret 2012","24 Maret 2012"]
},

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

{
ques: "10.000 : 125 + ( 65 x 30 ) – 59 = .....",
ans: "1971",
ansSel: ["1917", "1179","1791"]
},
{
ques: "Pak Iswanto membeli 20 karung pupuk. Setiap karung berisi 25 kg pupuk. Apabila 8 karung pupuk telah digunakan, maka sisa pupuk Pak Iswanto ada .....",
ans: "300 kg",
ansSel: ["200 kg", "400 kg","500 kg"]
},
{
ques: "315 + ( - 65 ) : 13 – ( - 125 )  = .....",
ans: "435",
ansSel: ["345", "354","453"]
},
{
ques: "Bu Umi ingin membuat sirup, mula-mula Bu Umi membeli 3 kg Gula.Bu Umi membeli lagi  kg karena masih kurang Bu Umi membeli lagi  kg. Berapa kg jumlah gula yang akan dibuat sirup oleh Bu Umi ?",
ans: "4,50 kg",
ansSel: ["5,05 kg", "4,25 kg","4,05 kg"]
},
{
ques: "3 : 125 % x 0,8 = .....",
ans: "2,4",
ansSel: ["20,4", "2,45","24"]
},
//6-10
{
ques: "225 % ; 2,5 ;  ; <br> Urutan bilangan - bilangan diatas dari yang terkecil adalah .....",
ans: "; 225 % ; 2,5 ; ",
ansSel: ["; 2,5 ; 225 % ; ", "2,5  ;  ; 225 % ; ","2,5  ;  ; 225 % ; "]
},
{
ques: "KPK dari 72 dan 180 adalah .....",
ans: "360",
ansSel: ["180", "36","630"]
},
{
ques: "FPB dari 60, 180 dan 210 adalah .....",
ans: "30",
ansSel: ["1620", "60","1260"]
},
{
ques: "Pada suatu hari Ayik, Beril dan Candra bersamaan memotong rambutnya pada seorang tukang cukur. Ayik mencukur rambutnya setiap 30 hari di tempat itu. Beril mencukur rambutnya tiap 45 hari di tempat itu pula. Candra mencukur rambutnya setiap 60 hari. <br>Berapa hari lagi mereka bertiga bersamaan memotong rambut pada tukang cukur itu ?",
ans: "120",
ansSel: ["180", "45","90"]
},
{
ques: "Rafli mempunyai 32 kelereng merah, 48 kelereng kuning dan 56 kelereng hijau. Kelereng-kelereng tersebut akan dimasukkan dalam beberapa toples. Setiap toples berisi kelereng merah, kuning dan hijau sama banyak. Toples terbanyak yang dibutuhkan Rafli adalah .....",
ans: "8",
ansSel: ["16", "168","96"]
},

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! <br> untuk membuka gambar, gunakan koneksi internet atau data mobile</justify>",
intro: "Soal UN SD - MATEMATIKA TRY OUT A",
allRandom: true,
title: "Soal UN SD - MATEMATIKA <br>"
};
$("#quizArea").jQuizMe(quiz, options);
});
