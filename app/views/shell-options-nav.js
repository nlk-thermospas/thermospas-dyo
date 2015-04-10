import Ember from 'ember';

var ShellOptionsNav = Ember.View.extend({
  // Check to see if the button is to be preselected or not. Ensure that the
  // currently selected jet option is present by rerunning this until it is
  // present.
  checkIfSelected: function() {
    if (Ember.$.find('#mht-shell').length > 0) {
      var button = Ember.$("#" + this.elementId).children()[0];
      var buttonText = Ember.$.trim(Ember.$(button).text());
      var selectedShell = Ember.$.trim(Ember.$(Ember.$("#mht-shell")[0]).text());

      if (buttonText === selectedShell) {
        Ember.$(button).addClass('disabled');
      }
    } else {
      Ember.run.next(this, function() {
        this.checkIfSelected();
      });
    }
  }.on('didInsertElement')
});

export default ShellOptionsNav;
