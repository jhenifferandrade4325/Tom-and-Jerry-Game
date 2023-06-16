class Objeto{
    //fazer a imagem aparecer como um objeto
    constructor(){
        this.imagem = loadImage("./imgJogo/objeto .png");
        this.largura = 205;
        this.altura = 110;
        this.posX = 700;
        this.posY = 450;
        this.velocidade = 2;
        this.yInicial = this.posY;
        this.yFinal = this.posY + this.altura;
        this.xInicial = this.posX;
        this.xFinal = this.posX + this.largura;
    }

    exibir(){
        image(this.imagem,this.posX,this.posY,this.largura,this.altura)
    }

    mova(){
        this.posX -= this.velocidade;
        image(this.imagem,this.posX,this.posY,this.largura,this.altura);
        this.yInicial = this.posY;
        this.yFinal = this.posY + this.altura;
        this.xInicial = this.posX;
        this.xFinal = this.posX + this.largura;
        }
            
    
}