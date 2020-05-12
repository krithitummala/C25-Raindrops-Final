
var raindrops = []
var letters = "ABCDEFGHIJKLMNOPQRSTU6VWXY012345789abcdefghijklpqrstuvexyz";

function setup(){
    var canvas = createCanvas(1200,400)
    frameRate(15);
    for(var i=0;i<100;i++)
    {
        raindrops.push(new Raindrop());
    }
}

function draw()
{

    background(0,100);
    for(var i=0;i<raindrops.length;i++)
    {
        raindrops[i].draw();
        raindrops[i].update();
    }
}