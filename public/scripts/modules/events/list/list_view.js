define([
	'app',
	'text!modules/events/list/templates/layout.html',
	'text!modules/events/list/templates/user.html',
	'text!modules/events/list/templates/new.html',
	'text!modules/events/list/templates/event.html',
], function(App, LayoutTemplate, UserTemplate, NewTemplate, EventTemplate){

	App.module('EventsApp.List', function(List, App, Backbone, Marionette, $, _){
	
		List.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
			regions: {
				userRegion: '#user-region',
				newRegion: '#new-region'
			},
			triggers: {
				'click [data-back]': 'load:home',
				'click [data-event]': 'open:event',
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

		List.Event = Marionette.ItemView.extend({
			template: EventTemplate,
			triggers: {
				'click .bg': 'close:dialog'
			}
		});

	});

	return App.EventsApp.List;
});