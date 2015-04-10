import DS from 'ember-data';

var firebaseUrl = 'shining-heat-2332.firebaseio.com';

export default DS.FirebaseAdapter.extend({
    firebase: new window.Firebase(firebaseUrl)
});
