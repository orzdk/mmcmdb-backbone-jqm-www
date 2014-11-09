
define(['jquery', 
        'underscore', 
        'Backbone', 
        'views/ModListView', 
        'views/ModEditView'
],  
function ($, _, Backbone, ModListView, ModEditView) {
        
    var HomeView = Backbone.View.extend({

        events:{
            'click #btnModList':'btnModList_clickHandler',
            'click #btnNewMod' : 'btnModEdit_clickHandler'
        },

        render:function () {
            this.$el.html(_.template($("#_home").html()));
            return this;
        },

        btnModList_clickHandler:function (event) {
            $.mobile.jqmNavigator.pushView(new ModListView);
        },

        btnModEdit_clickHandler:function (event) {
            $.mobile.jqmNavigator.pushView(new ModEditView);
        }

    });

    return HomeView;
});