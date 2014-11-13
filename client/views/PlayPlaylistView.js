var PlayPlaylistView = Backbone.View.extend({
  tagName: 'tr',
  className: 'playPlaylist',

  template: _.template('Play playlist!'),

  initialize: function(){
    this.render();
  },

  events: {
    'click': function() {
      this.collection.playPlaylist();
    }
  },

  render: function(){
    return this.$el.html(this.template());
  },
});
