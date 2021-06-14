const mongoose= require('mongoose');

const personSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },  
})

module.exports=mongoose.model('Person',personSchema)
