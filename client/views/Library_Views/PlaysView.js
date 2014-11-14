var PlaysView = Backbone.View.extend({

  tagName: 'td',

  className: 'plays',

  template: _.template('Plays: <%= plays %>'),

  initialize: function(){

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },
});
