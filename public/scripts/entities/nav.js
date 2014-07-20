define(['app'], function(App){

	App.module('Entities', function(Entities, App, Backbone, Marionette, $, _){

		Entities.Nav = Backbone.Model.extend({

		});

		Entities.NavCollection = Backbone.Collection.extend({
			model: Entities.Nav
		});

		var API = {
			getNewNav: function(){
				return new Entities.Nav;
			},
		};

		App.reqres.setHandler('nav:entity', function(){
			return API.getNewNav();
		});

		App.reqres.setHandler('nav:entities', function(){
		});
	});

	return;
});