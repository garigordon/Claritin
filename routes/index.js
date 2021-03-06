/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'), 
	api: importRoutes('./api'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.all('/api*', keystone.middleware.cors);
	app.get('/', routes.views.index);
	app.get('/fr', routes.views.fr);
	app.get('/en', routes.views.en);
	app.get('/checkDate', routes.views.checkDate);
	app.get('/coming', routes.views.coming);
	app.get('/close', routes.views.close);
	app.get('/venir', routes.views.venir);
	app.get('/fin', routes.views.fin);
	app.get('/Quiz', routes.views.Quiz);
	app.get('/concours', routes.views.concours);
	app.get('/result', routes.views.result);
	app.get('/resultat', routes.views.resultat);
	app.get('/thanks', routes.views.thanks);
	app.get('/rules', routes.views.rules);
	app.get('/regles', routes.views.regles);
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	app.post('/api/fileupload/list', keystone.middleware.api, routes.api.fileupload.list);
	app.get('/api/fileupload/:email', keystone.middleware.api, routes.api.fileupload.get);
	app.all('/api/fileupload/:id/update', keystone.middleware.api, routes.api.fileupload.update);
	app.all('/api/fileupload/create', keystone.middleware.api, routes.api.fileupload.create);
	app.get('/api/fileupload/:id/remove', keystone.middleware.api, routes.api.fileupload.remove);

	app.all('/api/numberofregistrations/:id/update', keystone.middleware.api, routes.api.numberofregistrations.update);
	app.all('/api/numberofregistrations/create', keystone.middleware.api, routes.api.numberofregistrations.create); 
	app.post('/api/numberofregistrations/remove', keystone.middleware.api, routes.api.numberofregistrations.remove);
};
