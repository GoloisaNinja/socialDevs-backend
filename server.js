const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const apiUserRoute = require('./routes/users');
const apiProfileRoute = require('./routes/profile');
const apiPostsRoute = require('./routes/posts');
const path = require('path');

const cors = require('cors');
const corsOptions = {
	origin: ['http://localhost:3000', 'https://curious-gnome-19dde0.netlify.app'],
};

const app = express();

// connect database
connectDB();

// init middleware

app.use(express.json({ extended: false }));
app.use(cors(corsOptions));
//Define Routes

app.use(apiUserRoute);
app.use(apiProfileRoute);
app.use(apiPostsRoute);

// Serve static assets in production

// if (process.env.NODE_ENV === 'production') {
// 	// set that static folder
// 	app.use(express.static('client/build'));

// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// 	});
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
