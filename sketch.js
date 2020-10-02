var car,wall;
function setup() {
  createCanvas(1800,400);
  car = createSprite(100, 200,90,30);
  car.shapeColor = "white";
  wall = createSprite(1300,200,30,150);
  car.velocityX = Math.round(random(7,17));
}

function draw() {
  background("black");
  if (car.isTouching(wall)){
   car.veloctyX = 0;
  }
  if (car.isTouching(wall) && car.velocityX > 6 && car.velocityX < 10){
  wall.shapeColor = "green"; 
  
  }
  if (car.isTouching(wall) && car.velocityX > 9 && car.velocityX < 14){
  wall.shapeColor = "orange"; 
    
    }
  if (car.isTouching(wall) && car.velocityX > 13 && car.velocityX < 18){
  wall.shapeColor = "red"; 
    
  }
  car.collide(wall);
  drawSprites();
}