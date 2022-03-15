const express = require('express')
const Inventory = require('../schema/todoSchema')

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


//Inventory/Item Get
inventoryRouter.get("/item", (req, res)=>{
      Inventory.find((error, result)=>{
          if(error){
              res.status(500).json({message: error.message})
          }
          if(result ===  null || result === []){
              res.status(404).json({message: error.message})
          }
          res.status(200).json({inventory_item: result})
      })
  })

  //Inventory/Item Post
inventoryRouter.post("/item", (req, res)=>{
    const inventory = req.body
    inventory.created_at = Date.now()
    inventory.sold = false
    Inventory.create(item, (error, result)=>{
        if(error){
            res.status(400).json({message: error.message})
        }
        if(result ===  null || result === []){
            res.status(400).json({message: error.message})
        }
        res.status(201).json({inventory_item: result})
    })
})

//Inventory/Item Put
inventoryRouter.put("/:item", (req, res)=>{
    const item = req.params.item
    const update = req.body

    Inventory.findByIdAndUpdate(item, update, {new: true}, (error, result)=>{
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
inventoryRouter.delete("/:item", (req, res)=>{
    const item = req.params.item
    Inventory.findByIdAndDelete(item, (error, result)=>{
        if(error){
            res.status(404).json({message: error.message})
        }
        res.status(204).json({status: "deleted"})
    })
})

module.exports = inventoryRouter