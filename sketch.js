var bg,bgImg;
var player, player2,player3,player_Img,player2_Img;
var bg_i,bg_2_i,bg1,bg2;
var startImg,start;
var crate , crateImg;
var gameState = 1;
var crates = createGroup();
var Grounds;
var heart1Img,heart2Img,heart3Img,heart1,heart2,heart3;
var life = 3;

function preload(){
   player_Img = loadAnimation("assets/s1.png","assets/s2.png","assets/s3.png")
   player2_Img = loadImage("assets/player2.png")

   bg_i = loadImage("assets/lev1-BG.jpg")
   bg_2_i = loadImage("assets/lev2-BG.jpg")

   startImg = loadImage("assets/start.webp")

   crateImg = loadImage("assets/Crate.png")
   
   heart1Img = loadImage("assets/heart_1.png")
   heart2Img = loadImage("assets/heart_2.png")
   heart3Img = loadImage("assets/heart_3.png")


}

function setup() {

  
  createCanvas(1000,500);

  start = createSprite(500,250)
  start.addImage("startImg",startImg)
  start.scale = 0.1;

  bg1 = createSprite(500,250,1000,500);
  bg1.addImage("bg_i",bg_i)
  bg1.visible = false;

  heart1 = createSprite(200,100)
  heart1.addImage("heart1Img",heart1Img)
  heart1.scale = 0.3;
  heart1.visible = false;


  heart2 = createSprite(200,100)
  heart2.addImage("heart2Img",heart2Img)
  heart2.scale = 0.3;
  heart2.visible = false;

  heart3 = createSprite(100,50)
  heart3.addImage("heart3Img",heart3Img)
  heart3.scale = 0.3;
  


 player = createSprite(200,390);
 player.addAnimation("player_Img",player_Img)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,400)
   player.visible = false; 

   var Ground = createSprite(500,450);
   Ground.visible = false;
   //Grounds.add(Ground);

}

function draw() {
  background(0);
  //player.collide(Grounds)
  player.velocityY = 7;


  if(gameState === 1) {
    bg1.visible = true;
    player.visible = true;
    start.visible = false;
    lev1_box()
    if(keyDown("space") || keyDown(UP_ARROW)) {
      player.velocityY = -10
    }
    if(crates.collide(player))  {
      life =-1;
      if(life === 2)  {
        heart3.visible = false;
        heart2.visible = true;
      }
      else if(life === 1) {
        heart2.visible = false;
        heart1.visible = true;
      }
    }
  }
  



  //moving the player up and down and making the game mobile compatible using touches
/*if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x-30
}
if(keyDown()||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("")){
 
  player.addImage()
 
}


else if(keyWentUp()){
  player.addImage()
}
*/
drawSprites();

}
function lev1_box(){
  if(gameState === 1) {
    if(frameCount%110  === 0) {
      crate = createSprite(1050,390);
      crate.addImage("crateImg",crateImg);
      crate.scale = 0.2
      crate.velocityX = -3;
      crates.add(crate)
     }
  }
}