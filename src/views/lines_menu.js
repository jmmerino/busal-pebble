
(function() {
    "use strict";   

    var UI = require('ui'),
        linesMenu = {};

    linesMenu.setEvent = function(event) {
        this.event = event;
    };  

    linesMenu.show = function (data) {                
        var menuItems = linesMenu.parseLinesIntoMenuItems(data);

        // Construct Menu to show to user
        linesMenu.view = new UI.Menu({
            sections: [{
                title: 'Líneas',
                items: menuItems
            }]
        });    

        // Add an action for SELECT
        linesMenu.view.on('select', linesMenu.onClickMenu);
        // Show the Menu
        linesMenu.view.show();                
    };

    linesMenu.hide = function() {
        linesMenu.view.hide();     
    };

    linesMenu.onClickMenu = function(e) {        
        linesMenu.event.trigger("lines-menu:select");
    };

    linesMenu.parseLinesIntoMenuItems = function(data) {
      var items = [];
      for (var i = 0; i < data.length; i++) {
        // Add to menu items array
        items.push({
          title: data[ i ].name
        });
      }

      return items;
    };

    module.exports = linesMenu;
})();