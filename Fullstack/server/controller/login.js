// login a user
/* exports.login = async (req, res) => {
  try {
    await body('email').isEmail().withMessage('Email is invalid').run(req);
    await body('password')
      .notEmpty()
      .withMessage('Password is required')
      .run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await Userdb.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send({ message: 'Incorrect password' });
    }

    req.session.userID = user._id;
    req.session.sessionID = uuid4();
    req.session.user = user; // Save the user object to the session

    res
      .set({
        'X-XSS-Protection': '1; mode=block',
        'X-Content-Type-Options': 'nosniff',
      })
      .redirect('/dashboard');
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || 'Error occurred while logging in' });
  }
};

// Load user dashboard
exports.dashboard1 = async (req, res) => {
  const user = req.session.user;
  // Use the user object in your code as needed
  res.render('dashboard', { user });
}; */

/* exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Userdb.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send({ message: 'Incorrect password' });
    }

    req.session.userID = user._id;
    req.session.sessionID = uuid4();

    res.redirect('/login', { user });
  } catch (err) {
    res.status(500).send({ message: err.message || 'Error occurred while logging in' });
  }
}; */

/* exports.login = async (req, res) => {
  try {
    // Validation code omitted for brevity
    const { email, password } = req.body;

    const user = await Userdb.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send({ message: 'Incorrect password' });
    }

    res.render('dasboard1');
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || 'Error occurred while logging in' });
  }
}; */

/* exports.login = async (req, res) => {
  // Extract the user's email and password from the request body
  const { email, password } = req.body;

  try {
    // Find the user with the given email in the database
    const user = await Userdb.findOne({ email });

    if (!user || !user.validPassword(password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if the password matches the user's password in the database
    const isMatch = await user.comparePassword(password);

    // If the password is incorrect, return an error message
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If the email and password are correct, return the user information
    res.json({
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      // Add any other fields you want to return here
    });
  } catch (error) {
    // If an error occurs, return a 500 error with a message
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}; */

// session usser
/* const oneDay = 86400000;

// session with cookies
 app.use(
  session({
    secret: uuid4(),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: oneDay,
      httpOnly: true,
      secure: false, // set to true if your app is served over HTTPS
    },
  })
); */

// create and save new location.
exports.submit = async (req, res) => {
  /* if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty!' });
  }

  const userLocation = new Location({
    input1: req.body.input1,
    input2: req.body.input2,
    myRadios: req.body.myRadios,
    datepicker: req.body.datepicker,
  });

  userLocation
    .save(userLocation)
    .then((data) => {
      res.render('success');
    })
    .catch((error) => {
      res.status(500).send({
        message: "Error occured while creating a user's location!",
      });
    }); */

  // Select and destructure the input elements
  const { input1, input2, datepicker } = req.body;

  // Validate request
  if (!input1 || !input2 || !datepicker) {
    console.log('Fill empty fields & check radio button');
    return res.status(400).send({ message: 'All fields are required' });
  } else {
    res.status(200).json({ message: 'Form submitted successfully' });
  }

  try {
    // Create a new Location object
    const locationOne = new location({
      input1,
      input2,
      datepicker,
    });

    // Save the new location to the database
    const locationData = await locationOne.save();

    // Send a success response
    console.log('Location created:', locationData);
    return res.render('succes', { locationOne: locationData });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: 'Error occurred while creating location' });
  }
};
