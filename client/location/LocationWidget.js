
Template.LocationWidget.helpers({
  // gets all active tasks counts
  locationCount: function() {
    return Location.find().count();
  }
});
