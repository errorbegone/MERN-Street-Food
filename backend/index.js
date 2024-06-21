const express = require('express');
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')
const blogRouter = require('./routes/blogRoutes')

const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());
app.use('/user', userRouter.router);
app.use('/blogs', blogRouter.router);
mongoose.connect('URL').then(() => {
    app.listen(5000, () => {
        console.log("APP Started");
    });
}).catch(err => {
    console.error(err);
});
