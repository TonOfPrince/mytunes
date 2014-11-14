var AddToPlaylistView = Backbone.View.extend({
  tagName: 'td',
  className: 'addToPlaylist',

  template: _.template('Add to playlist'),

  initialize: function(){

  },

  events: {
    'click': function() {
      this.model.addToPlaylist();
    }
  },

  render: function(){
    return this.$el.html(this.template());
  },
});
