class Mario {

  constructor (x,y,imagen){
  this.x = x;
  this.y = y;
  this.imagen = imagen;
  this.pose = 0;
  this.contador = 0;
  
  }

dibujarMario () {

  image (this.imagen[this.pose], this.x, this.y, 72,130); 

}

moverMario() {
  if (keyIsDown(LEFT_ARROW)) {
    this.x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    this.x += 5;
  }

  if (this.x < 0) {
    this.x = 0;
  }

  if (this.x > width - 72) {
    this.x = width - 72;
  }
  
  if (keyIsDown (LEFT_ARROW)|| kaeyIsDown (RIGHT_ARROW) ) {
  
    if (this.pose === 0) {
    this.pose = 1;
    }
    
    this.contador++;
    
    if (this.contador >= 8) {
    this.pose++
    
    
    if (this.pose>3){
    this.pose = 1;
    }
    
  this.contador = 0;
}

  
  } else {
  this.pose = 0;
this.contador = 0;
}
}

}
