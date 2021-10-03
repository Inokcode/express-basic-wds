const express = require('express');
const app = express();
//
app.use(express.static('public'));
//
app.use(express.urlencoded({ extended: true })); //toread body data
//
app.use(express.json()); //to read jason data
//

app.set('view engine', 'ejs');
// app.use(logger); //location of using this middleware is important

app.get('/', logger, logger, (req, res, next) => {
  console.log('Apple');
  //   res.send('Hii');
  //   res.status(500).send('Hi');
  //   res.status(500).json({ message: 'Error' });
  //   res.json({ message: 'Error' });
  //   res.download('server.js');
  res.render('index', { text: 'God bless you!' }); //have to use ejs view is the default folder in express
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);

// custom logger middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
//

app.listen(5000);
