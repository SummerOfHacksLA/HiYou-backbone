define([
	'app'
], function(App){

	App.module('UsersApp', function(UsersApp, App, Backbone, Marionette, $, _){
	
		UsersApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				'users/:id': 'showUser',
				'users': 'listUsers',
			}
		});
		
		var API = {
			listUsers: function(){
				require(['modules/users/list/list_controller'], function(){
					new UsersApp.List.Controller();
				});
			},
			showUser: function(id){
				console.log(id)
				require(['modules/users/show/show_controller'], function(){
					new UsersApp.Show.Controller();
				});
			},
		};
		
		App.addInitializer(function(){
			new UsersApp.Router({
				controller: API
			});
		});

	});

	return App.UsersApp;
});