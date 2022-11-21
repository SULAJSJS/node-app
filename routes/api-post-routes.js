const express = require('express');
const {
  getPost,
  deletePost,
  getPosts,
  editPost,
  addPost,
} = require('../controllers/api-post-controller');

const router = express.Router();

// Get all posts
router.get('/api/posts', getPosts);
// Add New Post
router.post('api/post', addPost);
// Get Post by ID
router.get('/api/posts/:id', getPost);
// Delete Post by ID
router.delete('/api/post/:id', deletePost);
// Update Post by ID
router.put('/api/post/:id', editPost);

module.exports = router;
