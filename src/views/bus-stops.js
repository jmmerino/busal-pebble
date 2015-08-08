
(function() {
    "use strict";   

    var UI = require('ui'),
        busStops = {};

    busStops.setEvent = function(event) {
        this.event = event;
    };  

    busStops.show = function (data) {                        

        // Construct Menu to show to user
        busStops.view = new UI.Menu({
            sections: [{
                title: 'Paradas ' + data.idl,
                items: busStops.parseBusStopItems(data)
            }]
        });    
        
        // Show the Menu
        busStops.view.show();                
    };

    busStops.hide = function() {
        busStops.view.hide();     
    };

    busStops.parseBusStopItems = function(data) {        
        var items = [];
        for (var i = 0; i < data.length; i++) {        
            items.push({                
                title: data[ i ].name,
                subtitle: data[ i ].proxima
            });
        }
        return items;
    };

    module.exports = busStops;
})();