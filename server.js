var express = require('express');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

var messages = [];

app.use(express.static("."));

app.get('/', function (req, res) {

res.redirect('index.html');

});

server.listen(3000);

gr = require("./Grass")
grEat = require("./GrassEater")
pd = require("./Predator")
pdig = require("./PredatorIg")
eg = require("./Energy")
bc = require("./Blackcube")



 matrix = [];

grassArr = [];
 grassEaterArr = [];
 predatorArr = [];
 blackcubeArr = [];
 energyArr = [];
 predatorigArr = [];

function generateMatrix (matLength, gr, grEat, pd, bc, eg, pdig) {
    let matrix = [];
    for (let i = 0; i < matLength; i++) {
      matrix.push([])
      for (let j = 0; j < matLength; j++) {
        matrix[i].push(0)
      }
    }
    for (let i = 0; i < gr; i++) {
      let x = Math.floor(Math.random() * matLength);
      let y = Math.floor(Math.random() * matLength);
      if (matrix[y][x] == 0) {
        matrix[x][y] = 1;
      }
    }
    for (let i = 0; i < grEat; i++) {
      let x = Math.floor(Math.random() * matLength);
      let y = Math.floor(Math.random() * matLength);
      if (matrix[y][x] == 0) {
        matrix[x][y] = 2;
      }
    }
    for (let i = 0; i < pd; i++) {
      let x = Math.floor(Math.random() * matLength);
      let y = Math.floor(Math.random() * matLength);
      if (matrix[y][x] == 0) {
        matrix[x][y] = 3;
      }
    }
    for (let i = 0; i < bc; i++) {
      let x = Math.floor(Math.random() * matLength);
      let y = Math.floor(Math.random() * matLength);
      if (matrix[y][x] == 0) {
        matrix[x][y] = 4;
      }
    }
    for (let i = 0; i < eg; i++) {
      let x = Math.floor(Math.random() * matLength);
      let y = Math.floor(Math.random() * matLength);
      if (matrix[y][x] == 0) {
        matrix[x][y] = 5;
      }
    }
    for (let i = 0; i < pdig; i++) {
      let x = Math.floor(Math.random() * matLength);
      let y = Math.floor(Math.random() * matLength);
      if (matrix[y][x] == 0) {
        matrix[x][y] = 6;
      }
    }
    io.sockets.emit("send matrix", matrix)
  } 

matrix = generateMatrix(20, 60, 15, 1, 5, 1, 3)


function createObject(){
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        let gr = new Grass(x, y);
        grassArr.push(gr)
      } else if (matrix[y][x] == 2) {
        let grEat = new GrassEater(x, y);
        grassEaterArr.push(grEat)
      } else if (matrix[y][x] == 3) {
        let pd = new Predator(x, y);
        predatorArr.push(pd)
      } else if (matrix[y][x] == 4) {
        let bc = new Blackcube(x, y);
        blackcubeArr.push(bc)
      } else if (matrix[y][x] == 5) {
        let eg = new Energy(x, y);
        energyArr.push(eg)
      } else if (matrix[y][x] == 6) {
        let pdig = new PredatorIg(x, y);
        predatorigArr.push(pdig)
    }
  }
  io.sockets.emit("send matrix", matrix)
}
}

function game(){
  for (let i in grassArr) {
    grassArr[i].mul()
  }
  for (let i in grassEaterArr) {
    grassEaterArr[i].eat()
  }
  for (let i in predatorArr) {
    predatorArr[i].eat()
  }
  for (let i in blackcubeArr) {
    blackcubeArr[i].eat()
  }
  for (let i in energyArr) {
    energyArr[i].mul()
  }
  for (let i in predatorigArr) {
    predatorigArr[i].eat()
  }
}

setInterval(game, 500)

  io.on("connection", function(){
      createObject()

  })