//imagens do jogo

let imagemDaEstrada;
let imagemAtor;
let imagemVassoura;
let imagemVassoura2;
let imagemVassoura3;

function preload() {
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemAtor = loadImage("Imagens/morcego.png");
  imagemVassoura = loadImage("Imagens/vassoura1.png");
  imagemVassoura2 = loadImage("Imagens/vassoura2.png");
  imagemVassoura3 = loadImage("Imagens/vassoura3.png");
  imagemVassouras = [
    imagemVassoura,
    imagemVassoura2,
    imagemVassoura3,
    imagemVassoura2,
    imagemVassoura,
  ];
}
