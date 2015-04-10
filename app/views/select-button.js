import Ember from 'ember';

var SelectButton = Ember.View.extend({
  click: function(event) {
    var clickedButton = event.target,
        buttonNavs = Ember.$(".button-nav");

    Ember.$.each(buttonNavs, function(i, v) {
      var buttons = Ember.$(v).find('button');

      Ember.$.each(buttons, function(j, w) {
        if (w !== clickedButton && Ember.$.contains(v, clickedButton)) {
          Ember.$(w).removeClass('disabled');
        }
      });
    });

    Ember.$(clickedButton).addClass('disabled');
  }
});

export default SelectButton;
