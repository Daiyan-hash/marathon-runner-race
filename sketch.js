var background, backgroundImg;
var runner1, runner2, runner3, runner4;
var runner1Img, runner2Img, runner3Img, runner4Img;

function preload(){
backgroundImg=loadImage("images/th.jpeg");
runner1Img=loadImage("images/runner1.png");
runner2Img=loadImage("images/runner2.png");
runner3Img=loadImage("images/runner1.png");
runner4Img=loadImage("images/runner2.png");
}

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end()
  }
}
