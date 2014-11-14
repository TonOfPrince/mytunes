var UpArrowView = Backbone.View.extend({

  tagName: 'td',
  className: 'uparrow',

  template: _.template('&uarr;'),

  initialize: function(){

  },

  events: {
    'click': function() {
      this.model.upvote();
    }
  },

  render: function(){
    return this.$el.html(this.template());
  },
});
