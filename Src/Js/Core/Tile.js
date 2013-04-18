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
      , loopSize
      , loopMax
      , lighten = false;

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
                loopMax = d;
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

                if (lighten) that.color = "#009999";
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

                if (that.over || lighten) cx.fill();
                cx.stroke();
            },

            onLeftClick: function ()
            {

            },

            onRightClick: function ()
            {
                for (var i = 0; i < 6; i++)
                {
                    this.emitLaser({
                        from: id, to: i
                    });
                }
            },

            onLaser: function (laserData)
            {
                lighten = !lighten;

                laserData.from = id;

                this.emitLaser(laserData);
            },

            emitLaser: function ()
            {

            },

            get loop()
            {
                return loopDepth;
            },

            get index()
            {
                return loopIndex;
            },

            get loopLength()
            {
                return loopSize;
            },

            get id()
            {
                return id;
            },

            get loopMax()
            {
                return loopMax;
            }
        };

    return that;
}