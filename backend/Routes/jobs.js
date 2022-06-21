const express = require("express");
const router = express.Router();
const {
    addPostItems,

} = require("../controllers/jobController");

const {
    protect,
    admin
} = require("../middleware/authM");

router.route('/addjob').post(addPostItems).get(protect, admin, addPostItems);

module.exports = router