var track;
var trackImg;
var jaxon;
var jaxonImg;
var invisibleWall;
var invisibleWall2;
var edges;


function preload(){
  //pre-load images
  trackImg=loadImage("path.png");
  jaxonImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImage(trackImg);
  track.scale = 1.2;

  invisibleWall = createSprite(0,0,100,800);
  invisibleWall.visible = false;

  invisibleWall2 = createSprite(410,0,100,800);
  invisibleWall2.visible = false;

  jaxon = createSprite(200,350);
  jaxon.scale = 0.08;
  jaxon.addAnimation("jaxon running", jaxonImg);
  

}

function draw() {
  background(0);

  track.velocityY = 4;

  jaxon.x = mouseX;

  edges = createEdgeSprites();
  jaxon.collide(edges[3]);
  jaxon.collide(invisibleWall);
  jaxon.collide(invisibleWall2);

  if(track.y>400)
  {
    track.y = height/2;
  }

  drawSprites();

}
