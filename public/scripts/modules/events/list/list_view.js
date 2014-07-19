define([
	'app',
	'text!modules/events/list/templates/layout.html',
	'text!modules/events/list/templates/user.html',
	'text!modules/events/list/templates/new.html',
], function(App, LayoutTemplate, UserTemplate, NewTemplate){

	App.module('EventsApp.List', function(List, App, Backbone, Marionette, $, _){
	
		List.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
			regions: {
				userRegion: '#user-region',
				newRegion: '#new-region'
			}
		});

		List.User = Marionette.ItemView.extend({
			template: UserTemplate,
		});

		List.New = Marionette.ItemView.extend({
			template: NewTemplate,
			triggers: {
				'click [data-participants]': 'users:list'
			}
		});

	});

	return App.EventsApp.List;
});