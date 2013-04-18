function LaserTile(id, s, px, py)
{
    var that = new Tile(id, s, px, py);

    that.drawLaser = function(laserData)
    {
        var cx = laserData.context;
        cx.strokeStyle = laserData.color;
        cx.beginPath();
        cx.moveTo(laserData.center.x , laserData.center.y );
        cx.lineTo(laserData.center.x + (laserData.outer * Math.cos(laserData.angle)), laserData.center.y + (laserData.outer * Math.sin(laserData.angle)));
        cx.closePath();
    
        cx.stroke();
    }



    return that;
}