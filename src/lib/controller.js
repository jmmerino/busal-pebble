(function() {
	"use strict";

	Controller = {};

	Controller.getLines = function() {
		ajax({
	        url:'http://busal.es/api/v0.1/lines',
	        type:'json'
		    }, function(data) {
		        Controller.event.trigger("controller:lines-success", data);
		    }, function(error) {
		        console.log('Error cargando líneas: ' + error);
		    }
		);
	};

})();