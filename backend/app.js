import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import './src/config'

import Category from './src/routes/category'

dotenv.config({path: `./${process.env.NODE_ENV}.env`})

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cors())
app.use('/category', Category)
app.listen(process.env.PORT)