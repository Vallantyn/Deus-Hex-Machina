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
                { type: "Empty" , count: 99},
                { type: "Block", count: 99 },
                { type: "Emitter", color: "#FF0000", count: 99 },
                { type: "Emitter", color: "#00FF00", count: 99 },
                { type: "Emitter", color: "#0000FF", count: 99 },
                { type: "Recepter", color: "#FF0000", count: 99 },
                { type: "Recepter", color: "#00FF00", count: 99 },
                { type: "Recepter", color: "#0000FF", count: 99 },
                { type: "Mirror", count: 99 },
                { type: "Spliter", count: 99 },
                { type: "Filter", color: "#FF0000", count: 99 },
                { type: "Filter", color: "#00FF00", count: 99 },
                { type: "Filter", color: "#0000FF", count: 99 },
                { type: "Decomposor", count: 99 }
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