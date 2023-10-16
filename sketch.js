let nOffset = 0.0;
let noiseStep = 0.003;
let density = 20;


function setup() {
  createCanvas(600, 800);
  angleMode(DEGREES)
  colorMode(HSB)
  strokeWeight(0.5)
}

function draw() {
  background(180, 90);
  nOffset += noiseStep;
  let tmpOff = nOffset
  let step = width / density;
  push()
  translate(-step / 2, -step / 2)
  for (let y = 0; y < density; y++) {
    translate(0, step)
    push()
    for (let x = 0; x < density; x++) {
      translate(step, 0);
      tmpOff += 0.004;
      let dir = noise(tmpOff) * 360;
      push()
      rotate(dir);
      line(0, 0, 10, 0)
      pop()
    }
    pop()
  }
  pop()

  drawTitle()
}

function keyPressed() {
  if (key == 's' || key == 'S') {
    console.log('save');
    saveCanvas("poster", 'png');
  }
}

function drawTitle() {
  push();
  translate(width - 50, height - 100)
  textAlign(RIGHT)
  fill(200, 10, 20)
  textSize(20);
  text("QUITE NOISE", 20, 30);
  text("Grieshammer, WS23", 20, 60);
  pop();
}