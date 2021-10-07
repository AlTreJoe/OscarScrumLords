const express = require('express');
const {Users, Following} = require('../../db/sequelize');
const UserList = express.Router();

UserList.get('/allUsers', async(req, res) => {
  try {
    //get all users from the db
    const users = await Users.findAll(); //unsorted all users.  
    res.status(201).send(users);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

UserList.post('/followUser/:targetId', async(req, res) => {
  try {
    console.log('post')
    //the user who is adding is in req.user
    const {id} = req.user;
    //the user being followed comes from the parameters
    const {targetId} = req.params;
    //create a new entry in theFollowing table
    await Following.create({userAdding: id, userTarget: parseInt(targetId)});

    res.status(200);



  } catch (err) { 
    console.log(err);
    res.sendStatus(500);
  }
});

UserList.get('/visitProfile/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const user = await Users.findByPk(id);
    res.status(201).send(user);


  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

UserList.get('/followers', async (req, res) => {
  try {
    const {id} = req.user //id of the user
    await Following.findAll({
      where: {userAdding: id},
      include: [{
        model: Users,
        attributes: fullName
      }]
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
})


module.exports = {UserList};
