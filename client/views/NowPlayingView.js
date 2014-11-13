var NowPlayingView = Backbone.View.extend({
  tagName:'span',

  initialize: function() {
    var that = this;
    // this.$el.on('ended', function() {
    //   that.model.ended();
    // });
  },

  template: _.template('<br/>Now Playing: <%= artist %> - <%= title %>'),

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.html(this.template({artist:this.model.get('artist'), title: this.model.get('title')}));
  }
});
