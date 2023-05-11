const express = require('express');
const Userdb = require('../model/model');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const Session = require('../model/sessionmodel');
const location = require('../model/modelforautocomplete');
const Ticket = require('../model/ticketmodel');
// require('../auth/authenticate');
// console.log(require);

// const { v4: uuidv4 } = require('uuid');

const app = express();

// session without cookies
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000, // 1 hour
      secure: true, // set to true if using HTTPS
      httpOnly: true,
      sameSite: 'none',
    },
      store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://WisdomNwaegidi:Diegocosta19@futoapp.fsrxchz.mongodb.net/?retryWrites=true&w=majority',
    }),
  })
);

// cookie-parser
app.use(cookieParser());

// create and save new user, define the server-side validation function and also check if there's a user already.
exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, location, password } =
    req.body;

  // Validate request
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phoneNumber ||
    !location ||
    !password
  ) {
    console.log('Fill empty fields');
    return res.status(400).send({ message: 'All fields are required' });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/;

  // Perform regex validation on email and phone number fields
  if (!emailRegex.test(email)) {
    return res.status(400).send({ message: 'Invalid email address' });
  }

  if (!phoneRegex.test(phoneNumber) || phoneNumber.length !== 11) {
    return res.status(400).send({ message: 'Invalid phone number' });
  }

  // Check if the email already exists in the database
  try {
    const existingUser = await Userdb.findOne({ email: email });
    if (existingUser) {
      console.log('Email exists');
      return res.redirect('/login');
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: 'Error occurred while checking for existing user' });
  }

  // Hash the password using bcrypt before storing in the database
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new Userdb object with the validated and hashed data
    const user = new Userdb({
      firstName,
      lastName,
      email,
      phoneNumber,
      location,
      password: hashedPassword,
    });

    // Save the new user to the database
    const data = await user.save();

    // Send a success response
    console.log('User created:', data);
    return res.render('dashboard', { user: data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: 'Error occurred while creating user' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email address
    const user = await Userdb.findOne({ email: email });

    // If user not found, return an error message
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match, return an error message
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if req.session is defined, and then set user as authenticated by storing user._id in the session
    if (req.session) {
      req.session.user = user._id;
      // Create a new session document
      const newSession = new Session({
        user: user._id,
        sessionID: req.sessionID,
      });
      // Save the session document
      await newSession.save();
    }

    // To check if a user visited your site, you can query the session collection by user._id or sessionID and see if there are any documents
    const userSessions = await Session.find({ user: user._id });
    const sessionUser = await Session.findOne({
      sessionID: req.sessionID,
    }).populate('user');

    // Redirect to the dashboard page with user data
    return res.render('/dashboard');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// logout a user
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    res.redirect('/login');
  });
};

// Endpoint to handle form submission
exports.submit = async (req, res) => {
  // Extract the fields from the request body
  const { input1, input2, dateTime } = req.body;

  // Validate the required fields
  if (!input1 || !input2 || !dateTime) {
    return res.status(400).send({ error: 'All fields are required' });
  }

  try {
    // Create a new Location object
    const locationOne = new location({
      input1,
      input2,
      dateTime,
    });

    const ticketsAvailable = tickets();

    // Save the new location to the database
    const locationData = await locationOne.save();

    // Send a success response
    console.log('Location created:', locationData);
    return res.render('tickets', { locationOne: locationData });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: 'Error occurred while creating location' });
  }
};




// Define API endpoint to get tickets for a region
/* exports.tickets = (req, res) => {
  const region = req.params.region; // Get the region parameter from the URL
  // Query MongoDB to fetch tickets for the specified region
  Ticket.find({ region: region })
    .then((tickets) => {
      // Return the tickets as a JSON response
      res.json(tickets);
    })
    .catch((error) => {
      console.error('Failed to fetch tickets from MongoDB:', error);
      res.status(500).json({ error: 'Failed to fetch tickets' });
    });
  // Return the tickets as a JSON response
  const tickets = getTicketsForRegion(region); // Replace with your own logic to fetch tickets
  res.json(tickets);
}; */

/* // retrieve and return all users/retrieve and return a single user
exports.find = (req, res) => {
  if (req.query?.id) {
    const id = req.query.id;
    Userdb.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Not found with user id ' + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
        res.status(500).send({
          message: 'Error retrieving user with id ' + id + ': ' + err.message,
        });
      });
    } else {
    Userdb.find()
    .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
          'Error occurred while retrieving user information: ' + err.message,
        });
      });
  }
};

// update a new identified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res
    .status(400)
    .send({ message: 'Data to update can not be empty.' });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
  .then((data) => {
    if (!data) {
      res.status(404).send({
        message: `Cannot Update user with ${id}. Maybe user not found!`,
      });
    } else {
      res.send(data);
    }
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error update user information' + id });
    });
  };
  
  // delete a user with specified user id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
    
    Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Delete with id ${id}. maybe id is wrong`,
        });
      } else {
        res.send({ message: `User was deleted successfuly!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: 'could not delete user with id=' + id });
    });
  };
  */

// exports.isAuthenticated = (req, res) => {
/*   const user = req.session.user;
   if (user) {
     // Render dashboard page with user data
     return res.render('dashboard1', { user: data });
   } else {
     // Redirect to login page
     res.redirect('/login');
   }
 }; */

/* app.use(
  session({
    secret: 'your-secret-key', // a secret key used to sign the session ID
    resave: false, // determines whether to save the session data on every request
    saveUninitialized: false, // determines whether to save an uninitialized session (i.e., a session that is new but not modified)
    cookie: {
      maxAge: 3600000, // the maximum age (in milliseconds) of the session cookie (1 hour in this example)
      secure: true, // set to true if using HTTPS
      httpOnly: true, // restricts access to the cookie to HTTP(S) requests only
      sameSite: 'strict', // restricts the cookie to the same site (i.e., domain)
    },
    store: new MongoStore({
      url: 'mongodb+srv://WisdomNwaegidi:Diegocosta19@futoapp.fsrxchz.mongodb.net/?retryWrites=true&w=majority', // the MongoDB connection URL
      collection: 'sessions', // the name of the collection where sessions will be stored
      autoRemove: 'interval', // determines how expired sessions should be automatically removed ('interval', 'native', false)
      autoRemoveInterval: 10, // the interval (in minutes) for removing expired sessions (only applicable when autoRemove is set to 'interval')
    }),
  })
); */
