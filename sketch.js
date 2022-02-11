function setup(){
    createCanvas(400,400);
}

function draw(){
    background(220);
}

let ball;

function setup() {
  createCanvas(500, 500);
  ball = new Ball();
}

function draw() {
  background(0);
  ball.move();
  ball.bounce();
  ball.show();
}