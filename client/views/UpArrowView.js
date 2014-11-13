var UpArrowView = Backbone.View.extend({

  tagName: 'td',
  className: 'uparrow',

  template: _.template('&uarr;'),

  initialize: function(){

  },

  render: function(){
    return this.$el.html(this.template());
  },
});
