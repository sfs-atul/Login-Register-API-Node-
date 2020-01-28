const router = require('express').Router();
const mongoose = require('mongoose');


const Post = mongoose.model('Post');


router.get('/', async (req, res) => {
    try {
        const post = await Post.find({});
        res.send(post);
    } catch (error) {
        res.status(500);
    }
});
module.exports = router;         