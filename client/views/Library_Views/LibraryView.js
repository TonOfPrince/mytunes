// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  className: 'library',

  initialize: function() {
    this.render();
    // var that = this;
    // this.collection.map(function(model){
    //   model.on('change',function(){
    //     that.render();
    //   });
    // });

    this.collection.on('ended upvote downvote',function(){
      this.render();
    },this);

    // this.collection.on('upvote',function(){
    //   this.render();
    // },this);

  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
