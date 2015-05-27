import Ember from 'ember';

var HotTubSelectSizeRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('htModel');
  },
  setupController: function(controller, model, transition) {

    if( typeof transition.queryParams.display != 'undefined') {
      localStorage.setItem("display", transition.queryParams.display);
    } else {
      localStorage.removeItem("display");
    }

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
