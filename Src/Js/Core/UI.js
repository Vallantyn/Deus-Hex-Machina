﻿var UI = (new function()
{
    var defaultStyle =
        {
            fillStyle: "#CCC",
            strokeStyle: "#666",
            font: "16px Fury",
            lineWidth: 1,
            textBaseline: "alphabetic"
        };


    function applyStyle(style)  
    {
        var cx = ScreenCanvas.Context;

        for (var i in defaultStyle)
            if (!!cx[i]) cx[i] = defaultStyle[i];

        if (!!style)
            for (var i in style)
                if (!!cx[i]) cx[i] = style[i];
    }

    this.Label = function (text, x, y, style)
    {
        var cx = ScreenCanvas.Context;

        applyStyle(style);

        cx.strokeText(text, x, y);
        cx.fillText(text, x, y);
    }

    var fill;

    this.TileButton = function (label, size, x, y, callback, style)
    {
        var cx = ScreenCanvas.Context;

        applyStyle(style);

        var S = size;
        var s = size / 2;

        var h = Math.sqrt(S * S - s * s);

        cx.beginPath();
        cx.moveTo(x+size*Math.cos(0), y+size*Math.sin(0));

        for (var i = 0; i <= 6; i++)
        {
            cx.lineTo(x + size * Math.cos(i * Math.PI / 3), y + size * Math.sin(i * Math.PI / 3));
        }

        if (Picking.PointCircle(Input.x, Input.y, x, y, h))
        {
            if (Input.right)
            {
                fill = "#990000";
            }
            else if (Input.left)
            {
                fill = "#009900";
                !!callback && callback();
            } else if (Input.release) fill = "#999999";

            cx.fillStyle = fill;

            cx.fill();
        }

        cx.stroke();

        !!label && this.Label(label, x - cx.measureText(label).width / 2, y, style);
    }
}());

