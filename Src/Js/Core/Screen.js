///<var>Static Class. Manage the Main canvas, the resize and click events on it.</var>
var ScreenCanvas =
{
    ///<field type="HTMLCanvasElement">Canvas Document Element.</field>
    Canvas: null,
    ///<field type="CanvasRenderingContext2D">Rendering Context.</field>
    Context: null,

    Init: function (config)
    {
        /// <summary>Init the Canvas with the config attributes.</summary>
        /// <param name="config" type="Event">Resize Event</param>

        var _config =
        {
            id: "canvas",
            width: 1280,
            height: 720
        }, canvas, context;

        if (!!config)
            for (var value in _config)
                if (!!config[value]) _config[value] = config[value];

        canvas = document.getElementById(_config.id);
        canvas.width = _config.width;
        canvas.height = _config.height;

        context = canvas.getContext("2d");

        this.Canvas = canvas;
        this.Context = context;

        this.onWindowResize(null);
    },

    Clear: function()
    {
        this.Context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
    },

    onWindowResize: function (event)
    {
        /// <summary>Triggered when the screen is resized.</summary>
        /// <param name="event" type="Event">Resize Event</param>

        var w = ScreenCanvas.Canvas.width
          , h = ScreenCanvas.Canvas.height
          , sw = window.innerWidth
          , sh = window.innerHeight;

        if (sw / w > sh / h)
        {
            ScreenCanvas.Canvas.style.width = sh / h * w + "px";
            ScreenCanvas.Canvas.style.height = String(sh + "px");
        }
        else
        {
            ScreenCanvas.Canvas.style.height = sw / w * h + "px";
            ScreenCanvas.Canvas.style.width = String(sw + "px");
        }

    }
    
}

window.addEventListener("resize", ScreenCanvas.onWindowResize);