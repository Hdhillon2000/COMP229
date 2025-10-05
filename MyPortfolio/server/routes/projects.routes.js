
const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects.controller');

router.get('/', projectsCtrl.getAllProjects);
router.get('/:id', projectsCtrl.getProjectById);
router.post('/', projectsCtrl.createProject);
router.put('/:id', projectsCtrl.updateProject);
router.delete('/:id', projectsCtrl.deleteProject);
router.delete('/', projectsCtrl.deleteAllProjects);

module.exports = router;
