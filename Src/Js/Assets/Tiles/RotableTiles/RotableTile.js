function RotableTile(id, s, px, py)
{
    var that = new Tile(id, s, px, py);

    that.angle = Math.PI/6;
    that.deltaAngle = Math.PI/6;

    that.Render = function (tileData)
    {
        var cx = tileData.context;


        cx.fillStyle = that.color;
        if (that.over) cx.fill();
        cx.stroke();


        cx.strokeStyle = "#FF0000";
        cx.beginPath();
        cx.moveTo(tileData.center.x, tileData.center.y);
        cx.lineTo(tileData.center.x + (tileData.outer * Math.cos(that.angle)), tileData.center.y + (tileData.outer * Math.sin(that.angle)));
        cx.closePath();
    
        cx.stroke();

    }

    that.onLeftClick = function()
    {
        
    	that.angle += that.deltaAngle;

    }

    return that;
}