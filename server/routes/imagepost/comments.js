const express = require('express');
const Comment = express.Router();
const { Comments, Posts} = require('../../db/sequelize');

Comment.get('/comments', (req, res) => {
  Comments.findAll()
    .then(results => {
    
      res.status(201).send(results);
    })
    .catch(err => {
      console.log('ERRO:', err);
    });
});

Comment.post('/comments/:id', (req, res) => {
  const { id } = req.params;
  const { text, username, picture } = req.body;
  Comments.create({text: text, username: username, picture: picture, postId: id })
    .then((results) => {
      console.log(results);
      res.status(201).send(results);
    })
    .catch(err => {
      console.log(err);
    });
});


module.exports = { Comment };
