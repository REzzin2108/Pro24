const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, rubber,hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
   hammer=new Hammer(200,400)
   iron=new Iron(700,400)
   rubber=new Rubber(900,500,50)
   stone=new Stone(500,400,100,50)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

   
    plane.display();
    hammer.display();
    iron.display();
    rubber.display();
    stone.display();
   

 
}
