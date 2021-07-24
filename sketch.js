var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;

function preload(){
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    appleImg = loadImage("apple.png");
    leafImg= loadImage("orangeLeaf.png");
}

function setup(){
    createCanvas(400,400);
    garden=createSprite(200,200);
    garden.addImage(gardenImg);
    rabbit = createSprite(180,340,30,30);
    rabbit.scale =0.09;
    rabbit.addImage(rabbitImg);
}


function draw() {
    background(0);
    rabbit.x = mouseX;
    edges= createEdgeSprites();
    rabbit.collide(edges);
    spawnApples();
    spawnLeaves();
    drawSprites();
}

function spawnApples(){
    if(frameCount%80===0){
    apple=createSprite(200,0,40,10);
    apple.velocityY=2;
    apple.addImage("apples", appleImg);
    apple.scale=0.05;
    apple.x=Math.round(random(50,350))
    apple.depth=rabbit.depth;
    rabbit.depth=rabbit.depth+1;
  }
 }
 function spawnLeaves(){
    if(frameCount%100===0){
      leaf=createSprite(200,0,40,10);
      leaf.velocityY=2;
      leaf.addImage("leaves", leafImg);
      leaf.scale=0.05;
      leaf.x=Math.round(random(50,350))
      leaf.depth=rabbit.depth;
      rabbit.depth=rabbit.depth+1;
  }
 }