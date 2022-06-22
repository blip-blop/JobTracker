const asyncHandler = require("express-async-handler");
const Post = require("../Models/post");
const {
    post
} = require("../Routes/jobs");

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

const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (post) {
        post.jobTitle = req.body.jobTitle || post.jobTitle
        post.jobDate = req.body.jobDate || post.jobDate
        post.jobLocation = req.body.jobLocation || post.jobLocation
        post.jobDescription = req.body.jobDescription || post.jobDescription

        const updatedPost = await post.save()

        res.json({
            post
        })
    } else {
        res.status(404)
        throw new Error('invalid job offer')
    }
})

const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (post) {
        await post.remove()
        res.json({
            message: 'job offer  removed'
        })
    } else {
        res.status(404)
        throw new Error('job offer not found')
    }
});

const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
});

const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (post) {
        res.json(post)
    } else {
        res.status(404)
        throw new Error('job not found')
    }
})



module.exports = {
    addPostItems,
    updatePost,
    getPosts,
    deletePost,
    getPostById
}


// @desc    modify a job offer
// @route   POST /api/jobs
// @access  private (employer)