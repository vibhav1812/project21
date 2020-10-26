var wall, thickness;
var speed,weight, bullet; 

function setup() {
createCanvas(1600,400)
thickness = random(22,83)
speed = random(223,321)
weight = random(30,52);
bullet = createSprite(50,200,70,20);
bullet.velocityX = speed;
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color("black")
}

function draw() {
  background("white");  
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0
    bullet.x = 1150;
       var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
       if(damage <10){
        bullet.shapeColor = color("red");
       }
       if(damage >10){
        bullet.shapeColor = color("green");
       }
      }

  drawSprites();
    }