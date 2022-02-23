#mpwar-tasks

Welcome to mpwar-tasks, a simple API for your last challenge.

##Endpoints

Parameters:

- `:user` - Identifies the user's task list.

- `:id` - Identifies a specific task.


###Get all tasks

Returns an array containing the information about all of a user's tasks.

`GET /users/:user/tasks`

Response

```
[
    {
        "id": "8d20b072-6d12-4675-91ed-83f99d20ce12",
        "text": "Finish the JS challenge",
        "completed": true
    },
        ...
        
    {
        "id": "792eb8ee-e87e-4abf-a0be-06af0e179981",
        "text": "Sleep",
        "completed": false
    },
]
```

###Post a new task

Receives the text for a new task and creates it. Returns an object containing the information about the newly created task, including its assigned id and status (not completed).

`POST /users/:username/tasks`

Body

```
{
    "text": "Complete the Pokédex"
}
```

Response

```
{
    "id": "513ffe90-4b1a-4ab7-82fb-c46a872af44b",
    "text": "Complete the Pokédex",
    "completed": false
}
```

###Get a specific task

Returns an object containing the information about a single task, or errors out (404) if it doesn't exist.

`GET /users/:username/tasks/:id`

Response

```
{
    "id": "e7614089-c26d-4456-bdcb-d2d349c3c24a",
    "text": "Hacer la compra",
    "completed": false
}
```

###Patch a specific task

Modifies the text and/or completion status of a specific task and returns it, or errors out (404) if it doesn't exist.

`PATCH /users/:username/tasks/:id`

Body

```
{
    "text": "Complete the Pokédex in Legends Arceus",
    "completed": true
}
```

Response

```
{
    "id": "513ffe90-4b1a-4ab7-82fb-c46a872af44b",
    "text": "Complete the Pokédex in Legends Arceus",
    "completed": true
}
```

###Delete a specific task

Removes a specific task and returns it, or errors out (404) if it doesn't exist.

`DELETE /users/:username/tasks/:id`

Response

```
{
    "id": "f177edcd-a484-4122-bc99-85886e609501",
    "text": "This task has been deleted",
    "completed": false
}
```