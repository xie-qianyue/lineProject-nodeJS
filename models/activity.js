'use strict';

var mongoose = require('mongoose');

// Define the shcema.
var activitySchema = new mongoose.Schema({
    name: String,
    start_at: Date,
    last_modified: Date
});

// Define model with a pre-exist collection 'todo'.
var activity = mongoose.model('Activity', activitySchema);