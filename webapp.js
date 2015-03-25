const express = require('express');
const path = require('path');

// create express instance
const webapp = express();
const router = express.Router();

// configure view layer
webapp.set('view engine', 'jade');
webapp.set('views', path.join(__dirname, 'templates'));

// configure router
router.get('/', function(req, res) {
    res.render('index', {
        device: req.device
    });
});

webapp.use(express.static(process.cwd() + '/'));

// apply router to "/"
webapp.use('/', router);

// create and start a server instance
const server = webapp.listen(3001, function() {
    const a = server.address();

    console.log('webapp at http://%s:%s', a.address, a.port);
});
