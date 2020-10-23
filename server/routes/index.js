var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Portfolio' });
});

/* GET home page. 
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express Portfolio' });
});

/* GET home page. 
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET home page. 
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET home page. 
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET home page. 
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});*/


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/products', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

//GET login
/* GET Route for displaying the Add page - CREATE Operation */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/login', indexController.processLoginPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/register', indexController.processRegisterPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/logout', indexController.performLogout);


module.exports = router;
