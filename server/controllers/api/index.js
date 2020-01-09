const apiControllers = require('express').Router();

apiControllers.use('/mail', require('./mailController'))
apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/fields', require('./fieldController'));
apiControllers.use('/reservation', require('./reservationController'));

module.exports = apiControllers;
