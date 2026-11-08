class Juego {

  constructor(fondo, cantBombones, imgBombon, imgCuca, imagenesMario, imgVidas, imgInicio) {
    this.fondo=fondo;
    this.cant=cantBombones;
    this.bombones=[];
    this.cucarachas=[];
    this.mario= new Mario(200, 200, imagenesMario);
    this.interfaz= new Interfaz(imgVidas);
    for (let i=0; i<this.cant; i++) {
      this.bombones[i]=new Bombon(random(50, 700), -60 - i * 300, imgBombon);
      this.cucarachas [i] = new Cucaracha (random (50, 700), -210 - i * 300, imgCuca);
    }
    this.estado = "inicio";
    this.inicio=imgInicio;
    this.ganaste=imgGanaste;
    this.perdiste=imgPerdiste;
  }


  dibujar() {
    if (this.estado === "inicio") {
      image(this.inicio, 0, 0, width, height)
    }

    if (this.estado === "juego") {
      image(this.fondo, 0, 0, width, height);
      juego.dibujaBombones();
      juego.marioJuega();
      juego.interfazMM();

      if (this.interfaz.puntos >= 10) {
        this.estado = "animacionGanar";
      }

      if (this.interfaz.cantVidas <= 0) {
        this.estado = "perdiste";
      }
    }

    if (this.estado === "animacionGanar") {
      image(this.fondo, 0, 0, width, height);

      if (this.mario.poseGanar < 4) {
        this.mario.animarGanar();
      } else {
        this.estado = "ganaste";
      }
    }


    if (this.estado === "ganaste") {
      image(this.ganaste, 0, 0, width, height)
    }

    if (this.estado === "perdiste") {
      image(this.perdiste, 0, 0, width, height)
    }
  }






  dibujaBombones() {

    for (let i=0; i<this.cant; i++) {
      this.bombones[i].dibujaBombon();
      this.bombones[i].caenBombones();
      this.cucarachas[i].dibujaCucaracha();
      this.cucarachas[i].caenCucarachas();

      //cada vez que una cucaracha hace contacto con mario, pierde una vida
      if ( this.cucarachas[i].y + this.cucarachas[i].tam > this.mario.y &&
        this.cucarachas[i].y < this.mario.y + 130 &&
        this.cucarachas[i].x + this.cucarachas[i].tam >= this.mario.x &&
        this.cucarachas[i].x < this.mario.x + 72
        ) {
        this.interfaz.perderVida();
        this.cucarachas[i].y -= 1500;
      }

      //cada vez que un bombon hace contacto con mario, suma un punto
      if ( this.bombones[i].y + this.bombones[i].tam > this.mario.y &&
        this.bombones[i].y < this.mario.y + 130 &&
        this.bombones[i].x + this.bombones[i].tam >= this.mario.x &&
        this.bombones[i].x < this.mario.x + 72
        ) {
        this.interfaz.sumarPunto();
        this.bombones[i].y -= 1500;
      }
    }
  }
  marioJuega() {
    this.mario.dibujarMario();
    this.mario.moverMario();
  }
  interfazMM() {
    this.interfaz.dibujaCorazon();
    this.interfaz.dibujarPuntos();
  }
}
