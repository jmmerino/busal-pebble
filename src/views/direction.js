
(function() {
    "use strict";   

    var UI = require('ui'),
        directionMenu = {};

    directionMenu.setEvent = function(event) {
        this.event = event;
    };  

    directionMenu.show = function (data) {
        var menu;

        directionMenu.view = new UI.Window();                        

        // Construct Menu to show to user
        menu = new UI.Menu({
            sections: [{
                title: data.lineNum + ': Dirección',
                items: [{
                    title: data.direction1
                },{
                    title: data.direction2
                }]
            }]
        });    

        // Add an action for SELECT
        menu.on('select', directionMenu.onClickMenu);

        // Show the Menu
        directionMenu.view.add(menu);        
        directionMenu.view.show();                
    };

    directionMenu.hide = function() {
        directionMenu.view.hide();     
    };

    directionMenu.onClickMenu = function(e) {        
        directionMenu.event.trigger("direction-menu:select", e);
    };

    module.exports = directionMenu;
})();