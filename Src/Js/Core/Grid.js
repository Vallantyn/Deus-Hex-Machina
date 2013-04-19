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

    /*
    laserData
        from: tile id
        to: target position (relative to emitter) 0->5


    */

    function updateTileClass(id)
    {
        var t = tiles[id];
        var x = t.x;
        var y = t.y;

        var T = new Input.additionCallback(id, tSize, x, y);
        T.emitLaser = emitLaser;
        T.updateTileClass = updateTileClass;
        tiles[id] = T;
    }

    function emitLaser(laserData)
    {
        var id = laserData.from;
        var target = laserData.to;
        var T = null;

        if (id == 0)
        {
            T = target + 1;
            //return tiles[T].onLaser(laserData);
        }
        else
        {

            var t = tiles[id];

            var isCorner = t.loop == 1 ? true : t.index % t.loop == 1;
            var orientation = isCorner ? (t.loop == 1 ? t.index - 1 : Math.floor(t.index / t.loop))
                : (t.index % t.loop == 0 ? Math.floor(t.index / t.loop) % 6 : (Math.floor(t.index / t.loop) + 1) % 6);

            var corner = [1, 1, 0, -1, 0, 1];
            var intern = [1, 0, -1, -1, 0, 1];

            var pos = [];

            for (var i = 0; i < 6; i++)
            {
                if (isCorner) pos.push(t.loop + corner[Math.abs(orientation - i) % 6]);
                else
                {
                    var o = orientation - i;
                    if (o > 0) o -= 6;

                    pos.push(t.loop + intern[Math.abs(o) % 6]);
                }
            }

            if (!!pos)
            {
                switch (pos[target])
                {
                    case t.loop:
                        if (isCorner)
                        {
                            T = target == ((orientation + 2) % 6) ? id + 1 : id - 1;
                            if (T > t.loopMax) T -= t.loopLength;
                            else if (orientation == 0 && T < id) T += t.loopLength;
                        }
                        else
                        {
                            T = (target == ((orientation + 1) % 6)) ? id + 1 : id - 1;
                            if (T > t.loopMax) T -= t.loopLength;
                        }
                        break;

                    case t.loop +1:
                        if (isCorner || orientation != 0)
                        {
                            T = (target == orientation) ? id + orientation + t.loop * 6 :
                                (target == ((orientation + 1) % 6) ? id + orientation + t.loop * 6 + 1 :
                                id + orientation + t.loop * 6 - 1);

                            if (T == t.loopMax) T += (t.loop + 1) * 6;
                        } else
                        {
                            T = (target == orientation) ? id + (t.loop + 1) * 6 : id + (t.loop + 1) * 6 - 1;
                        }
                        break;

                    case t.loop -1:
                        if (isCorner)
                        {
                            T = t.loop == 1 ? 0 : id - orientation - (t.loop - 1) * 6;
                        }
                        else
                        {
                            if (orientation != 0)
                                T = (target == ((orientation + 3) % 6)) ? id - orientation - (t.loop - 1) * 6 : id - orientation - (t.loop - 1) * 6 + 1;
                            else
                                T = (target == ((orientation + 3) % 6)) ? id - 1 - t.loop * 6 + 1 : id - 1 - t.loop * 6 + 2;

                            if (T > (t.loopMax - t.loopLength))
                            {
                                T -= (t.loop - 1) * 6;
                            }
                        }
                        break;
                }
            }
        }

        tiles[T].onLaser(laserData);
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

                var t = new LaserTile(tiles.length, tSize, _x, _y);
                t.emitLaser = emitLaser;
                t.updateTileClass = updateTileClass;

                tiles.push(t);

                for (var i = 0; i <= gSize; i++)
                {
                    var l = i * 6;

                    for (var j = 0; j < l; j++)
                    {
                        var t;

                        if (j == 4)
                            t = new DecomposorTile(tiles.length, tSize, _x, _y);
                        else if (tiles.length == 42)
                        {
                            t = new EmitterTile({ color: "#FF00FF", direction: 5 }, tiles.length, tSize, _x, _y);
                        }
                        else t = new LaserTile(tiles.length, tSize, _x, _y);


                        t.emitLaser = emitLaser;
                        t.updateTileClass = updateTileClass;

                        tiles.push(t);


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