class Cucaracha{
 constructor(x,y,imgCucaracha){
 this.imagen=imgCucaracha;
 this.x=x;
 this.y=y;
 this.tam= random(40,20);
 this.vel=-3;
 } 
 
 dibujaCucaracha(){
 image(this.imagen, this.x, this.y, this.tam, this.tam);
 }
 caenCucarachas(){
 if (this.y>height+this.tam) {
    this.x=-this.tam;
      this.x=random(20, height/2);
      this.tam=random(20, 20);
    }
    this.y-=this.vel;
 }
}
