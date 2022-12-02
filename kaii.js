socket = io()
var side = 50;

function weater(){
  if(weater == winter){
    weater = "winter"
  }
  if(weater == spring){
    weater = "spring"
  }
  if(weater == summer){
    weater = "summer"
  }
  if(weater == autumn){
    weater = "autumn"
  }
}

function setup() {
  frameRate(5);
  createCanvas(700, 700);
  background('white');
}

function draww(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x] == 1) {
        if(weater = winter){
          fill("gray")
        }else if (weater = spring){
          fill("lightgreen")
        }else if (weater = summer){
          fill("green")
        }else if (weater = autumn){
          fill("goldenrod")
        }
      } else if (matrix[y][x] == 0) {
        fill("white");
      } else if (matrix[y][x] == 2) {
        fill("yellow")
      } else if (matrix[y][x] == 3) {
        fill("red")
      } else if (matrix[y][x] == 4) {
        fill("black")
      } else if (matrix[y][x] == 5) {
        fill("blue")
      } else if (matrix[y][x] == 6) {
        fill("orange")
      }
      rect(x * side, y * side, side, side);
    }
  }
}

function winter(){
  socket.emit("winter")
}
function spring(){
  socket.emit("spring")
}
function summer(){
  socket.emit("summer")
}
function autumn(){
  socket.emit("autumn")
}

socket.on('send matrix', draww);