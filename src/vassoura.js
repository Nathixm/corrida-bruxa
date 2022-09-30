//vassouras do jogo

//vassouras
let xVassouras = [500, 500, 500, 500, 500];
let yVassouras = [245, 265, 290, 315, 320];
let velocidadeVassouras = [2, 2.5, 3.2, 5, 3.3];

let comprimentoVassoura = 50;
let alturaVassoura = 50;


function mostraVassoura(){
  for (let i = 0; i < imagemVassouras.length; i = i + 1){
    image(imagemVassouras[i],xVassouras[i],yVassouras[i], comprimentoVassoura, alturaVassoura);
  }
}
  
function movimentaVassoura(){
   for (let i = 0; i < imagemVassouras.length; i = i + 1){
  xVassouras[i] -= velocidadeVassouras[i];
   }
}

function voltaPosicaoInicialVassoura(){
  for (let i = 0; i < imagemVassouras.length; i++){
    if (passouTodaATela(xVassouras[i])){
    xVassouras[i] = 500;
    }
  }    
}   
  
function passouTodaATela(xVassouras){
  return xVassouras < - 50;
}
