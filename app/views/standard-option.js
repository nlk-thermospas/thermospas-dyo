import Ember from 'ember';

var StandardOption = Ember.View.extend({
  // find the class of jet option selected
  // if the class is Platinum or Diamond, then select and disable the checkbox
  selectAndDisable: function() {
    if (Ember.$.find('#mht-jet-range').length > 0) {
      var checkbox = Ember.$("#" + this.elementId).children()[0];
      var selectedJetElement = Ember.$(Ember.$("#mht-jet-range")[0]);

      if (Ember.$(selectedJetElement).hasClass('Diamond') || Ember.$(selectedJetElement).hasClass('Platinum')) {
        // only trigger the check if it is not already checked
        // this handles the case when the hot tub is reloaded after the option
        // has been selected and saved
        if (!checkbox.checked) {
          //Ember.$(checkbox).trigger('click');
        }

        //Ember.$(checkbox).attr('disabled', true);
      }
    } else {
      Ember.run.next(this, function() {
        this.selectAndDisable();
      });
    }
  }.on('didInsertElement')
});

export default StandardOption;
