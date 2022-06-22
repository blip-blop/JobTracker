const express = require("express");
const router = express.Router();
const {
    addPostItems,
    updatePost,
    getPosts,
    deletePost,
    getPostById

} = require("../controllers/jobController");

const {
    protect,
    admin
} = require("../middleware/authM");

router.route('/addjob').post(addPostItems).get(addPostItems);

router
    .route('/job')
    .get(getPosts)
    .put(updatePost)
router
    .route('/:id')
    .delete(deletePost)
    .get(getPostById)
    .put(updatePost)

module.exports = router