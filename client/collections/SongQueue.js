// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.listenTo(this.model, 'add', function() {
    //   console.log('listening to model');
    // });
    this.on('add', function() {
      
      this.playFirst();
    });
  },

  playFirst: function() {
    console.log('first', this.first());
  }

});