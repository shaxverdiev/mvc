const User = require('../models/user.js');

exports.addUser = function (req, res) {
  res.render('create.hbs');
};
exports.getUsers = function (req, res) {
  User.find({}, function (err, allUsers) {
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.render('user.hbs', {
      users: allUsers,
    });
  });
}; 

exports.postUser = function(req, res) {
  if(!req.body) return res.sendStatus(400)
  const userName = req.body.name
  const userAge = req.body.age
  const user = new User({name: userName, age: userAge})

  user.save((err) => {
    if(err) return console.log(err)
    res.redirect('/users')
  })
}