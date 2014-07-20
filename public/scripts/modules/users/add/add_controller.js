define([
	'app',
	'modules/users/add/add_view',
], function(App, View){

	App.module('UsersApp.Add', function(Add, App, Backbone, Marionette, $, _){
	
		Add.Controller = Marionette.Controller.extend({
			initialize: function(){
				this.newUser = App.request('user:entity:new');
				
				this.layout = this.getLayout();
				
				this.listenTo(this.layout, 'show', function(){
				
				});
				
				App.mainRegion.show(this.layout);

				this.layout.listenTo(this.layout, 'save:user', this.saveUser);
			},
		
			getLayout: function(){
				return new View.Layout();
			},

			saveUser: function(){
				// var content = {
				// 	firstName: this.layout.ui.firstName.val(),
				// 	lastName: this.layout.ui.lastName.val(),
				// 	title: this.layout.ui.title.val(),
				// 	company: this.layout.ui.textarea.val(),
				// 	comment: this.layout.ui.textarea.val(),
				// }

				// this.newUser.set(content);

				App.vent.trigger('load:users', {newModel:this.newUser});
			},
		
			
		});

	});

	return App.UsersApp.Add;
});