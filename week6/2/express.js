const express = require('express');
const app = express();
const port = '8081';
const users = [{ id: 1, name: 'Joro', age: 24 }, { id: 2, name: 'Sasho', age: 25 }];

/*  Task 2 
    Create express server and rewrite the functionality from "Task 1", using express module. 
*/

app.use(express.json()) // Parse incoming request bodies in a middleware before your handlers

app.get('/users', (req, res, next) => {
    res.send(users);
})

app.get('/user/:name', (req, res, next) => {
    const { name } = req.params;
    const user = users.find(obj => obj.name === name)

    if (user) {
        res.status(200);
        res.json(user);
    } else {
        res.status(404);
        res.send('no user found');
    }
})

app.post('/user', (req, res, next) => {
    const { id, name, age } = req.body;
    users.push({ id, name, age });
    res.status(201);
    res.end();
})


app.listen(port, () => console.log(`Server is running on port ${port}`))