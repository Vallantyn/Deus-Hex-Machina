function GameView()
{
    var that = new View();

    var grid, shelf;

    that.Start = function ()
    {
        grid = new Grid(4);
        shelf = new Shelf([
            "Mirror",
            "Block",
            "Laser",
            "Filter",
            "Spliter"
        ]);

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