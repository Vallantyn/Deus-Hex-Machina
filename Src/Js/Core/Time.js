var Time = (new function ()
{
    var deltaTime = null
      , fixedDeltaTime = null
      , time = null
      , that =
      {
          Start: function()
          {
              time = new Date().getTime();
              deltaTime = fixedDeltaTime = 0;
          },

          Update: function ()
          {
              var _time = new Date().getTime();   // Get the current Date, in ms.
              var dt = _time - time;                   // Update deltaTime

              deltaTime = dt;

              time = _time;
          },

          get deltaTime()
          {
              return deltaTime;
          },
          
          get fixedDeltaTime()
          {
              return fixedDeltaTime;
          }
      };



}());