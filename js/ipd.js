
$( function($){
var quiz = {
multiList: [
//1-5 PAKET 3
{
ques: "GAMBAR BUNGLON DAN CICAK <br> Ciri Khusus yang sama dimiliki kedua hewan diatas adalah...",
ans: "memiliki lidah panjang dan lengket",
ansSel: ["Sedang", "memiliki mulut dan ekor yang panjang" ,"dapat memutuskan ekornya "]
},
{
ques: "Hewan : Ayam, Bebek, Penyu, Buaya, Merpati <br> Hewan-hewan pada tabel tersebut dapat dikelompokkan dalam kelompok yang sama  berdasarkan .... ",
ans: "cara perkembangbiakan",
ansSel: ["jenis makanannya", "tempat hidupnya","mencari makanan"]
},
{
ques: "Kebutuhan kulit buaya sebagai bahan dasar pembuatan tas semakin meningkat, jika hal ini dibiarkan akan mengakibatkan populasi buaya ....",
ans: "tetap karena telurnya banyak ",
ansSel: ["punah karena perburuan meningkat ", "bertambah karena pertumbuhannya cepat ","meningkat karena selalu bertelur"]
},
{
ques: "Tanjung Puting adalah salah satu suaka margasatwa orang utan yang berada di Kalimantan Tengah. Tempat pelestarian hewan langka ini memiliki tujuan agar orang utan ....",
ans: "tidak merusak pertanian dan mampu berkembangbiak ",
ansSel: ["tidak merusak. rumah warga dan terjaga kelestariannya.", "tidak punah dan mampu kembali ke habitatnya","tidak punah dan dijadikan obyek wisata"]
},
{
ques: "Pada tubuh kucing terdapat banyak kutu. Hubungan kedua hewan tersebut adalah .... ",
ans: "parasitisme ",
ansSel: ["mutualisme ", "komensalisme ","fototropisme"]
},
//6-10
{
ques: "Hubungan rantai makanan yang akan terbentuk pada suatu komunitas adalah .... ",
ans: "pohon jagung —> belalang —>  ulat —> burung ",
ansSel: ["padi —>  burung —> tikus —>  ular", "padi —> ular —>  tikus —> burung elang ","pohon jagung —>  burung —>  ular —>  burung elang"]
},
{
ques: "Disebuah komunitas terdapat ; padi, ikan, belalang, ular, tikus dan katak. Apabila padi telah dipanen, makhluk hidup yang sangat bergantung langsung pada padi adalah ....",
ans: "belalang dan katak",
ansSel: ["ikan dan tikus", "ular dan katak"," belalang dan tikus"]
},
{
ques: "Tumbuhan memiliki bagian-bagian yang  berguna untuk   kelangsungan  hidup. Pernyataan yang benar berkaitan dengan bagian tumbuhan dan fungsinya adalah ....",
ans: "enceng gondok memiliki daun lebar untuk mempercepat penguapan",
ansSel: ["teratai memiliki akar yang lebat untuk penyeimbang tubuh", "kantung semar memiliki batang berongga untuk mengangkut O2","kaktus memiliki daun berbentuk duri untuk mengurangi penguapan"]
},
{
ques: "Waktu yang diperlukan bumi untuk satu kali mengelilingi matahari adalah ....",
ans: "356 hari",
ansSel: [" 365 hari", " 355 hari"," 363 hari"]
},
{
ques: "1. Siang dan malam <br> 2.  Perubahan musim <br>3.  Perbedaan waktu<br> 4.  Pasang surut air laut",
ans: "1 dan 3",
ansSel: ["2 dan 4", "3 dan 4","1 dan 2"]
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

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D !</justify>",
intro: "Soal UN SD - IPA PAKET D",
allRandom: true,
title: "Soan UN SD - IPA"
};
$("#quizArea").jQuizMe(quiz, options);
});
