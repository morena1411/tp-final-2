let juego;
let imageBombon, fondo, imgCucas;

function preload(){
  imageBombon= loadImage("data/bombon.png");
  fondo=loadImage("data/escenario.png");
  imgCucas=loadImage("data/cucaracha.png");
}
function setup() {
createCanvas (800,400);
juego= new Juego(fondo, 5, imageBombon,imgCucas);
}


function draw() {
  background(200);
  juego.dibujaBombones();

}
