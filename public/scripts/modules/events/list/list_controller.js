define([
	'app',
	'modules/events/list/list_view',
	'entities/user',
	'entities/event'
], function(App, View){

	App.module('EventsApp.List', function(List, App, Backbone, Marionette, $, _){
	
		List.Controller = Marionette.Controller.extend({
			initialize: function(options){
				this.user = App.request('user:entity');
				this.event = App.request('event:entitiy');
		
				this.layout = this.getLayout();
		
				this.listenTo(this.layout, 'show', function(){
					this.userRegion();
					this.newRegion();
				});
		
				App.mainRegion.show(this.layout);

				this.layout.listenTo(this.layout, 'load:home', function(){
					App.vent.trigger('load:home');
				});
			},
		
			getLayout: function(){
				return new View.Layout();
			},

			getUserView: function(){
				return new View.User({model:this.user});
			},

			getNewView: function(){
				return new View.New({model:this.event});
			},

			userRegion: function(){
				var userView = this.getUserView();
				this.layout.userRegion.show(userView);
			},

			newRegion: function(){
				var newView = this.getNewView();
				this.layout.newRegion.show(newView);

				newView.listenTo(newView, 'users:list', function(){
					App.vent.trigger('load:users');
				});
			},
		
			
		});

	});

	return App.EventsApp.List;
});