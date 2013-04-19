function MirrorTile(id, s, px, py)
{
    console.log("new mirror tile");
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
        that.angle = (12-mirrorAngle)*Math.PI/6;
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



        // ======== Laser Debug Draw ===========

        //Draw Tile Orientation

        //that.drawLaser({
        //        center  : tileData.center,
        //        outer   : tileData.outer,
        //        context : tileData.context,
        //        color   : "#FF0000", 
        //        angle   : that.angle  
        //});
        //that.drawLaser({
        //        center  : tileData.center,
        //        outer   : tileData.outer,
        //        context : tileData.context,
        //        color   : "#FF0000", 
        //        angle   : that.angle + Math.PI  
        //});


        // //Draw Reception
        //that.drawLaser({
        //    center  : tileData.center,
        //    outer   : tileData.outer,
        //    context : tileData.context,
        //    color   : "#00FF00", 
        //    angle   : Math.PI/6 - Math.PI
        //});

        //if(that.reflection){

        //    //Draw Reflection
        //    that.drawLaser({
        //        center  : tileData.center,
        //        outer   : tileData.outer,
        //        context : tileData.context,
        //        color   : "#0000FF", 
        //        angle   : -that.angleLaserOutput  
        //    });

        //}



        // =========== End Laser Debug Draw ===========


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
        if (mirrorAngle==-1)
            mirrorAngle=11;
    }

    that.onLaser = function (laserData)
    {
        var laserInput = laserData;
        var laserOutput = laserData;
        var laserFrom = (laserInput.to+3)%6;

        that.laser = laserInput;

        laserOutput.from = that.id;
        if (mirrorAngle%2 == 0)
        {
            if (mirrorAngle/2 == laserFrom || (mirrorAngle/2+1)%6 == laserFrom)
            {
                if(mirrorAngle/2 == laserFrom)
                {
                    laserOutput.to = (laserFrom+1)%6;
                }
                else
                {
                    laserOutput.to = (laserFrom+5)%6;
                }
                this.emitLaser(laserOutput);
            }
        }
        else
        {
            if ( ((mirrorAngle+1)/2)%6 == laserFrom || ((mirrorAngle+1)/2+1)%6 == laserFrom || ((mirrorAngle+1)/2-1)%6 == laserFrom )
            {
                if(((mirrorAngle+1)/2+1)%6 == laserFrom)
                {
                    laserOutput.to = (laserFrom+4)%6;
                }
                else if(((mirrorAngle-1)/2)%6 == laserFrom)
                {
                    laserOutput.to = (laserFrom+2)%6;
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

            var a = (3 - laserData.to) * (Math.PI / 3) - 5*Math.PI / 6;
            var b = (3 - laserData.to + 3 - mirrorAngle) * (Math.PI / 3) - 5*Math.PI / 6;

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