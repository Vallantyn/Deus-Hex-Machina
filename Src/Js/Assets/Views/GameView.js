function GameView()
{
    var that = new View();

    var grid;

    that.Start = function ()
    {
        grid = new Grid(4);
        grid.Start();
    }

    that.Update = function ()
    {
        grid.Update();
        grid.Draw();
    }

    return that;
};