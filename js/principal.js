
var banners= ["Do lixo ao luxo", "Reaproveitar é aproveitar"];
var bannerAtual= 0;

function trocaBanner() {
	bannerAtual= (bannerAtual + 1) % banners.length;
	document.querySelector("h2#mensagem").textContent= banners[bannerAtual];
}

window.setInterval(trocaBanner, 1000);