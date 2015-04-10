import Ember from 'ember';

var JetOptionsNav = Ember.View.extend({
  // Check to see if the button is to be preselected or not. Ensure that the
  // currently selected jet option is present by rerunning this until it is
  // present.
  checkIfSelected: function() {
    if (Ember.$.find('#mht-jet-range').length > 0) {
      var button = Ember.$("#" + this.elementId).children()[0];
      var buttonText = Ember.$.trim(Ember.$(button).text());
      var selectedJetRange = Ember.$.trim(Ember.$(Ember.$("#mht-jet-range")[0]).text());

      if (buttonText === selectedJetRange) {
        Ember.$(button).addClass('disabled');
      }
    } else {
      Ember.run.next(this, function() {
        this.checkIfSelected();
      });
    }
  }.on('didInsertElement')
});

export default JetOptionsNav;
