// assuming your form has fields for name, email, and password
const { firstName, lastName, email, location, password } = req.body;
// code to save the user data to your database
// ...
res.render('register', {
  user: { firstName, lastName, email },
}); // passing the newly created user object to the view

// login a user
exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Userdb.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res.status(404).send({
          message: 'User not found',
        });
      } else {
        bcrypt.compare(password, user.password, function (err, result) {
          if (result) {
            // User is authenticated, set session variables
            const sessionID = uuid.v4();
            req.session.userID = user._id;
            req.session.sessionID = sessionID;
            res.render('dashboard', { user: user });
          } else {
            // Incorrect password
            res.status(401).send({
              message: 'Incorrect password',
            });
          }
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error occurred while logging in',
      });
    });
};

// logout a user
exports.logout = (req, res) => {
  req.session.userID = null;
  req.session.sessionID = null;
  res.redirect('/login');
};
