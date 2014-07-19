define([
	'app',
	'modules/users/show/show_view',
	'entities/user'
], function(App, View){

	App.module('UsersApp.Show', function(Show, App, Backbone, Marionette, $, _){
	
		Show.Controller = Marionette.Controller.extend({
			initialize: function(options){
				console.log(options)
				this.user = options.model || App.request('user:entity');
		
				this.layout = this.getLayout();
		
				this.listenTo(this.layout, 'show', function(){
		
				});
		
				App.mainRegion.show(this.layout);
			},
		
			getLayout: function(){
				return new View.Layout({model:this.user});
			},
		
			
		});

	});

	return App.UsersApp.Show;
});