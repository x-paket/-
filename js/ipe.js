
$( function($){
var quiz = {
multiList: [
//1-5
{
ques: "Kanguru memiliki ciri khusus berupa kantung dibawah tubuhnya yang berfungsi untuk….",
ans: "Untuk melindungi anaknya",
ansSel: ["Menyimpan cadangan susu", "Melindungi diri dari musuh","Menyimpan cadangan makanan"]
},
{
ques: "<strong>Perhatikan kelompok tumbuhan berikut ini</strong> <br>-Eceng gondok <br>-Tebu<br>-Padi<br>-Jagung<br>-Kelapa<br><br> Jenis tumbuhan diatas dapat dikelompokan berdasarkan kesamaan ciri-cirinya yaitu….  ",
ans: "Bentuk akarnya",
ansSel: ["Susunan daunnya", "Cara mengambil makanannya","Cara perkembangbiakannya"]
},
{
ques: "Kulit pohon gaharu banyak diburu orang untuk dimanfaatkan sebagai….",
ans: "Dijadikan bahan minyak atsiri",
ansSel: ["Memenuhi kebutuhan sandang", "Ramuan obat","Bahan industri kimia"]
},
{
ques: "Pemerintah membuat program pelestarian hutan lindung Tanjung Puting di Kalimatan Timur yang bertujuan untuk….",
ans: "Melestarikan orang hutan",
ansSel: ["Melestarikan kakak tua berjambul", "Melestarikan komodo yang hampir punah","Melestarikan penyu hijau"]
},
{
ques: "Gunakan Koneksi Internet Untuk Melihat Gambar Lebih Jelas! <br> <img src=http://3.bp.blogspot.com/-sOTQZYenVq8/Vk67sFpx-aI/AAAAAAAABhM/zB4YFwlmcCM/s1600/jangkrik.png > <br> Hewan pada gambar tersebut berkembangbiak dengan cara…",
ans: "Ovipar",
ansSel: ["Ovovivipar", "Membelah diri","Vivipar"]
},
//6-10
{
ques: "Perhatikan tahap daur hiduphewan berikut! <br> 1. Pupa<br> <br>2. Nimpa<br>3. Larva<br>4. Imago<br>1. Berudu<br>2. Telur<br>3. Jentik<br>4. Kepompong<br> <br>Daur hidup semut semai ( tomcat ), secara urut ditunjukkan oleh nomor....",
ans: "6 – 3 – 1 – 4",
ansSel: ["6 – 2 – 1 – 4", "7 – 3 – 2 – 4","6 – 8 – 2 – 5"]
},
{
ques: "Ibu sering membuat minuman sirup menggunakan daun pandan.<br> Manfaat daun pandan tersebut adalah ....",
ans: "Sebagai bahan pewarna)",
ansSel: ["Sebagai bahan penyedap sirup)", "Sebagai bahan pengawet alami","Sebagai bahan pemanis buatan"]
},
{
ques: "Penebangan hutan bakau untuk dijadikan tambak ikan dapat mengganggu keseimbangan  lingkungan.<br>Dampak dari pembabatan hutan bakau adalah....",
ans: "Menurunnya populasi udang-udang kecil",
ansSel: ["Meningkatnya kesuburan di daerah pantai", "Migrasinya ikan - ikan besar","Meningkatnya populasi burung bangau"]
},
{
ques: "Tanaman padi dan jagung menggulung daunnya pada siang hari dengan tujuan…",
ans: "Mengurangi penguapan",
ansSel: ["Menyuburkan tanah dibawahnya", "Memperbanyak serapan air","Melakukan fotosintesis"]
},
{
ques: "Pada  tumbuhan wortel kelebihan karbohidrat disimpan di akar  hal tersebut dapat dilakukan karena tumbuhan memiliki jaringan flom yang berfungsi  untuk ….",
ans: "Mengangkut hasil fotosintesis dari daun keseluruh bagian tumbuhan.",
ansSel: ["Mengangkut oksigen hasil fotosintesi keseluruh bagian tumbuhan. ", "Mengangkut hasil fotosintesis dari akar ke daun.","Mengangkut air dan garam mineral dari batang keseluruh akar."]
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
intro: "Soal UN SD - IPA PAKET E",
allRandom: true,
title: "Soal UN SD - IPA <br>"
};
$("#quizArea").jQuizMe(quiz, options);
});
