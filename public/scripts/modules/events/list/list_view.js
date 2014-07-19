App.module('EventsApp.List', function(List, App, Backbone, Marionette, $, _){

	List.Layout = Marionette.LayoutView.extend({
		template: '#events-list-layout',
		regions: {
			userRegion: '#user-region',
			newRegion: '#new-region'
		}
	});

	List.User = Marionette.ItemView.extend({
		template: '#events-list-user',
	});

	List.New = Marionette.ItemView.extend({
		template: '#events-list-new',
		triggers: {
			'click [data-participants]': 'users:list'
		}
	});

});