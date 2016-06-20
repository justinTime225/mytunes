// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.listenTo(this, 'add', function() {
      if (this.length === 1) {
        this.playFirst(); 
      }
    });
    this.listenTo(this, 'ended', function() {
      this.shift();
      if (this.first()) {
        this.playFirst();
      }
    });
    this.listenTo(this, 'dequeue', function(song) {
      this.remove(song);
    });
  },

  playFirst: function() {
    // console.log('first', this.first());
  }

});