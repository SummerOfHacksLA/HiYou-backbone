define([
	'app',
	'modules/events/list/list_view'
], function(App, View){

	App.module('EventsApp.List', function(List, App, Backbone, Marionette, $, _){
	
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

	return App.EventsApp.List;
});