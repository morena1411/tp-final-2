class Bombon{
 constructor(x,y,imgBombon){
 this.imagen=imgBombon;
 this.x=x;
 this.y=y;
 this.tam= random(40,20);
 this.vel=-3;
 } 
 
 dibujaBombon(){
 image(this.imagen, this.x, this.y, this.tam, this.tam);
 }
 caenBombones(){
 if (this.y>height+this.tam) {
    this.x=-this.tam;
      this.x=random(20, height/2);
      this.tam=random(20, 20);
    }
    this.y-=this.vel;
 }
}
