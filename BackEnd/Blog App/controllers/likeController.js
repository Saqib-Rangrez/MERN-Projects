const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost =  async (req, res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({
            post,user
        });

        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes : savedLike._id}}, {new : true}).populate("likes").exec();

        res.status(200).json({
            success : true,
            post : updatedPost,
            message : "Liked marked"
        })
    }
    catch(error){
        res.status(400).json({
            success : false,
            error : error,
            message : "Error while marking the like"
        })
    }
};

exports.unlikePost = async (req, res) => {
    try{
        const {post, like} = req.body;
        // find and delete the like colllection mese
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        const updatedPost = await Post.findByIdAndUpdate(post, {$pull : {likes : deletedLike._id}}, {new : true}).populate("likes").populate("comments").exec();

        res.status(200).json({
            success : true,
            post : updatedPost,
            message : "Unliked Successfully"
        })
    }
    catch(error){
        res.status(400).json({
            success : false,
            error : error,
            message : "Error while unliking post"
        })
    }
}