define([
	'app',
	'text!modules/users/show/templates/layout.html'
], function(App, LayoutTemplate){

	App.module('UsersApp.Show', function(Show, App, Backbone, Marionette, $, _){
	
		Show.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
		});

		

	});

	return App.UsersApp.Show;
});