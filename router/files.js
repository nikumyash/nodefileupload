const router = require('express').Router();
const mongoose = require('mongoose');
const URLShortner = require('./../models/upload');
const fs = require('fs');
const path = require('path')


router.get('/:id',async (req,res)=>{
    const file = await URLShortner.findOne({link:req.params.id});
    const fname = file.fileName;
    res.download(path.join(__dirname, './../../storage', fname));
})



module.exports = router;
