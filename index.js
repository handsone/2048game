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

var richText = new PIXI.Text('2048', style);
richText.x = 150;
richText.y = 150;

app.stage.addChild(richText);

var grid = [];
for (var i = 0; i < 4; i++) {
    grid[i] = [0, 0, 0, 0];
}
var graphics = new PIXI.Graphics();
graphics.lineStyle(2, 0xF9ED69, 1);
graphics.beginFill(0x7EB19F, 1);
var width = app.renderer.width;
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        graphics.drawRect(app.renderer.width / 8 + j * width / 6, app.renderer.height / 8 * 3 + i * width / 6, width / 6, width / 6);
    }
}
app.stage.addChild(graphics);

function randow() {
    return Math.floor(Math.random() * 4);
}
var number = new PIXI.Text('2' , {
    fontSize : 48
})
var x = randow() ;
var y = randow() ;
var graphics1 = new PIXI.Graphics();
graphics.beginFill(0xEF9037, 1);
graphics1.drawRect(app.renderer.width / 8 + x * width / 6 , app.renderer.height / 8 * 3 + y * width /6 , width / 6, width / 6);
app.stage.addChild(graphics1);
var number = new PIXI.Text('2', {
    fontSize: 48,
    fill : ['#7EB19F']
});
number.anchor.set(0.5);
number.x = 75/2 + app.renderer.width/ 8 + x * width / 6 ;
number.y = 75 /2 + app.renderer.height / 8 * 3 + y * width / 6;
app.stage.addChild(number);









