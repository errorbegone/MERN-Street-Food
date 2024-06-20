const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController')
router.get('/', blogController.getAllBlogs);
router.post('/add', blogController.postBlog);
router.get('/:id', blogController.getOneBlog);
exports.router = router