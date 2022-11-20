var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

var matrix = [];

function matrixGen(size, grCount, grEatCount, pdCount, bcCount, egCount) {
    for (let i = 0; i < size; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);

        for (let i = 0; i < grCount; i++) {
            let x = Math.floor(Math.random() * matLength);
            let y = Math.floor(Math.random() * matLength);
            if (matrix[x][y] = 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr)
            }
            for (let i = 0; i < grEatCount; i++) {
                let x = Math.floor(Math.random() * matLength);
                let y = Math.floor(Math.random() * matLength);
                if (matrix[x][y] = 2) {
                    let grEat = new GrassEater(x, y);
                    grassArr.push(grEat)
                }
            }
            for (let i = 0; i < pdCount; i++) {
                let x = Math.floor(Math.random() * matLength);
                let y = Math.floor(Math.random() * matLength);
                if (matrix[x][y] = 2) {
                    let pd = new Predator(x, y);
                    grassArr.push(pd)
                }
            }
            for (let i = 0; i < bcCount; i++) {
                let x = Math.floor(Math.random() * matLength);
                let y = Math.floor(Math.random() * matLength);
                if (matrix[x][y] = 2) {
                    let bc = new Blackcube(x, y);
                    grassArr.push(bc)
                }
            }
            for (let i = 0; i < egCount; i++) {
                let x = Math.floor(Math.random() * matLength);
                let y = Math.floor(Math.random() * matLength);
                if (matrix[x][y] = 2) {
                    let eg = new Energy(x, y);
                    grassArr.push(eg)
                }
            }
        }
    }
    io.socket.emit("send matrix", matrix);
}

matrixGen(20, 10, 5, 2, 3, 3)

