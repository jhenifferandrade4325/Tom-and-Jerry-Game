class Jogador{
    //fazer a imagem aparecer como um objeto
    constructor(){ //atributos do jogador
        this.imagem = loadImage("./imgJogo/jogador.png");
        this.largura = 135;
        this.altura = 72;
        this.posX = 40;
        this.posY = 450;
        this.velocidade = 2;
        this.yInicial = this.posY;
        this.yFinal = this.posY + this.altura;
        this.xInicial = this.posX;
        this.xFinal = this.posX + this.largura;
    }

    mostra(){
        image(this.imagem,this.posX,this.posY,this.largura,this.altura) //mostrar o jogador
        
        if((condicao == "pulo" && this.posY > 200)){ //condição para que o jogador pule
            this.posY -= this.velocidade; // fazer o jogador subir
        }

        if(this.posY <= 200){
            condicao = "correndo";
        }

        if((condicao == "correndo") && (this.posY < 450)){
            this.posY += this.velocidade;
        }
        this.yInicial = this.posY;
        this.yFinal = this.posY + this.altura;
        this.xInicial = this.posX;
        this.xFinal = this.posX + this.largura;
    }
}

 //if(this.pulando == 1){
            //this.posY -= this.velocidade;
            
          //  if (this.posY <= this.alturaPulo){
               // this.velocidade = this.velocidade * -1;
           // }

           // if (this.posY == chao){
                //this.pulando = 0;
               // this.velocidade = this.velocidade * -1;
            //}
        //}