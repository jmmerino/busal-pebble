var UI = require('ui'),
  ajax = require('ajax'),
  Vector2 = require('vector2'),
  splashView = require('views/splash');

  splashView.show();

// /**
//  * Ajax functions
//  */

// // Make request to busal.es
// ajax(
//   {
//     url:'http://busal.es/api/v0.1/lines',
//     type:'json'
//   },
//   function(data) {
//     this.showLinesMenu(data);
//   },
//   function(error) {
//     console.log('Error cargando líneas: ' + error);
//   }
// );

// /**
//  * UI functions
//  */

// var showLinesMenu = function(data) {
//   var menuItems = parseLinesIntoMenuItems(data);

//     // Construct Menu to show to user
//     var resultsMenu = new UI.Menu({
//       sections: [{
//         title: 'Líneas',
//         items: menuItems
//       }]
//     });    

//     // Add an action for SELECT
//     resultsMenu.on('select', function(e) {
//       console.log('Item number ' + e.itemIndex + ' was pressed!');
//     });

//     // Show the Menu, hide the splash
//     resultsMenu.show();
//     splashWindow.hide();    
// };

// /**
//  * Parse functions
//  */
// var parseLinesIntoMenuItems = function(data) {
//   var items = [];
//   for (var i = 0; i < data.length; i++) {
//     // Add to menu items array
//     items.push({
//       title: data[ i ].name
//     });
//   }

//   return items;
// };