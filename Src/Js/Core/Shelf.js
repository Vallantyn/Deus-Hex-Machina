function Shelf(itemArray, dev)
{
    var items = dev ? itemArray : Object.keys(itemArray);
    var shelf = [];

    var ox, oy;

    var w = 60, h;
    h = Math.sqrt(w * w - w / 2 * w / 2);

    var that =
        {
            Start: function ()
            {
                ox = ScreenCanvas.Canvas.width * 5 / 6;
                oy = ScreenCanvas.Canvas.height / 2 - (items.length / 2 * h);
            },

            Update: function ()
            {
                for (var i = 0; i < items.length; i++)
                {
                    UI.TileButton(items[i], w, ox + w * 3 / 2 * (i % 2), oy + h * 2 * Math.floor(i / 2) + h * (i % 2), function ()
                    {
                        Input.mode = "ADDITION";
                        Input.additionCallback = window[items[i] + "Tile"];
                    }, { lineWidth: 4, textBaseline: "middle", font: "12pt Fury" });
                }

            },

            Render: function ()
            {
                for (var i = 0; i < shelf.length; i++)
                {
                    shelf[i].Render();
                }

            }
        };

    return that;
}
