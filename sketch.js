// variables
var bullet, wall,wallGroup;
var speed=0;
var weight=0;
var damage=0;
var thickness=0
var test,testImage;
var testPressed=false;


function preload(){
  testImage = loadImage("test.png");
}

function setup() {
  createCanvas(1600,400);
  test=createSprite(400, 50, 40, 40);
  test.scale=0.3;
  test.addImage(testImage);
  wallGroup=new Group();
}

function draw() {
  background(1); 

  if (testPressed===true){
    if(hasCollided(bullet, wall)){

      bullet.velocityX=0;
      bullet.lifetime=10
     
      if(damage>10){
        wall.shapeColor="red"; 
      }
      if(damage<10){
        wall.shapeColor="green";
      }
      testPressed=false 
      

    } 
  }
   
  drawSprites();
  text("Speed = "+round(speed)+"\nWeight = "+round(weight)+"\nThickness = "+round(thickness)+"\nDamage = "+round(damage),400,350);
}

function mouseClicked() {
  wallGroup.destroyEach();;
  testPressed=true;
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  bullet=createSprite(100, 200, 100, 30);
  bullet.velocityX=speed;
  wall=createSprite(1500, 175, thickness, height/2);
  wallGroup.add(wall);
  wall.shapeColor="gray";
  bullet.shapeColor="white";
  //damage
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function hasCollided(ibullet, iwall){
  //is touching
  var bulletRightEdge=ibullet.x+ibullet.width;
  var wallLeftEdge=iwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}