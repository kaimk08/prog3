class Energy extends Base {
    constructor(x, y) {
        super(x,y)
        // this.x = x;
        // this.y = y;
        this.multiply = 0;
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

    chooseCell(character) {
        super.chooseCell(character);
        return found;
    }

    mul () {
        this.multiply+=3;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        
        if(newCell && this.multiply >= 5){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
 
            var newEnergy = new Energy(newX, newY);
            energyArr.push(newEnergy);
            this.multiply = 0;
        }
    }
}