function FilterTile(id, s, px, py)
{
    var that = new RotableTile(id, s, px, py);

    that.filterColor = "#0000AA";
    that.emission = false;

    that.Render = function (tileData)
    {
        var cx = tileData.context;

        that.onLaser({angle : Math.PI/6, color : "#0000FF"});
        


        if (that.over) cx.fill();
        cx.stroke();

		that.mirrorSize= tileData.outer;

		//draw mirror
		var tempSqrt = (Math.sqrt(2)/2);
		cx.beginPath()
		cx.arc(tileData.center.x - that.mirrorSize* tempSqrt  *Math.cos(that.angle), tileData.center.y - that.mirrorSize*tempSqrt*Math.sin(that.angle), that.mirrorSize, (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
		cx.fillStyle = "rgba(255,50,50,1)";
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



		// ======== Laser Debug Draw ===========

        /*
        //Draw Tile Orientation
        that.drawLaser({
                center  : tileData.center,
                outer   : tileData.outer,
                context : tileData.context,
                color   : "#FF0000", 
                angle   : that.angle  
        });
        that.drawLaser({
                center  : tileData.center,
                outer   : tileData.outer,
                context : tileData.context,
                color   : "#FF0000", 
                angle   : that.angle + Math.PI  
        });
        */


         //Draw Reception
        that.drawLaser({
            center  : tileData.center,
            outer   : tileData.outer,
            context : tileData.context,
            color   : "#00FF00", 
            angle   : Math.PI/6 - Math.PI
        });


        //Draw Emission
        if(that.emission)
        {
            that.drawLaser({
                center  : tileData.center,
                outer   : tileData.outer,
                context : tileData.context,
                color   : that.colorOutput, 
                angle   : that.angle
            });  
        }




        // =========== End Laser Debug Draw ===========
    }

 	that.onLaser = function (laserData)
    {
    	var colorOutput = ""

        console.log("tile angle " + that.angle/Math.PI * 180)
        console.log("laser angle " + laserData.angle/Math.PI * 180)
        if(Math.abs(that.angle - laserData.angle) < Math.PI/8 )
            that.emission = true;  
        else
            that.emission = false;


        for( var o in laserData.color)
        {
            if(o!=0)
            {
                var tempInt = parseInt(laserData.color[o],16) - parseInt(that.filterColor[o],16);
                if(tempInt >= 0)
                    colorOutput += tempInt.toString(16);
                else
                    colorOutput += "0"            
            } 


        }
        
        that.colorOutput = colorOutput;


    	
    }

    that.emitLaser = function ()
    {

    }



    return that;
}