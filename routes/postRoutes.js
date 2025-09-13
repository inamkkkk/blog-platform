const express = require('express');
const postController = require('../controllers/postController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authenticate, postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.put('/:id', authenticate, postController.updatePost);
router.delete('/:id', authenticate, postController.deletePost);

module.exports = router;