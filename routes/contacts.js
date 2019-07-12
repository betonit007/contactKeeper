const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @desc   Get all users contacts
// @access Private 
router.get('/', (req, res) => {
    res.send('Get all contacts');
});


// @route  POST api/contacts
// @desc   Auth user & get token
// @access Public 
router.post('/', (req, res) => {
    res.send('Get all contacts');
});

// @route  POST api/contacts/:id
// @desc   update contact
// @access Private 
router.put('/:id', (req, res) => {
    res.send('Update Contact');
});

// @route  DELETE api/contacts/:id
// @desc   Delete contact
// @access Private 
router.delete('/:id', (req, res) => {
    res.send('Update Contact');
});




module.exports = router;