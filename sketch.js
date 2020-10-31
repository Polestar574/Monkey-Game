
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var bananaGroup;
var obstaclesGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.shapeColor=("blue");
  
  console.log(ground.x);
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}


function draw() {
background("white");
  stroke("white");
  textSize(20);
  fill("white");
  text("score" + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:" + survivalTime,100,50);
  
  ground.x=ground.width/2;
  monkey.velocityY = monkey.velocityY + 0.8;
  
 
  if(keyDown("space") && monkey.y >= 100){
    monkey.velocityY=-12;
}

   if(ground.x<0){
    ground.x=ground.width/2
}
  
  
 monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
   
  drawSprites();
}


function spawnFood(){
  
if(frameCount % 80 === 0){
  banana = createSprite(400,150,10,10);
  banana.addImage(bananaImage);
  
  rand=Math.round(120,200);
  banana.velocityX=-7;
  banana.lifetime=135;
  banana.scale=0.1
 FoodGroup.add(banana);
    
}
}    

function spawnObstacles(){
  if(frameCount% 300 === 0){
     obstacle = createSprite(370,330,10,10);
    obstacle.addImage(obstacleImage);
    rand=Math.round(120,200);
    obstacle.velocityX=-7;
     obstacle.lifetime=136;
    obstacle.scale=0.1;
    
    obstacleGroup.add(obstacle);
     }
}

