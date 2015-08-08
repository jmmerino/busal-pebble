(function() {
    "use strict";

    var ajax = require("ajax"),
        controller = {};

    controller.setEvent = function(event) {
        controller.event = event;
    };  

    controller.getLines = function() {
        ajax({
            url:'http://busal.es/api/v0.1/lines',
            type:'json'
        }, 
        function(data) {
            controller.event.trigger("controller:lines-success", data);
        }, 
        function(error) {
            console.log('Error cargando líneas: ' + error);
        });
    };

    controller.getBusStops = function(directionItem) {        
        ajax({
            url:'http://busal.es/api/v0.1/stops?idl=' + directionItem.idl,
            type:'json'
        }, 
        function(data) {            
            if (parseInt(directionItem.direction) === 1) {
                controller.event.trigger("controller:bus-stops-success", data.direction1);
            } else {
                controller.event.trigger("controller:bus-stops-success", data.direction2);
            }   
        }, 
        function(error) {
            console.log('Error cargando líneas: ' + error);
        });                    
    };

    module.exports = controller;

})();