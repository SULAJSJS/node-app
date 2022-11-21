const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');
const createPath = require('../helpers/createPath');

router.get('/contacts', (req, res) => {
  const title = 'Contacts Page';
  Contact.find()
    .then((contacts) => {
      res.render(createPath('contacts'), { contacts, title });
    })
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    });
});

module.exports = router;
