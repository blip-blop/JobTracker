const jwt = require('jsonwebtoken')

const TokenGenerator = (id) => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: '14d',
    })
}

module.exports = TokenGenerator;