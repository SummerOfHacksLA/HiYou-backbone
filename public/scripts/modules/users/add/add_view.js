define([
	'app',
	'text!modules/users/add/templates/layout.html'
], function(App, LayoutTemplate){

	App.module('UsersApp.Add', function(Add, App, Backbone, Marionette, $, _){
	
		Add.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
			ui: {
				firstName: 'input#firstName',
				lastName: 'input#lastName',
				title: 'input#title',
				company: 'input#company',
				textarea: 'textarea'
			},
			triggers: {
				'click button': 'save:user'
			}
		});

	});

	return App.UsersApp.Add;
});