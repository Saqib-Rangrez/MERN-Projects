const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({
            title, body
        })
        const savedPost = await post.save();
        res.status(200).json({
            success : true,
            post : savedPost,
            message : "Post created Successfully"
        });
    }
    catch(error){
        return res.status(400).json({
            error : error,
            message : "Error while creating post"
        });
    }
}

exports.getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec(); 
        res.status(200).json({
            success : true,
            posts : posts,
            message : "All Posts are Fetched Successfully"
        });
    }
    catch(error){
        return res.status(400).json({
            error : error,
            message : "Error while fetching posts"
        });
    }
}

exports.getPostById = async (req, res) => {
    try{
        const id = req.params.id;
        const posts = await Post.findById(id).populate("likes").populate("comments").exec(); 
        res.status(200).json({
            success : true,
            post : savedPost,
            message : "Post Fetched Successfully"
        });
    }
    catch(error){
        return res.status(400).json({
            error : error,
            message : "Error while fetching post"
        });
    }
}