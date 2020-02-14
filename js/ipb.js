
$( function($){
var quiz = {
multiList: [
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
//11-15
{
ques: "Gejala-gejala penyakit berikut harus diwaspadai karena merupakan gejala terserang penyakit influenza, yaitu ....",
ans: "demam, sakit kepala, dan hidung berlendir",
ansSel: ["bintik merah di kulit dan badan lemas", "mata berkunang-kunang dan badan lemas","mual, perut kembung, dan susah buang air"]
},
{
ques: "Contoh benda yang mengalami perubahan wujud secara menyublim adalah ....",
ans: "kapur barus",
ansSel: ["air", "spiritus","lilin"]
},
{
ques: "Perubahan wujud benda dapat dimanfaatkan dalam kehidupan sehari-hari, seperti dicontohkan oleh peristiwa penguapan berikut, yaitu ....",
ans: "pembuatan garam dengan bahan baku air laut",
ansSel: ["menutup makanan untuk menghindari bau yang berlebihan", "membuat patung dari bahan baku lilin","proses pembuatan es krim"]
},

{
ques: "Dalam kaleng kemasan parfum atau kaleng cat semprot (pilok), adakalanya tertulis “jangan dibuang  ke tempat pembakaran sampah” atau ditempatkan di tempat yang dekat api. Hal ini disebabkan ....",
ans: "jika dibakar atau dikenai panas tinggi akan mencemari lingkungan",
ansSel: ["jika kaleng terkena panas tinggi akan menimbulkan ledakan yang berbahaya", "sisa-sisa parfum atau cat jika dibakar akan mengeluarkan aroma menyengat","jika kaleng terbakar ajab mengeluarkan bahan beracun"]
},
{
ques: "Sepotong besi panjangnya 30 cm. Besi itu dipanaskan di salah satu ujungnya. Lama-kelamaan, bagiann ujung besi lainnya juga terkena panas. Perpindahan panas pada peristiwa tersebut terjadi secara ....",
ans: "konduksi",
ansSel: ["konveksi", "radiasi","konvergensi"]
},
//16-20
{
ques: "Energi alternatif tersedia di sekitar kita. Salah satu contoh pemanfaatannya adalah ....",
ans: "angin untuk pembangkit listrik",
ansSel: ["bensin untuk bahan baker kendaraan", "solar untuk bahan baker mesin-mesin pabrik","gas untuk keperluan memasak di rumah"]
},

{
ques: "Sebuah peti besar dan sangat berat hendak dinaikkan dari lantai satu ke lantai dua di suatu gedung bertingkat. Pesawat sederhana yang tepat untuk digunakan mengangkat peti tersebut adalah ....",
ans: "bidang miring",
ansSel: ["pengungkit", "katrol","roda"]
},

{
ques: "Untuk menghasilkan air dalam memenuhi kebutuhan rumah tangga, banyak orang menggunakan pompa air listrik. Agar penggunaan energi listrik lebih hemat, usaha yang dapat dilakukan adalah ....",
ans: "membuat bak penampungan air sebelum digunakan",
ansSel: ["mengoperasikan pompa air setiap membutuhkan air", "menggunakan pompa air listrik pada malam hari saja","membuat resapan air di halaman rumah"]
},

{
ques: "Biodiesel (biosolar) merupakan pemanfaatan salah satu jenis sumber daya alam, yaitu sumber daya alam ....",
ans: "tumbuhan",
ansSel: ["hewan", "fosil","anorganik"]
},

{
ques: "Salah satu kegiatan yang dapat merusak kelestarian sumber daya alam adalah ....",
ans: "membiarkan kebun ditumbuhi berbagai macam tumbuhan liar",
ansSel: ["mengurangi penggunaan plastic untuk keperluan sehari-hari", "mengolah sampah menjadi pupuk atau bahan kerajinan tangan","menggunakan racun/insektisida untuk membasmi hama tanaman"]
},

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D !</justify>",
intro: "Soal UN SD - IPA B",
allRandom: true,
title: "Soan UN SD - IPA"
};
$("#quizArea").jQuizMe(quiz, options);
});