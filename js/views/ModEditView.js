
define(['jquery',
		'underscore', 
        'Backbone', 
        'models/ModModel', 
		'views/ModListView', 
],
function ($,_, Backbone, ModModel, ModListView) {

    var ModEditView = Backbone.View.extend({

        events:{
            'click #cancelNew':'btnBack_clickHandler',
            'click #btnBack':'btnBack_clickHandler',
            'click #saveNew':'btnSaveNew_clickHandler',
            'click #btnSaveMini':'btnSaveNew_clickHandler'
        },

        initialize: function(){
            this.model = new ModModel(); 
        },

        saveMod: function () {
            var self = this;
            this.model.set( {modname: this.$('#addedit-modname').val()} );
			this.model.set( {modversion: this.$('#addedit-modversion').val()} );
			this.model.set( {author_url: this.$('#addedit-author_url').val()} );
			this.model.set( {forum_url: this.$('#addedit-forum_url').val()} );
			this.model.set( {download_url: this.$('#addedit-download_url').val()} );
			this.model.set( {dependencies: this.$('#addedit-dependencies').val()} );
			this.model.set( {modtype: this.$('#addedit-modtype').val()} );
			this.model.set( {lastchecked: this.$('#addedit-lastchecked').val()} );
			this.model.set( {modupdated: this.$('#addedit-modupdated').val()} );
			
			var postdatastring = JSON.stringify(this.model.toJSON());
						
            $.ajax({
                url: 'http://orz.dk:5000/mcapi/mods',			
                type: 'POST',
				dataType: "text",
				crossDomain: true,
				headers: {fubarhack:postdatastring},
                success: function(data){
                    $.mobile.jqmNavigator.pushView(new ModListView); // a new one ???!
                },
                error: function(){
                    alert('There was an error adding the mod');
                }
            });

			},

        render:function () {
            var compiledTemplate = _.template($('#_modedit').html());
            this.$el.html(compiledTemplate);
            return this;
        },

        btnBack_clickHandler: function (event) {
            $.mobile.jqmNavigator.popView();
        },

        btnSaveNew_clickHandler: function (event) {
           this.saveMod();

        }

    });

    return ModEditView;

});