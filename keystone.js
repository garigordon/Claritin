// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();
// Require keystone
var keystone = require('keystone');
// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
keystone.init({
	'name': 'Claritin Admin Panel',
	'brand': 'Claritin Admin Panel',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'logo': 'public/logo.png',
	'signin logo': ['../logo.png', 205, 68],
	'views': 'templates/views',
	'view engine': 'pug',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'port': 80,
	'cookie secret': 'you api',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));
keystone.set('cors allow origin', true);
keystone.set('signin logo', '../logo.png');
// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	users: 'users',
});

// Start Keystone to connect to your database and initialise the web server
keystone.start();
