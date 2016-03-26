var quotes=new Array();
quotes[0] = "Assalamu`alaikum warohmatullahi wabarokatuh, salam sejahtera untuk anda semua. Pada kesempatan kali ini saya akan berbagi informasi dengan anda. Untuk lebih jelasnya mari kita simak paparan berikut ini.";
quotes[1] = "Assalamu`alaikum wr wb, Bapak/Ibu guru yang berbahagia, pada kesempatan yang baik ini saya akan membagikan sajian informasi tentang hal yang tertulis di bawah ini. Berikut ini adalah paparan dan informasi selengkapnya.";
quotes[2] = "Assalamu`alaikum wr wb, salam sejahtera untuk anda semua, semoga kita senantiasa dalam lindungan Tuhan yang Maha Esa. Pada kesempatan yang berbahagia ini saya akan berbagi informasi mengenai  hal berikut ini. Mari kita simak informasi.";
quotes[3] = "Selamat malam semuanya, salam sejahtera. Pada kesempatan kali ini akan menyajikan informasi sebagaimana yang kami sajikan dibawah ini. Untuk lebih jelasnya mari kita perhatikan paparannya.";
quotes[4] = "Selamat malam Bapak / Ibu guru yang berbahagia. Pada kesempatan ini saya akan berbagai materi sesuai judul diata. Untuk mengetahui lebih lanjut mengenai tema yang kita bawakan kali ini, marik kita simak paparan berikut ini.";

var q = quotes.length;
var whichquote=Math.round(Math.random()*(q-1));
function showquote(){document.write(quotes[whichquote]);}
showquote();
