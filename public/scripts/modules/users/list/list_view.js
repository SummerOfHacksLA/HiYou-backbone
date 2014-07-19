App.module('UsersApp.List', function(List, App, Backbone, Marionette, $, _){

	List.Layout = Marionette.LayoutView.extend({
		template: '#users-list-layout',
		regions: {
			usersRegion: '#users-region'
		}
	});

	List.User = Marionette.ItemView.extend({
		template: '#users-list-user',
		triggers: {
			'click': 'load:details'
		}
	});

	List.Users = Marionette.CollectionView.extend({	
		childView: List.User,
	});

});