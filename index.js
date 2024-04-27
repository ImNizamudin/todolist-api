const express = require('express')
const morgan = require('morgan')
const useRouter = require('./src/routes/users')
const useTodoList = require('./src/routes/todolist')

require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use('/users', useRouter)
app.use('/todolist', useTodoList)

const swaggerUi = require('swagger-ui-express');
const apiDocumentation = require('./apidocs.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})

module.exports = app