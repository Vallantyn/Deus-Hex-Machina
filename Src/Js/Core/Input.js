var Input =
{
    x: null,
    y: null,

    onMouseMove: function (event)
    {
        /// <summary>Mouse Move Event</summary>
        /// <param name="event" type="MouseEvent">Mouse Move Event</param>

        var bounds = ScreenCanvas.Canvas.getClientRects()[0];

        Input.x = (Math.max(Math.min(event.clientX - bounds.left, bounds.width), 0)) / bounds.width * ScreenCanvas.Canvas.width;
        Input.y = (Math.max(Math.min(event.clientY - bounds.top, bounds.height), 0)) / bounds.height * ScreenCanvas.Canvas.height;
    }
}

window.addEventListener("mousemove", Input.onMouseMove)