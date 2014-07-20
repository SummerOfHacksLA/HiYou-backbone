define([
	'app'
], function(App){

	App.module('NavApp', function(NavApp, App, Backbone, Marionette, $, _){
	
		this.startWithParent = false;
		
		var API = {
			showNav: function(options){
				require(['modules/nav/show/show_controller'], function(){
					new NavApp.Show.Controller(options);
				});
			}
		};

		App.vent.on('load:nav', function(options){
			App.navRegion.reset();
			API.showNav(options);
		});

		
		App.addInitializer(function(){
		});

	});

	return App.NavApp;
});