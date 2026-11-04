let juego;
let imageBombon, fondo, imgCucas;
let imagenesMario = [];

function preload(){
  imageBombon= loadImage("data/bombon.png");
  fondo=loadImage("data/escenario.png");
  imgCucas=loadImage("data/cucaracha.png");
  imgMario=loadImage ("data/mario.png");
  
   for (let i=0; i<4; i++) {
    imagenesMario[i] = loadImage ("data/mario"+i+".png");
  }
}
function setup() {
createCanvas (800,400);
juego= new Juego(fondo, 5, imageBombon,imgCucas);
mario = new Mario (340, 265, imagenesMario);
}


function draw() {
  background(200);
  juego.dibujaBombones();
 
   mario.moverMario();
  mario.dibujarMario();
 

}
