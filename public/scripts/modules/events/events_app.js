App.module('EventsApp', function(EventsApp, App, Backbone, Marionette, $, _){

	EventsApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"events": "listEvents"
		}
	});

	var API = {
		listEvents: function(){
			new EventsApp.List.Controller();
		}
	};

	App.addInitializer(function(){
		new EventsApp.Router({
			controller: API
		});
	});

});