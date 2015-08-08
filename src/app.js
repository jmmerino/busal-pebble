var UI = require('ui'),
  ajax = require('ajax'),
  Vector2 = require('vector2'),
  splashView = require('views/splash'),
  linesMenu = require('views/lines_menu'),
  Event = require('lib/event');

  splashView.setEvent(Event);
  linesMenu.setEvent(Event);

  Event.on("lines-menu:select", function() {
    console.log("menu selected");
  });

  splashView.show();

/**
 * Ajax functions
 */

// Make request to busal.es
ajax(
  {
    url:'http://busal.es/api/v0.1/lines',
    type:'json'
  },
  function(data) {
    linesMenu.show(data);
    splashView.hide();
  },
  function(error) {
    console.log('Error cargando líneas: ' + error);
  }
);
