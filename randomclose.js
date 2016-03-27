var quotes=new Array();
quotes[0] = "Demikianlah informasi yang dapat kami bagikan pada kesempatan ini. Mudah-mudahan artikel ini akan bermanfaat untuk anda. Selamat beraktifitas. Terima kasih.";
quotes[1] = "Demikianlah informasi yang bisa kami sampaikan pada kesempatan kali ini. Kami sangat berharap bahwa kabar ini dapat memberikan manfaat bagi anda semua. Semoga berkenan, terima kasih.";
quotes[2] = "Demikianlah yang dapat kami bagikan berupa informasi yang perlu bapak/ibu guru ketahui. Semoga informasi ini bermanfaat bagi bapak/ibu semua. Sekian dan terima kasih.";
quotes[3] = "Itulah informasi yang mungkin bapak/ibu perlu ketahui. Dengan membaca informasi ini, mudah-mudahan akan bermanfaat khususnya untuk bapak/ibu semuanya. Sekian, selamat beraktifitas dan terima kasih.";
quotes[4] = "Itulah sedikit informasi yang bisa kami bagikan pada kesempatan yang berbahagia ini. Semoga kehadiran kami bisa membantu bapak/ibu untuk mendapatkan informasi terbaru yang yang penting dan perlu di ketahui oleh ibu/bapak semuanya.";
quotes[5] = "Demikianlah sekelumit informasi yang kami bagikan pada kesempatan yang baik ini. Semoga dapat memberikan manfaat bagi kita semua. Sekian, selamat beraktifitas dan terima kasih.";
quotes[6] = "Demikianlah informasi terbaru yang dapat kami bagikan dalam kesempatan yang baik ini. Semoga apa yang disampaikan ini bermanfaat untuk para pembaca semuanya. Sekian dan terima kasih.";
quotes[7] = "Demikainlah informasi yang sengaja kami bagikan untuk menemani anda hari ini. Semoga apa yang kami sampaikan ini dapat berkenan di hati anda semua. Semoga bermanfaat, sekian dan terima kasih.";
quotes[8] = "Demikianlah yang bisa kami sampaikan informasi ini. Harapan kami informasi ini akan bermanfaat untuk anda, semoga berkenan dan terima kasih.";
quotes[9] = "Demikan informasi dari kami, semoga bapak/ibu mendapatkan kebaikan dari informasi yang kami bagikan ini. Semoga berkenan, terima kasih.";
quotes[10] = "Demikian informasi yang dapat kami hantarkan ke hadapan bapak/ibu, semoga sajian informasi ini dapat memberikan manfaat bagi bapak/ibu. Selamat beraktifitas, terima kasih";
var q = quotes.length;
var whichquote=Math.round(Math.random()*(q-1));
function showquote(){document.write(quotes[whichquote]);}
showquote();
