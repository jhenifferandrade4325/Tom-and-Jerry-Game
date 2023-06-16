 function colisao(){
    if(
    personagem.xInicial<imgObjeto.xFinal &&
    personagem.xFinal>imgObjeto.xInicial &&
    personagem.yInicial<imgObjeto.yFinal &&
    personagem.yFinal>imgObjeto.yInicial
  ){
    imgObjeto = new Objeto();
    ponto = 0;
  }
  text ("PONTUAÇÃO: " + ponto, 340,30)
}
