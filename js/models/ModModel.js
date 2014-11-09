
define(['Backbone'], function(Backbone){

    var ModModel = Backbone.Model.extend({
        idAttribute: '_id',

        defaults: {
            _id: null,
            modname: "",
            modversion: "",
            author_url: "",
            forum_url: "",
            download_url: "",
            dependencies: "",
            modtype: "",
            lastchecked: "",
            modupdated: ""
        },

        validate: function(attrs) {
            if (attrs.modname === undefined) {
                return 'Remember to enter a title';
            }
        },

        url: 'http://orz.dk:5000/mcapi/mods'

    });

    return ModModel;

});