var Picking = (new function ()
{
    this.PointCircle = function (xp, yp, xc, yc, size)
    {
        var X = xp - xc;
        var Y = yp - yc;

        return Math.sqrt(X * X + Y * Y) < size
    }
}());