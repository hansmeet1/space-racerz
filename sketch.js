var r1_img,r2_img,m1_img,m2_img,m3_img,bg_img,fuel_img
var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var imgblast
function preload(){
  r1_img=loadImage("assets/rocket1.jpg")
  r2_img=loadImage("assets/rocket2.jpg")
  m1_img=loadImage("assets/meteor1.png")
  m2_img=loadImage("assets/meteor2.jpg")
  m3_img=loadImage("assets/meteor3.jpg")
  bg_img=loadImage("assets/space back ground.jpg")
  fuel_img=loadImage("assets/fuel.png")
}
function setup(){
  canvas=createCanvas(windowWidth,windowHeight)
 // db=firebase.database()
 // console.log(db)
 // form= new Form()
 database = firebase.database();
 game = new Game();
// game.getState();
 game.start();
  
}
function draw(){
  //form.display()
}