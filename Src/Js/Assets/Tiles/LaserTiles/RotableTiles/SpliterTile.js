function SpliterTile(id, s, px, py)
{
    var that = new RotableTile(id, s, px, py);

    that.angleLaserOutput = 0;
    that.reflection = false;
    that.deltaAngle = Math.PI/3;
    that.laser1 = {};
    that.laser2 = {};

    var laserInput = {};

    var lasers = [];
    var lasersOut = [];
    var laserOut1 = [];
    var laserOut2 = [];

    var laserOutput;

    that.Render = function (tileData)
    {
        var cx = tileData.context;
        that.itemSize = tileData.outer;
        //that.onLaser({that.angle : Math.PI/6});
        


        if (that.over) cx.fill();
        cx.stroke();

		that.itemSize= tileData.outer;
//DrawSpliter
        var tempSqrt = (Math.sqrt(2) / 2);
		for (var i=0;i<10;i++)
        {
                 cx.beginPath();
                 cx.moveTo(tileData.center.x + (that.itemSize-(i*i)*that.itemSize/250)*tempSqrt*Math.cos((that.angle/180)*Math.PI) , tileData.center.y + (that.itemSize-(i*i)*that.itemSize/250)*tempSqrt*Math.sin((that.angle/180)*Math.PI) );
                 cx.lineTo(tileData.center.x + (that.itemSize-(i*i)*that.itemSize/250)*tempSqrt*Math.cos(((that.angle+ 120)/180)*Math.PI) , tileData.center.y + (that.itemSize-(i*i)*that.itemSize/250)*tempSqrt*Math.sin(((that.angle+ 120)/180)*Math.PI) );
                 cx.lineTo(tileData.center.x + (that.itemSize-(i*i)*that.itemSize/250)*tempSqrt*Math.cos(((that.angle+ 240)/180)*Math.PI) , tileData.center.y + (that.itemSize-(i*i)*that.itemSize/250)*tempSqrt*Math.sin(((that.angle + 240)/180)*Math.PI) );
                 cx.fillStyle = "rgba("+(i*40)+","+(i*40)+","+(i*40)+",1)";
                 cx.fill();
                 for (var j=0;j<3;j++)
                    {
                    cx.beginPath();
                    cx.moveTo(tileData.center.x,tileData.center.y);
                    cx.lineTo(tileData.center.x + (that.itemSize-(i*i)*that.itemSize/250)*tempSqrt*Math.cos(((that.angle + j*120)/180)*Math.PI) , tileData.center.y + (that.itemSize-(i*i)*that.itemSize/250)*tempSqrt*Math.sin(((that.angle + j*120)/180)*Math.PI) );
                    cx.strokeStyle = "rgba("+(i*15)+","+(i*15)+","+(i*15)+",1)";
                    cx.stroke();
                 }
        }
//End DrawSpliter

		// ======== Laser Debug Draw ===========

        //Draw Tile Orientation
        /*that.drawLaser({
                center  : tileData.center,
                outer   : tileData.outer,
                context : tileData.context,
                color   : "#FF0000", 
                that.angle   : that.that.angle  
        });
        that.drawLaser({
                center  : tileData.center,
                outer   : tileData.outer,
                context : tileData.context,
                color   : "#FF0000", 
                that.angle   : that.that.angle + Math.PI  
        });*/


       
  /*      that.drawLaser(laserInput, tileData);
        laserInput = {};
        for(var o in that.laser2)
        {
            laserInput[o] = that.laser2[o];
        }*/


		for (var i = 0; i < lasers.length; i++)
		{
		    that.drawLaser(lasers[i], tileData);
		    //that.drawLaser(laserOut2[i], tileData);
		}

		//console.log(lasersOut.length);

		for (var i = 0; i < lasersOut.length; i++)
		{
		    that.drawLaser(lasersOut[i], tileData);
		}

		lasers = [];
		lasersOut = [];

		laserOut1 = [];
		laserOut2 = [];

        laserInput = null;
        that.laser1 = null;
        that.laser2 = null;


        


        // =========== End Laser Debug Draw ===========
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

            //console.log(laserData.to);

            var a = (laserData.to) * (Math.PI / 3) - 5*Math.PI / 6;

            cx.beginPath();
            cx.moveTo(tileData.center.x + tileData.inner * Math.cos(a), tileData.center.y + tileData.inner * Math.sin(a));
            cx.lineTo(tileData.center.x, tileData.center.y);
        
            cx.stroke();

            cx.globalAlpha = 1;
        }

    }

 	that.onLaser = function (laserData)
    {
 	    if (!laserData) return;

 	    laserInput = {};

 	    laserInput.from = id;
 	    laserInput.to = laserData.to;
 	    laserInput.color = laserData.color;
        
        that.laser1 = {};
        that.laser2 = {};

        for(var o in laserData)
        {
            that.laser1[o] = laserInput[o];
            that.laser2[o] = laserInput[o]; 
        }

       
        var laserFrom = (laserInput.to+3)%6;
        laserInput.to = laserFrom;
        //console.log(laserFrom)

        that.laser1.to = laserFrom + 2 ; 
        that.laser2.to = laserFrom - 2;

        that.laser1.to > 5?that.laser1.to-=6:null;
        that.laser2.to < 0?that.laser2.to+=6:null;
        //console.log( laser2.to + "   " + laser.to)

        that.emitLaser(that.laser1);
        that.emitLaser(that.laser2);

        lasers.push(laserInput);
        lasersOut.push(that.laser1);
        lasersOut.push(that.laser2);

        laserOut1.push(that.laser1);
        laserOut2.push(that.laser2);

        
        


        

    	//console.log("Output Laser (Radian) : " + that.that.angleLaserOutput);
    	//console.log("Output Laser (Degree) : " + (that.that.angleLaserOutput/Math.PI) * 180);



    	
    }

    that.emitLaser = function ()
    {

    }



    return that;
}