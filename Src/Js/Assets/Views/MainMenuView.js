function MainMenuView()
{
    var that = new View();

    var fadeOut = false;
    var i = 0;

    that.Start = function ()
    {
        setTimeout(function () { fadeOut = true; }, 2500);
        setTimeout(function () { Director.scene = new LevelSelectorView() }, 5000);
    }

    that.Update = function ()
    {
        var styleCap =
        {
            fillStyle: "#CCC",
            strokeStyle: "#CCC",
            font: "48pt Fury"
        }, styleLetter =
        {
            fillStyle: "#666",
            strokeStyle: "#666",
            font: "48pt Fury"
        }

        var X = 640 - ScreenCanvas.Context.measureText("Deus Hex Machina").width / 2;

        if (fadeOut) ScreenCanvas.Context.globalAlpha = 1 - (i++/150);

        UI.Label("D", X, 360, styleCap);
        UI.Label("eus", X + ScreenCanvas.Context.measureText("D").width, 360, styleLetter);
        UI.Label("H", X + ScreenCanvas.Context.measureText("Deus ").width, 360, styleCap);
        UI.Label("ex", X + ScreenCanvas.Context.measureText("Deus H").width, 360, styleLetter);
        UI.Label("M", X + ScreenCanvas.Context.measureText("Deus Hex ").width, 360, styleCap);
        UI.Label("achina", X + ScreenCanvas.Context.measureText("Deus Hex M").width, 360, styleLetter);

        if (fadeOut) ScreenCanvas.Context.globalAlpha = 1;
    }

    return that;
}