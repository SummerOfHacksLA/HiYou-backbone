define([
	'app',
	'modules/nav/show/show_view'
], function(App, View){

	App.module('NavApp.Show', function(Show, App, Backbone, Marionette, $, _){
	
		Show.Controller = Marionette.Controller.extend({
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

	return App.NavApp.Show;
});