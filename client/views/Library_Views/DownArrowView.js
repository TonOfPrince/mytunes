var DownArrowView = Backbone.View.extend({

  tagName: 'td',
  className: 'downarrow',

  template: _.template('&darr;'),

  initialize: function(){

  },

  events: {
    'click': function() {
      this.model.downvote();
    }
  },

  render: function(){
    return this.$el.html(this.template());
  },
});
