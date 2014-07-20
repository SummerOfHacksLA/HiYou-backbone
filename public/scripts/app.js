define([
	'marionette',
], function(Marionette){

	var App = new Marionette.Application();

	App.addRegions({
		navRegion: '#nav-region',
		mainRegion: '#main-region',
		dialogRegion: '#dialog-region'
	});

	App.on("before:start", function(){
		require(['config/settings', 'entities/nav'], function(){
			App.nav = App.request('nav:entity');
		});
	});

	App.addInitializer(function(){
		require(['modules/nav/nav_app'], function(){
			App.module("NavApp").start();
		});
	});

	App.on("start", function(options){
		if (Backbone.history) {
			require([
				'modules/home/home_app',
				'modules/events/events_app',
				'modules/users/users_app',
				'entities/nav'
			], function(){
				Backbone.history.start();

				$(document).on('click', 'a:not([data-bypass])', function(e) {
					var href = $(this).attr('href');
					var protocol = this.protocol + '//';

					if (href.slice(protocol.length) !== protocol) {
						e.preventDefault();
						Backbone.history.navigate(href, true);
					}
				});
			});
		}
	});

	return App;
});