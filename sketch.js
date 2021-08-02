var bg,bg2,form,system,code,security,win,win2,aldn,abu;
var score=0;

function preload() {
  bg = loadImage("bg2.jpg");
  bg2 = loadImage("bg4.jpg");
  img = loadImage("img2.png");
  img2 = loadImage("genie.png");
  aldnImg = loadImage("aldn1.png");
  abuImg = loadImage("abu.png");
  music = loadSound("Prince Ali- Aladdin.mp3");
}

function setup() {
  music.loop();
  createCanvas(displayWidth,displayHeight-130);
  system = new System();
  security = new Security();
  win = createSprite(displayWidth/2.2,displayHeight/3);
 win.addImage(img);
 win.scale = 0.7;
 win.visible = false;

 win2 = createSprite(displayWidth/10,displayHeight/1.5);
 win2.addImage(img2);
 win2.scale = 1.3;
 win2.visible = false;

 aldn = createSprite(displayWidth/1.1,displayHeight/1.5);
 aldn.addImage(aldnImg);
 aldn.scale = 0.5;
 aldn.visible = false;

 abu = createSprite(displayWidth/5,displayHeight/1.4);
 abu.addImage(abuImg);
 abu.scale = 0.3;
abu.visible = false;
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(23);
  fill("white");
  text("Score: " + score, displayWidth/25, displayHeight/2);

  if(score === 3)
   { 
    clear();
    background(bg2)
    win.visible  = true;
    win2.visible  = true;
    aldn.visible = true;
    abu.visible = true;
  }
  drawSprites()
}