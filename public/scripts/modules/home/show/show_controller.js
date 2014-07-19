App.module('HomeApp.Show', function(Show, App, Backbone, Marionette, $, _){

	Show.Controller = Marionette.Controller.extend({
		initialize: function(options){
			this.user = App.request('user:entity');
			this.events = App.request('event:entities:user')
	
			this.layout = this.getLayout();
	
			this.listenTo(this.layout, 'show', function(){
				this.userRegion();
				this.eventsRegion();
			});
	
			App.mainRegion.show(this.layout);
		},

		getLayout: function(){
			return new Show.Layout();
		},

		getUserView: function(){
			return new Show.User({model:this.user})
		},

		getEventsView: function(){
			return new Show.Events({collection:this.events})
		},

		userRegion: function(){
			var userView = this.getUserView();
			this.layout.userRegion.show(userView);
		},

		eventsRegion: function(){
			var eventsView = this.getEventsView();
			this.layout.eventsRegion.show(eventsView);
		},
	
		
	});

});