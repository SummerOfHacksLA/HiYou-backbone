require.config({
	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
		underscore: '../bower_components/lodash/dist/lodash',
		backbone: '../bower_components/backbone/backbone',
		marionette: '../bower_components/marionette/lib/backbone.marionette',
		text: '../bower_components/text/text',
		hammerjs: '../bower_components/hammerjs/hammer',
		'jquery.hammer': '../bower_components/hammerjs/jquery.hammer',
		'backbone.hammer': '../bower_components/backbone.hammer/backbone.hammer',
	},
	shim: {
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		marionette: {
			deps: ['backbone','backbone.hammer'],
			exports: 'Marionette'
		},
		'jquery.hammer': ['hammerjs', 'jquery'],
		'backbone.hammer': ['jquery.hammer'],
	}
});

require(['app'], function(App){
	App.start();
});