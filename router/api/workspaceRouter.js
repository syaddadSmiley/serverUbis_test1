const router = require('express').Router();
const WorkspaceController = require('../../controllers/WorkspaceController');
const auth = require('../../utils/auth');

router.get('/pagination', WorkspaceController.getAllWorkspaces);
router.get('/:id', WorkspaceController.getWsById);

router.post('/create', WorkspaceController.createWorkspaces);

module.exports = router;