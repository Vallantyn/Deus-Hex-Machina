function MirrorTile(id, s, px, py)
{
    var that = new RotableTile(id, s, px, py);

    that.angleLaserOutput = 0;
    that.reflection = false;

    that.Render = function (tileData)
    {
        var cx = tileData.context;

        that.onLaser({angle : 30});
        


        if (that.over) cx.fill();
        cx.stroke();

		that.mirrorSize= tileData.outer;

		//draw mirror
		var tempSqrt = (Math.sqrt(2)/2);
		cx.beginPath()
		cx.arc(tileData.center.x - that.mirrorSize* tempSqrt  *Math.cos(that.angle), tileData.center.y - that.mirrorSize*tempSqrt*Math.sin(that.angle), that.mirrorSize, (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
		cx.fillStyle = "rgba(50,50,50,1)";
		cx.fill();
		cx.beginPath()
		cx.arc(tileData.center.x - (that.mirrorSize-20*that.mirrorSize/250)*tempSqrt*Math.cos(that.angle), tileData.center.y - (that.mirrorSize-20*that.mirrorSize/250)*tempSqrt*Math.sin(that.angle), that.mirrorSize - 20*that.mirrorSize/250 , (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
		cx.fillStyle = "rgba(150,150,150,1)";
		cx.fill();
		cx.beginPath()
		cx.arc(tileData.center.x - (that.mirrorSize-40*that.mirrorSize/250)*tempSqrt*Math.cos(that.angle), tileData.center.y - (that.mirrorSize-40*that.mirrorSize/250)*tempSqrt*Math.sin(that.angle), that.mirrorSize - 40*that.mirrorSize/250 , (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
		cx.fillStyle = "rgba(200,200,200,1)";
		cx.fill();
		cx.beginPath()
		cx.arc(tileData.center.x - (that.mirrorSize-60*that.mirrorSize/250)*tempSqrt*Math.cos(that.angle), tileData.center.y - (that.mirrorSize-60*that.mirrorSize/250)*tempSqrt*Math.sin(that.angle), that.mirrorSize - 60*that.mirrorSize/250 , (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
		cx.fillStyle = "rgba(255,255,255,1)";
		cx.fill();



		 //Debug draw Tile orientation
        cx.strokeStyle = "#FF0000";
        cx.beginPath();
        cx.moveTo(tileData.center.x - (tileData.outer * Math.cos(Math.PI/6)), tileData.center.y - (tileData.outer * Math.sin(Math.PI/6)));
        cx.lineTo(tileData.center.x + (tileData.outer * Math.cos(Math.PI/6)), tileData.center.y + (tileData.outer * Math.sin(Math.PI/6)));
        cx.closePath();
    
        cx.stroke();
        //End debug draw


        //Debug draw Laser reflection
       	if(that.reflection){


        cx.strokeStyle = "#0000FF";
        cx.beginPath();
        cx.moveTo(tileData.center.x, tileData.center.y);
        cx.lineTo(tileData.center.x + (tileData.outer * Math.cos(-that.angleLaserOutput)), tileData.center.y + (tileData.outer * Math.sin(-that.angleLaserOutput)));
        cx.closePath();
    
        cx.stroke();

        }
        //End debug draw
    }

 	that.onLaser = function (laserData)
    {
    	//rad/pi * 180 = deg
    	//deg/180 * pi = rad
    	//var angleInRad = (that.angle / Math.PI) * 180;
    	var angleLaser = (laserData.angle / 180) * Math.PI;
		var angleLaserMirror = (that.angle - angleLaser);

		if(angleLaserMirror >= Math.PI/2 || angleLaserMirror <= -Math.PI/2)
			that.reflection = false;
		else
			that.reflection = true;

		//console.log("Mirror Angle : " + that.angle)
		//console.log("Entry Laser : " + angleLaser)
		//console.log("Angle Laser / Mirror : " + angleLaserMirror)

    	that.angleLaserOutput = Math.PI - (that.angle + angleLaserMirror);

    	//console.log("Output Laser (Radian) : " + that.angleLaserOutput);
    	//console.log("Output Laser (Degree) : " + (that.angleLaserOutput/Math.PI) * 180);



    	
    }

    that.emitLaser = function ()
    {

    }



    return that;
}