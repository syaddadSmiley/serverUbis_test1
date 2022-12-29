const router = require('express').Router();
const WorkspaceController = require('../../controllers/WorkspaceController');
const { isAuthenticatedAdmin } = require('../../utils/auth');
const auth = require('../../utils/auth');

router.get('/pagination', WorkspaceController.getAllWorkspaces);
router.get('/:id', WorkspaceController.getWsById);
router.get('/types/detail', WorkspaceController.getTypeWs);

router.delete('/:id', isAuthenticatedAdmin, WorkspaceController.deleteWsById);

router.post('/create', isAuthenticatedAdmin, WorkspaceController.createWorkspaces);

module.exports = router;