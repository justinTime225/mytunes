// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",
  initialize: function() {
    this.listenTo(this.collection, 'add', function() {
      this.render();
    });
    this.listenTo(this.collection, 'remove', function() {
      this.render();
    });
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
