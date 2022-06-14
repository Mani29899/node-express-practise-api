import express from 'express'
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

// for access the express predifined functions and method
const app = express();

// for listening the port
const PORT = 8000;

// to parse the payload value from  the req from the client to the server
app.use(bodyParser.json());

// use the userSRoutes it works as a middleware
app.use('/users/', userRoutes)

// if user hit wrong path for handling error

// 1st method but its not a proper way
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err)
})

// 2nd method for error handling
// if next function calls next it will trigger the error handler function is like below

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})


/* app.get()  ----> this method have two parameters one is "url path" and another one is callback function ..in that
 callback function we have two parameters one is requset which is get from the client to the server and another one is 
 provide the response to the client from the server */

app.get('/', (req, res) => {
    res.send('perfectly working in all the scenario')
 })


// run the server in the given port with the callback function....
app.listen(PORT, () => {
    console.log('listening port on 8000')
})