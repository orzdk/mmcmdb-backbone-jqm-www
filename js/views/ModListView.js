
define(['jquery',
        'underscore',
        'Backbone', 
        'collections/ModsCollection', 
], 
function ($,_,Backbone, ModsCollection) {
        
    var ModLineView = Backbone.View.extend({

        tagName: 'li',

        initialize: function() {
            this.template = _.template($('#_moditem').html());
        },

        render: function() {
            this.$el.html(this.template({item: this.model}));
            return this;
        }

    });

    var ModListView = Backbone.View.extend({

        events:{
           'click #btnBack':'btnBack_clickHandler'
        }, 

        template: _.template($('#_modlist').html()),

        render:function () {
            var that = this;
            this.$el.html(this.template);

            var mods = new ModsCollection();

            mods.fetch({ 
                success: function(collection) {
                    that.$('#modlistul').empty();
                    collection.sort();
                    collection.each(function(model) {
                        that.$('#modlistul').append(new ModLineView({ model: model.toJSON() }).render().el);
                    });
                }
            });

        },

        btnBack_clickHandler:function (event) {
            $.mobile.jqmNavigator.popView();
        }

    });

    return ModListView;
        
});