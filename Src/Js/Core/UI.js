var UI = (new function()
{
    var defaultStyle =
        {
            fillStyle: "#CCC",
            strokeStyle: "#666",
            font: "16px Fury",
            lineWidth: 1
        };


    function applyStyle(style)
    {
        var cx = ScreenCanvas.Context;

        for (var i in defaultStyle)
            if (cx.hasOwnProperty(i)) cx[i] = defaultStyle[i];

        if (!!style)
            for (var i in style)
                if (cx.hasOwnProperty(i)) cx[i] = style[i];
    }

    this.Label = function (text, x, y, style)
    {
        var cx = ScreenCanvas.Context;

        applyStyle(style);

        cx.fillText(text, x, y);
        cx.strokeText(text, x, y);
    }

    this.TileButton = function (label, size, x, y, style)
    {
        var cx = ScreenCanvas.Context;

        applyStyle(style);

        var S = size;
        var s = size / 2;

        var h = Math.sqrt(S * S - s * s);

        if (Picking.PointCircle(Input.x, Input.y, x, y, h))
        {
            if (Input.right) cx.strokeStyle = "#990000";
            else if (Input.left) cx.strokeStyle = "#009900";
            else cx.strokeStyle = "#999999";
        }

        cx.beginPath();
        cx.moveTo(x+size*Math.cos(0), y+size*Math.sin(0));

        for (var i = 0; i <= 6; i++)
        {
            cx.lineTo(x + size * Math.cos(i * Math.PI / 3), y + size * Math.sin(i * Math.PI / 3));
        }

        cx.stroke();
    }
}());

