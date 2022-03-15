const mongoose = require('mongoose')

const inventoryItemSchema = new mongoose.Schema({
    Item_Name: {type: String, required: true},
    Catergory_Id: {type: String, required: true},
    Description: {type: String, required: true},
    Location: {type: String, required: true},
    Date_Listed: {type: Date, required: true},
    Quantity: {type: Number, required: true},
    Sold: {type: Boolean, default: false, required: true}
})

const inventoryItemModel = mongoose.model('inventoryItems', inventoryItemSchema)

module.exports = inventoryItemModel