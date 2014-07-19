define([
	'app',
	'text!modules/home/show/templates/layout.html',
	'text!modules/home/show/templates/user.html',
	'text!modules/home/show/templates/event.html',

], function(App, LayoutTemplate, UserTemplate, EventTemplate){

	App.module('HomeApp.Show', function(Show, App, Backbone, Marionette, $, _){
	
		Show.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
			regions: {
				userRegion: '#user-region',
				eventsRegion: '#events-region'
			}
		});

		Show.User = Marionette.ItemView.extend({
			template: UserTemplate,
		});

		Show.Event = Marionette.ItemView.extend({
			template: EventTemplate,
		});

		Show.Events = Marionette.CollectionView.extend({	
			childView: Show.Event,
		});

	});

	return App.HomeApp.Show;
});