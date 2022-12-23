const route = require('express').Router()

route.get('/about',(req,res)=>{
    res.render('about')
})



module.exports = route