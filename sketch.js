var player , playerimg;
var obstacles , obstacleimg;
var bg,bgimg ;
var spaceshuttle , spsimg ; 
var asteroidGroup , SSPgroup , bulletGroup ;
var score = 0 ;



function setup() {
  
  createCanvas(800,800);
  bg = createSprite(0,800,50,800)
  bg.addImage(bgimg);
  bg.scale = 2.3 ; 
 bg.velocityY = 4;
 
 player =createSprite(400,750 )
 player.addImage(playerimg)
 player.debug = true
 player.scale = 0.5
 //player.setCollider("rectangle",180,-60,80,150)

 asteroidGroup = new Group()
 bulletGroup = new Group()
 SSPgroup = new Group()


}
function preload(){
playerimg = loadImage("ssp.png");
obstacleimg = loadImage("ast1.png");
bgimg = loadImage("4.jpg"); 
sspimg = loadImage ("alien.png");
bulletimg = loadImage("bullet.png")




}

function draw() {
  background(0);
  fill("white")
  textSize(30)
  
  console.log(bg.y)
  if (bg.y>800){
 bg.y =height /2

  } 
  if(keyWentDown("b")) 
  {
    spawnBullets();
  }
player.x = mouseX;
//player.y = mouseY ;

spawnAsteroids();
spawnSSP();

if(asteroidGroup.isTouching(bulletGroup))
{
  asteroidGroup.destroyEach()
  bulletGroup.destroyEach()
   score = score+10
}

if(SSPgroup.isTouching(bulletGroup))
{
   SSPgroup.destroyEach()
   bulletGroup.destroyEach()
   score = score+20
}


  drawSprites();

  //text(mouseX+","+mouseY , mouseX,mouseY)
  text("score: "+score,650,60)
 
}
function spawnAsteroids(){
  if(frameCount%60 === 0  ){
    var asteroids = createSprite (random(50,750),random(50,100),10,10)
    asteroids.addImage(obstacleimg)
    asteroids.scale = 0.25;
    asteroids.velocityY = random(8,15);
    asteroids.velocityX =  random(-8,-15);
    asteroidGroup.add(asteroids)
    asteroids.lifetime = 233.3 
    asteroids.depth=player.depth
    player.depth = player.depth+1
    
  }
}

  function spawnSSP(){
    if (frameCount%80=== 0)
  {
     spaceshuttle = createSprite (random(50,750),random(50,100),15,15);
     spaceshuttle.velocityY = 9
     SSPgroup.add(spaceshuttle)
     spaceshuttle.lifetime = 234;
     spaceshuttle.addImage(sspimg)
     spaceshuttle.scale = 0.5
     spaceshuttle.depth=player.depth
    player.depth = player.depth+1
  }
  }
 
  function spawnBullets()
  {
    var bullet = createSprite(100,600,10,10)
    bullet.x = player.x;
    bullet.velocityY = -10
    bulletGroup.add(bullet)
    bullet.lifetime = 234;
    bullet.addImage(bulletimg)
    bullet.scale = 0.1
  }






