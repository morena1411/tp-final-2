class Interfaz {
  constructor(corazon) {
    this.vida=corazon;
    this.cantVidas=3;
    this.puntos=0;
  }

  dibujaCorazon() {
    for (let i=0; i<this.cantVidas; i++) {
      image(this.vida, 20+(i*40), 20, 30, 30);
    }
  }

  perderVida() {
    this.cantVidas-= 1
  }

  sumarPunto() {
    this.puntos+=1
  }

  dibujarPuntos() {
    fill(255);
    textSize(20);
    text("Puntos: "+ this.puntos, 700, 35);
  }
}
