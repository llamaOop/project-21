
var bullet,wall;
var weight,speed;



function setup() {
  createCanvas(1600,400);
  bullet=createSprite(200, 200, 20, 20);
  bullet.shapeColor = "white"
  thickness = random(22,83)
  wall = createSprite(1500,200,thickness, height/2)

  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  
  
}

function draw() {
  background(0); 
  
  if(collision(bullet,wall) ){
  bullet.velocityX = 0
  var damage = 0.5 * weight * speed *speed/(thickness*thickness*thickness);
  

  if(damage>10){
    wall.shapeColor = color (255,0,0)
  }
  

  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }





  }
 

 
  
  drawSprites();
}


function collision (object1,object2){
bulletRightEdge = object1.x + object1.width;
wallLeftEdge = object2.x
if (bulletRightEdge >=wallLeftEdge){
  return true
}
return false;
}