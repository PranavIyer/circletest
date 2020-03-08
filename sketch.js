var sun;
var mercury, venus, earth, mars;

function setup() {
  createCanvas(800,400);

  var canvas = document.getElementById('circle');
    if (canvas.getContext)
    
    var ctx = canvas.getContext('2d'); 
    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    var R = 45;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();
    
  
  sun = createSprite(-200, 400, 800, 800);
  sun.shapeColor = "yellow";
  sun.velocityX = 1;

  mercury = createSprite(350, 200, 35, 35);
  mercury.shapeColor = "brown";

  venus = createSprite(450, 200, 45, 45);
  venus.shapeColor = "brown";

  earth = createSprite(550, 200, 65, 65);
  earth.shapeColor = "blue";

  mars = createSprite(650, 200, 55, 55);
  mars.shapeColor = "red";
}

function draw() {
  background(255,255,255);


  
    

  sun.velocityX = 1;

  if (sun.isTouching(mercury)) {
    mercury.visible = false;
  }

  if (sun.isTouching(venus)) {
    venus.visible = false;
  }

  if (sun.isTouching(earth)) {
    earth.visible = false;
  }

  if (sun.collide(mars)) {
    mars.visible = false;
  }

  drawSprites();
}