
(function() {
    "use strict";   

    var UI = require('ui'),
        directionMenu = {};

    directionMenu.setEvent = function(event) {
        this.event = event;
    };  

    directionMenu.show = function (data) {                        

        // Construct Menu to show to user
        directionMenu.view = new UI.Menu({
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
        directionMenu.view.on('select', directionMenu.onClickMenu);
        // Show the Menu
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