function MirrorTile(id, s, px, py)
{
    var that = new Tile(id, s, px, py);

    that.angleLaserOutput = 0;
    that.reflection = false;

    var mirrorAngle = 3;

    that.Render = function (tileData)
    {
        var cx = tileData.context;

        //that.onLaser({angle : Math.PI/6});
        


        if (that.over) cx.fill();
        cx.stroke();

		that.itemSize= tileData.outer;

		//draw mirror
		var tempSqrt = (Math.sqrt(2)/2);
		cx.beginPath()
		cx.arc(tileData.center.x - that.itemSize* tempSqrt  *Math.cos(that.angle), tileData.center.y - that.itemSize*tempSqrt*Math.sin(that.angle), that.itemSize, (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
		cx.fillStyle = "rgba(50,50,50,1)";
		cx.fill();
		cx.beginPath()
		cx.arc(tileData.center.x - (that.itemSize-20*that.itemSize/250)*tempSqrt*Math.cos(that.angle), tileData.center.y - (that.itemSize-20*that.itemSize/250)*tempSqrt*Math.sin(that.angle), that.itemSize - 20*that.itemSize/250 , (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
		cx.fillStyle = "rgba(150,150,150,1)";
		cx.fill();
		cx.beginPath()
		cx.arc(tileData.center.x - (that.itemSize-40*that.itemSize/250)*tempSqrt*Math.cos(that.angle), tileData.center.y - (that.itemSize-40*that.itemSize/250)*tempSqrt*Math.sin(that.angle), that.itemSize - 40*that.itemSize/250 , (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
		cx.fillStyle = "rgba(200,200,200,1)";
		cx.fill();
		cx.beginPath()
		cx.arc(tileData.center.x - (that.itemSize-60*that.itemSize/250)*tempSqrt*Math.cos(that.angle), tileData.center.y - (that.itemSize-60*that.itemSize/250)*tempSqrt*Math.sin(that.angle), that.itemSize - 60*that.itemSize/250 , (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
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


		that.drawLaser(that.laser);
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
<<<<<<< HEAD

        laserData.from = id;

        var from = laserData.from;
        laserData.to = from + 1;
        laserData.from = id;
        that.emitLaser(laserData);

        laserData.to = from - 2;
        that.emitLaser(laserData);

        /*
        console.log("laserData from : "+laserData.from)
    	var angleLaserInput = laserData.from * (Math.PI/3);
		var angleLaserMirror = (that.angle - angleLaserInput);
        console.log("laserData mirror : "+angleLaserMirror)
		if(angleLaserMirror - Math.PI/2 > Math.PI/8)
			that.reflection = false;
		else
			that.reflection = true;

        console.log(that.reflection)

		//console.log("Mirror Angle : " + that.angle)
		//console.log("Entry Laser : " + angleLaser)
		//console.log("Angle Laser / Mirror : " + angleLaserMirror)
=======
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
>>>>>>> 4282a2d7a52ebc8c456a567d78a759282e16bfa9

    	////console.log("Output Laser (Radian) : " + that.angleLaserOutput);
    	////console.log("Output Laser (Degree) : " + (that.angleLaserOutput/Math.PI) * 180);

<<<<<<< HEAD
        laserData.from = id;
        var target = (that.angleLaserOutput / (Math.PI/3));
        laserData.to = target << 0 ;
        console.log(laserData.to)
        console.log("angle output rad" + that.angleLaserOutput)

        that.emitLaser(laserData);

    	//console.log("Output Laser (Radian) : " + that.angleLaserOutput);
    	//console.log("Output Laser (Degree) : " + (that.angleLaserOutput/Math.PI) * 180);
*/
=======
 	    var laserInput = laserData;
 	    var laserOutput = laserData;

 	    that.laser = laserInput;
>>>>>>> 4282a2d7a52ebc8c456a567d78a759282e16bfa9

 	    laserOutput.from = that.id;
 	    laserOutput.to += mirrorAngle;
 	    laserOutput.to %= 6;

 	    this.emitLaser(laserOutput);
    }

    //that.emitLaser = function ()
    //{

    //}



    return that;
}