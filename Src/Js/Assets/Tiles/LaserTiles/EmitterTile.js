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

    //that.onRightClick = function ()
    //{
    //    config.direction--;
    //    config.direction %= 6;
    //}

    return that;
}