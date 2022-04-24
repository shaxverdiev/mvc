const express = require('express');
const mongoose = require('mongoose')
const app = express();
const userRouter = require('./routes/userRouter');
const homeRouter = require('./routes/homeRouter');


app.set('view engine', 'hbs');
app.use(express.urlencoded({ extend: false }));

app.use('/users', userRouter);
app.use('/', homeRouter);

app.use(function (req, res, next) {
  res.status(404).send('Not Found');
});

mongoose.connect(
  'mongodb://localhost:27017/usersdb_mvc',
  {
    useUnifiedTopology: true,
  },
  function (err) {
    if(err) return console.log('it is error', err)
    app.listen(3001, function() {
      console.log('server wait connection...')
    })
  }
);

