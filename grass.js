var Base = require("./livingcreature")

module.exports = class Grass extends Base{
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

    random(a){
        let found = this.chooseCell(a)
        let result = Math.floor(Math.random()*found.length)
        return found[result];
    }


    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
        }
        return found;
    }


    mul () {
        this.multiply++;
        // var emptyCells = this.chooseCell(0);
        var newCell = this.random(0);
        
        if(newCell && this.multiply >= 4){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
 
            var newGrass = new Grass(newX, newY);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

    eat() {
        // var emptyCells = this.chooseCell(5);
        var newCell = this.random(5);
        if(newCell) {
            this.multiply+=5;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

            for (var i in energyArr) {
                if (newX == energyArr[i].x && newY == energyArr[i].y) {
                    energyArr.splice(i, 1);
                    break;
                }
            }
  
        }
        else {
                    this.mul()
                }
             }
          }