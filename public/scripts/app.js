define([
	'marionette',
], function(Marionette){

	var App = new Marionette.Application();

	App.addRegions({
		mainRegion: '#main-region'
	});

	App.on("before:start", function(){
		require(['config/settings']);
	});

	App.addInitializer(function(){
	});

	App.on("start", function(options){
		if (Backbone.history) {
			require([
				'modules/home/home_app',
				'modules/events/events_app',
				'modules/users/users_app'
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