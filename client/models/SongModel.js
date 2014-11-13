// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },

  ended: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('ended', this);
  },

  upvote: function(){
    this.trigger('upvote', this);
  },

  downvote: function(){
    this.trigger('downvote', this);
  },

  initialize: function() {
    this.set('plays', 0);
    this.set('votes', 0);
    this.on('ended',function(){
      // debugger;
      this.set('plays',this.get('plays') + 1);
    });
    this.on('upvote',function(){
      // debugger;
      this.set('votes',this.get('votes') + 1);
    });
    this.on('downvote',function(){
      // debugger;
      this.set('votes',this.get('votes') - 1);
    });
  }
});
