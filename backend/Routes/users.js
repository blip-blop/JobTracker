const express = require('express')
const router = express.Router()
const {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} = require('../controllers/userController')

const {
    protect,
    admin,
} = require("../middleware/authM")

router.route('/register').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router
    .route('/profile')
    .get(admin, protect, getUserProfile)
    .put(admin, protect, updateUserProfile)
router
    .route('/:id')
    .delete(deleteUser)
    .get(getUserById, protect, admin)
    .put(updateUser, protect, admin)

module.exports = router