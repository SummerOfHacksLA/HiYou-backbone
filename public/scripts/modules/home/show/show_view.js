define([
	'app',
	'text!modules/home/show/templates/layout.html'
], function(App, LayoutTemplate){

	App.module('HomeApp.Show', function(Show, App, Backbone, Marionette, $, _){
	
		Show.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
		});

	});

	return App.HomeApp.Show;
});