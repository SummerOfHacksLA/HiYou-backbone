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
				App.nav.set('back', 'events');
				App.nav.set('middle', 'filter');
				App.nav.set('add', 'users');

				App.vent.trigger('load:nav');

				require(['modules/users/list/list_controller'], function(){
					new UsersApp.List.Controller();
				});
			},
			showUser: function(id, options){
				App.nav.set('back', 'users');
				App.nav.set('middle', '');
				App.nav.set('add', '');

				App.vent.trigger('load:nav');

				var controllerOptions = options || {};
				controllerOptions.id = id;
				require(['modules/users/show/show_controller'], function(){
					new UsersApp.Show.Controller(controllerOptions);
				});
			},
		};

		App.vent.on('load:users', function(){
			Backbone.history.navigate('users');
			API.listUsers();
		});

		App.vent.on('load:users:show', function(options){
			Backbone.history.navigate('users/'+options.model.id);
			API.showUser(options.model.id, options);
		});

		App.vent.on('add:users', function(options){
			Backbone.history.navigate('users'+options.model.id);
			API.showUser(options.model.id, options);
		});
		
		App.addInitializer(function(){
			new UsersApp.Router({
				controller: API
			});
		});

	});

	return App.UsersApp;
});