const model = require('../model/userModel');
const bcrypt = require('bcrypt')
const User = model.User;
exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
  };

exports.createUser = async(req, res) => {
    const user = new User(req.body);
    const hash = bcrypt.hashSync(req.body.password, 10);
    user.password = hash;
    user.blogs = [];
    user.save();
    res.status(201).json(user);
  }
  
exports.loginUser = async(req, res) => {
    let user = await User.findOne({email: req.body.email});
    if (!user){
        res.status(404)
        
    }
    else{
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.status(201).json({message: "User loged in"});
        }
        else{
            res.status(404).json({message:"Invalid Password."})
        }

    }
}

exports.getUserBlogs = async (req, res) => {
    const userId = req.params.id;
    let userBlogs = await User.findById(userId).populate("blogs");
    if(user)
        {
            res.status(201).json({userBlogs})
        }
    else{
        res.status(404).json({message:"this user des not have any active blogs"})
    }
}

