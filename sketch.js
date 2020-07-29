var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var turn = 5;
var plinkos = [];
var divisions = [];
var count = 0

var gameState = "start";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("Turns Left: " +turn,680, 30);
 text("500", 22,610);
 text("500", 102,610);
 text("500", 182,610);
 text("500", 262,610);
 text("100", 342,610);
 text("100", 422,610);
 text("100", 502,610);
 text("200", 582,610);
 text("200", 662,610);
 text("200", 742,610);

 Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(particle!=null){
     particle.display();

     if(particle.body.position.y>610){
       
      if(particle.body.position.x<280 && particle.body.position.x>0){
        score = score+500;
        particle = null;
        
        if(count>= 5){
          gameState = "end";
        }
      }
     }
   }

   if(particle!=null){
    particle.display();

    if(particle.body.position.y>610){
      
     if(particle.body.position.x<530 && particle.body.position.x>300){
       score = score+100;
       particle = null;
       if(count>= 5){
         gameState = "end";
       }
     }
    }
  }

  if(particle!=null){
    particle.display();

    if(particle.body.position.y>610){
      
     if(particle.body.position.x<780 && particle.body.position.x>560){
       score = score+200;
       particle = null;
       if(count>= 5){
         gameState = "end";
      
       }
     }
    }
  }

  if(gameState==="end"){
    endGame();
  }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   line(0,450,800,450);
 stroke("yellow");
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    turn = turn-1;
    particle = new Particle(mouseX,10,10,10);
  }
}

function endGame(){
  if(gameState==="end"){
    text("GAME OVER!", 350,405);
    text("YOUR SCORE: " +score,325,430);
  }
}