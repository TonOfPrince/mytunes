var Playlist = Songs.extend({

  initialize: function(){
    var that = this;

    this.on('add', function() {

    }, this);

    this.on('ended', function(song) {

    }, this);

    this.on('removeFromPlaylist', function(song) {
      this.remove(song);
    }, this);

  },

});
