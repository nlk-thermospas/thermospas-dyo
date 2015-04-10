import Ember from 'ember';

var HotTubSelectJetsController = Ember.ObjectController.extend({
  selectedJetOption: undefined,
  previewWithPeople: false,
  init: function() {
    this._super();
    this.set('selectedJetOption', undefined);
  },
  togglePreviewWithPeople: function() {
    this.toggleProperty('previewWithPeople');
  },
  actions: {
    selectJetOption: function(jetOption) {
      var hotTub = this.get('model');
      hotTub.set('jetOption', jetOption);
      hotTub.save();
      this.set('selectedJetOption', jetOption);
    },
    previousStep: function() {
      var hotTub = this.get('model');
      hotTub.set('jetOption', null);
      this.transitionToRoute('hotTub.selectModel', hotTub);
    },
    nextStep: function() {
      var hotTub = this.get('model');
      this.transitionToRoute('hotTub.selectColors', hotTub);
    }
  }
});

export default HotTubSelectJetsController;
