function RotableTile(id, s, px, py)
{
    var that = new LaserTile(id, s, px, py);

    that.angle = Math.PI/6;
    that.deltaAngle = Math.PI/6;

    that.Render = function (tileData)
    {
        var cx = tileData.context;


        cx.fillStyle = that.color;
        if (that.over) cx.fill();
        cx.stroke();

        //Debug draw Tile orientation
        cx.strokeStyle = "#FF0000";
        cx.beginPath();
        cx.moveTo(tileData.center.x - (tileData.outer * Math.cos(that.angle)), tileData.center.y - (tileData.outer * Math.sin(that.angle)));
        cx.lineTo(tileData.center.x + (tileData.outer * Math.cos(that.angle)), tileData.center.y + (tileData.outer * Math.sin(that.angle)));
        cx.closePath();
    
        cx.stroke();
        //End debug draw

    }

    that.onLeftClick = function()
    {
        
    	that.angle += that.deltaAngle;
        
        if(that.angle >= 2 * Math.PI || that.angle <= -2 * Math.PI) 
            that.angle = 0;

    }

   /* that.onRightClick = function()
    {
        
        that.angle -= that.deltaAngle;
        if(Math.abs(that.angle - (2 * Math.PI)) < Math.PI/8) 
            that.angle = 0;

    }*/

    return that;
}