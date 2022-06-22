const express = require("express");
const router = express.Router();
const {
    addPostItems,

} = require("../controllers/jobController");

const {
    protect,
    admin
} = require("../middleware/authM");

router.route('/addjob').post(addPostItems).get(addPostItems);
router
    .route('/joblist')
    .get(protect, )
    .put(protect, )

module.exports = router