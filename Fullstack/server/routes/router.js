const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');
const auth = require('../auth/authenticate');
// const { authenticate } = require('passport');

/*
 *  @description Root Route
 *   @ Method GET /
 * */

route.get('/', services.homeRoutes);
/*
 *  @description
 *   @ Method GET all routes
 * */
route.get('/charter', services.charterRoutes);
route.get('/partnership', services.partnershipRoutes);
route.get('/route', services.routeRoutes);
route.get('/driver', services.driveRoutes);
route.get('/login', services.loginRoutes);
route.get('/FAQ', services.FAQRoutes);
route.get('/register', services.registerRoutes);
route.get('/dashboard', services.dashboardRoutes);
route.get('/contact', services.contactRoutes);
route.get('/privacypolicy', services.privacyPolicy);
route.get('/tickets', services.ticketsDashboard);

// APIs
route.post('/api/user', controller.registerUser);
route.post('/login', auth.authenticate, controller.login);
route.get('/logout', controller.logout);
route.post('/api/submit', controller.submit);
// route.get('/api/tickets/:region', controller.tickets);

/* route.get('/api/user', controller.find);
route.put('/api/user/:id', controller.update);
route.delete('/api/user/:id', controller.delete); */

module.exports = route;
