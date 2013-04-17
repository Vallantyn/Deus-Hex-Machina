﻿var Director = (new function ()
{
    currentScene = null;

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

            requestAnimationFrame(that.Update);
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