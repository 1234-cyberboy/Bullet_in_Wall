var bullet, wall;
var speed, weight, thickness;
var damage;

function setup() {
  
  createCanvas(windowWidth, windowHeight);

  speed = random(55, 90);
  weight = random(400, 1500);
  thickness = random(22,83)
  
  
  bullet = createSprite(20, 200, 50, 10);

  bullet.velocityX = speed;

  bullet.shapeColor = color(255);

  wall = createSprite(windowWidth-300, 200, thickness, windowHeight/2);
  wall.shapeColor = color(80,60,120);
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 10){
      bullet.shapeColor = color(255, 0, 0);
    }

    if(damage < 100)  {
      bullet.shapeColor = color(0, 255, 0);
    }
  }
  
  drawSprites();
}