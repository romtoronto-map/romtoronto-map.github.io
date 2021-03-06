define([
  'jquery', 'underscore', 'backbone'
], function(
  $, _, Backbone
){
  var FeatureCollection = Backbone.Collection.extend({
    initialize: function(models,options) {            
      this.options = options || {}; 
    },
    getIds : function(){
      return _.map(this.models,function(model){ return model.id})
    }
    
  });

  return FeatureCollection;
});
