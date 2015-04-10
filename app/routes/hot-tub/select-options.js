import Ember from 'ember';

var HotTubSelectOptionsRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('options', this.store.find('htOption'));
  }
});

export default HotTubSelectOptionsRoute;
