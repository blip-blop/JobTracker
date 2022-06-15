const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const User = require('../Models/user')


//the (next) argument is to let the next middleware executes,
// after this one has done if u don't put next it will stuck resulting an auth failure !

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('invalid token')
    }
})


const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next()
    } else {
        res.status(401)
        throw new Error('not authorized')
    }
}

export {
    protect,
    admin
}