function EmitterTile(id, s, px, py)
{
    var that = new Tile(id, s, px, py);
    //var config = cfg;

    that.emitterColor;
    that.direction = 0;

    that.Render = function (tileData)
    {
        var cx = tileData.context;

        cx.stroke();

        cx.fillStyle = that.emitterColor;

        cx.beginPath();
        cx.moveTo(tileData.center.x + tileData.inner * .6 * Math.cos(0), tileData.center.y + tileData.inner * .6 * Math.sin(0));

        for (var i = 0; i < 6; i++)
        {
            cx.lineTo(tileData.center.x + tileData.inner * .6 * Math.cos(i * Math.PI / 3), tileData.center.y + tileData.inner * .6 * Math.sin(i * Math.PI / 3));
        };

        cx.fill();

        that.drawLaser(that.laser, tileData);
    }

    that.drawLaser = function (laserData, tileData)
    {
        if (!laserData) return;

        var cx = tileData.context;

        for (var i = 1; i < 4; i++)
        {
            cx.lineWidth = i * 4;
            cx.globalAlpha = 1 / (i * 2);
            cx.strokeStyle = laserData.color;

            var a = (3-that.direction) * (Math.PI / 3) + Math.PI/6;

            cx.beginPath();
            cx.moveTo(tileData.center.x, tileData.center.y);
            cx.lineTo(tileData.center.x + tileData.inner * Math.cos(a), tileData.center.y + tileData.inner * Math.sin(a));
            cx.stroke();

            cx.globalAlpha = 1;
        }

        that.laser = null;
    }

    that.SelfUpdate = function ()
    {
        var laser = {
            from: that.id,
            to: that.direction,
            color: that.emitterColor
        }

        that.laser = laser;

        this.emitLaser(laser);
    }

    that.onLaser = function ()
    {
        return;
    }

    that.onLeftClick = function ()
    {
        that.direction++;
        that.direction %= 6;
    }

    that.onRightClick = function ()
    {
        that.direction--;
        if (that.direction < 0) that.direction = 5;
    }

    return that;
}