/**
 * Created by gregrory on 17-6-10.
 */
var app = new PIXI.Application(screen.width, screen.height, {backgroundColor: 0xFF6600});
document.body.appendChild(app.view);
var basicText = new PIXI.Text("2048");
basicText.x = 50;
basicText.y = 90;
app.stage.addChild(basicText);

var grid = [];
for (var i = 0; i < 4; i++) {
    grid[i] = [0, 0, 0, 0];
}
var graphics = new PIXI.Graphics();
graphics.lineStyle(2, 0xFF6600, 1);
graphics.beginFill(0x9966CC, 1);
var width = app.renderer.width;
for (var i = 0; i < 4; i++) {

    for (var j = 0; j < 4; j++) {
        graphics.drawRect(app.renderer.width / 8 + j * width / 6, app.renderer.height / 8 * 3 + i * width / 6, width / 6, width / 6);

    }
}
app.stage.addChild(graphics);
