Temperature = new Mongo.Collection("temperature");

// debug
SimpleSchema.debug = true;

// rules
Temperature.allow({
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
TemperatureSchema = new SimpleSchema({
  // sensorId
  sensorId: {
    type: String,
    label: "Sensor Id",
    autoValue: function () {
      return '1'
    },
    autoform: {
      type: "hidden",
    }
  },
  // sensorState
  sensorState: {
    type: Number,
    label: "Sensor State",
    allowedValues: [
         '1',
         '0',
    ],
    autoform: {
      options: [
        {
          label: 'Ready',
          value: 1
        },
        {
          label: 'Not Ready',
          value: 0
        },
      ]
    }
  },
  // sensorValue
  sensorValue: {
    type: String,
    label: "Sensor Value",
  },
  // createdAt
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function () {
      return new Date();
    },
    autoform: {
      type: "hidden",
    }
  }
});

// methods
Meteor.methods({
  
});

// attach
Temperature.attachSchema( TemperatureSchema );
