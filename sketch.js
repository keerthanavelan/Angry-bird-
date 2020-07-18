const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig,ground,box2,log1,log2,pig2;
var log3,log4,box3,box4,box5,bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    bird = new Bird(200,200);
    log4 = new Log(870,120,150,-PI/7);
    log3 = new Log(760,120,150,PI/7);
    log2 = new Log(810,180,300,PI/2);
    log1 = new Log(810,260,300,PI/2);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,10);
    pig = new Pig(810,350,50);
    pig2 = new Pig(800,220,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log("box2 " + box2.body.position.x);
    console.log("box1 " + box1.body.position.x);
    console.log(box2.body.angle);
    
    
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig2.display();
    box3.display();
    box4.display();
    bird.display();
}