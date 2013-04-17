/*
Init Loop
*/

var view;

window.addEventListener
("load"
, function ()
{
    var screenConfig =
        {
            id: "canvas",
            width: 1280,
            height: 720
        }

    view = new MainMenuView();

    ScreenCanvas.Init(screenConfig);

    Start();
});
/*
End Init
*/

function Start()
{
    view.Start();
    Update();
}

function Update()
{
    view.Update();
    requestAnimationFrame(Update);
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