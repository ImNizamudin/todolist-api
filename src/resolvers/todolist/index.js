const knex = require('../../databases')
const { check, validationResult } = require('express-validator');

const createTodoList = async (req, res) => {
    const { title, description, user_id, done } = req.body;
    
    await check('title').isString().notEmpty().run(req)
    await check('description').isString().notEmpty().run(req)

    const result = validationResult(req)
    if (!result.isEmpty()) return res.status(400).json({errors: result.array()})

    const todolist = await knex('todolist').insert({
        user_id,
        title,
        description
    })
    if (todolist.length == 0) return res.status(400).json({message: 'Failed Create Todo List'})
    return res.status(200).json({message: 'Success Create Todo List'})
}

const getTodoLists = async (req, res) => {
    const todolist = await knex('todolist')
    if (todolist.length == 0) return res.status(404).json({message: 'Todo List is Empty'})
    return res.status(200).json({data: todolist})
}

const getTodoListByUser = async (req, res) => {
    const { user_id } = req.params
    const todolist = await knex('todolist').where('user_id', user_id)
    if (todolist.length == 0) return res.status(404).json({message: 'Todo List is Empty'})
    return res.status(200).json({data: todolist})
}

const getTodoList = async (req, res) => {
    const { id } = req.params
    const todolist = await knex('todolist').where('id', id).first()
    if (!todolist) return res.status(404).json({message: 'Todo List Not Found'})
    return res.status(200).json({data: todolist})
}

const updateTodoList = async (req, res) => {
    const { id } = req.params
    const { title, description, done } = req.body

    await check('title').isString().notEmpty().run(req)
    await check('description').isString().notEmpty().run(req)

    const result = validationResult(req)
    if (!result.isEmpty()) return res.status(400).json({errors: result.array()})

    const todolist = await knex('todolist').where('id', id).update({
        title,
        description,
        done
    })
    if (todolist.length == 0) return res.status(400).json({message: 'Failed Update Todo List'})
    return res.status(200).json({message: 'Success Update Todo List'})
}

const deleteTodoList = async (req, res) => {
    const { id } = req.params
    const todolist = await knex('todolist').where('id', id).del()
    if (todolist.length == 0) return res.status(400).json({message: 'Failed Delete Todo List'})
    return res.status(200).json({message: 'Success Delete Todo List'})
}

module.exports = { createTodoList, getTodoLists, getTodoList, getTodoListByUser, updateTodoList, deleteTodoList }