function SpliterTile(id, s, px, py)
{
    var that = new RotableTile(id, s, px, py);

    that.angleLaserOutput = 0;
    that.reflection = false;
    that.deltaAngle = Math.PI/3;

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


         //Draw Reception
        that.drawLaser({
            center  : tileData.center,
            outer   : tileData.outer,
            context : tileData.context,
            color   : "#00FF00", 
            angle   : Math.PI/6 - Math.PI
        });

       	if(that.reflection){

            //Draw Reflection
            that.drawLaser({
                center  : tileData.center,
                outer   : tileData.outer,
                context : tileData.context,
                color   : "#0000FF", 
                angle   : that.that.angleLaserOutput + Math.PI/2 
            });

        }


        // =========== End Laser Debug Draw ===========
    }

 	that.onLaser = function (laserData)
    {


        var laser = {};
        var laser2 = {};
        laserData.from = id;

        for(var o in laserData)
        {
            laser[o] = laserData[o];
            laser2[o] = laserData[o]; 
        }
       
        var laserFrom = (laserData.to+3)%6;
        console.log(laserFrom)

        laser.to = laserFrom + 2 ; 
        laser2.to = laserFrom - 2;
        laser.to > 5?laser.to-=6:null;
        laser2.to < 0?laser2.to+=6:null;
        console.log( laser2.to + "   " + laser.to)

        that.emitLaser(laser);
        that.emitLaser(laser2);
        


        

    	//console.log("Output Laser (Radian) : " + that.that.angleLaserOutput);
    	//console.log("Output Laser (Degree) : " + (that.that.angleLaserOutput/Math.PI) * 180);



    	
    }

    that.emitLaser = function ()
    {

    }



    return that;
}