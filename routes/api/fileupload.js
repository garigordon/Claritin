var async = require('async'),
	keystone = require('keystone');
var exec = require('child_process').exec;
var FileData = keystone.list('FileUpload');
const router = require('express').Router();
var express = require('express');
var app = express();

exports.list = function (req, res) {
	var data = req.body;
	console.log((Object.keys(data)));
	FileData.model.find({ email: (Object.keys(data)) }, function (err, items) {
	
		var now = new Date();
		var month = now.getMonth() + 1;
		var day = now.getDate();
		console.log(items.length)
		
		var answer = '';
		if (month === 3 && day - items.length >= 16 && items.length === 0) {
			answer =  'Quiz';
		} else if (month === 4 && (day + 30) - items.length >= 16 && items.length === 0) {
			answer =  'Quiz';
		} else if (month === 3 && day - items.length >= 16 && day !== items[items.length - 1].day) {
			answer =  'Quiz';
		} else if (month === 4 && (day + 30) - items.length >= 16 && day !== items[items.length - 1].day) {
			answer =  'Quiz';
		} else {
			answer = 'thanks';
		}
		console.log(answer);
		
		if (err) return res.apiError('database error', err);
		res.apiResponse({
			day: answer,
		});
	});
}

exports.get = function (req, res) {
	console.log(req.params);
	var data = req.query;
	console.log(data);
	FileData.model.find(req.params.email).exec(function (err, item) {
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		res.apiResponse({
			collection: item,
		});

	});
}

exports.update = function(req, res) {
	FileData.model.findById(req.params.id).exec(function(err, item) {
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

exports.create = function(req, res) {
console.log(req.body);
	var item = new FileData.model(),
		data = (req.method === 'POST') ? req.body : req.query;

	item.getUpdateHandler(req).process(data, function(err) {

		if (err) return res.apiError('error', err);
		res.apiResponse({
			file_upload: item
		});

	});
}

exports.remove = function(req, res) {
	var fileId = req.params.id;
	FileData.model.findById(req.params.id).exec(function (err, item) {

		if (err) return res.apiError('database error', err);

		if (!item) return res.apiError('not found');

		item.remove(function (err) {

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
