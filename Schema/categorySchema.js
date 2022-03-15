const mongoose = require('mongoose')

const categoryNameSchema = new mongoose.Schema({
    Catergory_Name: {type: String, required: true}
})
  

const categoryNameModel = mongoose.model('categoryNames', categoryNameSchema)

module.exports = categoryNameModel