var UI =
{
    defaultStyle:
    {
        fillStyle: "#CCC",
        strokeStyle: "#666",
        font: "16px Fury"
    },

    Label: function (text, x, y, style)
    {
        var cx = ScreenCanvas.Context;

        for (var i in this.defaultStyle)
            if (cx.hasOwnProperty(i)) cx[i] = this.defaultStyle[i];

        if (!!style)
            for (var i in style)
                if (cx.hasOwnProperty(i)) cx[i] = style[i];

        cx.fillText(text, x, y);
        cx.strokeText(text, x, y);
    }
}