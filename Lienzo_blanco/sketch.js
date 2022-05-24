var box1;

function setup() {
  createCanvas(400, 400); //canvas area de juego
  box1 = createSprite(200,200,50,50);
}

function draw() 
{
  background(220);
  if(keyIsDown(UP_ARROW)){
    box1.y = box1.y - 2;
  }
  drawSprites();
 
}

