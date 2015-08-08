var UI = require('ui');
var ajax = require('ajax');
var Vector2 = require('vector2');

// Show splash screen while waiting for data
var splashWindow = new UI.Window();

// Text element to inform user
var text = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  text:'Busal',
  font:'bitham-42-light',
  color:'black',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'white'
});

var subtitle = new UI.Text({
  position: new Vector2(0, 100),
  size: new Vector2(144, 168),
  text:'Cargando líneas...',
  font:'gothic-14',
  color:'black',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'white'
});

// Add to splashWindow and show
splashWindow.add(text);
splashWindow.add(subtitle);
splashWindow.show();  

// Make request to busal.es
ajax(
  {
    url:'http://busal.es/api/v0.1/lines',
    type:'json'
  },
  function(data) {
    console.log(data);
  },
  function(error) {
    console.log('Download failed: ' + error);
  }
);
