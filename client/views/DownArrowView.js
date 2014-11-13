var DownArrowView = Backbone.View.extend({

  tagName: 'td',
  className: 'downarrow',

  template: _.template('&darr;'),

  initialize: function(){

  },

  render: function(){
    return this.$el.html(this.template());
  },
});
