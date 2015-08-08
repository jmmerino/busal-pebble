var UI = require('ui');
var ajax = require('ajax');
var Vector2 = require('vector2');

// Show splash screen while waiting for data
var splashWindow = new UI.Window();

// Text element to inform user
var text = new UI.Text({
  position: new Vector2(0, 20),
  size: new Vector2(144, 168),
  text:'Busal',
  font:'GOTHIC_28_BOLD',
  color:'black',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'white'
});

var subtitle = new UI.Text({
  position: new Vector2(0, 60),
  size: new Vector2(144, 168),
  text:'Cargando líneas...',
  font:'GOTHIC_20_BOLD',
  color:'black',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'white'
});

// Add to splashWindow and show
splashWindow.add(text);
splashWindow.add(subtitle);
splashWindow.show();
