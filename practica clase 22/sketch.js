const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
var engine, world; 
var suelo;
var canvas;
var pelota;

function setup() { 
canvas = createCanvas(800, 400);
engine = Engine.create();
world = engine.world;
var sueloOpciones = { 
    isStatic: true 
} 
suelo = Bodies.rectangle(400,400, 800, 10, sueloOpciones);
World.add(world, suelo);
console.log(suelo.type);

var pelotaopciones = {
  restitution: 1
} 
pelota = Bodies.circle(400,100,30,pelotaopciones);
World.add(world,pelota)
} 


function draw() {

background(200);
Engine.update(engine);

rectMode(CENTER);
rect(suelo.position.x, suelo.position.y, 800,10); 

ellipseMode(CENTER);
ellipse(pelota.position.x, pelota.position.y ,30,30);
}
