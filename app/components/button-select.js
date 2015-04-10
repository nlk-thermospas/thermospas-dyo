import Ember from 'ember';

var ButtonSelect = Ember.View.extend({
  click: function(event) {
    var clickedButton = event.target,
        buttons = Ember.$('.' + this.get('klass'));

    Ember.$.each(buttons, function(i, v) {
      if (v !== clickedButton) {
        Ember.$(v).removeClass('disabled');
      }
    });

    Ember.$(clickedButton).addClass('disabled');
  }
});

export default ButtonSelect;
