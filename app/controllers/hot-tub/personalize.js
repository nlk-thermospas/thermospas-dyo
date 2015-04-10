import Ember from 'ember';

var HotTubPersonalizeController = Ember.ObjectController.extend({
  hasBackground: false,
  actions: {
    finish: function() {
      window.location.replace('http://www.thermospas.com/site-inspection.html');
    },
    selectFromGallery: function(imageUrl) {
      this.set('backgroundImageUrl', imageUrl);
      var hotTub = this.get('model');
      hotTub.set('backgroundImageUrl', imageUrl);
      hotTub.save();
      Ember.$('#photo-gallery').foundation('reveal', 'close');
    },
    resetBackground: function() {
      this.set('backgroundImageUrl', '');
      var hotTub = this.get('model');
      hotTub.set('backgroundImageUrl', '');
      hotTub.save();
      Ember.$('.fileinput-button').show();
      Ember.$('.resetBackground').hide();
    },
    saveCanvas: function() {
      var image = Ember.$('#hot-tub-canvas')[0].toDataURL('image/png').replace("image/png", "image/octet-stream");

      Ember.$(Ember.$('#canvas-image')[0]).attr({
        'download': 'yourhottub.png',  /// set filename
        'href'    : image              /// set data-uri
      });
      Ember.$('#canvas-image')[0].click();

      return;
    },
    generateShareURL: function() {
      var _this = this;
      var image = Ember.$('#hot-tub-canvas')[0].toDataURL('image/jpeg', 0.8).replace("image/jpeg", "image/octet-stream");

      Ember.$('.share-button').replaceWith('<div class="share spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>');

      Ember.$.ajax({
        type: 'POST',
        url: '/api/upload-image',
        data: { image_data: image }
      }).done(function(response) {
        Ember.$('.share.spinner').hide();
        _this.set('shareImageURL', response['imageURL']);
        _this.set('shareURL', response['shareURL']);

        Ember.$('.ht-canvas-image').attr('src', response['imageURL']);
        _this.set('shareURL', response['shareURL']);
      });

      return;
    }
  }
});

export default HotTubPersonalizeController;
