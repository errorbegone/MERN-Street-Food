const express = require('express');
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')
const blogRouter = require('./routes/blogRoutes')
// Password: DM5u5QB786Y1AkMj
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());
app.use('/user', userRouter.router);
app.use('/blogs', blogRouter.router);
mongoose.connect('mongodb+srv://thakareas:18YPNwYhuGLose5F@cluster0.lkl0n3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    app.listen(5000, () => {
        console.log("APP Started");
    });
}).catch(err => {
    console.error(err);
});
