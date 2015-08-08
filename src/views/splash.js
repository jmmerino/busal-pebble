(function() {
	"use strict";

	var splashView = {
		splashWindow: null
	};

	splashView.show = function showSplashView() {
		
		// Show splash screen while waiting for data
		splashView.splashWindow = new UI.Window();

		// Text element to inform user
		var text = new UI.Text({
			position: new Vector2(0, 0),
			size: new Vector2(144, 168),
			text:'Busal',
			font:'bitham-42-light',
			color:'black',
			textOverflow:'wrap',
			textAlign:'center',
			backgroundColor:'white'
		});

		var subtitle = new UI.Text({
			position: new Vector2(0, 100),
			size: new Vector2(144, 168),
			text:'Cargando líneas...',
			font:'gothic-14',
			color:'black',
			textOverflow:'wrap',
			textAlign:'center',
			backgroundColor:'white'
		});

		// Add to splashWindow and show
		splashView.splashWindow.add(text);
		splashView.splashWindow.add(subtitle);
		splashView.splashWindow.show();  
	
	};

	module.exports = splashView;
})();