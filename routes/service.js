const route = require('express').Router()

route.get('/service',(req,res)=>{
    res.render('service')
})

module.exports = route