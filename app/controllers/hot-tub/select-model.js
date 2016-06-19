import Ember from 'ember';

var HotTubSelectModelController = Ember.ArrayController.extend({
  queryParams: ['iref'],
  iref: null,
  needs: 'hotTub',
  hotTub: Ember.computed.alias('controllers.hotTub'),
  selectedSize: undefined,
  selectedModel: undefined,
  previewWithPeople: false,
  validHtModels: function() {
    var selectedSize = this.get('selectedSize');

    return this.get('model').filter(function(htModel) {
      if (selectedSize === 3) {
        return htModel.get('peopleSupported') <= selectedSize;
      } else if (selectedSize === 6) {
        return htModel.get('peopleSupported') >= selectedSize;
      } else {
        return htModel.get('peopleSupported') === selectedSize;
      }
    });
  }.property('@each.peopleSupported', 'selectedSize'),
  actions: {
    selectSize: function(size) {
      this.set('selectedSize', parseInt(size));
      var iref12 = this.get('needs');
      //console.log(iref12);
      //alert('Iref'+iref12);
    },
    selectModel: function(htModel) {

      var hotTub = this.get('hotTub').get('model');
      hotTub.set('htModel', htModel);
      hotTub.save(); 
      // enabled the top nav progression on model select
      var navItems = Ember.$('.sub-nav').children();
      Ember.$(navItems[1]).removeClass('disabled-nav-item');

      // enabled the next button on model select
      Ember.$('.inactive.next-button').removeClass('inactive').addClass('pulse');
    },
    nextStep: function() {
      var hotTub = this.get('hotTub').get('model');

      hotTub.set('jetOption', null);
      hotTub.set('shellColor', null);
      hotTub.set('cabinetColor', null);
      hotTub.set('totalControlTherapy', false);
      hotTub.set('iceBucket', false);
      hotTub.set('pillowJet', false);
      hotTub.set('crystalBall', false);
      hotTub.set('cupHolder', false);
      hotTub.set('lighting', false);
      hotTub.set('stereo', false);
      hotTub.set('ozonator', false);
      hotTub.set('steps', false);
      hotTub.set('stainlessSteelJets', false);
      hotTub.set('coverLifter', false);

      hotTub.save();
      this.transitionToRoute('hotTub.selectJets', hotTub);
    }
  }
});

export default HotTubSelectModelController;
