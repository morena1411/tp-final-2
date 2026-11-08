let juego;
let imageBombon, fondo, imgCucas, imgVida, imgInicio,imgGanaste, ImgPerdiste;
let imagenesMario = [];
let marioGana = [];

function preload() {
  imageBombon= loadImage("data/bombon.png");
  fondo=loadImage("data/escenario.png");
  imgCucas=loadImage("data/cucaracha.png");
  imgVida = loadImage ("data/vida.png");
  for (let i=0; i<4; i++) {
    imagenesMario[i] = loadImage ("data/mario"+i+".png");
  }
  for (let i=0; i<4; i++) {
    marioGana[i] = loadImage ("data/marioGana"+i+".png");
  }
  imgInicio = loadImage ("data/fondoinicio.jpeg");
   imgGanaste = loadImage ("data/ganaste.jpeg");
   imgPerdiste = loadImage ("data/perdiste.jpeg");
  
}
function setup() {
  createCanvas (800, 400);
  juego= new Juego(fondo, 5, imageBombon, imgCucas, imagenesMario,imgVida,imgInicio);
}


function draw() {
  background(200);
  juego.dibujar();
}

function mousePressed() {
  if (
    juego.estado === "inicio" &&
    mouseX >= 260 && mouseX <= 400 &&
    mouseY >= 335 && mouseY <= 380
  ) {
    juego.estado = "juego";
  }
}
