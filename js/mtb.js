
$( function($){
var quiz = {
multiList: [
//1-5 MTK 1 TH 2012-2013 dari no 38  dan MTK 3 TH 2012-2013 dari
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

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! <br> untuk membuka gambar, gunakan koneksi internet atau data mobile</justify>",
intro: "Soal UN SD - MATEMATIKA B",
allRandom: true,
title: "Soal UN SD - MATEMATIKA <br>"
};
$("#quizArea").jQuizMe(quiz, options);
});