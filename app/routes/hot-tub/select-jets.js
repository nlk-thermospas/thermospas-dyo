import Ember from 'ember';

var HotTubSelectJetsRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    // reset the hot tub's colors and options
    model.set('jetOption', null);
    model.set('shellColor', null);
    model.set('cabinetColor', null);
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
    model.save();

    controller.set('model', model);

    model.get('htModel').then(function(htModel) {
      controller.set('jetOptions', htModel.get('jetOptions'));

      htModel.get('jetOptions').then(function(jOs) {
        model.get('jetOption').then(function(jetOption) {
          if (jetOption) {
            controller.set('selectedJetOption', jetOption);
          } else {
            model.set('jetOption', jOs.get('lastObject'));
            controller.set('selectedJetOption', jOs.get('lastObject'));
          }
        });
      });
    });
  }
});

export default HotTubSelectJetsRoute;
