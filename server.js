const express = require('express');
const app = express();
const mongoose = require('mongoose');

//To parse form-data/multipart
const multer = require('multer');
var upload = multer();

//Database connection
require('./mongo');

//Models
require('./model/Data');
require('./model/Register');

//Middleware
app.use(upload.array()); 

//Routes
app.use('/register', require('./routes/Register'));
app.use('/data', require('./routes/Data'));




app.listen(7778, () => {
    console.log('Server started successfully 7778.')
});                


// Sample Methods
// app.get('/data', async (req, res) => {
//     try {
//         const posts = await Post.find({})
//         res.send(posts)
//     } catch (error) {
//         res.status(500);
//     }
// })

// app.get('/user/:id', async (req, res) => {
//     try {
//         const user = await Post.findOne({ _id: req.params.id });
//         res.send(user);
//     } catch (error) {
//         res.status(500);
//     }
// })

// app.put('/user/:id', async (req, res) => {
//     try {
//         const user = await Post.findByIdAndUpdate({ 
//             _id: req.params.id
//         }, req.body,{
//             new : true,
//             runValidators : true
//         });
//         res.send(user)
//     } catch (error) {
//         res.status(500);
//     }
// })
// app.delete('/user/:id', async (req, res) => {
//     try {
//         const user = await Post.findByIdAndRemove({ 
//             _id: req.params.id
//         });
//         res.send({"message" :  "User deleted successfully",user})
//     } catch (error) {
//         res.status(500);
//     }
// })

// app.post('/login', async (req, res) => {
//     try {
//         const login_data = new Post();
//         login_data.username = req.body.username;
//         login_data.password = req.body.password;

//         await login_data.save();
//         res.send(login_data);

//     } catch (error) {
//         res.status(500);
//     }
// })