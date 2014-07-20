define([
	'app'
], function(App){

	App.module('HomeApp', function(HomeApp, App, Backbone, Marionette, $, _){
	
		HomeApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"home": "showHome"
			}
		});
		
		var API = {
			showHome: function(){
				require(['modules/home/show/show_controller'], function(){
					new HomeApp.Show.Controller();
				});
			}
		};

		App.vent.on('load:home', function(){
			Backbone.history.navigate('home');
			API.showHome();
		});
		
		App.addInitializer(function(){
			new HomeApp.Router({
				controller: API
			});
		});

	});

	return App.HomeApp;
});