const jwt = require('jsonwebtoken')

const TokenGenerator = (id, email) => {
    return jwt.sign({
        id,
        email
    }, process.env.JWT_SECRET, {
        expiresIn: '14d',
    })
}

module.exports = TokenGenerator;