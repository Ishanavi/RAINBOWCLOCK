function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  //createSprite(400, 200, 50, 50);


  
}

function draw() {
  background("black"); 
  
    translate(200,200);
    rotate(90);


  hr = hour();
  mn = minute();
  sc = second();

   scAngle = map(sc,0,60,0,360);

   push();
   rotate(scAngle);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0)
   pop();


   mnAngle = map(mn,0,60,0,360);

   push();
   rotate(mnAngle);
   stroke(0,255,0);
   strokeWeight(7);
   line(0,0,70,0)
   pop();


   hrAngle = map(hr,0,60,0,360);

   push();
   rotate(hrAngle);
   stroke(0,0,255);
   strokeWeight(7);
   line(0,0,50,0)
   pop();


    noFill();
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);

    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);

    stroke(0,0,255);
    arc(0,0,250,250,0,hrAngle);

  drawSprites();
}