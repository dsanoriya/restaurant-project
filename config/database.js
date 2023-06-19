/**
* this configuration for connect our application with mongodb
*/
const mongoose = require('mongoose')
let db = mongoose.connect('mongodb+srv://pratyushdeekshatanuj:012210@cluster0.t1aohpw.mongodb.net/',{ useNewUrlParser: true } , (err)=> {
    if (err) {
        console.log(err)
    } else {
        console.log('connected...')
    }
})
