const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser');
const morgan = require('morgan')
const connectDB = require('./db/db')
const userRoutes = require('./routes/user.routes')

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('running')
});

app.use('/users', userRoutes);

module.exports = app;