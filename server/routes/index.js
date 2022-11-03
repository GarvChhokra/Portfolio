var express = require("express");
var router = express.Router();
let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/home", indexController.displayHomePage);

/* GET About Us page. */
router.get("/aboutme", indexController.displayAboutPage);

/* GET Products page. */
router.get("/projects", indexController.displayProductsPage);

/* GET Services page. */
router.get("/skills", indexController.displaySkillsPage);

/* GET Contact Us page. */
router.get("/contactme", indexController.displayContactPage);
router.get("/busContact", indexController.displayBusPage);
///Extra Ends
// Displaying Login Page
router.get("/logins", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/logins", indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);
module.exports = router;