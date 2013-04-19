function Shelf(itemArray, dev)
{
    var items = itemArray;
    var shelf = [];

    var ox, oy;

    var w = 60, h;
    h = Math.sqrt(w * w - w / 2 * w / 2);

    var that =
        {
            Start: function ()
            {
                ox = ScreenCanvas.Canvas.width * 5 / 6;
                oy = ScreenCanvas.Canvas.height / 2 - ((dev ? items.length: Object.keys(items).length) / 2 * h);
            },

            Update: function ()
            {
                if (dev)
                    for (var i = 0; i < items.length; i++)
                    {
                        console.log("String Array");
                        UI.TileButton(items[i], w, ox + w * 3 / 2 * (i % 2), oy + h * 2 * Math.floor(i / 2) + h * (i % 2), function ()
                        {
                            Input.mode = "ADDITION";
                            Input.additionCallback = window[items[i] + "Tile"];
                        }, { lineWidth: 4, textBaseline: "middle", font: "12pt Fury" });
                    }
                else
                {
                    var i = 0;
                    for (var o in items)
                    {
                        UI.TileButton(o, w, ox + w * 3 / 2 * (i % 2), oy + h * 2 * Math.floor(i / 2) + h * (i % 2), function ()
                        {
                            Input.mode = "ADDITION";
                            Input.additionCallback = window[o + "Tile"];
                            if (o = "Filter") Input.callbackArgs = {color:items[o].color}
                        }, { lineWidth: 4, textBaseline: "middle", font: "12pt Fury" });
                        i++
                    }
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
