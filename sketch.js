var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  
 fixedRect=createSprite(400,250,60,90);
 fixedRect.shapeColor="green";
 fixedRect.debug=true;

 movingRect=createSprite(600,250,90,60);
 movingRect.shapeColor="red";
 movingRect.debug=true;

}

function draw() {
  background(0);
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  console.log(fixedRect.x-movingRect.x); 
  //fixedRect.x-movingRect.x= fixedRect.width/2 +movingRect.width/2; 
  //fixedRect.x-movingRect.x= 60/2 +90/2; 
  //fixedRect.x-movingRect.x= 30 + 45 
  //fixedRect.x-movingRect.x= 75;


  if(fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2
    && movingRect.x-fixedRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.y-movingRect.y <= fixedRect.height/2 + movingRect.height/2
    && movingRect.y-fixedRect.y <= fixedRect.height/2 + movingRect.height/2 ){
   fixedRect.shapeColor="yellow";
   movingRect.shapeColor="yellow";
  }
   else{
   fixedRect.shapeColor="green";
   movingRect.shapeColor="red";
   }


  drawSprites();
}