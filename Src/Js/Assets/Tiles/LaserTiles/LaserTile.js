function LaserTile(id, s, px, py)
{
    var that = new Tile(id, s, px, py);

    var selflaser = null;

    that.Render = function (tileData)
    {
        var cx = tileData.context;

        cx.fillStyle = that.color;

        if (that.over) cx.fill();
        cx.stroke();

        //var str = id;//Math.floor(loopIndex/loopDepth);

        //var w = cx.measureText(str).width/2;

        //UI.Label(str, tileData.center.x - w, tileData.center.y, { textBaseline: "middle" });

        that.drawLaser(selflaser, tileData);
    },

    that.drawLaser = function (laserData, tileData)
    {
        if (!selflaser) return;

        var cx = tileData.context;

        for (var i = 1; i < 4; i++)
        {

            cx.lineWidth = i * 4;
            cx.globalAlpha = 1 / (i * 2);
            cx.strokeStyle = selflaser.color;

            var a = (3 - selflaser.to) * Math.PI / 3 + Math.PI / 6;

            cx.beginPath();
            cx.moveTo(tileData.center.x + tileData.inner * Math.cos(a), tileData.center.y + tileData.inner * Math.sin(a));
            cx.lineTo(tileData.center.x + tileData.inner * Math.cos(a - Math.PI), tileData.center.y + tileData.inner * Math.sin(a - Math.PI));
            cx.stroke();

            cx.globalAlpha = 1;
        }

        selflaser = null;
    }

    that.onLaser = function (laserData)
    {
        var laser = {
            from: that.id,
            to: laserData.to,
            color: laserData.color
        };

        selflaser = laser;

        this.emitLaser(selflaser);
    }

    return that;
}