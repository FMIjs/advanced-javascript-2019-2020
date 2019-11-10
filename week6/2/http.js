const http = require('http');
const users = [{ id: 1, name: 'Joro', age: 24 }, { id: 2, name: 'Sasho', age: 25 }];

/* Task 1
     create a simple http server, on which you are able to: 
     - retrieve all of the users, stored in a array of objects (ex: const users = [{ id: 1, name: 'Joro', age: 24 }, { id: 2, name: 'Sasho', age: 25 }];)
     - retrieve only specific user, by looking for his name 
     - add new user to the array
     Use the GET, POST http methods to implement the solution 
     Check your requests with Postman or curl 
*/

// create a server object
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json'); // setting special header for the 


    const { url, method } = req;

    if (method === 'GET' && url == '/users') {

        res.statusCode = 200;
        res.write(JSON.stringify(users)); // send all of the users in JSON format
        res.end(); // end of  the response
    }


    if (method === 'GET' && url.includes('/user?name=')) {
        const name = url.split('=')[1];

        res.statusCode = 200;
        let data = users.find(obj => obj.name === name);
        if (!data) { res.statusCode = 404; res.end(); return; } // if there is no user with that name
        res.write(JSON.stringify(data)); // send the data in JSON format
        res.end(); // end the response
    }

    if (url == '/user' && method === 'POST') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        })

        req.on('end', () => {
            const user = JSON.parse(data.toString());
            users.push(user); // 
            res.statusCode = 201; // created status code
            res.end()  // end the response
        })
    }

});

server.listen(8081); // the server object listens on port 8081