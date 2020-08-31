
var track,trackimg;
var car,carimg;
var border1,border2;

function preload(){
  trackimg = loadImage("images/roadtrack.png");
  //carimg = loadImage("ambu.jpg");
}

function setup() {
  createCanvas(displayWidth-20, displayHeight-30);
  track = createSprite(displayWidth/2, 0,displayWidth, displayHeight+300);
  track.addImage("track",trackimg);
  track.y =  displayHeight/2 -400;
  track.scale = 2;
  
  border1 = createSprite(displayWidth/2-215,0,5,displayHeight+900);
  border1.y = displayHeight/2 -400;
  border1.shapeColor = "red";

  border2 = createSprite(displayWidth/2+220,0,5,displayHeight+900);
  border2.y = displayHeight/2 -400;
  border2.shapeColor = "red";

}

function draw() {
  background(74,134,24); 
  track.velocityY = 10;
  border1.velocityY=10;
  if(track.y > displayHeight){
    track.y =  displayHeight/2 -400;
  } 
  if(border1.y > displayHeight){
    border1.y =  displayHeight/2 -400;
  } 
  spawnCars();
  drawSprites();
}

function spawnCars(){
  if(World.frameCount % 100 == 0){
    var car = createSprite(random(displayWidth/2-200,displayWidth/2+200),displayHeight+100,10,10);
    car.velocityY = -5;
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1: car.addImage(car1img);
      break;
      case 2: car.addImage(car2img);
      break;
      default : break;
    }
    car.scale = 0.5;
  }
}
