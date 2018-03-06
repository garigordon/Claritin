var async = require('async'),
	keystone = require('keystone');
var exec = require('child_process').exec;
var FileData = keystone.list('FileUpload');
const router = require('express').Router();
var express = require('express');
var app     = express();

exports.list = function(req, res) {
	var data = req.body;
	console.log((Object.keys(data)));
	FileData.model.find({email: (Object.keys(data))})
	.then(result => {
	console.log(result);
	res.status(201).json({
	message: "Order stored",
		createdOrder: {
			_id: result._id,
			product: result.product,
			quantity: result.quantity
		},
		request: {
			type: "GET",
			url: "http://localhost:3000/orders/" + result._id
		}
	});
})

	FileData.model.find({email: (Object.keys(data))},function(err, items) {
		console.log(items.length);
		
		//res.status(201).json({ count: })
		
		router.get('http://localhost:63342/my-test-project/public/fileAPITest.html?_ijt=tmsrsm1spbnc83shfko7hgeovs', function (req, res) {
			console.log(req);
			res.status(200).json({ "count": "dsjgs" });
		});
		
		// app.get('/my-test-project/public/fileAPITest.html?_ijt=hp5migumrs5mm5p8m64s7qdc2m', function(req, res) {
		// 	res.render('testPage', {
		// 		myVar: 'My Data'
		// 	});
		// })
		if (err) return res.apiError('database error', err);
		res.apiResponse({
			collections: req.items
		});
	});
}

exports.get = function(req, res){
	console.log(req.params);
	var data = req.query;
	console.log(data);
	FileData.model.find(req.params.email).exec(function(err, item) {
		console.log(item);
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		console.log(item)
		res.apiResponse({
			collection: item
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
