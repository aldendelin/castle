const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10;
var ground1;


function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(250,height,500,20);
    rect1 = new Rectangle(50,300,20,400);
    rect2 = new Rectangle(100,355,50,270);
    rect3 = new Rectangle(150,380,50,220);
    rect4 = new Rectangle(210,405,70,170);
    rect5 = new Rectangle(260,380,50,220);
    rect6 = new Rectangle(310,355,50,270);
    rect7 = new Rectangle(360,300,20,400);
    rect8 = new Rectangle(100,210,10,30);
    rect9 = new Rectangle(210,310,10,30);
    rect10 = new Rectangle(310,210,10,30);

}
    

function draw(){
    background(0);
    Engine.update(engine);
    rect1.display();
    rect2.display();
    rect3.display();
    rect4.display();
    rect5.display();
    rect6.display();
    rect7.display();
    rect8.display();
    rect9.display();
    rect10.display();
    ground1.display();
}