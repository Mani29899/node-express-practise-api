import express from 'express';
import {
    v4 as uuidv4
} from 'uuid';

const router = express.Router();

let users = [];

// for getting the data of the user
router.get('/', (req, res) => {
    res.send(users)
});
// for posting the data from the front end to the server inside the server
router.post('/', (req, res) => {
    const user = req.body;

    const userid = uuidv4();

    const userWithId = {
        ...user,
        id: userid
    }

    users.push(userWithId);

    console.log(users, 'users')

    res.send(`user name of ${user.firstname} added to the server`);

})

// for selecting the unique id
router.get('/:id', (req, res) => {
    const {
        id
    } = req.params;

    const selectedUser = users.find((item) => {
        return item.id === id
    })
    res.send(selectedUser)
})

// for deleting the unique id
router.delete('/:id', (req, res) => {
    const {
        id
    } = req.params;

    users = users.filter((item) => {
        return item.id !== id
    })

    console.log(users, 'userdeletedData')

    res.send(`the selected ${id} is removed from the datbase`)
})


// slight changes in the item so we use patch
router.patch('/:id', (req, res) => {
    const { id } = req.params;

    const { firstname, lastname, age } = req.body;

     users = users.find((item) => item.id === id)

    if (firstname) {
        users.firstname = firstname
    }

    if (lastname) {
        users.lastname = lastname;
    }
    if (age) {
        users.age = age
    }
    console.log(age ,'age')
    
    res.send(`Values are changed for the selected ${id} id`)
})

export default router;