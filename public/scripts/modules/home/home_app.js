define([
	'app'
], function(App){

	App.module('HomeApp', function(HomeApp, App, Backbone, Marionette, $, _){
	
		HomeApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				'': 'showHome',
				'home': 'showHome'
			}
		});
		
		var API = {
			showHome: function(){
				App.nav.set('back', '');
				App.nav.set('middle', '');
				App.nav.set('add', '');

				App.vent.trigger('load:nav');

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