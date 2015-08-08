var splashView = require('views/splash'),
    linesView = require('views/lines'),
    directionView = require('views/direction'),
    controller = require('lib/controller'),    
    Event = require('lib/event');

splashView.setEvent(Event);
linesView.setEvent(Event);
directionView.setEvent(Event);

controller.setEvent(Event);

Event.on("lines-menu:select", function(e) {
    directionView.show(e.item);
    // linesView.hide();
});

Event.on("controller:lines-success", function(data) {
    linesView.show(data);
    // splashView.hide();
});

splashView.show();
controller.getLines();

/**
 * Ajax functions
 */

// Make request to busal.es
