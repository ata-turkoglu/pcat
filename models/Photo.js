const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    title: String,
    description: String,
    image:String,
    date:{
        type:Date,
        default:Date.now
    }
  });

  module.exports=mongoose.model("Photo",PhotoSchema)