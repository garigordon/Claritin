
var keystone = require('keystone');

var Enquiry = new keystone.List('Artwork', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Enquiry.add({
	first_name: { type: String },
	last_name: { type: String },
});

Enquiry.defaultColumns = 'first_name, last_name';
Enquiry.register();
