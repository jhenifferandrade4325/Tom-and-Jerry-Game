var personagem;
var imgObjeto;
var imgFundo;

function preload(){
    //carregar as imagens nas variáveis
    imgObjeto = loadImage ("./imgJogo/objeto.gif");
    imgFundo = loadImage ("./imgFundo/fundo-movel.png");
    personagem = loadImage ("./imgJogo/personagem.gif");
}

function setup(){//configurações iniciais
    //tamanho da tela
    createCanvas(800,600);
    imgFundo = new Fundo;
}

function draw(){
    //fazer o cenario aparecer 
    imgFundo.apareca();
    imgFundo.movimenta();
   
    if (imgFundo.posX < -800){
        imgFundo = new Fundo();
    }    
}
