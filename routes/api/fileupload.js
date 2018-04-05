var async = require('async'),
	keystone = require('keystone');
var exec = require('child_process').exec;
var FileData = keystone.list('MainStatistics');
const router = require('express').Router();
var express = require('express');
var app = express();
var answer = '';

exports.list = function (req, res) {
	var data = req.body;
	FileData.model.find({ email: (Object.keys(data)) }, function (err, items) {

		var now = new Date();
		var month = now.getMonth() + 1;
		var day = now.getDate();
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
			date: day,
			numberRegistrations: items.length,
		});
	});
}

exports.get = function (req, res) {
	var now = new Date();
	var month = now.getMonth() + 1;
	var day = now.getDate();

	var answer = '';
	if (month < 4 || (month === 4 && day < 16)) {
		answer =  'coming';
	} else if (month === 4 && day >= 16 && day <= 30) {
		answer =  '/';
	} else if (month === 5 && day <= 25) {
		answer = '/';
	} else if ((month === 5 && day > 25) || month > 5) {
		answer = 'close';
	}
	console.log(answer);
	res.apiResponse({
		collection: answer,
	});
};

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

exports.create = function (req, res) {
	console.log(answer);
	if (answer === "Quiz") {
		var item = new FileData.model(),
			data = (req.method === 'POST') ? req.body : req.query;

		item.getUpdateHandler(req).process(data, function (err) {

			if (err) return res.apiError('error', err);
			res.apiResponse({
				file_upload: item,
			});

		});
		answer = '';
	}
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
