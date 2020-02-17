
$( function($){
var quiz = {
multiList: [
//1-5
{
ques: "Hewan yang dalam proses kehidupannya ada di dua tempat hidup di air dan darat adalah ….",
ans: "Hewan amfibi",
ansSel: ["Hewan darat", "Hewan laut","Hewan ovovivipar"]
},
{
ques: "Katak, mujair, dan kupu-kupu kubis termasuk hewan ovivar. Maka ciri-ciri hewan tersebut adalah ….",
ans: "mengerami telurnya hingga menetas ",
ansSel: ["memiliki daun telinga", "memiliki bulu (rambut)","memiliki kelenjar susu"]
},
{
ques: "Hewan di bawah ini yang berfungsi untuk dimanfaatkan bahan kerajinan sepatu dan ikat pinggang adalah ….",
ans: "sapi, kerbau, dan domba",
ansSel: ["kerang, cacing, dan siput", "ayam, itik, dan angsa","ular, lebah, kalajengkin "]
},
{
ques: "Kita sering makan telur, daging, ikan asin, dan ikan teri. Semua makanan tersebut berfungsi untuk menghasilkan ….",
ans: "protein",
ansSel: ["karbohidrat", "lemak","mineral"]
},
{
ques: "Tujuan pemerintah melakukan pelestarian hewan dan tumbuhan langka adalah ….",
ans: "Supaya terancam punah dan mengalami kepunahan",
ansSel: ["Lebih mudah dalam melakukan penebangan liar", "mampu menyesuaikan diri dengan keadaan lingkungannya","supaya tidak mengalami kepunahan"]
},
//6-10
{
ques: "Getuk lindri merupakan singkong yang dilunakkan. Masyarakat Solo memanfaatkan getuk lindri untuk membuat ….",
ans: "Bahan makanan",
ansSel: ["Obat tradisional", "Bahan pakaian","Minuman tradisional"]
},
{
ques: "Perhatikan fungsi organ tumbuhan di bawah ini! <br> 1) penguapan air <br> 2) untuk perkembang biakkan <br> 3) tempat melakukan fotosintesis <br> 4) melindungi biji <br> Yang merupakan fungsi organ daun adalah ....",
ans: "1) dan 3)",
ansSel: ["1) dan 2)", "2) dan 3)"," 2) dan 4)"]
},
{
ques: "Perhatikan simbosis di bawah ini! <br> 1) kupu-kupu dan lebah membutuhkan nektar <br> 2) anemon laut dengan ikan badut <br> 3) burung jalak yang hinggap di punggung kerbau <br> 4) ikan hiu dengan ikan remora  <br> Yang termasuk simbosis komensalisme ditunjukkan pada nomer …. ",
ans: "2) dan 4)",
ansSel: ["1) dan 3)", "2) dan 3)","1) dan 2)"]
},
{
ques: "Dalam proses rantai makanan di lautan, yang menjadi produsen adalah ….",
ans: "fitoplankton",
ansSel: ["zooplankton", "ikan-ikan besar","dekomposer"]
},
{
ques: "Walang sangit melindungi diri dengan mengeluarkan …",
ans: "bau sangit",
ansSel: ["bisa ", "racun","lendir"]
},
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

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D !</justify>",
intro: "PAKET LATIHAN SOAL UJIAN NASIONAL SD/MI",
allRandom: true,
title: "ILMU PENGETAHUAN ALAM PAKET A<br>"
};
$("#quizArea").jQuizMe(quiz, options);
});

