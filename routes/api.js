var express = require('express');
var mongoose = require('mongoose');
var api = express.Router();
var actvity = require('./../models/activity.js');
var User = require('../models/user');

api.post('/addActivity', function (req, res) {

	var userActivity = req.body.newActivity;
	var userId = User.findByEmail(activity.userEmail, function(err, user){
		var newActvity = new actvity();
		// TODO
	});

	
});

/*
api.get('/todos', function (req, res) {
	Todo.find(function(err, todos) {
		if(err){
			res.send(err);
		}
		console.log(todos);
		res.json(todos);
	});
});

// Create a todo item.
api.post('/todos', function (req, res) {
	Todo.create({
		title : req.body.title,
		completed : false
	}, function(err) {
		if (err) {
			res.send(err);
		}

        // Get and return all the todos after create.
        Todo.find(function(err, todos) {
        	if (err) {
        		res.send(err);
        	}		
        	res.json(todos);
        });
    });
});

// Delete a todo item.
api.delete('/todos/:todo_id', function(req, res) {
	Todo.remove({
		_id : req.params.todo_id
	}, function(err, todo) {
		if (err) {
			res.send(err);
		}

        // Get and return all the todos after delete.
        Todo.find(function(err, todos) {
        	if (err) {
        		res.send(err);
        	}
        	res.json(todos);
        });
    });
});

// Modify a todo title.
// After update, it doesn't return a result list. 
// The refresh of the list is done by angular.
api.put('/todos', function(req, res) {
	Todo.update({_id: req.body._id}, 
		{title: req.body.title},
		function(err) {
			if (err) {
				res.send(err);
			}
		});
});

// Mark the todo completed.
// After update, it doesn't return a result list. 
// The refresh of the list is done by angular.
api.put('/todos/completed', function(req, res) {
	Todo.update({_id: req.body._id},
		{completed: req.body.completed},
		function(err) {
			if (err) {
				res.send(err);
			}
		});
});
*/

module.exports = api;