class GrassEater extends Base {
    constructor(x, y) {
      super(x,y)
      //   this.x = x;
      //   this.y = y;
        this.energy = 8;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
  
    }
  
    chooseCell(ch)
    {
        
      this.getNewCoordinates();
        return super.chooseCell(ch)
    }
  
    mul () {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
  
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
  
            var newGrass = new GrassEater(newX, newY);
            grassEaterArr.push(newGrass);
            this.energy = 8;
        }
    }
  
    move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if(newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }
  
    eat() {
        var emptyCells = this.chooseCell(1, 5);
        var newCell = random(emptyCells);
        if(newCell) {
            this.energy+=5;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            if(this.energy > 10) {
                this.mul()
            }
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in energyArr) {
              if (newX == energyArr[i].x && newY == energyArr[i].y) {
                  energyArr.splice(i, 1);
                  break;
              }
          }
  
  
        } else {
            this.move()
        }
    }
  
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
  }