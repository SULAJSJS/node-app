const express = require('express');
const {
  getPost,
  deletePost,
  getPosts,
  getEditPost,
  editPost,
  addPost,
  getAddPost,
} = require('../controllers/post-controller');

const router = express.Router();

router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost);
router.get('/posts', getPosts);
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', editPost);
router.post('/add-post', addPost);
router.get('/add-post', getAddPost);

module.exports = router;
