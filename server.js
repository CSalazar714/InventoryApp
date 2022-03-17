const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongooseConnect = require('./config')
const inventoryRouter = require('./Routes/inventoryRoutes')
const categoryRouter = require('./Routes/categoryRoutes')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

dotenv.config()


app.use(cors({
    origin: "*"
}))
app.use(bodyParser.json())
app.use(morgan('dev'))


app.use('/inventory', inventoryRouter)
app.use('/category', categoryRouter)


const PORT = process.env.PORT || 4040


app.use('/', (req, res)=>{
    res.status(200).json({message: "API UP!"})
})


app.listen(PORT, ()=>{
    console.log(PORT)
    mongooseConnect()
})