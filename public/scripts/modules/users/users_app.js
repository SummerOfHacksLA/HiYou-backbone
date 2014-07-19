App.module('UsersApp', function(UsersApp, App, Backbone, Marionette, $, _){

	UsersApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			'users/:id': 'showUser',
			'users': 'listUsers',
		}
	});
	
	var API = {

		listUsers: function(){
			new UsersApp.List.Controller();
		},

		showUser: function(id, options){
			var controllerOptions = options || {};
			controllerOptions.id = id;

			new UsersApp.Show.Controller(controllerOptions);
		},
	};

	App.vent.on('load:users', function(){
		Backbone.history.navigate('users');
		API.listUsers();
	});

	App.vent.on('load:users:show', function(options){
		Backbone.history.navigate('users'+options.model.id);
		API.showUser(options.model.id, options);
	});
	
	App.addInitializer(function(){
		new UsersApp.Router({
			controller: API
		});
	});

});