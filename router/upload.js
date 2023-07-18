const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const {v4:uuid} = require('uuid');
const URLShortner = require('./../models/upload');


const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname + './../../storage/'))
    },
    filename: async (req, file, cb) => {
        const link = uuid();
        const fname = Date.now() +encodeURIComponent(file.originalname);
        const ushot = new URLShortner({link:link,fileName:fname});
        await ushot.save();
        req.flink = link;
        cb(null, fname)
    }
});
const upload = multer({storage:storage});
router.post('/',upload.single('file'),async(req,res)=>{
    res.json({link:'http://localhost:3000/files/'+req.flink,message:"Completed"});
})


module.exports = router;
