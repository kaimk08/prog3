class Blackcube extends Base{
    constructor(x, y) {
        super(x,y)
        // this.x = x;
        // this.y = y;
        this.energy = 5;
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
    chooseCell(character, cartoon, character2, cartoon2) {
        this.getNewCoordinates()
        return super.chooseCell(character, cartoon, character2, cartoon2);
    }

    mul () {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var newBlackcube = new Blackcube(newX, newY);
            blackcubeArr.push(newBlackcube);
            this.energy = 5;
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
        var emptyCells = this.chooseCell(1, 2, 3, 5);
        var newCell = random(emptyCells);
        if(newCell) {
            this.energy+=4;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            if(this.energy > 10) {
                this.mul()
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }  
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
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
        for (var i in blackcubeArr) {
            if (this.x == blackcubeArr[i].x && this.y == blackcubeArr[i].y) {
                blackcubeArr.splice(i, 1);
                break;
            }
        }

        }
    }