const express = require('express')
const Inventory = require('../schema/inventoryItemSchema')

//Router
const inventoryRouter = express.Router()

//Finding Inventory
inventoryRouter.get("/", (req, res)=>{
    Inventory.find((error, result)=>{
        if(error){
            res.status(500).json({message: error.message})
        }
        if(result ===  null || result === []){
            res.status(404).json({message: error.message})
        }
        res.status(200).json({inventory_list: result})
    })
})


//Inventory/Itemid Get
inventoryRouter.get("/inventory/:itemid", (req, res)=>{
    const item = req.params.itemid
      Inventory.find(item, (error, result)=>{
          if(error){
              res.status(500).json({message: error.message})
          }
          if(result ===  null || result === []){
              res.status(404).json({message: error.message})
          }
          res.status(200).json({inventory_item: result})
      })
  })



//Inventory/Item Put
inventoryRouter.put("/inventory/:itemid", (req, res)=>{
    const itemid = req.params.itemid
    const update = req.body

    Inventory.findByIdAndUpdate(itemid, update, {new: true}, (error, result)=>{
        if(error){
            res.status(500).json({message: error.message})
        }
        if(result ===  null || result === []){
            res.status(404).json({message: error.message})
        }
        res.status(202).json({inventory_item: result})
    })
})

//Inventory/Item Delete
inventoryRouter.delete("/inventory/:itemid", (req, res)=>{
    const itemid = req.params.itemid
    Inventory.findByIdAndDelete(itemid, (error, result)=>{
        if(error){
            res.status(404).json({message: error.message})
        }
        res.status(204).json({status: "deleted"})
    })
})

module.exports = inventoryRouter