class Food{
  constructor(color, size, value){
    this.color = color;
    this.size = size;
    this.value = value;
    this.x = int(random(35));
    this.y = int(random(35));
  }

  display(){
    fill(this.color);
    circle((this.x * this.size) + (this.size / 2), (this.y * this.size) + (this.size / 2), this.size);
  }

  newPosition(){
    this.x = int(random(35));
    this.y = int(random(35));
  }

}
