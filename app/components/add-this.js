import Ember from 'ember';
/* global addthis */
// No import for AddThis, it's a global called `addthis`

var AddThis = Ember.Component.extend({
  tagName: 'ul',
  classNames: 'addthis_sharing_toolbox addthis_default_style small-block-grid-3 addthis_32x32_style',
  attributeBindings: ['data-size', 'data-url', 'data-text', 'data-hashtags'],
  didInsertElement: function() {
    var _this = this,
        addThisURL = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-54b423dd1a227c8d',
        shareImageURL = _this.get('shareImageURL'),
        shareURL = _this.get('shareURL');

    Ember.$.getScript(addThisURL, function success() {
      // set this to window so AddThis JS can access it
      window.addthis_config = {
        services_exclude: "pinterest"
      };

      // set this to window so AddThis JS can access it
      window.addthis_share = {
        title: 'I just designed my own ThermoSpas® hot tub! Design yours now – and get a FREE DVD, brochure, and $1,000 coupon! #mythermospas.',
        url: shareURL,
        screenshot: shareImageURL
      };

      addthis.init();
      addthis.toolbox('.addthis_sharing_toolbox');

      var urlmedia = shareImageURL;
      var description = 'I just designed my own ThermoSpas® hot tub! Design yours now – and get a FREE DVD, brochure, and $1,000 coupon! #mythermospas.';
      var urlpin = shareURL;

      var pin = '//pinterest.com/pin/create/button/?'+
                'url='+encodeURIComponent(urlpin)+
                '&media='+encodeURIComponent(urlmedia)+
                '&description='+encodeURIComponent(description);

      Ember.$('#pinbtn').attr('href', pin);

    });
  }
});

export default AddThis;
