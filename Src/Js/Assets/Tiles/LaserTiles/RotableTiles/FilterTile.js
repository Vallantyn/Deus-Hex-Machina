function FilterTile(id, s, px, py)
{
    var that = new RotableTile(id, s, px, py);

    that.filterColor = "#0000FF";
    that.emission = false;

    that.angle = Math.PI/3 ;
    that.deltaAngle = Math.PI/3;

    var laserInput ={};
    var laserOutput;

    that.Render = function (tileData)
    {
        var cx = tileData.context;

        //that.onLaser({angle : Math.PI/6, color : "#FFFFFF"});
        


        if (that.over) cx.fill();
        cx.stroke();

		//draw Filter
        that.itemSize = tileData.outer;
		var tempSqrt = (Math.sqrt(2)/2);
		var red = parseInt(that.filterColor.substr(1,2),16);
        var green = parseInt(that.filterColor.substr(3,2),16);
        var blue = parseInt(that.filterColor.substr(5,2),16);
        console.log("r "+red+" g "+green+" b "+blue)

        cx.beginPath();
        cx.moveTo(tileData.center.x + that.itemSize/2*Math.cos((that.angle + Math.PI/6)-Math.PI/10+Math.PI+Math.PI/2),tileData.center.y + that.itemSize/2*Math.sin((that.angle + Math.PI/6)-Math.PI/10+Math.PI+Math.PI/2   ));
        cx.lineTo(tileData.center.x + that.itemSize/2*Math.cos((that.angle + Math.PI/6)+Math.PI/10+Math.PI/2),tileData.center.y + that.itemSize/2*Math.sin((that.angle + Math.PI/6)+Math.PI/10+Math.PI/2));
        cx.lineTo(tileData.center.x + that.itemSize/2*Math.cos((that.angle + Math.PI/6)-Math.PI/10+Math.PI/2),tileData.center.y + that.itemSize/2*Math.sin((that.angle + Math.PI/6)-Math.PI/10+Math.PI/2));
        cx.lineTo(tileData.center.x + that.itemSize/2*Math.cos((that.angle + Math.PI/6)+Math.PI/10+Math.PI+Math.PI/2),tileData.center.y + that.itemSize/2*Math.sin((that.angle + Math.PI/6)+Math.PI/10+Math.PI+Math.PI/2));
        cx.fillStyle = "rgba("+red+","+green+","+blue+",0.8)";
        cx.fill();

        cx.beginPath();
        cx.arc(tileData.center.x - (that.itemSize+10*that.itemSize/250)*Math.cos((that.angle + Math.PI/6)), tileData.center.y - (that.itemSize+10*that.itemSize/250)*Math.sin((that.angle + Math.PI/6)), that.itemSize, (-30/180)*Math.PI + (that.angle + Math.PI/6), (30/180)*Math.PI + (that.angle + Math.PI/6), false);
        cx.fillStyle = "rgba(0,0,0,1)";
        cx.fill();
        cx.beginPath();
        cx.arc(tileData.center.x - (that.itemSize+10*that.itemSize/250)*Math.cos((that.angle + Math.PI/6)+Math.PI), tileData.center.y - (that.itemSize+10*that.itemSize/250)*Math.sin((that.angle + Math.PI/6)+Math.PI), that.itemSize, (-30/180)*Math.PI + (that.angle + Math.PI/6) + Math.PI, (30/180)*Math.PI + (that.angle + Math.PI/6) + Math.PI, false);
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


        that.drawLaser(laserInput, tileData);




        // =========== End Laser Debug Draw ===========
    }

 	that.onLaser = function (laserData)
    {
    	

        laserInput = laserData;
        laserOutput = {
            from: that.id,
            to: laserData.to,
            color: that.filterColor
        };


        var t = (that.angle / (Math.PI/6))%6;
 
        if(t == 2 && laserData.to%3 == 2)
            this.emitLaser(laserOutput);
        else if(t == 0 && laserData.to%3 == 0)
            this.emitLaser(laserOutput);
        else if(t == 4 && laserData.to%3 == 1)
            this.emitLaser(laserOutput);
    	
    }

    that.emitLaser = function ()
    {

    }



    return that;
}