var UI = require('ui');

(function() {
    "use strict";   

    var linesMenu = {
        view: null
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
        console.log("blah");
    };

    module.exports = linesMenu;
})();