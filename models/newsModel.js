const mongoose = require('mongoose')
const newSchema = mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        title:{
            type:String,
            required:true

        },
        outline:
        {
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        DateofUpload:{
            type:Date,
            default:Date.now()
        },
        newsID:{
            type:String,
            required:true,
            unique:true
        }
        
    }
)

module.exports = mongoose.model('newsModel', newSchema)