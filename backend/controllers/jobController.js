const asyncHandler = require("express-async-handler");
const Post = require("../Models/post");

// @desc    Post a job
// @route   POST /api/jobs/addjob
// @access  Private/Admin
const addPostItems = asyncHandler(async (req, res) => {
    const {
        jobTitle,
        jobDate,
        jobLocation,
        jobDescription
    } = req.body

    if (req.body && req.body.length === 0) {
        res.status(400)
        throw new Error('No post !!')
        return
    } else {
        const post = new Post({
            jobTitle,
            jobDate,
            jobLocation,
            jobDescription
        })

        const createdPost = await post.save()

        res.status(201).json(createdPost)
    }
})

module.exports = {
    addPostItems
}


// @desc    modify a job offer
// @route   POST /api/jobs
// @access  private (employer)