var hour, minute, sec;
var scAngle, minAngle, hrAngle;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hour = hour();
  minute = minute();
  sec = second();
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  scAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(minute, 0, 60, 0, 360);
  hrAngle = map(hour, 0, 24, 0, 360);

  push();

  translate(0, 0);
  rotate(scAngle);
  line(0, 0, 100, 0);
  stroke(255, 0, 0);
  strokeWeight(7);

  rotate(minAngle);
  line(0, 0, 200, 0);
  stroke(255, 255, 0);
  strokeWeight(7);

rotate(hrAngle);
  line(0, 0, 300, 0);
  stroke(255, 255, 255);
  strokeWeight(7);
  pop();

    drawSprites();
}