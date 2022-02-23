const express = require('express')
const router = express.Router()
const {v4: uuidv4 } = require('uuid')

// Just keep them in memory
const tasks = {}

/* GET tasks list. */
router.get('/:user/tasks', function(req, res, next) {
    const user = req.params.user
    let userTasks = tasks[user] ?? []
    res.json(Object.values(userTasks))
})

/* POST a new task */
router.post('/:user/tasks', function(req, res, next) {
    const user = req.params.user

    if (!tasks[user]) {
        tasks[user] = {}
    }

    let task = {
        id: uuidv4(),
        text: req.body.text,
        completed: false
    }

    tasks[user][task.id] = task
    res.json(task)
})

/* GET specific task. */
router.get('/:user/tasks/:id', function(req, res, next) {
    const user = req.params.user
    const id = req.params.id
    if (!tasks[user] || !tasks[user][id]) {
        res.status(404).json({ "error": 'Task not found'})
        return
    }

    let userTasks = tasks[user] ?? {}
    res.json(userTasks[id] ?? {})
})

/* PATCH specific task. */
router.patch('/:user/tasks/:id', function(req, res, next) {
    const user = req.params.user
    const id = req.params.id
    if (!tasks[user] || !tasks[user][id]) {
        res.status(404).json({ "error": 'Task not found'})
        return
    }

    const completed = req.body.completed ?? tasks[user][id].completed
    const text = req.body.text || tasks[user][id].text

    tasks[user][id].completed = completed
    tasks[user][id].text = text

    res.json(tasks[user][id])
})

/* DELETE specific task. */
router.delete('/:user/tasks/:id', function(req, res, next) {
    const user = req.params.user
    const id = req.params.id
    if (!tasks[user] || !tasks[user][id]) {
        res.status(404).json({ "error": 'Task not found'})
        return
    }

    let task = tasks[user][id]
    delete tasks[user][id]

    res.json(task)
})

module.exports = router
