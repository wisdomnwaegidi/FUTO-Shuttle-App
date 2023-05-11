const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const connectDB = require('./server/database/connection');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

const app = express();

//Livereload code
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'views'));
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});
app.use(connectLiveReload());
//End of livereload code

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 8081;

// log requests
app.use(morgan('tiny'));

// mongodb connection
// connectDB();

// parse request to body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  set view engine
app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname, 'views/ejs'));

// load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/images', express.static(path.resolve(__dirname, 'assets/images')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));
app.use('/favicon', express.static(path.resolve(__dirname, 'assets/favicon')));
app.use('/fonts', express.static(path.resolve(__dirname, 'assets/fonts')));

// load routers
app.use('/', require('./server/routes/router'));

// Port Listener
app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
