function FilterTile(id, s, px, py)
{
    var that = new RotableTile(id, s, px, py);

    that.filterColor = "#FF00FF";
    that.emission = false;

    that.Render = function (tileData)
    {
        var cx = tileData.context;

        that.onLaser({angle : Math.PI/6, color : "#FFFFFF"});
        


        if (that.over) cx.fill();
        cx.stroke();

		that.mirrorSize= tileData.outer;

		//draw Filter
        that.itemSize = tileData.outer;
		var tempSqrt = (Math.sqrt(2)/2);
		var red = 0;
        var green = 255;
        var blue = 0;

        cx.beginPath();
        cx.moveTo(tileData.center.x + that.itemSize/2*Math.cos(that.angle-Math.PI/10+Math.PI+Math.PI/2),tileData.center.y + that.itemSize/2*Math.sin(that.angle-Math.PI/10+Math.PI+Math.PI/2   ));
        cx.lineTo(tileData.center.x + that.itemSize/2*Math.cos(that.angle+Math.PI/10+Math.PI/2),tileData.center.y + that.itemSize/2*Math.sin(that.angle+Math.PI/10+Math.PI/2));
        cx.lineTo(tileData.center.x + that.itemSize/2*Math.cos(that.angle-Math.PI/10+Math.PI/2),tileData.center.y + that.itemSize/2*Math.sin(that.angle-Math.PI/10+Math.PI/2));
        cx.lineTo(tileData.center.x + that.itemSize/2*Math.cos(that.angle+Math.PI/10+Math.PI+Math.PI/2),tileData.center.y + that.itemSize/2*Math.sin(that.angle+Math.PI/10+Math.PI+Math.PI/2));
        cx.fillStyle = "rgba("+red+","+green+","+blue+",0.8)";
        cx.fill();

        cx.beginPath();
        cx.arc(tileData.center.x - (that.itemSize+10*that.itemSize/250)*Math.cos(that.angle), tileData.center.y - (that.itemSize+10*that.itemSize/250)*Math.sin(that.angle), that.itemSize, (-30/180)*Math.PI + that.angle, (30/180)*Math.PI + that.angle, false);
        cx.fillStyle = "rgba(0,0,0,1)";
        cx.fill();
        cx.beginPath();
        cx.arc(tileData.center.x - (that.itemSize+10*that.itemSize/250)*Math.cos(that.angle+Math.PI), tileData.center.y - (that.itemSize+10*that.itemSize/250)*Math.sin(that.angle+Math.PI), that.itemSize, (-30/180)*Math.PI + that.angle + Math.PI, (30/180)*Math.PI + that.angle + Math.PI, false);
        cx.fillStyle = "rgba(0,0,0,1)";
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
            color   : "#FFFFFF", 
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

        //console.log("tile angle " + that.angle/Math.PI * 180)
        //console.log("laser angle " + laserData.angle/Math.PI * 180)
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