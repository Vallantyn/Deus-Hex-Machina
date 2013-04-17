function MainMenuView()
{
    var that = new View();

    that.Update = function ()
    {
        ScreenCanvas.Context.clearRect(0, 0, 1280, 720);
        ScreenCanvas.Context.fillStyle = "#990000";
        ScreenCanvas.Context.fillRect(Input.x - 5, Input.y - 5, 10, 10);

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

        UI.Label("D", X, 360, styleCap);
        UI.Label("eus", X + ScreenCanvas.Context.measureText("D").width, 360, styleLetter);
        UI.Label("H", X + ScreenCanvas.Context.measureText("Deus ").width, 360, styleCap);
        UI.Label("ex", X + ScreenCanvas.Context.measureText("Deus H").width, 360, styleLetter);
        UI.Label("M", X + ScreenCanvas.Context.measureText("Deus Hex ").width, 360, styleCap);
        UI.Label("achina", X + ScreenCanvas.Context.measureText("Deus Hex M").width, 360, styleLetter);
    }

    return that;
}