module.exports.authenticate = (req, res, next) => {
  // Check if authentication credentials are present and valid
  if (!req.session.user) {
    // or any other authentication logic
    // If not authenticated, redirect to login page or send an error response
    res.redirect('/login'); // or res.status(401).render('error', { message: 'Unauthorized' });
  } else {
    // If authenticated, continue to the next middleware or route handler
    next();
  }
};

