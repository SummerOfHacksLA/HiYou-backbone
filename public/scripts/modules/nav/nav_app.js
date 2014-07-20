define([
	'app'
], function(App){

	App.module('NavApp', function(NavApp, App, Backbone, Marionette, $, _){
	
		this.startWithParent = false;
		
		var API = {
			showNav: function(options){
				require(['modules/nav/show/show_controller'], function(){
					new NavApp.Show.Controller();
				});
			}
		};
		
		App.addInitializer(function(){
			API.showNav();
		});

	});

	return App.NavApp;
});