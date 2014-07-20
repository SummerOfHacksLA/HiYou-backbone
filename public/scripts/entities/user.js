define(['app'], function(App){

	App.module('Entities', function(Entities, App, Backbone, Marionette, $, _){

		Entities.User = Backbone.Model.extend({

		});

		Entities.UserCollection = Backbone.Collection.extend({
			model: Entities.User
		});

		var API = {
			getUser: function(){
				var user = new Entities.User({
					id: '1',
					firstName: 'PA',
					lastName: 'LAVA',
					photo: 'images/pa-lava.jpg',
					title: 'JS developer',
					industry: 'Start up',
					company: 'Perfect You',
					comment: 'has 723 pokemon, likes long walks on the beach'
				});

				return user;
			},

			getNewUser: function(){
				return new Entities.User();
			},

			getUsersFromEvent: function(){
				var users = new Entities.UserCollection([
					{
						id: '1',
						firstName: 'Adam',
						lastName: 'Sandler',
						photo: 'http://thedukesplayground.files.wordpress.com/2012/02/adam_sandler.jpg',
						title: 'iOS developer',
						industry: 'Start up',
						company: 'Facebook',
						comment: 'funny guy, likes golf'
					},
					{
						id: '2',
						firstName: 'Peter',
						lastName: 'Pen',
						photo: 'images/peter-pan.jpg',
						title: 'Android developer',
						industry: 'Start up',
						company: 'Google',
						comment: 'likes to get high, young'
					},
					{
						id: '3',
						firstName: 'James',
						lastName: 'Ken',
						photo: 'images/Ken-James.jpg',
						title: 'mobile developer',
						industry: 'Start up',
						company: 'Microsoft',
						comment: 'wouldn\'t stop talking about startups'
					},
					{
						id: '4',
						firstName: 'Eric',
						lastName: 'Kim',
						photo: 'images/eric-kim.jpeg',
						title: 'Software developer',
						industry: 'Start up',
						company: 'Quora',
						comment: 'likes asian food, photography hobby'
					},
					{
						id: '5',
						firstName: 'Jerry',
						lastName: 'Wang',
						photo: 'images/Jerry-wang.jpg',
						title: 'Sales',
						industry: 'Start up',
						company: 'RenRen',
						comment: 'good at sales, goes to vegas'
					},
				]);

				return users;
			},
		};

		App.reqres.setHandler('user:entity', function(){
			return API.getUser();
		});

		App.reqres.setHandler('user:entity:new', function(){
			return API.getNewUser();
		});

		App.reqres.setHandler('user:entity:new', function(){
			return API.getNewUser();
		});

		App.reqres.setHandler('user:entities', function(){
			return API.getUsersFromEvent();
		});
	});

	return;
});