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
				firstName: 'Adam',
				lastName: 'Sandler',
				photo: 'http://thedukesplayground.files.wordpress.com/2012/02/adam_sandler.jpg',
				title: 'iOS developer',
				industry: 'Start up',
				company: 'Facebook',
				comment: 'wouldn\'t stop talking'
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
					comment: 'wouldn\'t stop talking'
				},
				{
					id: '2',
					firstName: 'Adam',
					lastName: 'Sandler',
					photo: 'http://thedukesplayground.files.wordpress.com/2012/02/adam_sandler.jpg',
					title: 'iOS developer',
					industry: 'Start up',
					company: 'Facebook',
					comment: 'wouldn\'t stop talking'
				},
				{
					id: '3',
					firstName: 'Adam',
					lastName: 'Sandler',
					photo: 'http://thedukesplayground.files.wordpress.com/2012/02/adam_sandler.jpg',
					title: 'iOS developer',
					industry: 'Start up',
					company: 'Facebook',
					comment: 'wouldn\'t stop talking'
				},
				{
					id: '4',
					firstName: 'Adam',
					lastName: 'Sandler',
					photo: 'http://thedukesplayground.files.wordpress.com/2012/02/adam_sandler.jpg',
					title: 'iOS developer',
					industry: 'Start up',
					company: 'Facebook',
					comment: 'wouldn\'t stop talking'
				},
				{
					id: '5',
					firstName: 'Adam',
					lastName: 'Sandler',
					photo: 'http://thedukesplayground.files.wordpress.com/2012/02/adam_sandler.jpg',
					title: 'iOS developer',
					industry: 'Start up',
					company: 'Facebook',
					comment: 'wouldn\'t stop talking'
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

	App.reqres.setHandler('user:entities', function(){
		return API.getUsersFromEvent();
	});
});