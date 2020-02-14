
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

//1-5
{
ques: "Ular sawah bermanfaat bagi petani, terutama untuk ....",
ans: "memberantas tikus",
ansSel: ["menyuburkan tanah", "membasmi serangga","menggemburkan tanah"]
},
{
ques: "Penggunaan kulit harimau untuk bahan pakaian dapat mengakibatkan untuk ....",
ans: "populasi harimau terancam",
ansSel: ["harga pakaian dari kulit jadi mahal ", "pakaian dari kulit jadi terkenal","kegiatan perburuan meningkat pesat"]
},
{
ques: "Perlindungan badak bercula satu di daerah Ujung Kulon bertujuan untuk ....",
ans: "melestarikan hewan langka",
ansSel: ["membuat daya tarik daerah", "membangun suaka alam","memelihara objek wisata"]
},
{
ques: "Tumbuhan tali puteri yang berada di tumbuhan teh-tehan akan tumbuh subur hanya selama tumbuhan teh-tehan juga tumbuh. Dengan demikian, antara tali puteri dan tumbuhan teh-tehan terjadi simbiosis ....",
ans: "parasitisme",
ansSel: ["mutualisme", "saprofitisme","komensalisme"]
},
{
ques: "Dalam ekosistem kolam terdapat beberapa rantai makanan. Salah satu rantai makanan yang tepat pada ekosistem tersebut adalah ....",
ans: "lumut – cacing – ikan – ular",
ansSel: ["cacing – ikan –ular", "ular – tikus – ikan – rumput ","jentik –ikan – ular – tikus"]
},
//6-10
{
ques: "Makhluk hidup tidak dapat berdiri sendiri karena memerlukan makhluk hidup lain. Di antara hewan berikut yang hidupnya sangat bergantung kepada tumbuhan adalah ....",
ans: "kelinci",
ansSel: ["kucing", "elang","bangau"]
},
{
ques: "Umumnya bentuk tubuh ikan adalah aerodinamis (streamline). Hal ini dimaksudkan agar ikan ....",
ans: "mudah bergerak",
ansSel: ["mudah berkembang biak", "dapat bertahan hidup di air"," tidak mudah dikenali musuhnya"]
},
{
ques: "	Proses pernapasan yang terjadi pada gelembung-gelembung paru-paru adalah ....",
ans: "pertukaran oksigen dengan karbon dioksida dari paru-paru ke pembuluh darah",
ansSel: ["penyesuaian suhu oksigen sesuai dengan kebutuhan tubuh pada saat itu", "penyaringan kotoran-kotoran yang terbawa oksigen","pembersihan oksigen dari karbon dioksida"]
},
{
ques: "Jantung merupakan salah satu organ pada tubuh manusia yang berfungsi untuk ....",
ans: "memompa darah ke seluruh tubuh",
ansSel: ["menjadi bagian dari alat peredaran darah", "menyaring oksigen yang masuk ke tubuh","mengganti oksigen yang kotor dengan yang bersih"]
},
{
ques: "Zat kapur atau kalsium yang terkandung di dalam susu dan telur sangat diperlukan tubuh untuk ....",
ans: "pembentukan tulang dan gigi",
ansSel: ["mencegah kerusakan pada gigi ", "membentuk sel-sel darah merah","pembentukan otot dan pembuluh darah"]
},

//1-5
{
ques: "Perhatikan Gambar Dibawah ini <br> <img src= http://1.bp.blogspot.com/-YE5uNNpdTnM/VjsYCxvP45I/AAAAAAAABfQ/RIJGthfn6e0/s1600/20.png> <br> Kemampuan yang dimiliki hewan di atas pada saat terbang disebut …",
ans: "ekolokasi",
ansSel: ["autotomi", "mimikri","herbanisasi"]
},
{
ques: "Suatu tumbuhan yang memiliki getah untuk melindungi diri pada saat masih muda adalah ....",
ans: "semangka, sawo, dan pepaya",
ansSel: ["kelapa, mentimun, dan bambu", "bougenvile, salak, dan durian","salak, bambu, dan sawo"]
},
{
ques: "Perhatikan gambar di bawah ini. <br> <img src=http://1.bp.blogspot.com/-pALOMG4tb8E/VjsaLBCN25I/AAAAAAAABfc/OmK41PcQN3g/s1600/21.png> <br> Berdasarkan gambar di atas, cara perkembangbiakan tumbuhan tersebut disebut …",
ans: "umbi lapis",
ansSel: ["umbi batang", "tunas adventif","geragi"]
},
{
ques: "Ayam berkembang biak dengan cara bertelur. Hewan yang berkembang biak dengan cara tersebut memiliki ciri-ciri ....",
ans: "tidak menyusui anaknya",
ansSel: ["memiliki daun telinga", "memiliki bulu (rambut)","memiliki kelenjar susu"]
},
{
ques: "Masyarakat Jepara sering memanfaatkan rotan dalam membuat berbagai peralatan mebel yang bertujuan untuk ....",
ans: "meningkatkan kualitas mebel",
ansSel: ["menjaga kelestarian tumbuhan rotan", "menarik harga jual yang tinggi","menarik konsumen mebel"]
},
//6-10
{
ques: "Cagar alam yang secara khas digunakan untuk melindungi hewan dan tumbuhan di dalamnya disebut ....",
ans: "taman nasional",
ansSel: ["suaka margasatwa", "taman wisata","taman safari"]
},
{
ques: "Perhatikan gambar rangka tangan berikut ini! <br> <img src=http://4.bp.blogspot.com/-eZRhd5gap7s/Vjsdi3tlaqI/AAAAAAAABfo/podKD7TvAMk/s1600/22.png> <br> Yang disebut dengan tulang hasta adalah nomor …",
ans: "3",
ansSel: ["2", "1","4"]
},
{
ques: "Perhatikan gambar berikut. <br> <img src=http://2.bp.blogspot.com/-MCNzuozQckk/VjseFVWS-1I/AAAAAAAABfw/TMPPvWe29RM/s1600/24.png> <br>Bagian lidah yang peka terhadap rasa manis adalah nomor .... ",
ans: "4",
ansSel: ["2", "3","1"]
},
{
ques: "Pernyataan yang benar mengenai gambar di bawah adalah …. <br> <img src=http://3.bp.blogspot.com/-eGMSEm1vTTI/VjsfYxq52eI/AAAAAAAABf8/ZaWd4dxbScA/s1600/25.png> ",
ans: "Otot antartulang rusuk mengendur sehingga udara keluar.",
ansSel: ["Udara masuk sehingga rongga dada mengempis.", "Diafragma mengendur sehingga udara masuk.","Udara keluar sehingga rongga dada mengembang"]
},
{
ques: "Gandum, beras, jagung, sagu, dan ketela pohon merupakan jenis makan yang setiap hari kita konsumsi. Jenis makanan tersebut berguna untuk …",
ans: "sumber tenaga",
ansSel: ["makanan cadangan", "mengganti sel-sel yang rusak","melindungi tubuh dari penyakit"]
},

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

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! <br> Gunakan Koneksi Internet Apabila Gambar Tidak Terlihat Jelas</justify>",
intro: "Soal UN SD - IPA PAKET TRY OUT A",
allRandom: true,
title: "Soal UN SD - IPA <br>"
};
$("#quizArea").jQuizMe(quiz, options);
});
