
$( function($){
var quiz = {
multiList: [
//1-5 MTK 2 TH 2012-2013
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
intro: "Soal UN SD - MATEMATIKA D",
allRandom: true,
title: "Soal UN SD - MATEMATIKA <br>"
};
$("#quizArea").jQuizMe(quiz, options);
});