function LevelSelectorView()
{
    var that = new View();

    var levels = 0xFF;

    var sx = ScreenCanvas.Canvas.width *2/5, sy = 250, w = 40, h;
    h = Math.sqrt(w * w - w / 2 * w / 2);

    var offsetY = 0;

    that.Update = function ()
    {
        UI.Label("Choose a Level", w, w, { strokeStyle: "#CCC", fillStyle: "#CCC", font: "24pt Fury" });
        UI.TileButton("Dev", w, sx - 4 * w, sy - 2 * w, { lineWidth: 4, textBaseline: "middle" });

        for (var i = 0; i < levels; i++)
        {
            UI.TileButton(i.toString(16).toUpperCase(), w, sx + w * 3/2 * (i % 8), offsetY + sy + h * 2 * Math.floor(i / 8) + h * (i % 2), { lineWidth: 4, textBaseline: "middle", font: "24px Fury" });
        }
    }

    window.addEventListener("mousewheel", function (event)
    {
        var delta = !!event.detail ? event.detail * 120 : event.wheelDelta;

        offsetY += delta/3;
    });

    return that;
}