var PlaylistEntryView = Backbone.View.extend({
  tagName: 'tr',
  className: 'playlistEntry',
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  events: {
    'click': function() {
      this.model.removeFromPlaylist();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
