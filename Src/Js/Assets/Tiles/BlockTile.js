function BlockTile(id, s, px, py)
{
    var that = new Tile(id, s, px, py);

    that.Render = function (tileData)
    {
        var cx = tileData.context;

        cx.fillStyle = "#444444";

        cx.fill();
        cx.stroke();
    }

    return that;
}