function LevelSelectorView()
{
    var that = new View();

    that.Update = function ()
    {
        UI.Label("Choose a Level", 40, 40, { strokeStyle: "#CCC", fillStyle: "#CCC", font: "24pt Fury" });
        UI.TileButton("Dev", 40, 250, 250, {lineWidth: 4});
    }

    return that;
}