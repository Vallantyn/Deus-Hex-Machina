function MirrorTile(id, s, px, py)
{
    var that = new RotableTile(id, s, px, py);

    that.sizetest = 10;

    that.Render = function (tileData)
    {
        var cx = tileData.context;


        cx.fillStyle = that.color;
        cx.fill();
        cx.stroke();

		//draw mirror
		var tempSqrt = (Math.sqrt(2)/2);
		cx.beginPath()
		cx.arc(tileData.center.x - that.sizetest* tempSqrt  *Math.cos(that.angle), tileData.center.y - that.sizetest*tempSqrt*Math.sin(that.angle), that.sizetest, (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
		cx.fillStyle = "rgba(50,50,50,1)";
		cx.fill();
		cx.beginPath()
		cx.arc(tileData.center.x - (that.sizetest-20*that.sizetest/250)*tempSqrt*Math.cos(that.angle), tileData.center.y - (that.sizetest-20*that.sizetest/250)*tempSqrt*Math.sin(that.angle), that.sizetest - 20*that.sizetest/250 , (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
		cx.fillStyle = "rgba(150,150,150,1)";
		cx.fill();
		cx.beginPath()
		cx.arc(tileData.center.x - (that.sizetest-40*that.sizetest/250)*tempSqrt*Math.cos(that.angle), tileData.center.y - (that.sizetest-40*that.sizetest/250)*tempSqrt*Math.sin(that.angle), that.sizetest - 40*that.sizetest/250 , (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
		cx.fillStyle = "rgba(200,200,200,1)";
		cx.fill();
		cx.beginPath()
		cx.arc(tileData.center.x - (that.sizetest-60*that.sizetest/250)*tempSqrt*Math.cos(that.angle), tileData.center.y - (that.sizetest-60*that.sizetest/250)*tempSqrt*Math.sin(that.angle), that.sizetest - 60*that.sizetest/250 , (-45/180)*Math.PI + that.angle, (45/180)*Math.PI + that.angle, false);
		cx.fillStyle = "rgba(255,255,255,1)";
		cx.fill();

    }

    return that;
}