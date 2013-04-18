var Director = (new function ()
{
    var currentScene = null;
    var tick = null;

    var that =
    {
        Start: function ()
        {
            !!currentScene && currentScene.Start();

            that.Update();
        },

        Update: function ()
        {
            ScreenCanvas.Clear();

            !!currentScene && currentScene.Update();

            Input.Update();

            tick = requestAnimationFrame(that.Update);
        },

        changeScene: function(scn)
        {
            currentScene = scn;
            cancelAnimationFrame(tick);
            that.Start();
        },

        get scene()
        {
            return currentScene;
        },

        set scene(scn)
        {
            currentScene = scn;
        }
    }

    return that;
}());