/**
 * Created by gregrory on 17-6-10.
 */
var app = new PIXI.Application(screen.width, screen.height, {backgroundColor: 0xF9ED69});
document.body.appendChild(app.view);

var style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440
});

function moveCellToRight() {
    for (var rowIndex = 0; rowIndex < 4; rowIndex++) {
        for (var columnIndex = 2; columnIndex >= 0; columnIndex--) {
            if (grid[rowIndex][columnIndex] === 0) continue;

            var theEmptyCellIndex = findTheFirstRightCell(rowIndex, columnIndex);
            if (theEmptyCellIndex !== -1) {
                grid[rowIndex][theEmptyCellIndex] = grid[rowIndex][columnIndex];
                grid[rowIndex][columnIndex] = 0;

            }
            var currentIndex = theEmptyCellIndex === -1 ? columnIndex : theEmptyCellIndex;

            if (grid[rowIndex][currentIndex] === grid[rowIndex][currentIndex + 1]) {
                grid[rowIndex][currentIndex+ 1] += grid[rowIndex][currentIndex];
                grid[rowIndex][currentIndex] = 0;
            }

        }
    }
}

function findTheFirstRightCell(rowIndex, columnIndex) {
    for (let i = 3; i > columnIndex; i--) {
        if (grid[rowIndex][i] === 0) {
            return i;
        }
    }

    return -1;
}

var richText = new PIXI.Text('2048', style);
richText.x = 150;
richText.y = 150;

app.stage.addChild(richText);

var grid = [];
for (var i = 0; i < 4; i++) {
    grid[i] = [2, 0, 0, 0];
}




var width = app.renderer.width;

function draw(x, y) {


    if (grid[x][y] === 0) {
        var graphics1 = new PIXI.Graphics();
        graphics1.lineStyle(2, 0xF9ED69, 1);
        graphics1.beginFill(getColorByNumber(grid[x][y]), 1);
        graphics1.drawRect(app.renderer.width / 8 + y * width / 6, app.renderer.height / 8 * 3 + x * width / 6, width / 6, width / 6);
        app.stage.addChild(graphics1);
    }

    else {
        var graphics1 = new PIXI.Graphics();
        graphics1.lineStyle(2, 0xF9ED69, 1);
        graphics1.beginFill(getColorByNumber(grid[x][y]), 1);
        graphics1.drawRect(app.renderer.width / 8 + y * width / 6, app.renderer.height / 8 * 3 + x * width / 6, width / 6, width / 6);
        app.stage.addChild(graphics1);


        var number = new PIXI.Text(grid[x][y], {
            fontSize: 48,
            fill: ['#7EB19F']
        });


        number.anchor.set(0.5);
        number.x = 75 / 2 + app.renderer.width / 8 + y * width / 6;
        number.y = 75 / 2 + app.renderer.height / 8 * 3 + x * width / 6;
        app.stage.addChild(number);
    }
}


function getColorByNumber(number) {
    var colorValue = {
        0: 0xE84545,
        2: 0xF08A5D,
        4: 0xB83B5E,
        8: 0x6A2C70,
        16: 0xF38181,
        32: 0xFCE38A,
        64: 0x2D4059,
        128:0x364F6B,
        256: 0x3FC1C9,
        512: 0xFC5185,
        1024 :0xFCBAD3,
        2048 :0xF6416C
    };

    return colorValue[number];
}

var x = random();
var y = random();

var addRandomCell = function () {
    var rowIndex = random();
    var columnIndex = random();

    while (grid[rowIndex][columnIndex] !== 0 ) {
        rowIndex = random();
        columnIndex = random();
    }

    grid[rowIndex][columnIndex] = 2;
};

addRandomCell();
addRandomCell();



var flushUI = function () {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            draw(i , j );
        }
    }
};
flushUI();

function random() {
    return Math.floor(Math.random() * 4);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        moveCellToRight();
        flushUI();

    }
    else if (event.key === 'ArrowUp') {
        rotateArray(1);
        moveCellToRight();
        rotateArray(3);
        addRandomCell();
        flushUI();

    }
    else if(event.key === 'ArrowLeft') {
        rotateArray(2);
        moveCellToRight();
        rotateArray(2);
        addRandomCell();
        flushUI();
    }
    else
    {
        rotateArray(3);
        moveCellToRight();
        rotateArray(1);
        addRandomCell();
        flushUI();
    }

});

function rotateArray(rotateCount = 1) {
    for (var i = 0 ; i < rotateCount; i ++) {
        grid = rotateArrayToRightOnce(grid);
    }

    function rotateArrayToRightOnce(array) {
        return array.map((row, rowIndex) => {
                return row.map((item, columnIndex) => {
                    return array[3 - columnIndex][rowIndex];
    })
    })
    }
}












