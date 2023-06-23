const router = require('express').Router();
const { getAllProjects } = require("../controllers/projectsController")
const projectsController = require("../controllers/projectsController")

router.get('/', getAllProjects)

router.route("/:id/bids").get(projectsController.bids)

module.exports = router; 