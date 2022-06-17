//this is the user controller from it's name it has all the functions
// that u need to preform CRUD ops on users 

const asyncHandler = require('express-async-handler');
const User = require('../Models/user');
const TokenGenerator = require("../jwt-token/token-gen")
// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
    const {
        email,
        password
    } = req.body

    const user = await User.findOne({
        email
    })
    //matching the entered password with the hashed one in the db
    if (user && (await user.matchPassword(password))) {
        //res data
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            zip: user.zip,
            email: user.email,
            isAdmin: user.isAdmin,
            token: TokenGenerator(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
    const {
        firstName,
        email,
        password,
        lastName,
        phone,
        zip
    } = req.body

    const userExists = await User.findOne({
        email
    })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        firstName,
        email,
        password,
        lastName,
        phone,
        zip
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            firstName: user.name,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            zip: user.zip,
            isAdmin: user.isAdmin,
            token: TokenGenerator(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            zip: user.zip,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.firstName = req.body.firstName || user.firstName
        user.lastName = req.body.lastName || user.lastName
        user.phone = req.body.phone || user.phone
        user.zip = req.body.zip || user.zip
        user.email = req.body.email || user.email

        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            firstname: updatedUser.firstName,
            lastName: updateUser.lastName,
            email: updateUser.email,
            zip: updateUser.zip,
            phone: updateUser.phone,
            isAdmin: updatedUser.isAdmin,
            token: TokenGenerator(updatedUser._id),
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        await user.remove()
        res.json({
            message: 'User removed'
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')

    if (user) {
        res.json(user)
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin

// remember to try user argument insted of rewriting the data 
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        user.firstName = req.body.firstName || user.firstName
        user.lastName = req.body.lastName || user.lastName
        user.phone = req.body.phone || user.phone
        user.zip = req.body.zip || user.zip
        user.email = req.body.email || user.email
        const updatedUser = await user.save()

        res.json({
            user
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})
module.exports = {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
}