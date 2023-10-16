let nOffset = 0.0;
let noiseStep = 0.003;
let density = 10;


function setup() {
  createCanvas(600, 800);
  angleMode(DEGREES)
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
      push()
      tmpOff += 0.004;
      let dir = noise(tmpOff) * 360;
      rotate(dir);
      line(0, 0, 40, 0)
      pop()
    }
    pop()
  }
  pop()

  // line(0, 0, 20, 0);
}

function keyPressed() {
  if (key == 's' || key == 'S') {
    console.log('save');
    saveCanvas("poster", 'png');
  }
}