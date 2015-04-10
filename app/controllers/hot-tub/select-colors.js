import Ember from 'ember';

var HotTubSelectColorsController = Ember.ObjectController.extend({
  selectedShellColor: undefined,
  selectedCabinetColor: undefined,
  actions: {
    selectShellColor: function(shellColor) {
      var hotTub = this.get('model');
      hotTub.set('shellColor', shellColor);
      this.set('selectedShellColor', shellColor);
      return;
    },
    selectCabinetColor: function(cabinetColor) {
      var hotTub = this.get('model');
      hotTub.set('cabinetColor', cabinetColor);
      this.set('selectedCabinetColor', cabinetColor);
      return;
    },
    previousStep: function() {
      var hotTub = this.get('model');
      hotTub.set('shellColor', null);
      hotTub.set('cabinetColor', null);
      hotTub.save();
      this.transitionToRoute('hotTub.selectJets', hotTub);
      return;
    },
    nextStep: function() {
      var hotTub = this.get('model');
      hotTub.save();
      this.transitionToRoute('hotTub.selectOptions', hotTub);
      return;
    }
  }
});

export default HotTubSelectColorsController;
