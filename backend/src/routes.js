const express =  require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes =  express.Router();

/**SessionController */
routes.post('/sessions', SessionController.create);


/**OngController */
routes.get('/ongs',OngController.index); 
routes.post('/ongs', OngController.create);

/**IncidentController */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

/**Profilecontroller */
routes.get('/profile', ProfileController.index);

module.exports = routes;