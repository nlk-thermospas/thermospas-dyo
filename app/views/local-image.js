import Ember from 'ember';

/* global ga */

export default Ember.View.extend({
  tagName: 'input',
  name: 'file',
  classNames: ['cloudinary-fileupload'],
  attributeBindings: ['name', 'type'],
  type: 'file',
  change: function(e) {
    var controller = this.get('controller');

    var file = e.target.files[0],
        imageType = /image.*/;

    if (!file.type.match(imageType)) {
        console.log('returned early');
        return;
    }

    var reader = new FileReader();

    reader.onload = function(f) {
      var $img = Ember.$('<img>', { src: f.target.result });

      $img.load(function() {
        controller.set('backgroundImageUrl', f.target.result);
        controller.set('hasBackground', true);
      });
    };

    Ember.$('.fileinput-button').hide();
    Ember.$('.resetBackground').css('display', 'block');

    ga('send', 'event', 'DYOTool', 'Upload', 'Personalize-Step6', 1);

    reader.readAsDataURL(file);
  }
});
