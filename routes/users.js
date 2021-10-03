const express = require('express');
const router = express.Router();
//
router.use(logger); //you can use any ware
//
router.get('/', (req, res) => {
  console.log(req.query.name);
  res.send('User List');
});
router.get('/new', (req, res) => {
  //   res.send('User New Form');
  res.render('users/new', { firstName: 'Test' });
});

router.post('/', (req, res) => {
  //   res.send('Create User');
  //   console.log(req.body.firstName);
  const isValid = false;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log('Error');
    res.render('users/new', { firstName: req.body.firstName });
  }
  //   res.send('Hi');
});

//
// router.get('/:id', (req, res) => {
//   res.send(`Get User With ID ${req.params.id}`);
// });
// router.put('/:id', (req, res) => {
//   res.send(`Update User With ID ${req.params.id}`);
// });
// router.delete('/:id', (req, res) => {
//   res.send(`Delete User With ID ${req.params.id}`);
// });
// or
router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User With ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
  });
//

// param middleware
const users = [{ name: 'kyle' }, { name: 'sally' }];
router.param('id', (req, res, next, id) => {
  //   console.log(id);
  req.user = users[id];
  next();
});
//
// custom logger middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
//
//
module.exports = router;
