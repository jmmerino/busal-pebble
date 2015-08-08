var splashView = require('views/splash'),
    linesMenu = require('views/lines_menu'),
    controller = require('lib/controller'),
    Event = require('lib/event');

splashView.setEvent(Event);
linesMenu.setEvent(Event);
controller.setEvent(Event);

Event.on("lines-menu:select", function() {
    console.log("menu selected");
});

Event.on("controller:lines-success", function(data) {
    linesMenu.show(data);
    splashView.hide();
});

splashView.show();
controller.getLines();

/**
 * Ajax functions
 */

// Make request to busal.es
