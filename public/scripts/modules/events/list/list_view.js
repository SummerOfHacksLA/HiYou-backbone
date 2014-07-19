define([
	'app',
	'text!modules/events/list/templates/layout.html'
], function(App, LayoutTemplate){

	App.module('EventsApp.List', function(List, App, Backbone, Marionette, $, _){
	
		List.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
		});

	});

	return App.EventsApp.List;
});