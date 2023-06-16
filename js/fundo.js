class Fundo{
    //fazer a imagem aparecer como um objeto
    constructor(){
        this.imagem = loadImage("./imgFundo/fundo-movel.png");
        this.largura = 1600;
        this.altura = 600;
        this.posX = 0;
        this.posY = 0;
        this.velocidade = 3;
    }

    apareca(){
        image(this.imagem,this.posX,this.posY,this.largura,this.altura)
    }

    movimenta(){
        this.posX -= this.velocidade;
        image(this.imagem,this.posX,this.posY,this.largura,this.altura);
        }    
}
