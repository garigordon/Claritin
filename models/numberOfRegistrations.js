var keystone = require('keystone');
var Types = keystone.Field.Types;
var numberOfRegistrations = new keystone.List('numberOfRegistrations');
var myStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/files'),
		publicPath: '/public/uploads/files',
	},
});

numberOfRegistrations.add({
	first_name: { type: String },
	last_name: { type: String },
	email: { type: String },
	phone: { type: String },
	age: { type: Number },
	registration: { type: Number },
	createdAt: { type: Date, default: Date.now },
});

numberOfRegistrations.defaultColumns = 'name,first_name,last_name,email,phone,age,registration,createdAt';
numberOfRegistrations.register();
