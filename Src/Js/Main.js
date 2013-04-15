/*
Init Loop
*/
window.addEventListener
("load"
, function ()
{
    var canvas
      , context
      , WIDTH = 1280
      , HEIGHT = 720;

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    Start();
});
/*
End Init
*/

function Start(canvas, context)
{
    /// <summary>Start function</summary>
    /// <param name="canvas" type="HTMLCanvasElement">Canvas Element</param>
    /// <param name="context" type="CanvasRenderingContext2D">Canvas Rendering Context</param>
    /// <returns type="Void" />

    Update(canvas, context);
}

function Update(canvas, context)
{
    /// <summary>Update loop</summary>
    /// <param name="canvas" type="HTMLCanvasElement">Canvas Element</param>
    /// <param name="context" type="CanvasRenderingContext2D">Canvas Rendering Context</param>
    /// <returns type="Void" />

    /*
    
    DO YOUR STUFF HERE DOOD
    
    */

    requestAnimationFrame(function ()
    {
        Update(canvas, context);
    });

}

/*
Request Animation Frame
*/
(function ()
{
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x)
    {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelRequestAnimationFrame = window[vendors[x] +
          'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element)
        {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id)
        {
            clearTimeout(id);
        };
}());
/*
End RAF
*/