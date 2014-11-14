var SongView = Backbone.View.extend({

  tagName: 'td',

  className: 'song',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function(){

  },

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },
});
