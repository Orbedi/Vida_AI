let numberColumns;
let space;
let creature_red;
let creature_blue;
let food;

function setup() {
  createCanvas(700, 700);
  numberColumns = width/20;
  space = width/numberColumns;
  creature_red = new Creature('red', space, 100);
  creature_blue = new Creature('blue', space, 50);
  food = new Food('green', space, 10);
}

function draw() {
  background(220);
  drawNet(numberColumns);
  creature_red.eat(food);
  creature_blue.eat(food);
  creature_blue.display();
  creature_red.display();
  food.display();
}

function drawNet(numberColumns){
  stroke(255);
  for(let i = 0 ; i < numberColumns + 1 ; i++){
    line(i * space, 0, i * space, height);
  }
  for(let i = 0 ; i < numberColumns + 1 ; i++){
    line(0, i * space, height, i * space);
  }
}


