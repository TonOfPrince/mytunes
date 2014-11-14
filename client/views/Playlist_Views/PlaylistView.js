var PlaylistView = Backbone.View.extend({

  tagName: "table",

  className: 'playlist',


  initialize: function() {
    this.playPlaylistView = new PlayPlaylistView({collection: this.collection});
    this.render();
    var that = this;

    this.collection.on('remove',function(){
      that.render();
    });

    this.collection.on('add',function(){
      that.render();
    });

  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Playlist</th>').append(this.playPlaylistView.$el).append(
      this.collection.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});
