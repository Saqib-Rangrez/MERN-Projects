
const File = require("../models/File");
const cloudinary = require('cloudinary').v2;
const fs = require('fs'); 

//localfileupload 
exports.localFileUpload = async (req, res) => {
    try{
        // fetch file 
        const file = req.files.file;
        console.log("File Agyi", file);
        
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`; //extension
        file.mv(path, (err) => {
            console.log(err);
        });

        res.json({
            success : true,
            message : "Local file Uploaded Successfully."
        });
    }catch(error){
        console.log(error);
    }
} 

function isFileTypeSupported (type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder,quality) {

    const options = {folder};

    if(quality){
        options.quality = quality;
    }
    
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// image upload to cloudinary
exports.imageUpload = async (req,res) => {
    try {
        const {name, tags, email} = req.body;
        console.log(name,tags,email);
        const file = req.files.imageFile;
        console.log(file);

        // validation
        const supportedTypes = ['jpg','png','jpeg'];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success : false,
                message : "File format not supported."
            })
        }

        // const tempFilePath = __dirname + "/files/"+Date.now() + `.${file.name.split('.')[1].toLowerCase()}`;

        // file.mv(tempFilePath, (err) => {
        //     console.log(err);
        // })
        
        // save file to cloudinary
        const response = await uploadFileToCloudinary(file, "fileUploadTutorial");

        // save entry to db
        const fileData = await File.create({
            name, 
            tags, 
            email, 
            imageUrl:response.secure_url
        })


        res.status(200).json({
            success : true,
            imageUrl : response.secure_url,
            message : "Image uploaded successfully."
        })

    }catch(error){
        console.error(error);

        res.status(400).json({
            success : false,
            message : "something went wrong."
        })
    }
}

// video upload to cloudinary
exports.videoUpload = async (req, res) => {
    try{
        const {name, tags, email} = req.body;
        console.log(name,email,tags);

        const file = req.files.videoFile;

        // validation
        const supportedTypes = ['mp4','mov'];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            res.status(400).json({
                success : false,
                message : "File format not supported"
            })
        }

        // save file to cloudinary
        const response = await uploadFileToCloudinary(file, "fileUploadTutorial");
        console.log(response);

        const fileData = await File.create({
            name,
            email,
            tags,
            imageUrl : response.secure_url
        })

        res.status(200).json({
            success : true,
            message : "Video Uploaded Successfully.",
            videoUrl : response.secure_url
        })

    }catch(error){
        console.error(error);
        res.status(400).json({
            success : false,
            message : "Something went wrong"
        })
    }
}

// reducer size 

exports.imageSizeReducer = async (req, res) => {
    try{
        const {name, email, tags} = req.body;

        const file = req.files.imageFile;

        const supportedTypes = ['jpg','jpeg','png'];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            res.status(400).json({
                success : false,
                message : "File format not supported"
            })
        }

        // save file to cloudinary
        const response = await uploadFileToCloudinary(file, "fileUploadTutorial", 30);
        console.log(response);

        const fileData = await File.create({
            name,
            email,
            tags,
            imageUrl : response.secure_url
        })

        res.status(200).json({
            success : true,
            message : "Video Uploaded Successfully.",
            videoUrl : response.secure_url
        })

    }catch(err){
        console.error(err);
        res.status(400).json({
            success : false,
            message : "Something went wrong"
        });
    }
}