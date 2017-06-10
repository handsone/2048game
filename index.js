/**
 * Created by gregrory on 17-6-10.
 */
var app = new PIXI.Application(1000 , 1000 , {backgroundColor :0xFF6600});
document.body.appendChild(app.view);
var basicText = new PIXI.Text("hahaha");
basicText.x = 50 ;
basicText.y = 90 ;
app.stage.addChild(basicText);

var grid = [];
for (var i = 0 ;  i < 4 ; i ++) {
    grid[i] = [0,0,0,0];
}

