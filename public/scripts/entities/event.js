define(['app'], function(App){

	App.module('Entities', function(Entities, App, Backbone, Marionette, $, _){

		Entities.Event = Backbone.Model.extend({

		});

		Entities.EventCollection = Backbone.Collection.extend({
			model: Entities.Event
		});

		var API = {
			getNewEvent: function(){
				return new Entities.Event();	
			},
			getUserEvents: function(){
				var events = new Entities.EventCollection([
					{ name: '2013 Hackathon' },
					{ name: '2013 Hackathon' },
					{ name: '2013 Hackathon' },
				]);

				return events;
			},
		};

		App.reqres.setHandler('event:entity', function(){
		});

		App.reqres.setHandler('event:entity:new', function(){
			return API.getNewEvent();
		});

		App.reqres.setHandler('event:entities', function(){
		});

		App.reqres.setHandler('event:entities:user', function(){
			return API.getUserEvents();
		});
	});

	return;
});