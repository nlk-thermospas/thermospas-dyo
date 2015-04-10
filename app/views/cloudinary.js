import Ember from 'ember';

var Cloudinary = Ember.View.extend({
  tagName: 'input',
  name: 'file',
  classNames: ['cloudinary-fileupload'],
  attributeBindings: ['name', 'type'],
  type: 'file',
  didInsertElement: function() {
    var controller = this.get('controller');

    Ember.$.cloudinary.config(
        { cloud_name: 'acquirgy',
          api_key: '365516468461537'
        }
    );

    this.$().unsigned_cloudinary_upload(
      'lkjlmtau', {
        cloud_name: 'acquirgy'
      }, {
        disableImageResize: false,
        imageMaxWidth: 1000,
        imageMaxHeight: 1000,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        maxFileSize: 5000000 // 5MB
      }
    );

    /*_this.$().cloudinary_fileupload({
      disableImageResize: false,
      imageMaxWidth: 1000,
      imageMaxHeight: 1000,
      acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp|ico)$/i,
      maxFileSize: 5000000 // 5MB
    });*/

    this.$().bind('fileuploaddone', function (e, data) {
      var cloudinaryId = data.result.public_id;
      var hotTub = controller.get('model');
      var cloudinaryImageUrl = Ember.$.cloudinary.url(cloudinaryId);

      hotTub.set('cloudinaryPublicId', cloudinaryId);
      hotTub.set('backgroundImageUrl', cloudinaryImageUrl);
      hotTub.save();
    });
  }
});

export default Cloudinary;
