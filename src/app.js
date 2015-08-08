var UI = require('ui'),
  ajax = require('ajax'),
  Vector2 = require('vector2'),
  splashView = require('views/splash'),
  linesMenu = require('views/lines_menu');

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
