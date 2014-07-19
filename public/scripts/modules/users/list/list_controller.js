define([
	'app',
	'modules/users/list/list_view'
], function(App, View){

	App.module('UsersApp.List', function(List, App, Backbone, Marionette, $, _){
	
		List.Controller = Marionette.Controller.extend({
			initialize: function(options){

				this.layout = this.getLayout();
		
				this.listenTo(this.layout, 'show', function(){
		
				});
		
				App.mainRegion.show(this.layout);
			},
		
			getLayout: function(){
				return new View.Layout();
			},
		
			
		});

	});

	return App.UsersApp.List;
});