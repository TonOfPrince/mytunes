// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function(){
    this.playsView = new PlaysView({model: this.model});
    this.upArrowView = new UpArrowView({model: this.model});
    this.votesView = new VotesView({model: this.model});
    this.downArrowView = new DownArrowView({model: this.model});
    this.songView = new SongView({model: this.model});
    this.addToPlaylistView = new AddToPlaylistView({model: this.model});
  },

  tagName: 'tr',

  className: 'libraryEntry',





  render: function(){
    return this.$el.html([
      this.playsView.render(),
      this.upArrowView.render(),
      this.votesView.render(),
      this.downArrowView.render(),
      this.songView.render(),
      this.addToPlaylistView.render()
      ])
  }

});
