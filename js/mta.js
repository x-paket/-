
$( function($){
var quiz = {
multiList: [
//1-5 MTK 1 TH 2012-2013
{
ques: "135 – 27 : 9 x 25 adalah...",
ans: "60",
ansSel: ["300", "2700","3300"]
},
{
ques: "Di gudang terdapat 36 peti telur. Tiap peti berisi 72 butir telur. Telur tersebut dibagikan kepada 12 pedagang sama banyak. Tiap pedagang menerima....butir telur.",
ans: "216",
ansSel: ["280", "172","372"]
},
{
ques: "Hasil dari 84 – 72 : (-24) + (-55) adalah.....",
ans: "32",
ansSel: ["36", "-24","-36"]
},
{
ques: "Bibi memiliki beras  1kg. Kemudian Bibi membeli lagi  1kg. Beras tersebut dimasak 0,2 kg. Sisa beras Bibi sekarang.....kg.",
ans: "1,8kg",
ansSel: ["0,18kg", "800gram","1kg"]
},
{
ques: "Perbandingan umur ayah dan paman adalah 8 : 5. Jika jumlah umur ayah dan paman sekarang 91 tahun, maka umur paman 2 tahun yang akan datang adalah.....",
ans: "37",
ansSel: ["35", "72","74"]
},
//6-10
{
ques: "Kelipatan Persekutuan Terkecil ( KPK ) dari 56 dan 84 adalah...",
ans: "2<sup>3</sup> x 3 x 7",
ansSel: ["2<sup>2</sup> x 3 x 7", "2<sup>2</sup> x 7","2<sup>3</sup> x 7"]
},
{
ques: "Faktor Persekutuan Terkecil ( FPB ) dari 36, 48, dan 72 adalah....",
ans: "12",
ansSel: ["8", "24","6"]
},
{
ques: "Sebuah perusahaan berlangganan koran A, koran B, dan koran C. Koran A dikirim setiap 15 hari sekali, koran B dikirim setiap 10 hari sekali dan koran C dikirim setiap 20 hari sekali. Pada tanggal 20 Nopember 2012, ketiga koran tersebut dikirim bersamaan. Ketiga koran tersebut akan dikirim bersamaan lagi pada tanggal.....",
ans: "19 Januari 2013",
ansSel: ["20 Januari 2013", "19 Pebruari 2013","20 Pebruari 2013"]
},
{
ques: "Rian mempunyai 56 kelereng merah dan 35 kelereng hijau. Kelereng tersebut akan disimpan dalam beberapa kaleng. Tiap kaleng berisi kelereng merah dan kelereng hijau sama banyak. Banyak kaleng yang diperlukan adalah.....",
ans: "7",
ansSel: ["6", "9","8"]
},
{
ques: "Hasil dari 272<sup>4</sup> + 152<sup>4</sup> adalah.....",
ans: "954",
ansSel: ["945", "594","924"]
},
//11-15
{
ques: "Hasil dari √9.261  =.....",
ans: "21",
ansSel: ["23", "12","19"]
},
{
ques: "Sebuah peti berbentuk kubus dan mempunyai volume 2.744 cm2. Panjang rusuk peti tersebut adalah......cm2",
ans: "14",
ansSel: ["18", "24","22"]
},
{
ques: "Dalam lomba motor GP, Jorge Lorenzo mengukuhkan waktu 29 menit 48 detik dan Dani Pedrosa mengukuhkan waktu 31 menit 11 detik. Selisih waktu tempuh Jorge Lorenzo dan Dani Pedrosa adalah.....",
ans: "1 menit 23 detik",
ansSel: ["1 menit 27 detik", "2 menit 23 detik","1 menit 37 detik "]
},

{
ques: "Sebuah kolam ikan mempunyai volume 1200 liter. Jika kolam ikan tersebut dialiri air dengan debit 30 liter/menit, maka waktu yang diperlukan untuk mengisi penuh kolam ikan tersebut adalah.....menit",
ans: "40",
ansSel: ["4", "3600","240"]
},
{
ques: "Di gudang koperasi terdapat persediaan gula 1.450 kg. Seorang distributor mengirim gula ke koperasi sebanyak 27 kuintal. Dalam waktu yang sama terjual gula sebanyak 1,3 ton. Persediaan gula di koperasi tersebut sekarang adalah......kg",
ans: "2.850",
ansSel: ["1.850", "1.720","1.590"]
},
//16-20
{
ques: "Jarak antara Kota Surabaya dan Probolinggo 175 km. Paman berangkat dari kota Surabaya pukul 07.00 WIB dengan mengendarai mobil. Jika kecepatan mobil paman 70 km/jam, maka paman akan tiba di Probolinggo pukul........WIB",
ans: "09.30",
ansSel: ["09.45", "10.30","10.15"]
},

{
ques: "Perhatikan sifat-sifat bangun datar di bawah ini! <br>Mempunyai dua pasang sisi yang sama panjang <br>Dua sudut yang berhadapan sama besar <br>Diagonalnya saling tegak lurus <br>Mempunyai satu simetri lipat <br> Berdasarkan data diatas bangun datar tersebut adalah...",
ans: "Layang-layang",
ansSel: ["Belah ketupat", "trapesium","jajar genjang"]
},

{
ques: "Untuk membuka gambar gunakan koneksi internet! <br> <img src=http://3.bp.blogspot.com/-u3HQAZqJpcI/VlPVacKpb8I/AAAAAAAABh8/liS1QHQ7rDI/s320/mtk.png> <br> Pasangan bangun yang senama dan sebangun dari gambar di atas adalah....",
ans: "(1) dan (4)",
ansSel: [" (2) dan (3)", " 1) dan (3)","(1) dan (2)"]
},

{
ques: "Sebuah kardus berbentuk balok yang memiliki volume 9.000 cm3. Tinggi dan lebar kardus tersebut masing-masing 20 cm dan 18 cm. Panjang kardus itu adalah....cm.",
ans: "25",
ansSel: ["15", "35","40"]
},

{
ques: "Nilai ulangan Matematika Dita sebagai berikut: <br> <em>80, 85, 70, 60, 75, 80, 90, 70</em> <br>Rata-rata nilai ulangan Matematika Dita adalah....",
ans: "a. 76,25",
ansSel: ["b. 77,5", "a. 78","b. 85"]
},

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! <br> untuk membuka gambar, gunakan koneksi internet atau data mobile</justify>",
intro: "Soal UN SD - MATEMATIKA A",
allRandom: true,
title: "Soal UN SD - MATEMATIKA <br>"
};
$("#quizArea").jQuizMe(quiz, options);
});
