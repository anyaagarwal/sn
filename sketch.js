var snowMan;
var snow;

var snowParticles;

function preload() {
  snow = loadImage("snow1-removebg-preview.png");

  gImg = loadImage("sg.png");
  bImg = loadImage("xmas_scene.jpg");
  sImg = loadImage("splash-removebg-preview.png");
  sn = loadImage("sn-removebg-preview.png");
}

function setup() {
  createCanvas(600, 600);

  background = createSprite(300, 300, 0, 0);
  background.addImage("vEV", bImg);
  background.scale = 0.7;

  g = createSprite(117, 450.11, 0, 0);
  g.addImage("vwb", gImg);
  g.scale = 0.7;
  
  snowParticlesGroup = createGroup();
}

function draw() {
  if (frameCount % 7 === 0) {
    snowparticles = createSprite(
      Math.round(random(0, 600)),
      Math.round(random(100, 100)),
      10,
      10
    );
    snowparticles.lifetime = 300;
    snowparticles.addImage("hvdw", snow);
    snowparticles.scale = 0.07;
    snowparticles.velocityY = 4;
  }

  if (keyDown("space")) {
    snowParticlesCreating();
    
  }

  if (keyDown("M")) {
    snowMan = createSprite(300,450.11,0,0);
    snowMan.addImage("uhbu",sn);
    snowMan.scale=2;
    

  }
  
   
  
 
  console.log(frameCount);

  drawSprites();
  stroke("black");
  strokeWeight(3);
  fill("white");
  textSize(17);
  text('ᑭᖇESS ᗰ TO ᑕᖇEᗩTE SᑎOᗯᗰᗩᑎ',20,50);
  
  stroke("black");
  strokeWeight(3);
  fill("white");
  textSize(17);
  text('ᑭᖇESS SᑭᗩᑕE TO TᕼᖇOᗯ SᑎOᗯᗷᗩᒪᒪS',17,77);
  
 
}

function snowParticlesCreating() {
  snowParticles = createSprite(127, 460.11, 0, 0);
  snowParticles.addImage(snow);
  snowParticles.x = 127;
  snowParticles.y = 460.11;
  snowParticles.velocityX = 11;
  snowParticles.lifetime = 27;
  snowParticles.scale = 0.2;
  snowParticlesGroup.add(snowParticles);
  return snowParticles;
}
