class Objeto{
    //fazer a imagem aparecer como um objeto
    constructor(){
        this.imagem = loadImage("./imgJogo/objeto.gif");
        this.largura = 97;
        this.altura = 106;
        this.posX = 700;
        this.posY = 550;
        this.velocidade = 3;
    }

    exibir(){
        image(this.imagem,this.posX,this.posY,this.largura,this.altura)
    }

    mova(){
        this.posX -= this.velocidade;
        image(this.imagem,this.posX,this.posY,this.largura,this.altura);
        }    
}