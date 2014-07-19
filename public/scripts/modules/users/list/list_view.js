define([
	'app',
	'text!modules/users/list/templates/layout.html',
	'text!modules/users/list/templates/user.html',
], function(App, LayoutTemplate, UserTemplate){

	App.module('UsersApp.List', function(List, App, Backbone, Marionette, $, _){
	
		List.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
			regions: {
				usersRegion: '#users-region'
			}
		});

		List.User = Marionette.ItemView.extend({
			template: UserTemplate,
			triggers: {
				'click': 'load:details'
			}
		});

		List.Users = Marionette.CollectionView.extend({	
			childView: List.User,
		});

	});

	return App.UsersApp.List;
});