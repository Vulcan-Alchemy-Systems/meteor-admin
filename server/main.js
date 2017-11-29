import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

/**
* Every bb can write to beaglebone/id topic and the last message will be in the collection
* so the events database holds the current event status
*/
let server = Meteor.settings.private.mqttHost;
Events.mqttConnect(server, ["sensor/+"]);

// Timestamp the data
Events.before.upsert(function (userId, selector, modifier, options) {
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = new Date();
});

Events.after.update(function(userId, doc) {

  if(doc && doc.message == "emergency") {
    Notices.insert({message: doc.message, topic: doc.topic, event: doc._id});
    console.log(doc.topic + ' - ' + doc.message + ' - ' + doc.modifiedAt);
  }
});


// In this database we can hold all the info/warning/error messages
Messages.mqttConnect(server, ["info"], {insert: true});

// Timestamp the data
Messages.before.insert(function (userId, doc) {
  doc.createdAt = new Date();
});
