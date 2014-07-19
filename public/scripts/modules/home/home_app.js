App.module('HomeApp', function(HomeApp, App, Backbone, Marionette, $, _){

	HomeApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"home": "showHome"
		}
	});
	
	var API = {
		showHome: function(){
			new HomeApp.Show.Controller();
		}
	};
	
	App.addInitializer(function(){
		new HomeApp.Router({
			controller: API
		});
	});

});