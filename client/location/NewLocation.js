
// events
Template.NewLocation.events({
  // submit clicked
  'submit': function() {
    Session.set('newLocation', false);
  },
});
