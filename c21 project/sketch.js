var astronaut,sleepimg,brushimg
var bg,bgimg

function preload(){

sleepimg=loadAnimation("sleep.png")
bgimg=loadAnimation("iss.png")
brushimg=loadAnimation("brush.png")
}

function setup(){

createCanvas(500,380)

bg=createSprite(250,180)
  bg.addAnimation("bath",bgimg);
  bg.scale=0.12

  astronaut=createSprite(200,250)
  astronaut.addAnimation ("sleep",sleepimg)
  astronaut.scale=0.1
  

  astronaut.addAnimation("brushing",brushimg)
astronaut.changeAnimation("brushimg",brushimg)
}

function draw(){
background("black")
keyPressed();


  drawSprites(); 
}

function keyPressed(){
  if(keyDown("space")){

    
  }
}