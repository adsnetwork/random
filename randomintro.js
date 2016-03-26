var quotes=new Array();
quotes[0] = "Assalamu`alaikum wr wb, salam sejahtera untuk anda semua. Pada kesempatan kali ini saya akan berbagi mengenai <a expr:href='data:blog.url'><data:blog.pageTitle/></a>. Untuk lebih jelasnya mari kita simak paparan berikut ini.";
quotes[1] = "Assalamu`alaikum wr wb, salam sejahtera untuk anda semua, semoga kita senantiasa dalam lindungan Tuhan yang Maha Esa. Pada kesempatan yang berbahagia ini saya akan berbagi informasi mengenai <a expr:href='data:blog.url'><data:blog.pageTitle/></a>. Mari kita simak informasi berikut ini.";
quotes[2] = "Selamat malam semuanya, salam sejahtera. Pada kesempatan kali ini akan menyajikan informasi <a expr:href='data:blog.url'><data:blog.pageTitle/></a>. Untuk lebih jelasnya mari kita perhatikan paparan dibawah ini.";
quotes[3] = "Assalamu`alaikum wr wb, Bapak/Ibu guru yang berbahagia, pada kesempatan yang baik ini saya akan membagikan sajian informasi <a expr:href='data:blog.url'><data:blog.pageTitle/></a>. Berikut ini adalah paparan dan informasi selengkapnya.";

var q = quotes.length;
var whichquote=Math.round(Math.random()*(q-1));
function showquote(){document.write(quotes[whichquote]);}
showquote();
