function MirrorTile(id, s, px, py)
{
    var that = new RotableTile(id, s, px, py);

    that.Render = function (tileData)
    {
        var cx = tileData.context;

        cx.fillStyle = "#444444";

        cx.fill();
        cx.stroke();
    }

    that.onLeftClick = function()
    {

    	this.rotate();

    }

    this.rotate = function()
    {

    }

    return that;
}