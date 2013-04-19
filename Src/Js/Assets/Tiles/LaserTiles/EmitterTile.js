function EmitterTile(cfg, id, s, px, py)
{
    var that = new Tile(id, s, px, py);
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
        if (!laserData) return;

        var cx = tileData.context;

        for (var i = 1; i < 4; i++)
        {
            cx.lineWidth = i * 4;
            cx.globalAlpha = 1 / (i * 2);
            cx.strokeStyle = laserData.color;

            var a = (3-config.direction) * (Math.PI / 3) + Math.PI/6;

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

        console.log(config.direction);
    }

    that.onRightClick = function ()
    {
        config.direction--;
        if (config.direction < 0) config.direction = 5;

        console.log(config.direction);
    }

    return that;
}