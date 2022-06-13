import express from 'express'
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

// for access the express predifined functions and method
const app = express();

// for listening the port
const PORT = 8000;

// to parse the payload value from  the req from the client to the server
app.use(bodyParser.json());

// use the userSRoutes
app.use('/users/', userRoutes)

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