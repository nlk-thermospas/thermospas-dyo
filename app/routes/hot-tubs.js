import Ember from 'ember';

var HotTubsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('hotTub');
  }
});

export default HotTubsRoute;
