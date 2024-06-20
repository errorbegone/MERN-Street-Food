const blogModel = require('../model/blogModel');
const Blog = blogModel.Blog;
const userModel = require('../model/userModel')
const User = userModel.User;

const express = require('express');
const mongoose = require('mongoose');

exports.getAllBlogs = async (req, res) =>{
    const blogs = await Blog.find();
    res.status(201).json({blogs})
}

exports.postBlog = async (req, res) => {
    const { title, description, image, user } = req.body;

    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (err) {
        return res.status(500).json({ message: "Fetching user failed, please try again later." });
    }

    if (!existingUser) {
        return res.status(400).json({ message: "Unable to find the user" });
    }

    const blog = new Blog({
        title,
        description,
        image,
        user
    });

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({ session });
        existingUser.blogs.push(blog);
        await existingUser.save({ session });
        await session.commitTransaction();
        session.endSession();
        res.status(201).json({ blog });
    } catch (err) {
        return res.status(500).json({ message: "Creating blog failed, please try again." });
    }
};

exports.getOneBlog = async(req, res, next) => {
    const id = req.params.id;
    const p = await Blog.findById({id: id})
    if(p){
        res.status(200).json({p})
    }
    else{
        res.status(404).json({message: "No blog found"})
    }
}

exports.deleteBlog = async(req, res, next) => {
    const id_no = req.params.id;
    
    const blog = await Blog.findById(id_no)
    if (blog){
        await(Blog.findOneAndDelete(blog));
        res.status(201);
    }
    else{
        res.status(404).json({message:" Unable to delete"})
    }
    
}