var UI = require('ui'),  
	Vector2 = require('vector2');

(function() {
	"use strict";	

	var busStopSplashView = {};

	busStopSplashView.setEvent = function(event) {
		busStopSplashView.event = event;
	};	

	busStopSplashView.show = function(data) {

		// Show splash screen while waiting for data
		busStopSplashView.view = new UI.Window();

		// Text element to inform user
		var text = new UI.Text({
			position: new Vector2(0, 0),
			size: new Vector2(144, 168),
			text: "Busal",
			font:'bitham-42-light',
			color:'black',
			textOverflow:'wrap',
			textAlign:'center',
			backgroundColor:'white'
		});

		var subtitle = new UI.Text({
			position: new Vector2(0, 100),
			size: new Vector2(144, 168),
			text:'Cargando paradas...',
			font:'gothic-14',
			color:'black',
			textOverflow:'wrap',
			textAlign:'center',
			backgroundColor:'white'
		});

		// Add to view and show
		busStopSplashView.view.add(text);
		busStopSplashView.view.add(subtitle);
		busStopSplashView.view.show();  
	
	};

	busStopSplashView.hide = function() {
		busStopSplashView.view.hide();  	
	};

	module.exports = busStopSplashView;
})();