Sensor = new Mongo.Collection("sensor");

// debug
SimpleSchema.debug = true;

// rules
Sensor.allow({
  insert: function (userId, doc) {
    return !!userId;
  },
  update: function (userId, doc) {
    return !!userId;
  },
  remove: function (userId, doc) {
    return !!userId;
  },
});

// schema
SensorSchema = new SimpleSchema({
  // locationId
  locationId: {
    type: String,
    label: "Location",
    autoform: {
      type: "hidden",
    }
  },
  // name
  name: {
    type: String,
    label: "Name"
  },
  // type
  type: {
    type: String,
    label: "Type",
    allowedValues: [
         'Temperature',
         'PH',
         'Light',
         'Video',
         'Security',
         'Humidity',
         'Battery',
    ],
    autoform: {
      options: [
        {
          label: 'Temperature',
          value: 'Temperature'
        },
        {
          label: 'PH',
          value: 'PH'
        },
        {
          label: 'Light',
          value: 'Light'
        },
        {
          label: 'Video',
          value: 'Video'
        },
        {
          label: 'Security',
          value: 'Security'
        },
        {
          label: 'Humidity',
          value: 'Humidity'
        },
        {
          label: 'Battery',
          value: 'Battery'
        },
      ]
    }
  },
  // status
  status: {
    type: String,
    label: "Status"
  },
  // created
  created: {
    type: Date,
    label: "Created",
    autoValue: function () {
      return new Date();
    },
    autoform: {
      type: "hidden",
    }
  },
  // createdBy
  createdBy: {
    type: String,
    label: "created By",
    autoValue: function () {
      return this.userId
    },
    autoform: {
      type: "hidden",
    }
  },
});

// methods
Meteor.methods({
  // deleteSensor
  deleteSensor: function(id) {
    Sensor.remove({_id:id});
  }
});

// attach
Sensor.attachSchema( SensorSchema );
