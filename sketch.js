var bg,bgImage;
var scene;
var hero, heroImg;
var meteor, meteorImg;
var PLAY=1
var END=0
var gameState=PLAY
var meteorGroup


function preload(){
   bgImage=loadImage("background.jpg") ;
   heroImg=loadImage("Earth.png");
   meteorImg=loadImage("Meteor.png");

}

function setup() {
 createCanvas(400,400);
 scene=createSprite(0,0,400,400);
 scene.addImage(bgImage);
 scene.scale=3;
scene.velocityY=1;
hero=createSprite(200,300,50,50);
hero.addImage(heroImg);
hero.scale=0.07;
createEdgeSprites();
meteorGroup=new Group();
}

function draw() {
 background("black")
if (gameState===PLAY){

  if (scene.y>300){
   scene.y=100;
  }
  if (keyDown(RIGHT)){
 hero.x=hero.x+2;

  }
  if (keyDown(LEFT)){
hero.x=hero.x-2;

  }

spawnMeteors();
if (hero.x<40){
   hero.x=40
}
if (hero.x>360){
   hero.x=360
}
if (meteorGroup.isTouching(hero)){

gameState=END
}
 drawSprites();
} else if (gameState===END){
   scene.velocityY=0
   meteorGroup.destroyEach()
   hero.destroy()
   textSize(24)
text("GAME OVER",160,200);

}


  
}
function spawnMeteors(){
   if (frameCount%60===0){
 meteor=createSprite(Math.round(random(50,350)),0,10,10)
   meteor.addImage(meteorImg)
   meteor.velocityY=5
   meteor.scale=0.08
   meteor.lifetime=500
   meteorGroup.add(meteor)
   }
  

}




