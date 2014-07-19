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
		},
	
		getLayout: function(){
			return new List.Layout();
		},

		getUserView: function(){
			return new List.User({model:this.user});
		},

		getNewView: function(){
			return new List.New({model:this.event});
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