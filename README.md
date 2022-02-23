#mpwar-tasks

Welcome to mpwar-tasks, a simple API for your last challenge.

##Endpoints

*Common parameters:*

- `:user` - Identifies the user's task list.

- `:id` - Identifies a singular task.

This API offers the following endpoints:

###Get all tasks

Returns an array containing the information about all of a user's tasks.

`GET /users/:user/tasks`

Response

```
[
    {
        "id": "8d20b072-6d12-4675-91ed-83f99d20ce12",
        "text": "Acabar el reto de JS",
        "completed": true
    },
        ...
        
    {
        "id": "792eb8ee-e87e-4abf-a0be-06af0e179981",
        "text": "Dormir",
        "completed": false
    },
]
```


###Get a specific task

Returns an object containing the information about a single user task.

`GET /users/:username/tasks/:id`

Response

```
[
    {
        "id": "8d20b072-6d12-4675-91ed-83f99d20ce12",
        "text": "Acabar el reto de JS",
        "completed": true
    },
        ...
        
    {
        "id": "792eb8ee-e87e-4abf-a0be-06af0e179981",
        "text": "Dormir",
        "completed": false
    },
]
```