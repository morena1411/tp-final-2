let juego;
let imageBombon, fondo, imgCucas, imgVida, imgInicio, imgGanaste, imgPerdiste, imgTutotial;
let imagenesMario = [];
let marioGana = [];
let marioPierde = [];

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

  for (let i=0; i<4; i++) {
    marioPierde[i] = loadImage ("data/marioPierde"+i+".png");
  }

  imgInicio = loadImage ("data/fondoinicio.jpeg");
  imgGanaste = loadImage ("data/ganaste.jpeg");
  imgPerdiste = loadImage ("data/perdiste.jpeg");
  imgTutorial = loadImage ("data/tutorial.png");
}
function setup() {
  createCanvas (800, 400);
  juego= new Juego(fondo, 5, imageBombon, imgCucas, imagenesMario, imgVida, imgInicio,imgTutorial);
}


function draw() {
  background(200);
  juego.dibujar();
}

function mousePressed() {

  if (juego.estado === "inicio" &&
    mouseX >= 260 && mouseX <= 400 &&
    mouseY >= 335 && mouseY <= 380
    ) {
    juego.estado = "juego";
  }

  if (juego.estado === "inicio" &&
    mouseX >= 405 && mouseX <= 538 &&
    mouseY >= 339 && mouseY <= 376
    ) {
    juego.estado = "tutorial";
  }

  if (juego.estado === "perdiste" &&
    mouseX >= 220 && mouseX <= 395 &&
    mouseY >= 338 && mouseY <= 378) {
    juego.reiniciar();
  }

  if (juego.estado === "perdiste" &&
    mouseX >= 410 && mouseX <= 615 &&
    mouseY >= 338 && mouseY <= 378) {
    juego.reiniciar();
    juego.estado = "inicio";
  }

  if (juego.estado === "ganaste" &&
    mouseX >= 292 && mouseX <= 508 &&
    mouseY >= 343 && mouseY <= 379) {
    juego.reiniciar();
    juego.estado = "inicio";
  }
}
