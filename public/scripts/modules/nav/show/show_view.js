define([
	'app',
	'text!modules/nav/show/templates/layout.html'
], function(App, LayoutTemplate){

	App.module('NavApp.Show', function(Show, App, Backbone, Marionette, $, _){
	
		Show.Layout = Marionette.LayoutView.extend({
			template: LayoutTemplate,
			regions: {
				leftRegion: '#left-region',
				middleRegion: '#middle-region',
				rightRegion: '#right-region',
			}
		});

		Show.Back = Marionette.ItemView.extend({
			template: _.template('<img data-back src="images/back.png">'),
			triggers: {
				'click': 'go:back'
			}
		});

		Show.Add = Marionette.ItemView.extend({
			template: _.template('<img src="images/add.png">'),
			triggers: {
				'click': 'go:add'
			}
		});

		Show.Middle = Marionette.ItemView.extend({
			template: _.template('<a href="#" style="padding: 4px 8px; font-size: 0.8em; color: white; background-color:#25727f;">SIMILARITY</a><a href="#" style="padding: 4px 8px; font-size: 0.8em; color: white;">NAME</a>')
		});

	});

	return App.NavApp.Show;
});