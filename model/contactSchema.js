const mongoose = require("mongoose")


const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },

    email: {
        type:String,
        require:true
    }
    , subject: {
        type: String,
        require:true
    }
    , message: {
        type: String,
        
    },


})
module.exports = mongoose.model("ContactUs",contactUsSchema)