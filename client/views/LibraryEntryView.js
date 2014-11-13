// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function(){
    this.playsView = new PlaysView({model: this.model});
    this.votesView = new VotesView({model: this.model});
    this.songView = new SongView({model: this.model});
  },

  tagName: 'tr',

  className: 'libraryEntry',





  render: function(){
    return this.$el.html([
      this.playsView.render(),
      this.votesView.render(),
      this.songView.render()])
  }

});
