//ator do jogo (Morcego)

let yAtor = 350;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor,xAtor, yAtor, 110, 60);
}
  
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 4;
  }    
  
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 4;
    }
  }    
}

function verificaColisao(){
  for (let i = 0; i < imagemVassouras.length; i = i + 1){
    colisao = collideRectCircle(xVassouras[i], yVassouras[i], comprimentoVassoura, alturaVassoura, xAtor, yAtor, 30)
    if (colisao){
      voltaAtorParaPosicaoInicial(); 
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}    

function voltaAtorParaPosicaoInicial(){
  yAtor = 350;
}

function colidiu(){
  yAtor = 350;
}

function incluiPontos(){
  text(meusPontos, width / 5, 60);
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(355, 340, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 350;
}