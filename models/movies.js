var mongoose = require('mongoose')

var comSchema = mongoose.Schema({
    name : String,
    
})

var comModel = mongoose.model('com', comSchema)

module.exports = comModel;