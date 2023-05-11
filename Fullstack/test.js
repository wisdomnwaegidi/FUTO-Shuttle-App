/* const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const connectDB1 = require('./server/database/connection'); */

const express = require('express');
const app = express();

const path = require('path');

// start test
const user1 = [
  {
    firstname: 'Wisdom',
    lastname: 'Nwaegidi',
    email: 'wisdomnwaegidi@gmail.com',
    phone: '09031916620',
    location: 'Ikenegbu',
    paassword: 'Diegocosta19',
  },
];
app.post('/user1', (req, res) => {
  res.json(user1);
});

app.use('/fonts', express.static(path.join(__dirname, '/fonts')));
console.log(app.use);

app.listen(3000);
// end test

/* app.use(
  session({
    genid: () => uuid(),
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000, // 1 hour
      secure: false, // set to true if using HTTPS
      httpOnly: true,
      sameSite: 'strict',
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    autoRemove: 'native' 
  })
); */

/* 
// create and save new user
exports.create = (req, res) => {

  // const saltRounds = 10;

  // validate request
  if (!req.body) {
    return res.status(400).send({ message: 'Content can not be empty!' });
  }

  const user = new Userdb({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    location: req.body.location,
    password: req.body.password,
  });

  bcrypt.hash(req.body.password, saltRounds, function (err, hashedPassword) {
    if (err) {
      return res.status(500).send({
        message: err.message || 'Error occurred while hashing the password',
      });
    }

    user.password = hashedPassword;

    user
      .save()
      .then((data) => {
        // set session data for the logged in user
        req.session.userId = data._id;
        req.session.email = data.email;
        req.session.firstName = data.firstName;
        req.session.lastName = data.lastName;
        
        res.render('dashboard1', {
          user: data,
        });
        console.log(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            'Some error occurred while creating a create operation',
        });
      });
  });
}; */

/* exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Userdb.findOne({ email });
  if (user) {
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (isPasswordCorrect) {
      req.session.user = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      res.redirect('/dashboard1', {user});
    } else {
      res.status(401).send('Invalid password');
    }
  } else {
    res.status(404).send('User not found');
  }
}; */

