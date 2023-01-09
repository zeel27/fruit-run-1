var title,titleImg
var bg,bgImg
var ground
var man,manImg


function preload(){
titleImg=loadImage("title.jpg")
bgImg=loadImage("background.jpg")
man=loadImage("gamestart.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)
bg=createSprite(width/2,height/2,width,height)
bg.addImage(bgImg)
bg.scale=5

title=createSprite(width/2,60,50,50)
title.addImage(titleImg)
title.scale=0.5

ground=createSprite(width/2,height-10,width,20)
ground.shapeColor="brown"

man=createSprite(50,height-10,50,50)
man.addImage(manImg)

}

function draw(){
background("white")
drawSprites()
}