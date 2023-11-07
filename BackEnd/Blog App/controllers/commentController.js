
// import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
    try{
        // fetch data from req.body
        const {post, user, body} = req.body;
        // we can add entries in db by 2 method 1 is .create
        // 2nd is using .save Not: for .save we need to create 
        // object first
        const comment = new Comment({
            post, user, body
        });

        const savedComment = await comment.save();

        // find the post,add the comment's id to post's comment's array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments : savedComment._id}}, {new : true})
        .populate("comments")//populate the comments array with comment documents
        .exec();

        res.status(200).json({
            post : updatedPost,
            success : true,
            message : "Comments created successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            error : error,
            message : "Error while creating comments entry",
        })
    }
}