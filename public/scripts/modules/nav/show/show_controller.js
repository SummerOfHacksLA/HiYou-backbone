define([
	'app',
	'modules/nav/show/show_view',
], function(App, View){

	App.module('NavApp.Show', function(Show, App, Backbone, Marionette, $, _){
	
		Show.Controller = Marionette.Controller.extend({
			initialize: function(options){
				this.layout = this.getLayout();
		
				this.listenTo(this.layout, 'show', function(){
					if ( App.nav.get('back').length > 0 ) {
						this.backRegion();
					}
					if ( App.nav.get('add').length > 0 ) {
						this.addRegion();
					}
					if ( App.nav.get('middle').length > 0 ) {
						this.middleRegion();
					}
				});

				App.navRegion.show(this.layout);
			},
		
			getLayout: function(){
				return new View.Layout();
			},

			getBackView: function(href){
				return new View.Back();
			},

			getAddView: function(){
				return new View.Add();
			},

			getMiddleView: function(){
				return new View.Middle();
			},

			backRegion: function(href){
				this.backView = this.getBackView();
				this.layout.leftRegion.show(this.backView);

				this.backView.listenTo(this.backView, 'go:back', this.goBack);
			},

			middleRegion: function(){
				middleView = this.getMiddleView();
				this.layout.middleRegion.show(middleView);
			},

			addRegion: function(){
				var addView = this.getAddView();
				this.layout.rightRegion.show(addView);

				addView.listenTo(addView, 'go:add', this.goAdd);
			},

			goBack: function(){
				App.vent.trigger('load:'+App.nav.get('back'));
			},

			goAdd: function(){
				App.vent.trigger('add:'+App.nav.get('add'));
			},
		
			
		});

	});

	return App.NavApp.Show;
});