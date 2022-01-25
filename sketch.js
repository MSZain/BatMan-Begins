const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world ;
var drops = [];
var maxdrop = 100;
var umbrella ;
var rand ;
var nightbg ;
var T1, T2, T3, T4 ;
var thunderCreatedFrame = 0;
var Thunder;

function preload(){ 
    T1 = loadImage("1.png"); 
    T2 = loadImage("2.png"); 
    T3 = loadImage("3.png"); 
    T4 = loadImage("4.png"); 
    nightbg = loadImage("night.png"); 
}

function setup(){ 
    createCanvas(400,700);  
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella (200,500);

    for(var i = 0; i < maxdrop; i++){
        drops.push(new Drops(random(0,500), random(0,500)));
     }
}

function draw(){ 
    Engine.update(engine)
    background(0); 
    
    //got from reference
    rand = Math.round(random(1,4));
    if (frameCount %30 === 0) {
        thunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,390), random(50), 10, 30);
        switch (rand) {
            case 1 : Thunder.addImage(T1);
            break;
            case 2 : Thunder.addImage(T2);
            break;
            case 3 : Thunder.addImage(T3);
            break;
            case 4 : Thunder.addImage(T4);
            break;
            default : break;
        }
        Thunder.scale = 0.4;
    }
    if(thunderCreatedFrame + 10 === frameCount && Thunder) {
        Thunder.destroy();
    }
    umbrella.display();


   for(var i = 0; i < maxdrop; i++) {
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}   