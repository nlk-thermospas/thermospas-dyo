import Ember from 'ember';

var HotTubSelectSizeRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('htModel');
  },
  setupController: function(controller, model, transition) {
    controller.set('model', model);
    controller.set('selectedModel', undefined);
    controller.set('selectedSize', undefined);
  },
  deactivate: function() {
    this.controller.set('selectedModel', undefined);
    this.controller.set('selectedSize', undefined);
  }
});

export default HotTubSelectSizeRoute;
