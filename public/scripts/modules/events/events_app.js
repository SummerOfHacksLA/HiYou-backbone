define([
	'app'
], function(App){

	App.module('EventsApp', function(EventsApp, App, Backbone, Marionette, $, _){
	
		EventsApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"events": "listEvents"
			}
		});
		
		var API = {
			listEvents: function(){
				App.nav.set('back', 'home');
				App.nav.set('middle', '');
				App.nav.set('add', '');

				App.vent.trigger('load:nav');

				require(['modules/events/list/list_controller'], function(){
					new EventsApp.List.Controller();
				});
			}
		};

		App.vent.on('load:events', function(){
			Backbone.history.navigate('events');
			API.listEvents();
		});
		
		App.addInitializer(function(){
			new EventsApp.Router({
				controller: API
			});
		});

	});

	return App.EventsApp;
});