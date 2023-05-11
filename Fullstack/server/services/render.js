const axios = require('axios');
const { authenticate } = require('../auth/authenticate');

exports.homeRoutes = (req, res) => {
  res.render('index');
};
exports.charterRoutes = (req, res) => {
  res.render('charter');
};
exports.partnershipRoutes = (req, res) => {
  res.render('partnership');
};
exports.routeRoutes = (req, res) => {
  res.render('route');
};
exports.driveRoutes = (req, res) => {
  res.render('driver');
};

exports.loginRoutes = (req, res) => {
  res.render('login');
};

/* exports.loginRoutes = (req, res) => {
  res.render('login');
  // Send a POST request to the login endpoint with credentials
  axios
    .post('http://localhost:3000/api/login', {
      email: req.email,
      password: req.password,
    })
    .then(function (response) {
      // If login is successful, make a GET request to get user data
      axios
        .get('http://localhost:3000/api/user', {
          headers: {
            // Set authorization token with received token from login response
            Authorization: `Bearer ${response.data.token}`,
          },
        })
        .then(function (userResponse) {
          // Render the dashboard view with user data
          res.render('dashboard1', { user: userResponse.data });
        })
        .catch((err) => {
          // Handle errors while getting user data
          console.error(err); // Log the error for debugging purposes
          res.status(500).render('error', {
            message:
              'An error occurred while loading the dashboard. Please try again later.',
          });
        });
    })
    .catch((err) => {
      // Handle errors while logging in
      console.error(err); // Log the error for debugging purposes
      res.status(401).render('error', {
        message: 'Invalid username or password. Please try again.',
      });
    });
}; */

exports.FAQRoutes = (req, res) => {
  res.render('FAQ');
};

exports.registerRoutes = (req, res) => {
  res.render('register');
};

/* exports.dashboardRoutes = (req, res) => {
  axios
    .get('http://localhost:3000/api/user')
    .then(function (response) {
      res.render('dashboard1', { user: response.data });
    })
    .catch((err) => {
      // handle errors by sending a user-friendly error message
      console.error(err); // log the error for debugging purposes
      res.status(500).render('error', {
        message:
          'An error occurred while loading the dashboard. Please try again later.',
      });
    });
}; */

exports.dashboardRoutes = (req, res) => {
  res.render('dashboard');
};

// Apply it to the /dashboard1 route
exports.dashboardRoutes1 =
  ('/dashboard',
  authenticate,
  (req, res) => {
    // Render the dashboard page with user data
    res.render('dashboard', { user: req.session.user });
  });

exports.contactRoutes = (req, res) => {
  res.render('contact');
};

exports.privacyPolicy = (req, res) => {
  res.render('privacypolicy');
};

exports.ticketsDashboard = (req, res) => {
  res.render('tickets');
};
