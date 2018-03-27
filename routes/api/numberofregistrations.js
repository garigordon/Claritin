var async = require('async'),
	keystone = require('keystone');
var exec = require('child_process').exec;
var numberData = keystone.list('numberOfRegistrations');
const router = require('express').Router();
var express = require('express');
var app = express();

exports.update = function(req, res) {
	numberData.model.findById(req.params.id).exec(function(err, item) {
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');

		var data = (req.method == 'POST') ? req.body : req.query;

		item.getUpdateHandler(req).process(data, function(err) {

			if (err) return res.apiError('create error', err);

			res.apiResponse({
				collection: item
			});

		});
	});
}

exports.create = function (req, res) {
	
	var item = new numberData.model(),
		data = (req.method === 'POST') ? req.body : req.query;

	item.getUpdateHandler(req).process(data, function(err) {

		if (err) return res.apiError('error', err);
		res.apiResponse({
			file_upload: item
		});

	});
}

exports.remove = function(req, res) {
	var data = req.body;
	var fileId = req.params.email;
	numberData.model.find({ email: (Object.keys(data)) }, function (err, item) {
  
		if (err) return res.apiError('database error', err);

		if (!item) return res.apiError('not found');

		item[item.length - 1].remove(function (err) {

			if (err) return res.apiError('database error', err);

			exec('rm public/uploads/files/'+fileId+'.*', function(err, stdout, stderr) {
				if (err) {
					console.log('child process exited with error code ' + err.code);
					return;
				}
				console.log(stdout);
			});
			
			return res.apiResponse({
				success: true
			});
		});

	});
}
