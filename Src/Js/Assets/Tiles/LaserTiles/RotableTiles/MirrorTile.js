function MirrorTile(id, s, px, py)
{
    var that = new RotableTile(id, s, px, py);

    that.angleLaserOutput = 0;
    that.reflection = false;

    var mirrorAngle = 0;

    var laserInput;
    var laserOutput;

    that.Render = function (tileData)
    {
        var cx = tileData.context;

        if (that.over) cx.fill();
        cx.stroke();


        that.mirrorSize = tileData.outer;

        //draw mirror
        that.angle = (12 - mirrorAngle) * Math.PI / 6;
        var tempSqrt = (Math.sqrt(2) / 2);
        cx.beginPath()
        cx.arc(tileData.center.x - that.mirrorSize * tempSqrt * Math.cos(that.angle), tileData.center.y - that.mirrorSize * tempSqrt * Math.sin(that.angle), that.mirrorSize, (-45 / 180) * Math.PI + that.angle, (45 / 180) * Math.PI + that.angle, false);
        cx.fillStyle = "rgba(50,50,50,1)";
        cx.fill();
        cx.beginPath()
        cx.arc(tileData.center.x - (that.mirrorSize - 20 * that.mirrorSize / 250) * tempSqrt * Math.cos(that.angle), tileData.center.y - (that.mirrorSize - 20 * that.mirrorSize / 250) * tempSqrt * Math.sin(that.angle), that.mirrorSize - 20 * that.mirrorSize / 250, (-45 / 180) * Math.PI + that.angle, (45 / 180) * Math.PI + that.angle, false);
        cx.fillStyle = "rgba(150,150,150,1)";
        cx.fill();
        cx.beginPath()
        cx.arc(tileData.center.x - (that.mirrorSize - 40 * that.mirrorSize / 250) * tempSqrt * Math.cos(that.angle), tileData.center.y - (that.mirrorSize - 40 * that.mirrorSize / 250) * tempSqrt * Math.sin(that.angle), that.mirrorSize - 40 * that.mirrorSize / 250, (-45 / 180) * Math.PI + that.angle, (45 / 180) * Math.PI + that.angle, false);
        cx.fillStyle = "rgba(200,200,200,1)";
        cx.fill();
        cx.beginPath()
        cx.arc(tileData.center.x - (that.mirrorSize - 60 * that.mirrorSize / 250) * tempSqrt * Math.cos(that.angle), tileData.center.y - (that.mirrorSize - 60 * that.mirrorSize / 250) * tempSqrt * Math.sin(that.angle), that.mirrorSize - 60 * that.mirrorSize / 250, (-45 / 180) * Math.PI + that.angle, (45 / 180) * Math.PI + that.angle, false);
        cx.fillStyle = "rgba(255,255,255,1)";
        cx.fill();

        that.drawLaser(laserInput, tileData);
    }

    that.onLeftClick = function ()
    {
        mirrorAngle++;
        mirrorAngle %= 12;
    }


    that.onRightClick = function ()
    {
        mirrorAngle--;
        if (mirrorAngle == -1)
            mirrorAngle = 11;
    }

    that.onLaser = function (laserData)
    {
        laserInput = {};
        laserOutput = {};

        laserInput.from = that.id;
        laserInput.to = laserData.to;
        laserInput.color = laserData.color;

        laserOutput.from = that.id;
        laserOutput.to = laserData.to;
        laserOutput.color = laserData.color;

        var laserFrom = (laserInput.to + 3) % 6;

        //that.laser = laserInput;

        laserOutput.from = that.id;
        if (mirrorAngle % 2 == 0)
        {
            if (mirrorAngle / 2 == laserFrom || (mirrorAngle / 2 + 1) % 6 == laserFrom)
            {
                if (mirrorAngle / 2 == laserFrom)
                {
                    laserOutput.to = (laserFrom + 1) % 6;
                }
                else
                {
                    laserOutput.to = (laserFrom + 5) % 6;
                }
                this.emitLaser(laserOutput);
            }
        }
        else
        {
            if (((mirrorAngle + 1) / 2) % 6 == laserFrom || ((mirrorAngle + 1) / 2 + 1) % 6 == laserFrom || ((mirrorAngle + 1) / 2 - 1) % 6 == laserFrom)
            {
                if (((mirrorAngle + 1) / 2 + 1) % 6 == laserFrom)
                {
                    laserOutput.to = (laserFrom + 4) % 6;
                }
                else if (((mirrorAngle - 1) / 2) % 6 == laserFrom)
                {
                    laserOutput.to = (laserFrom + 2) % 6;
                }
                else
                {
                    laserOutput.to = laserFrom;
                }
        this.emitLaser(laserOutput);
    }
        }
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

            var a = (3 - laserInput.to) * (Math.PI / 3) - 5 * Math.PI / 6;
            var b = (3 - (laserOutput.to == 5 ? -1 : laserOutput.to - 3)) * (Math.PI / 3) - 5 * Math.PI / 6;

            cx.beginPath();
            cx.moveTo(tileData.center.x + tileData.inner * Math.cos(a), tileData.center.y + tileData.inner * Math.sin(a));
            cx.lineTo(tileData.center.x, tileData.center.y);
            cx.lineTo(tileData.center.x + tileData.inner * Math.cos(b), tileData.center.y + tileData.inner * Math.sin(b));
            cx.stroke();

            cx.globalAlpha = 1;
        }

        laserData = null;
    }

    //that.emitLaser = function ()
    //{

    //}

    return that;
}