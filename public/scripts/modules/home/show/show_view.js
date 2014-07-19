App.module('HomeApp.Show', function(Show, App, Backbone, Marionette, $, _){

	Show.Layout = Marionette.LayoutView.extend({
		template: '#home-list-layout',
		regions: {
			userRegion: '#user-region',
			eventsRegion: '#events-region'
		}
	});

	Show.User = Marionette.ItemView.extend({
		template: '#home-list-user',
	});

	Show.Event = Marionette.ItemView.extend({
		template: '#home-list-event',
	});

	Show.Events = Marionette.CollectionView.extend({	
		childView: Show.Event,
	});

});