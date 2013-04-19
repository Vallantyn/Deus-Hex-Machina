function RecepterTile(id, s, px, py)
{
    var that = new Tile(id, s, px, py);
    //var config = cfg;

    that.active = false;
    that.recepterColor;

    that.Render = function (tileData)
    {
        var cx = tileData.context;

        cx.stroke();

        cx.fillStyle = that.recepterColor;

        cx.beginPath();
        cx.moveTo(tileData.center.x + tileData.inner * .6 * Math.cos(0 - Math.PI / 6), tileData.center.y + tileData.inner * .6 * Math.sin(0 - Math.PI / 6));

        for (var i = 0; i < 3; i++)
        {
            cx.lineTo(tileData.center.x + tileData.inner * .6 * Math.cos(i * Math.PI * 2 / 3 - Math.PI / 6), tileData.center.y + tileData.inner * .6 * Math.sin(i * Math.PI * 2 / 3 - Math.PI / 6));
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

    that.SelfUpdate = function()
    {
        that.active = false;
    }

    that.onLaser = function (laserData)
    {
        that.active = this.onRecepter(laserData, { color: that.recepterColor });
    }

    that.onLeftClick = function ()
    {

    }

    that.onRightClick = function ()
    {

    }

    return that;
}