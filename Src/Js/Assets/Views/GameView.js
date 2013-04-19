function GameView(level)
{
    var DEV = false;
    if (!level) DEV = true;

    var that = new View();

    var grid, shelf;

    that.Start = function ()
    {
        if (DEV)
        {
            grid = new Grid(4);
            shelf = new Shelf([

                { type: "Empty" },
                { type: "Block" },
                { type: "Emitter", color: "#FF0000" },
                { type: "Emitter", color: "#00FF00" },
                { type: "Emitter", color: "#0000FF" },
                { type: "Recepter", color: "#FF0000" },
                { type: "Recepter", color: "#00FF00" },
                { type: "Recepter", color: "#0000FF" },
                { type: "Mirror" },
                { type: "Spliter" },
                { type: "Filter", color: "#FF0000" },
                { type: "Filter", color: "#00FF00" },
                { type: "Filter", color: "#0000FF" },
                { type: "Decomposor" }
            ], true);
        }
        else
        {
            grid = new Grid(level.size, level.tiles);
            shelf = new Shelf(level.shelf);
        }

        grid.Start();
        shelf.Start();
    }

    that.Update = function ()
    {
        grid.Update();
        shelf.Update();
        grid.Draw();
    }

    return that;
};