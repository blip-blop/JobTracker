const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

    phone: {
        type: Number,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
    selectedCity: {
        type: String,
        required: false,
    },
    zip: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: false,
    },
});

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next()
    }
    //the slat role is : for exapmle 2 users used the same password the hashes will be the same
    //and if a threat actor cracks the hash of a user he can compare it to others and u know xd
    //so slat is going to to make every hash unique even if users used the same password 
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("User", userSchema);
module.exports = User;