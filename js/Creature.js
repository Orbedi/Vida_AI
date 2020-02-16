class Creature{
  constructor(color, size, speed){
    this.color = color;
    this.size = size;
    this.speed = speed;
    this.speed_const = int(1000 / speed);
    this.speed_count = 0;
    this.score = 0;
    this.x = int(random(35));
    this.y = int(random(35));
  }

  move(direction){
    let pos_x = this.x;
    let pos_y = this.y;
    switch (direction) {
      case -1:
        pos_x = this.x;
        pos_y = this.y;
        break;
      case 0:
        pos_x = this.x;
        pos_y = this.y - 1;
        break;
      case 1:
        pos_y = this.y - 1;
        pos_x = this.x + 1;
        break;
      case 2:
        pos_x = this.x + 1;
        pos_y = this.y;
        break;
      case 3:
        pos_y = this.y + 1;
        pos_x = this.x + 1;
        break;
      case 4:
        pos_y = this.y + 1;
        pos_x = this.x;
        break;
      case 5:
        pos_y = this.y + 1;
        pos_x = this.x - 1;
        break;
      case 6:
        pos_x = this.x - 1;
        pos_y = this.y;
        break;
      case 7:
        pos_y = this.y - 1;
        pos_x = this.x - 1;
        break;
    }
    this.y = pos_y < width ? abs(pos_y) : pos_y - 1;
    this.x = pos_x < width ? abs(pos_x) : pos_x - 1;
  }

  display(){
    fill(this.color);
    rect(this.x * this.size, this.y * this.size, this.size, this.size, 5);
  }

  eat(food){
    if(this.speed_count < this.speed_const){
      this.speed_count ++;
    } else {
      if(food.x == this.x && food.y == this.y) {
        food.newPosition();
        this.score += food.value;
        console.log(this.color, this.score);
      }
      this.move(this.chooseDirection(food.x, food.y));
      this.speed_count = 0;
    }
  }

  chooseDirection(x, y){
    if(this.x < x){
      if(this.y < y){
        return int(random(2, 5))
      } else if (this.y > y){
        return int(random(3))
      } else {
        return int(random(1, 4))
      }
    } else if (this.x > x){
      if(this.y < y){
        return int(random(4 ,7))
      } else if (this.y > y){
        return int(random([6, 7, 0]))
      } else {
        return int(random(5 , 8))
      }
    } else {
      if(this.y < y){
        return int(random(3, 6))
      } else if (this.y > y){
        return int(random([7, 0, 1]))
      } else {
        return -1;
      }
    }
  }

}
