App.module('UsersApp.List', function(List, App, Backbone, Marionette, $, _){

	List.Controller = Marionette.Controller.extend({
		initialize: function(options){
			this.users = App.request('user:entities');

			this.layout = this.getLayout();
	
			this.listenTo(this.layout, 'show', function(){
				this.usersRegion();
			});
	
			App.mainRegion.show(this.layout);
		},
	
		getLayout: function(){
			return new View.Layout();
		},

		getUsersView: function(){
			return new View.Users({collection:this.users});
		},
	
		usersRegion: function(){
			var usersView = this.getUsersView();
			this.layout.usersRegion.show(usersView);

			usersView.listenTo(usersView, 'childview:load:details', function(iv){
				App.vent.trigger('load:users:show', {model:iv.model})
			});
		},
	});

});