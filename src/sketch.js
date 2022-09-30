function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraVassoura();
  movimentaVassoura();
  movimentaAtor();
  voltaPosicaoInicialVassoura();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
