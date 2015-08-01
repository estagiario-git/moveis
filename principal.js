
var banners= ["Os melhores do Brasil", "Qualidade e preço baixo"];
var bannerAtual= 0;

function trocaBanner() {
	bannerAtual= (bannerAtual + 1) % banners.length;
	document.querySelector("h2#mensagem").textContent= banners[bannerAtual];
}

window.setInteral(trocaBanner, 2000);