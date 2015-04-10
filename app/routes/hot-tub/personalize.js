import Ember from 'ember';

var HotTubPersonalizeRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);

    var backgroundImageUrl = model.get('backgroundImageUrl');

    if (backgroundImageUrl) {
      controller.set('backgroundImageUrl', backgroundImageUrl);
    } else {
      controller.set('backgroundImageUrl', undefined);
    }
  }
});

export default HotTubPersonalizeRoute;
