App.module('UsersApp.Show', function(Show, App, Backbone, Marionette, $, _){

	Show.Controller = Marionette.Controller.extend({
		initialize: function(options){
			this.user = options.model || App.request('user:entity');
	
			this.layout = this.getLayout();
	
			this.listenTo(this.layout, 'show', function(){
	
			});
	
			App.mainRegion.show(this.layout);
		},
	
		getLayout: function(){
			return new Show.Layout({model:this.user});
		},
	
		
	});

});