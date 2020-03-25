const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * 
 * Routes Ongs
 */
routes.get('/ongs', OngController.read);
routes.post('/ongs', OngController.create);

/**
 * 
 * Routes Incidents
 */

 routes.post('/incidents', IncidentController.create);
//  routes.get('/incidents', IncidentController.read);
 routes.get('/incidents', IncidentController.readLimit); 
 routes.delete('/incidents/:id', IncidentController.delete);

 /**
  * 
  * Routes Profile
  */

  routes.get('/profile', ProfileController.read);

  /**
   * 
   * Routes Session
   */

   routes.post('/sessions', SessionController.create);


module.exports = routes;