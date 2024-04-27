const express = require('express')
const { createTodoList, getTodoLists, getTodoList, getTodoListByUser, updateTodoList, deleteTodoList } = require('../../resolvers/todolist')

const router = express.Router()

router.post('/', createTodoList)
router.get('/', getTodoLists)
router.get('/:id', getTodoList)
router.get('/user/:user_id', getTodoListByUser)
router.put('/:id', updateTodoList)
router.delete('/:id', deleteTodoList)

module.exports = router