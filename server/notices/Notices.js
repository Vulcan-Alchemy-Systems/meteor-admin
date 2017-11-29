Meteor.publish("notice", function() {
  return Notices.find({},{sort: {created: -1}, limit: 25});
});

Meteor.publish("notices", function() {
  return Notices.find();
});

Meteor.publish("noticeEvent", function(event) {
  return Notices.find({event: event},{sort: {created: -1}, limit: 25});
});

Meteor.publish("singleNotice", function(id) {
  return Notices.find({_id: id});
});
