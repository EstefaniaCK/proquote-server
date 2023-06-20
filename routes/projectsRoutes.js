const router = require('express').Router();
const { getAllProjects } = require("../controllers/projectsController")

router.get('/projects', getAllProjects)
module.exports = router; 