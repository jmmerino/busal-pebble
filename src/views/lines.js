
(function() {
    "use strict";   

    var UI = require('ui'),
        linesMenu = {};

    linesMenu.setEvent = function(event) {
        this.event = event;
    };  

    linesMenu.show = function (data) {                
        var menuItems = linesMenu.parseLinesIntoMenuItems(data),
            menu;

        linesMenu.view = new UI.Window();
        // Construct Menu to show to user
        menu = new UI.Menu({
            sections: [{
                title: 'Líneas',
                items: menuItems
            }]
        });    

        // Add an action for SELECT
        menu.on('select', linesMenu.onClickMenu);
        linesMenu.view.add(menu);
        // Show the Menu
        linesMenu.view.show();                
    };

    linesMenu.hide = function() {
        linesMenu.view.hide();     
    };

    linesMenu.onClickMenu = function(e) {        
        linesMenu.event.trigger("lines-menu:select", e);
    };

    linesMenu.parseLinesIntoMenuItems = function(data) {
      var items = [];
      for (var i = 0; i < data.length; i++) {        
        items.push({
            lineNum: data[ i ].num,
            title: data[ i ].name,
            direction1: data[ i ].direccion1,
            direction2: data[ i ].direccion2
        });
      }

      return items;
    };

    module.exports = linesMenu;
})();