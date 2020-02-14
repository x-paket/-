
$( function($){
var quiz = {
multiList: [
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
//11-15
{
ques: "Penyakit aids merupakan jenis penyakit yang menular. Salah satu cara mencegah penularan penyakit ini adalah ….",
ans: "Senantiasa menggunakan jarum suntik yang baru dan steril",
ansSel: ["Menghidari percikan ludah penderita", "Tidak bergaul dengan penderita","Tidak semeja makan dengan penderita"]
},
{
ques: "Perhatikan fungsi bagian tumbuhan berikut! <br>1.Pengangkut air dan mineral dari akar ke daun, buah, dan bunga.<br>2.Menyerap air dan mineral dari dalam tanah.<br>3.Tempat tumbuhnya daun, bunga, dan buah.<br>4.Bernapas <br> Fungsi batang ditunjukkan oleh pernyataan nomer ….",
ans: "1) dan 3)",
ansSel: ["1) dan 2)", "2) dan 3)","2) dan 4)"]
},
{
ques: "Berikut contoh simbiosis mutualisme adalah ....",
ans: "hubungan antara lebah dan bunga",
ansSel: ["hubungan antara tumbuhan anggrek dan pohon", "hubungan antara tumbuhan tali putri dan tumbuhan pagar","hubungan antara manusia dan cacing perut"]
},

{
ques: "Berikut alur rantai makanan  yang benar adalah ....",
ans: "tumbuhan →  belalang → katak  → ular",
ansSel: ["belalang →  katak → ulat  → tumbuhan", "tumbuhan  → belalang →  ular →  katak","belalang →  tumbuhan → katak  → ular"]
},
{
ques: "Perhatikan rantai makanan di bawah ini! <br> Padi  →  burung  →  musang  →  elang  →  pengurai <br> Berdasarkan rantai makanan di atas, musang berperan sebagai ….",
ans: "Konsumen II",
ansSel: ["Konsumen I", "Produsen","Konsumen III"]
},
//16-20
{
ques: "Perhatikan gambar hewan laut berikut! <br> <img src=http://4.bp.blogspot.com/-oO_2xazO4WY/Vjswjvc-Q4I/AAAAAAAABgM/ATpQHVgBXzY/s1600/26.png> <br> Hewan laut tersebut untuk menghilangkan jejak dengan mengeluarkan …",
ans: "tinta",
ansSel: ["racun", "air","bau"]
},

{
ques: "Perubahan wujud di bawah ini yang disebut dengan peristiwa menyublim adalah ....",
ans: "kamper di lemari pakaian habis",
ansSel: ["mentega dipanaskan", "terjadinya kabut di daerah pegunungan","pakaian basah menjadi kering"]
},

{
ques: "Kegiatan yang memanfaatkan proses perubahan wujud benda cair menjadi padat adalah ….",
ans: "Air di dalam freezer lemari es",
ansSel: ["Mentega dipanaskan", "Lilin yang dipanaskan","Terjadinya kabut di daerah pegunungan"]
},

{
ques: "Jenis perpindahan panas pada saat kita memegang panci yang dipanaskan adalah ....",
ans: "konduksi",
ansSel: ["radiasi", "konveksi","aliran"]
},

{
ques: "Besi yang diletakkan pada tempat yang memiliki udara yang lembab akan mengalami ....",
ans: "perkaratan",
ansSel: ["pembakaran ", "pendinginan","pembusukkan"]
},

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D !</justify>",
intro: "Soal UN SD - IPA PAKET C",
allRandom: true,
title: "Soal UN SD - IPA"
};
$("#quizArea").jQuizMe(quiz, options);
});
