var Input =
{
    x: null,
    y: null,
    right: false,
    left: false,
    release: true,
    mode : "ACTION",

    Update: function()
    {
        if (Input.right) Input.right = false;
        if (Input.left) Input.left = false;
    },

    onMouseMove: function (event)
    {
        /// <summary>Mouse Move Event</summary>
        /// <param name="event" type="MouseEvent">Mouse Move Event</param>

        var bounds = ScreenCanvas.Canvas.getClientRects()[0];

        Input.x = (Math.max(Math.min(event.clientX - bounds.left, bounds.width), 0)) / bounds.width * ScreenCanvas.Canvas.width;
        Input.y = (Math.max(Math.min(event.clientY - bounds.top, bounds.height), 0)) / bounds.height * ScreenCanvas.Canvas.height;
    },

    onMouseDown: function(event)
    {
        /// <summary>Mouse Move Event</summary>
        /// <param name="event" type="MouseEvent">Mouse Move Event</param>
        
        event.preventDefault();

        Input.release = false;

        switch (event.button)
        {
            case 0:
                Input.left = true;
                break;
            case 2:
                Input.right = true;
                break;
        }

        return false;
    },

    additionCallback: function () { },
    callbackArgs: {},

    onMouseUp: function (event)
    {
        /// <summary>Mouse Move Event</summary>
        /// <param name="event" type="MouseEvent">Mouse Move Event</param>

        event.preventDefault();

        Input.release = true;

        switch (event.button)
        {
            case 0:
                Input.left = false;
                break;
            case 2:
                Input.right = false;
                break;
        }

        return false;
    },

    onCM: function (event)
    {
        event.preventDefault();
        return false;
    }
}

window.addEventListener("mousemove", Input.onMouseMove);
window.addEventListener("mousedown", Input.onMouseDown);
window.addEventListener("mouseup", Input.onMouseUp);
window.addEventListener("contextmenu", Input.onCM);