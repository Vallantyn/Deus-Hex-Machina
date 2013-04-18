function EmitterTile(cfg, id, s, px, py)
{
    var that = new Tile(id, s, px, py);
    console.log(id);

    var config = cfg;

    that.Render = function (tileData)
    {
        var cx = tileData.context;

        cx.stroke();

        cx.fillStyle = config.color;

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
        //if (!laserData) return;

        var cx = ScreenCanvas.Context;

        for (var i = 1; i < 4; i++)
        {

            cx.lineWidth = i * 4;
            cx.globalAlpha = 1 / (i * 2);
            cx.strokeStyle = laserData.color;

            var a = (3 - laserData.to) * Math.PI / 3 + Math.PI / 6;

            cx.beginPath();
            cx.moveTo(tileData.x, tileData.y);
            cx.lineTo(tileData.x + tileData.inner * Math.cos(a - Math.PI), tileData.y + tileData.inner * Math.sin(a - Math.PI));
            cx.stroke();

            cx.globalAlpha = 1;
        }

        laser = null;
    }

    that.SelfUpdate = function ()
    {
        var laser = {
            from: that.id,
            to: config.direction,
            color: config.color
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
        config.direction++;
        config.direction %= 6;
    }

    that.onRightClick = function ()
    {
        config.direction--;
        if (config.direction < 0) config.direction = 5;
    }

    return that;
}