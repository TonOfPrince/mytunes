var VotesView = Backbone.View.extend({

  tagName: 'td',

  className: 'votes',

  template: _.template('<td>&uarr;</td><td><%= votes %></td><td>&darr;</td>'),

  initialize: function(){

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },
});
