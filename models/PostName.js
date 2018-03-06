var keystone = require('keystone');
var Types = keystone.Field.Types;

var Post = new keystone.List('PostName', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});
Post.add({
	first_name: { type: String },
	last_name: { type: String },
});

Post.defaultColumns = 'first_name, last_name';
Post.register();
