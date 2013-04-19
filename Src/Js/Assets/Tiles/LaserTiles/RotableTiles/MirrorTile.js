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

        //that.onLaser({angle : Math.PI/6});



        if (that.over) cx.fill();
        cx.stroke();

        that.mirrorSize = tileData.outer;

        //draw mirror
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
        mirrorAngle %= 6;
    }

    that.onLaser = function (laserData)
    {
        //rad/pi * 180 = deg
        //deg/180 * pi = rad
        //var angleInRad = (that.angle / Math.PI) * 180;
        //var angleLaserInput = laserData.angle;
        //var angleLaserMirror = (that.angle - angleLaserInput);

        //if(angleLaserMirror >= Math.PI/2 || angleLaserMirror <= -Math.PI/2)
        //	that.reflection = false;
        //else
        //	that.reflection = true;

        ////console.log("Mirror Angle : " + that.angle)
        ////console.log("Entry Laser : " + angleLaser)
        ////console.log("Angle Laser / Mirror : " + angleLaserMirror)

        //that.angleLaserOutput = Math.PI - (that.angle + angleLaserMirror);

        ////console.log("Output Laser (Radian) : " + that.angleLaserOutput);
        ////console.log("Output Laser (Degree) : " + (that.angleLaserOutput/Math.PI) * 180);

        laserInput = laserData;
        laserOutput = {};
        //that.laser = laserInput;

        laserOutput.from = that.id;

        var to = (laserData.to + mirrorAngle) % 6;

        laserOutput.to = to;
        laserOutput.color = laserData.color;

        this.emitLaser(laserOutput);
    }

    that.drawLaser = function (laserData, tileData)
    {
        if (!laserInput) return;

        var cx = tileData.context;

        for (var i = 1; i < 4; i++)
        {
            cx.lineWidth = i * 4;
            cx.globalAlpha = 1 / (i * 2);
            cx.strokeStyle = laserData.color;

            var a = (3 - laserInput.to) * (Math.PI / 3) - 5*Math.PI / 6;
            var b = (3 - laserInput.to + 3 - mirrorAngle) * (Math.PI / 3) - 5*Math.PI / 6;

            cx.beginPath();
            cx.moveTo(tileData.center.x + tileData.inner * Math.cos(a), tileData.center.y + tileData.inner * Math.sin(a));
            cx.lineTo(tileData.center.x, tileData.center.y);
            cx.lineTo(tileData.center.x + tileData.inner * Math.cos(b), tileData.center.y + tileData.inner * Math.sin(b));
            cx.stroke();

            cx.globalAlpha = 1;
        }

        laserInput = null;
    }

    //that.emitLaser = function ()
    //{

    //}



    return that;
}