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
                "Mirror",
                "Block",
                "Empty",
                "Filter",
                "Spliter",
                "Emitter",
                "Decomposor"
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