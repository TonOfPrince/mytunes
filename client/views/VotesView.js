var VotesView = Backbone.View.extend({

  tagName: 'td',
  className: 'votes',

  template: _.template('<%= votes %>'),

  initialize: function(){

  },



  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },
});
