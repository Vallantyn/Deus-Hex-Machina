function Grid(gridSize)
{
    var tiles, gSize, tSize;

    gSize = gridSize;
    var _t = ScreenCanvas.Canvas.height / (gridSize * 2 + 1);
    tSize = Math.sqrt(_t * _t - _t / 2 * _t / 2) / 2;

    function getLength(size)
    {
        var length = 0;

        for (var i = 0; i < size; i++)
        {
            length += i * 6;
        }

        return length;
    }

    function getHeight(i, j, s)
    {
        var h;

        var _x = (i - 2) * 2 * s / 2;
        var _y =

        h = Math.sqrt();

        return h;
    }

    var that =
        {
            Start: function ()
            {
                var ox = ScreenCanvas.Canvas.width / 2,
                    oy = ScreenCanvas.Canvas.height / 2;

                var _x = ox, _y = oy, dAngle = 5 * Math.PI / 6;
                var h = Math.sqrt(tSize * tSize - tSize / 2 * tSize / 2);

                tiles = [];

                var t = new Tile(tiles.length, tSize, _x, _y);

                t.onRightClick = function ()
                {
                    console.log("I Have A RIGHT");
                }

                t.onLeftClick = function ()
                {
                    console.log("LEFT 4 Dead");
                }

                tiles.push(t);

                for (var i = 0; i <= gSize; i++)
                {
                    var l = i * 6;

                    for (var j = 0; j < l; j++)
                    {
                        tiles.push(new Tile(tiles.length, tSize, _x, _y));

                        if (j % i == 0) dAngle -= Math.PI / 3;

                        _x += 2 * h * Math.cos(dAngle);
                        _y += 2 * h * Math.sin(dAngle);
                    }

                    _x -= tSize * 3 / 2;
                    _y -= h;
                }

                var L = (gSize + 1) * 6;

                for (var i = 0; i < L; i++)
                {
                    var t = new BlockTile(tiles.length, tSize, _x, _y);
                    tiles.push(t);

                    if (i % (gSize + 1) == 0) dAngle -= Math.PI / 3;

                    _x += 2 * h * Math.cos(dAngle);
                    _y += 2 * h * Math.sin(dAngle);
                }
            },

            Update: function ()
            {
                for (var i = 0; i < tiles.length; i++)
                {
                    tiles[i].Update();
                }
            },

            Draw: function ()
            {
                for (var i = 0; i < tiles.length; i++)
                {
                    tiles[i].Draw();
                }
            }
        }

    return that;
}