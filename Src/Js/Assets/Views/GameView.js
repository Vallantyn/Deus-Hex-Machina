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
            grid = new Grid(4, null, DEV);
            shelf = new Shelf([
                { type: "Empty" , count: 99},
                { type: "Block", count: 99 },
                { type: "Emitter", emitterColor: "#FF0000", count: 99 },
                { type: "Emitter", emitterColor: "#00FF00", count: 99 },
                { type: "Emitter", emitterColor: "#0000FF", count: 99 },
                { type: "Recepter", recepterColor: "#FF0000", count: 99 },
                { type: "Recepter", recepterColor: "#00FF00", count: 99 },
                { type: "Recepter", recepterColor: "#0000FF", count: 99 },
                { type: "Mirror", count: 99 },
                { type: "Spliter", count: 99 },
                { type: "Filter", filterColor: "#FF0000", count: 99 },
                { type: "Filter", filterColor: "#00FF00", count: 99 },
                { type: "Filter", filterColor: "#0000FF", count: 99 },
                { type: "Decomposor", count: 99 }
            ], DEV);
        }
        else
        {
            grid = new Grid(level.size, level.tiles, DEV);
            shelf = new Shelf(level.shelf, DEV);
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