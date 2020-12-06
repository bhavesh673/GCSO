var fixedrect,Movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(760, 200, 50, 70);
  fixedrect.shapeColor="green";
  Movingrect=createSprite(50, 200, 50, 50);
  Movingrect.shapeColor="green";
}

function draw() {
  background(0); 
  Movingrect.velocityX=15; 
  Movingrect.velocityY=0;
  if(Movingrect.x-fixedrect.x<fixedrect.width/2+Movingrect.width/2
    &&fixedrect.x-Movingrect.x<fixedrect.width/2+Movingrect.width/2
    &&Movingrect.y-fixedrect.y<fixedrect.height/2+Movingrect.height/2
    &&fixedrect.y-Movingrect.y<fixedrect.height/2+Movingrect.height/2) {
    Movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    Movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
;  }
  drawSprites();
}