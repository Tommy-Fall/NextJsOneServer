const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.json({message: "This message is as;dlfkjas;dflkj"})
})


module.exports = router