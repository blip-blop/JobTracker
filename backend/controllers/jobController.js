const asyncHandler = require(" asyncHandler");
const userSchema = require("../Models/post");


const PostjobItems = asyncHandler(async (req, res) => {
    const {
        jobTitle,
        jobLocation,
        jobDescription,
        jobDate,
    } = req.body

    if (jobItems && orderItems.length === 0) {
        res.status(400)
        throw new Error("you can't add empty job details...")
        return
    } else {
        const job = new Job({
            jobItems,
            user: req.user._id,
            jobTitle,
            jobLocation,
            jobDescription,
            jobDate,
        })

        res.status(201).json(createdPost)
    }
})
const createdPost = await post.save()

export {
    jobItems,
    user_id,
    jobTitle,
    jobLocation,
    jobDescription,
    jobDate,
}