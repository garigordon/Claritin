var keystone = require('keystone');
var Types = keystone.Field.Types;
var FileUpload = new keystone.List('FileUpload');
var myStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/files'), 
		publicPath: '/public/uploads/files',
	},
});

FileUpload.add({
	first_name: { type: String },
	last_name: { type: String },
	email: { type: String },
	phone: { type: String },
	age: { type: Number },
	ans_1: { type: Number },
	ans_2: { type: Number },
	ans_3: { type: Number },
	ans_4: { type: Number },
	ans_5: { type: Number },
	day: { type: Number },
	language : { type: String },
	createdAt: { type: Date, default: Date.now },
});

FileUpload.defaultColumns = 'name,first_name, last_name,email,phone,age,ans_1,ans_2,ans_3,ans_4,ans_5,day,language';
FileUpload.register();
