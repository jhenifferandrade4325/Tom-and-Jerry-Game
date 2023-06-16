//variáveis
var personagem;
var imgObjeto;
var imgFundo;
var condicao = "correndo";
var ponto = 0;
var contador = 0;

function preload(){
    //carregar as imagens nas variáveis
    imgObjeto = loadImage ("./imgJogo/objeto .png");
    imgFundo = loadImage ("./imgFundo/fundo-movel.png");
    personagem = loadImage ("./imgJogo/jogador.png");
}

function setup(){//configurações iniciais
    //tamanho da tela
    createCanvas(800,600).parent("jogo");

    //mostar os objetos selecionados na tela 
    imgFundo = new Fundo ();
    imgObjeto = new Objeto ();
    personagem = new Jogador ();
    frameRate(60);
}
// condição para que quando apartar na tecla o personagem pule
function keyPressed(){
    if (keyCode == 32){
        condicao = "pulo";
    }
}

function draw(){
    contador++;
    if(contador == 30){
        ponto++;
        contador = 0;
    }
    //fazer o cenário aparecer 
    imgFundo.apareca();
    imgFundo.movimenta();

    if (imgFundo.posX < -800){ //fazer com que o cenário fique em loop
        imgFundo = new Fundo();
    } 

    //fazer o objeto aparecer
    imgObjeto.exibir();
    imgObjeto.mova();

    if (imgObjeto.posX < -200){ //fazer com que o objeto fique em loop
        imgObjeto = new Objeto();
    }
    //fazer o jogador aparecer
    personagem.mostra();
    colisao();
    
}
