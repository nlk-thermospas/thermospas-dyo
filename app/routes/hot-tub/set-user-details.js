import Ember from 'ember';

var HotTubSetUserDetailsRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('hotTub');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('thankYou', false);
  }
});

export default HotTubSetUserDetailsRoute;
