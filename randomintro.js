var quotes=new Array();
quotes[0] = "Assalamu`alaikum warohmatullahi wabarokatuh, salam sejahtera untuk anda semua. Pada kesempatan kali ini saya akan berbagi informasi dengan anda. Untuk lebih jelasnya mari kita simak paparan berikut ini.";
quotes[1] = "Assalamu`alaikum wr wb, Bapak/Ibu guru yang berbahagia, pada kesempatan yang baik ini saya akan membagikan sajian informasi tentang hal yang tertulis di bawah ini. Berikut ini adalah paparan dan informasi selengkapnya.";
quotes[2] = "Assalamu`alaikum wr wb, salam sejahtera untuk anda semua, semoga kita senantiasa dalam lindungan Tuhan yang Maha Esa. Pada kesempatan yang berbahagia ini saya akan berbagi informasi mengenai hal berikut ini. Mari kita simak informasi.";
quotes[3] = "Selamat malam semuanya, salam sejahtera. Pada kesempatan kali ini akan menyajikan informasi sebagaimana yang kami sajikan dibawah ini. Untuk lebih jelasnya mari kita perhatikan paparannya.";
quotes[4] = "Selamat malam Bapak / Ibu guru yang berbahagia. Pada kesempatan ini saya akan berbagai materi sesuai judul diatas. Untuk mengetahui lebih lanjut mengenai tema yang kita bawakan kali ini, mari kita simak paparan berikut ini.";
quotes[5] = "Bapak/ibu guru yang kami hormati, bagi anda yang masih belum tidur atau sibuk online dan berchating-chating hingga tengah malam ini kami akan menemani anda dengan informasi menarik yang anda cari, ada laporan baru untuk anda semua. Inilah informasi selengkapnya.";
quotes[6] = "Salam jumpa Bapak/Ibu guru semuanya, kami kembali hadir dengan menyajikan informasi terpilih yang penting diketahui oleh bapak/Ibu guru. Sebelumnya kami mengucapkan selamat membaca dan semoga bermanfaat. Inilah informasi selengkapnya.";
quotes[7] = "Hallo pemirsa bapak/ibu guru semua, ruang informasi anda siang hari ini akan kami sugukan dengan judul artikel di atas. Kami selalu berusaha menyajikan informasi terbaik yang dibutuhkan oleh bapak/ibu guru semuanya. Selamat membaca dan semoga berkenan. Inilah informasi selengkapnya.";
quotes[8] = "Selamat malam Bapak/Ibu guru semuanya, pada kesempatan ini &nbsp;kami mengetengahkan informasi pilihan sesuai judul artikel ini. Perlu bapak/ibu Guru ketahui bahwa kami berharap informasi ini dapat membantu bapak/ibu. Semoga bermanfaat, selamat membaca. Inilah informasi selengkapnya.";
quotes[9] = "Selamat sore Bapak/Ibu guru, pada kesempatan kali ini kami akan menemani anda dengan sajian informasi penting dan menarik yang telah kami siapkan untuk anda. Semoga bermanfaat dan selamat membaca. Inilah informasi selengkapnya.";
quotes[10] = "Selamat siang Bapak/Ibu guru teman seperjuangan se profesi, kembali kami hadir menghantarkan informasi penting yang harus diketahui oleh para pembaca semuanya. Kami menghaturkan selamat membaca dan semoga bermanfaat. Inilah informasi selengkapnya.";
quotes[11] = "Apa kabar Bapak/Ibu guru semuanya, kami kembali menjumpai anda. Pada kesempatan ini kami menghadirkan berita dan informasi terbaru yang penting bapak/ibu ketahui. Kami mengucapkan selamat membaca. Inilah informasi selengkapnya.";
quotes[12] = "Selamat sore para pembaca semuanya, kami sudah menyiapkan sejumlah informasi aktual untuk anda salah satunya sesuai yang kami tuliskan dalam judul di atas. Kami berharap informasi ini dapat bermanfaat untuk ada semua. Inilah informasi selengkapnya.";
quotes[13] = "Selamat pagi para pemirsa bapak dan ibu guru semua, kembali bersama kami di situs informasi pendidikan untuk berita- berita yang teraktual seputar dunia pendidikan, yang kami rangkum dalam artikel berikut ini. Inilah informasi selengkapnya.";
quotes[14] = "Selamat pagi pemirsa kembali situs informasi pendidikan menemani saat ini dengan sajian informasi mengenai artikel sesuai judul tersebut. Semoga informasi ini bermanfaat untuk anda, selamat membaca. Inilah informasi selengkapnya.";
var q = quotes.length;
var whichquote=Math.round(Math.random()*(q-1));
function showquote(){document.write(quotes[whichquote]);}
showquote();
