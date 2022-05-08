import dotenv from 'dotenv'
dotenv.config({ silent: process.env.NODE_ENV === 'production' })

import express from 'express'
import expressLayouts from 'express-ejs-layouts'

import { dirname } from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))
// app.use(logger)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

import mongoose from 'mongoose';
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

import indexRouter from './routes/index.js'
app.use('/', indexRouter)

import userRouter from './routes/users.js'
app.use('/users', userRouter)

// function logger(req, res, next) {
//     console.log(req.originalUrl)
//     next()
// }

app.listen(process.env.PORT || 3000, () => {
    console.log('server is started on ' + (process.env.PORT || 3000))
})
