const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gamestate = 1;
var PLAY = 1;
var END = 0;
var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16 ; 
var u1,u2,u3,u4,u5,u6,u7,u8,u9,u10;
var b21,b22,b23,b24,b25,b26,b27,b28,b29,b210,b211,b212,b213,b214;
var n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14;
var player,playerImg;
var zombie1,zombie2,zombie3,zombie4,zombie5,zombie1Img,zombie2Img,zombie3Img,zombie4Img,zombie5Img;
var energy1,energy2,energy3,energy1Img,energy2Img,energy3Img;
var gun1,gun1Img;
var knife1,knife2,knife1Img,knife2Img;
var restart,restartImg;
var gameover,gameoverImg;

function preload(){
restartImg = loadImage("restart.png");
gameoverImg = loadImage("gameOver.png");
playerImg = loadImage("b.png");
zombie1Img = loadImage("i2.png");
zombie2Img = loadImage("i2.png");
zombie4Img = loadImage("i2.png");
zombie5Img = loadImage("i2.png");
zombie3Img = loadImage("i2.png");
energy1Img = loadImage("energy.png");
energy2Img = loadImage("energy.png");
energy3Img = loadImage("energy.png");
gun1Img = loadImage("i1.png");
knife1Img = loadImage("kn.png");
knife2Img = loadImage("kn.png");

}

function setup(){
    var canvas = createCanvas(2100,750);
    engine = Engine.create();
    world = engine.world;

b1 =createSprite(250,100,300,5);
b2 = createSprite(100,350,5,500);
b3 = createSprite(250,600,300,5);
b4 = createSprite(200,200,5,100);
b5 = createSprite(275,250,150,5);
b6 = createSprite(275,150,150,5);
b7 = createSprite(250,200,100,5);
b8 = createSprite(300,350,100,5);
b9 = createSprite(275,550,150,5);
b10 = createSprite(200,450,5,200);
b11 = createSprite(200,500,5,100);
b12 = createSprite(250,500,5,100);
b13 = createSprite(350,450,5,200);
b14 = createSprite(400,550,5,100);
b15 =createSprite(400,375,5,50);
b16 = createSprite(400,250,5,100);

u1 =createSprite(500,350,5,500);
u2 =createSprite(550,100,100,5);
u3 = createSprite(600,300,5,400);
u4 = createSprite(550,325,5,350);
u5 =createSprite(725,100,50,5);
u6 = createSprite(700,300,5,400);
u7 =createSprite(800,350,5,500);
u8 =createSprite(650,500,200,5);
u9 = createSprite(650,600,100,5);
u10 = createSprite(650,575,5,50);

b21 =createSprite(1050,100,300,5);
b22 = createSprite(900,300,5,200);
b23 =createSprite(900,525,5,150);
b24 =createSprite(950,600,100,5);
b25 =createSprite(1125,600,150,5);
b26 = createSprite(1200,425,5,250);
b27 =createSprite(1200,175,5,150);
b28 = createSprite(1075,300,150,5);
b29 = createSprite(1025,200,50,100);
b210 = createSprite(1125,200,50,100);
b211 = createSprite(1050,375,100,50);
b212 = createSprite(1125,450,50,200);
b213 = createSprite(1050,525,100,50);
b214 =createSprite(1025,475,50,50);

n1 = createSprite(1300,350,5,500);
n2 = createSprite(1350,100,100,5);
n3 = createSprite(1350,400,5,400);
n4 =createSprite(1375,600,50,5);
n5 = createSprite(1400,450,5,300);
n6 = createSprite(1500,250,5,300);
n7 = createSprite(1550,100,100,5);
n8 =createSprite(1600,250,5,300);
n9 = createSprite(1550,325,5,250);
n10 =createSprite(1575,450,50,5);
n11 = createSprite(1600,525,5,150);
n12 =createSprite(1550,600,100,5);

a1 = createSprite(1700,350,5,500);
a2 =createSprite(1725,100,50,5);
a3 =createSprite(1800,150,5,100);
a4 =createSprite(1850,200,100,5);
a5 =createSprite(1800,275,5,50);
a6 = createSprite(1850,300,100,5);
a7 =createSprite(1800,500,5,200);
a8 =createSprite(1850,400,100,5);
a9 =createSprite(1900,450,5,300);
a10 =createSprite(1900,150,5,100);
a11 =createSprite(1950,100,100,5);
a12 =createSprite(2000,350,5,500);
a13 =createSprite(1975,600,50,5);
a14 =createSprite(1750,600,100,5);

player = createSprite(15,15,30,30);
player.addImage(playerImg);
player.scale = 0.175;

energy1 = createSprite(880,480,10,10);
energy1.addImage(energy1Img);
energy1.scale = 0.05;
energy2 = createSprite(2000,20,10,10);
energy2.addImage(energy2Img);
energy2.scale = 0.05;
energy3 = createSprite(1800,680,10,10);
energy3.addImage(energy3Img);
energy3.scale = 0.05;

gun1 = createSprite(130,480,20,20);
gun1.addImage(gun1Img);
gun1.scale = 0.1

knife1 = createSprite(1530,130,20,20);
knife1.addImage(knife1Img);
knife1.scale = 0.25;

knife2 = createSprite(1730,570,20,20);
knife2.addImage(knife2Img);
knife2.scale = 0.25;

zombie1 = createSprite(player.x-20,670,20,20);
zombie1.addImage(zombie1Img);
zombie1.scale = 0.4

zombie2 = createSprite(2030,player.y+200,20,20);
zombie2.addImage(zombie2Img);
zombie2.scale = 0.4

zombie3 = createSprite(player.x-600,670,20,20);
zombie3.addImage(zombie3Img);
zombie3.scale = 0.4

zombie4 = createSprite(player.x-20,player.y+100,20,20);
zombie4.addImage(zombie4Img);
zombie4.scale = 0.

zombie5 = createSprite(2000,player.y,20,20);
zombie5.addImage(zombie5Img);
zombie5.scale = 0.4

restart = createSprite(1050,600,10,10);
restart.addImage(restartImg);
restart.scale = 2;

gameover = createSprite(1050,350,10,10);
gameover.addImage(gameoverImg);
gameover.scale = 5;

}

function draw(){
    background("black");

    
if(gamestate === PLAY){

    if(keyDown(DOWN_ARROW)){
        player.y = player.y+5;
    }
    if(keyDown(UP_ARROW)){
        player.y = player.y-5;
    }
    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+5;
    }
    if(keyDown(LEFT_ARROW)){
        player.x = player.x-5;
    }

    zombie1.x = player.x-20;
    zombie2.y = player.y+200;
    zombie3.x = player.x-600;
    zombie4.x = player.x-20;
    zombie4.y = player.y+100;
    zombie5.y = player.y;

    player.collide(b1);
    player.collide(b2);
    player.collide(b3);
    player.collide(b4);
    player.collide(b5);
    player.collide(b6);
    player.collide(b7);
    player.collide(b8);
    player.collide(b9);
    player.collide(b10);
    player.collide(b11);
    player.collide(b12);
    player.collide(b13);
    player.collide(b14);
    player.collide(b15);
    player.collide(b16);

    player.collide(u1);
    player.collide(u2);
    player.collide(u3);
    player.collide(u4);
    player.collide(u5);
    player.collide(u6);
    player.collide(u7);
    player.collide(u8);
    player.collide(u9);
    player.collide(u10);

    player.collide(b21);
    player.collide(b22);
    player.collide(b23);
    player.collide(b24);
    player.collide(b25);
    player.collide(b26);
    player.collide(b27);
    player.collide(b28);
    player.collide(b29);
    player.collide(b210);
    player.collide(b211);
    player.collide(b212);
    player.collide(b213);
    player.collide(b214);

    player.collide(n1);
    player.collide(n2);
    player.collide(n3);
    player.collide(n4);
    player.collide(n5);
    player.collide(n6);
    player.collide(n7);
    player.collide(n8);
    player.collide(n10);
    player.collide(n11);
    player.collide(n12);

    player.collide(a1);
    player.collide(a2);
    player.collide(a3);
    player.collide(a4);
    player.collide(a5);
    player.collide(a6);
    player.collide(a6);
    player.collide(a7);
    player.collide(a8);
    player.collide(a9);
    player.collide(a10);
    player.collide(a11);
    player.collide(a12);
    player.collide(a13);


    edges = createEdgeSprites();

    player.collide(edges);

    gameover.visible = false;
    restart.visible = false;

    if((player.x!=knife1.x&&player.y!=knife1.y)||
    (player.x!=knife2.x&&player.y!=knife2.y)||
    (player.x!=gun1.x&&player.y!=gun1.y)){

    
    if(player.isTouching(zombie1)||player.isTouching(zombie2)
    ||player.isTouching(zombie3)|| player.isTouching(zombie4)||
    player.isTouching(zombie5)){

        gamestate = END

    }}

if(player.isTouching(gun1)){
    gun1.x = player.x;
    gun1.y = player.y;
if(gun1.isTouching(zombie1)){
    zombie1.destroy();
}
if(gun1.isTouching(zombie2)){
    zombie2.destroy();
}
if(gun1.isTouching(zombie3)){
    zombie3.destroy();
}
if(gun1.isTouching(zombie4)){
    zombie4.destroy();
}
if(gun1.isTouching(zombie5)){
    zombie5.destroy();
}
}

}
if(gamestate === END) {

    gameover.visible = true;
    restart.visible = true;

    if(keyDown(DOWN_ARROW)){
        player.y = player.y+0;
    }
    if(keyDown(UP_ARROW)){
        player.y = player.y-0;
    }
    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+0;
    }
    if(keyDown(LEFT_ARROW)){
        player.x = player.x-0;
    }

    


}

if(mousePressedOver(restart)){
    reset();
}
        
drawSprites();

}

function reset(){
gamestate = 1;
player.x = 20;
player.y = 20;
zombie1.x = player.x-20;
zombie2.y = player.y+200;
zombie3.x = player.x-600;
zombie4.x = player.x-20;
zombie4.y = player.y+100;
zombie5.y = player.y; 
}



