const express = require('express')
const Category = require('../schema/categorySchema')
const Inventory = require('../Schema/inventoryItemSchema')

//Router
const categoryRouter = express.Router()

//Retrieving all Categories
categoryRouter.get("/", (req, res)=>{
    Category.find((error, result)=>{
        if(error){
            res.status(500).json({message: error.message})
        }
        if(result ===  null || result === []){
            res.status(404).json({message: error.message})
        }
        res.status(200).json({category_id: result})
    })
})
//Creating a new Category
categoryRouter.post('/', (req,res) => {
    const category = req.body
      Category.create( category, (error, result)=>{
            if(error){
                res.status(500).json({message: error.message})
            }
            if(result ===  null || result === []){
                res.status(404).json({message: error.message})
            }
            res.status(200).json({category_id: result})
        })
    })


//Retrieves all items within a category
categoryRouter.get("/:categoryid", (req, res)=>{
    const categoryid = req.params.categoryid
      Inventory.find({Category_Id: categoryid}, (error, result)=>{
          if(error){
              res.status(500).json({message: error.message})
          }
          if(result ===  null || result === []){
              res.status(404).json({message: error.message})
          }
          res.status(200).json({category_id: result})
      })
  })

  //Creating an item in a category
categoryRouter.post("/:categoryid", (req, res)=>{
    const category = req.body
    category.Category_Id = req.params.categoryid
    Inventory.create(category, (error, result)=>{
        if(error){
            res.status(400).json({message: error.message})
        }
        if(result ===  null || result === []){
            res.status(400).json({message: error.message})
        }
        res.status(201).json({category_id: result})
    })
})

module.exports = categoryRouter