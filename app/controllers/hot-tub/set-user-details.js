import Ember from 'ember';

var HotTubSetUserDetailsController = Ember.ObjectController.extend(Ember.Evented, {
  thankYou: false,
  actions: {
    setUserDetails: function() {
      $('button:submit').trigger("submit");
      var name = Ember.$('.name-field').find('input').val();
      var address = Ember.$('.address-field').find('input').val();
      var city = Ember.$('.city-field').find('input').val();
      var state = Ember.$('.state-field').find('select').val();
      var zip = Ember.$('.zip-code-field').find('input').val();
      var phone = Ember.$('.phone-field').find('input').val();
      var email = Ember.$('.email-field').find('input').val();

      var hotTub = this.get('model');

      var model = hotTub.get('htModel').get('displayName');
      var jets = hotTub.get('jetOption').get('jetRange');
      var shell = hotTub.get('shellColor').get('displayName');
      var cabinet = hotTub.get('cabinetColor').get('displayName');
      var options = '';

      if(hotTub.get('totalControlTherapy')) {options += 'Total Control Therapy, ';}
      if(hotTub.get('iceBucket')) {options += 'Ice Bucket, ';}
      if(hotTub.get('pillowJet')) {options += 'Pillow Jet, ';}
      if(hotTub.get('crystalBall')) {options += 'Crystal Ball, ';}
      if(hotTub.get('cupHolder')) {options += 'Cup Holder, ';}
      if(hotTub.get('lighting')) {options += 'Lighting, ';}
      if(hotTub.get('stereo')) {options += 'Stereo, ';}
      if(hotTub.get('ozonator')) {options += 'Ozonator, ';}
      if(hotTub.get('steps')) {options += 'Steps, ';}
      if(hotTub.get('coverLifter')) {options += 'Cover Lifter, ';}
      if(hotTub.get('stainlessSteelJets')) {options += 'Stainless Steel Jets, ';}
      if(hotTub.get('lightedGrabBars')) {options += 'Lighted Grab Bars, ';}

      options = options.substring(0, options.length-2);

      var data = {
        "Name": name,
        "Address": address,
        "City": city,
        "State": state,
        "Zip": zip,
        "Phone": phone,
        "Email": email,
        "Model": model,
        "Jets": jets,
        "Shell": shell,
        "Cabinet": cabinet,
        "Options": options
      };

      if (name && zip && phone && email) {
        hotTub.set('createdAt', new Date());
        hotTub.save();
        this.toggleProperty('thankYou');

        var navItems = Ember.$('.sub-nav').children();
        Ember.$(navItems[5]).removeClass('disabled-nav-item');

        $.post(
          'http://thermospas.com/store.php',
          data,
          function() {}
        );

      } else {
        return;
      }

    },
    previousStep: function() {
      var hotTub = this.get('model');
      this.transitionToRoute('hotTub.selectOptions', hotTub);
    },
    nextStep: function() {
      var hotTub = this.get('model');
      this.transitionToRoute('hotTub.personalize', hotTub);
    }
  }
});

export default HotTubSetUserDetailsController;
