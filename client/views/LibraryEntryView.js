// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function(){
    this.playsView = new PlaysView({model: this.model});
  },

  tagName: 'tr',

  className: 'libraryEntry',

  template: _.template('<td>&uarr;</td><td><%= votes %></td><td>&darr;</td><td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    },


  },

  render: function(){
    return this.$el.html([
      this.playsView.render(),
      this.template(this.model.attributes)])
  }

});
