import Ember from 'ember';

var HotTubRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('hotTub', params.hotTub_id);
  },
  actions: {
    startOver: function() {
      this.replaceWith('hotTubs.create');
    }
  }
});

export default HotTubRoute;
