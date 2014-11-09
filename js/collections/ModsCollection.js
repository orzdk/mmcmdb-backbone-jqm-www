
define(['Backbone','models/ModModel'], function(Backbone, modModel){

  var Mods = Backbone.Collection.extend({

    model : modModel,
    url : "http://orz.dk:5000/mcapi/mods",

    initialize: function(){
      this.sortVar = 'modname';
    },

    comparator: function( collection ){
      var that = this;
      return( collection.get( that.sortVar ) );
    },

    sync : function(method, collection, options) {
      options.dataType = "json"; 
      return Backbone.sync(method, collection, options);
      //options.dataType = "jsonp"; // Todo: Send callback() from rest server, then uncomment this
    },

    parse : function(response) {
      return response;
    }

  });
   
  return Mods;

});



