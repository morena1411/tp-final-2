class Juego {
  constructor(fondo, cantBombones, imgBombon, imgCuca) {
    this.fondo=fondo;
    this.cant=cantBombones;
    this.bombones=[];
    this.cucarachas=[];
    for (let i=0; i<this.cant; i++) {
      this.bombones[i]=new Bombon(random(width),random(-200,0),imgBombon);
      this.cucarachas[i]=new Cucaracha(random(width),random(-200,0),imgCuca);
    }
  }
  
  dibujaBombones(){
    image(this.fondo,0,0,width,height);
    for (let i=0; i<this.cant; i++) {
      this.bombones[i].dibujaBombon();
      this.bombones[i].caenBombones();
      this.cucarachas[i].dibujaCucaracha();
      this.cucarachas[i].caenCucarachas();
    }
   
  }
}
