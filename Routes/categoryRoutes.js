const express = require('express')
const Category = require('../schema/categorySchema')

//Router
const categoryRouter = express.Router()

//Looking up Category
categoryRouter.get("/", (req, res)=>{
    Category.find((error, result)=>{
        if(error){
            res.status(500).json({message: error.message})
        }
        if(result ===  null || result === []){
            res.status(404).json({message: error.message})
        }
        res.status(200).json({inventory_list: result})
    })
})

categoryRouter.post('/', (req,res) => {
      Category.find((error, result)=>{
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
categoryRouter.get("/:categoryid", (req, res)=>{
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

  //Inventory/Item Post
categoryRouter.post("/categoryid", (req, res)=>{
    const category = req.body
    category.created_at = Date.now()
    category.sold = false
    category.category_id = req.params.categoryid
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