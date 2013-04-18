function Tile(i, s, px, py)
{
    var size
      , halfSize
      , height
      , halfHeight
      , x, y
      , id = i
      , loopDepth
      , loopIndex
      , loopSize;

    size = s;
    halfSize = size / 2;
    height = Math.sqrt(size * size - halfSize * halfSize);
    halfHeight = height / 2;
    x = px;
    y = py;

    (function getDepth()
    {
        var d = 0;
        for (var i = 0; i >= 0; i++)
        {
            d += i * 6
            if (d >= id)
            {
                loopDepth = i;
                loopIndex = (id - (d - i * 6));
                loopSize = i*6;
                return;
            }
        }
    }());

    //getDepth();

    var that =
        {
            color: "#999999",
            over: false,
            Start: function ()
            {

            },

            Update: function ()
            {
                if (Picking.PointCircle(Input.x, Input.y, x, y, height))
                {
                    if (Input.right)
                    {
                        that.color = "#990000";
                        this.onRightClick();
                    }
                    else if (Input.left)
                    {
                        that.color = "#009900";
                        this.onLeftClick();
                    }
                    else if (Input.release)
                    {
                        that.color = "#999999";
                    }

                    that.over = true;
                } else that.over = false;
            },

            Draw: function ()
            {
                var cx = ScreenCanvas.Context;
                cx.strokeStyle = "#666666";
                cx.beginPath();
                cx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

                for (var i = 0; i <= 6; i++)
                {
                    cx.lineTo(x + size * Math.cos(i * Math.PI / 3), y + size * Math.sin(i * Math.PI / 3));
                }

                cx.closePath();
                cx.lineWidth = 1;

                this.Render({
                    center: { x: x, y: y },
                    context: cx,
                    inner: height,
                    outer: size
                });
            },

            Render: function (tileData)
            {
                var cx = tileData.context;

                cx.fillStyle = that.color;

                if (that.over) cx.fill();
                cx.stroke();

                var str = Math.floor(loopIndex/loopDepth);

                var w = cx.measureText(str).width/2;

                UI.Label(str, tileData.center.x - w, tileData.center.y, {textBaseline: "middle"});
            },

            onLeftClick: function ()
            {

            },

            onRightClick: function ()
            {
                if (loopIndex == 1)
                {
                    console.log([
                        "Top: " + (loopSize + 6) + "|" + (loopDepth + 1)
                      , "TopLeft: " + 1 + "|" + (loopDepth + 1)
                      , "DownLeft: " + 2 + "|" + (loopDepth + 1)
                      , "Down: " + 2 + "|" + loopDepth
                      , "DownRight: " + 1 + "|" + (loopDepth - 1)
                      , "TopRight: " + loopSize + "|" + (loopDepth)
                    ]);
                } else
                console.log(id+" | "+loopIndex+" | "+loopIndex%loopDepth+" | "+loopSize);
            },

            onLaser: function (laserData)
            {

            },

            emitLaser: function ()
            {

            }
        };

    return that;
}