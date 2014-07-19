define([
	'app',
	'text!modules/users/list/templates/layout.html'
], function(App, LayoutTemplate){

	App.module('UsersApp.List', function(List, App, Backbone, Marionette, $, _){
	
		List.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
		});

	});

	return App.UsersApp.List;
});