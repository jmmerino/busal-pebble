var splashView = require('views/splash'),
    linesView = require('views/lines'),
    directionView = require('views/direction'),
    busStopsView = require('views/bus-stops'),
    busStopsSplashView = require('views/bus-stops-splash'),
    controller = require('lib/controller'),    
    Event = require('lib/event');

splashView.setEvent(Event);
linesView.setEvent(Event);
directionView.setEvent(Event);
busStopsSplashView.setEvent(Event);
busStopsView.setEvent(Event);

controller.setEvent(Event);

Event.on("lines-menu:select", function(e) {
    directionView.show(e.item);    
});

Event.on("direction-menu:select", function(e) {
    busStopsSplashView.show();    
    controller.getBusStops(e.item);
});

Event.on("controller:lines-success", function(data) {
    linesView.show(data);
    splashView.hide();
});

Event.on("controller:bus-stops-success", function(data) {    
    busStopsView.show(data);
    busStopsSplashView.hide();
});

splashView.show();
controller.getLines();

/**
 * Ajax functions
 */

// Make request to busal.es
