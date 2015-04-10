import Ember from 'ember';

var HotTubSelectColorsRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    // reset the hot tub's options
    model.set('totalControlTherapy', false);
    model.set('iceBucket', false);
    model.set('pillowJet', false);
    model.set('crystalBall', false);
    model.set('cupHolder', false);
    model.set('lighting', false);
    model.set('stereo', false);
    model.set('ozonator', false);
    model.set('steps', false);
    model.set('coverLifter', false);
    model.set('stainlessSteelJets', false);
    model.set('lightedGrabBars', false);
    model.save();

    controller.set('model', model);
    controller.set('shellColors', model.get('htModel').get('shellColors'));
    controller.set('allShellColors', this.store.find('shellColor'));
    controller.set('cabinetColors', this.store.find('cabinetColor'));


    this.store.find('shellColor', 1).then(function(defaultShellColor) {
      model.get('shellColor').then(function(htShellColor) {
        if (htShellColor) {
          controller.set('selectedShellColor', htShellColor);
        } else {
          model.set('shellColor', defaultShellColor);
          controller.set('selectedShellColor', defaultShellColor);
        }
      });
    });

    this.store.find('cabinetColor', 1).then(function(defaultCabinetColor) {
      model.get('cabinetColor').then(function(htCabinetColor) {
        if (htCabinetColor) {
          controller.set('selectedCabinetColor', htCabinetColor);
        } else {
          model.set('cabinetColor', defaultCabinetColor);
          controller.set('selectedCabinetColor', defaultCabinetColor);
        }
      });
    });
  }
});

export default HotTubSelectColorsRoute;
