const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
require('dotenv').config();        // Loads environment variables from a .env file

const PORT = process.env.PORT || 3000; // Use the port from environment variables or default to 3000


app.use(cors()); //Allow cors
app.use(express.json()) //allow to parse all the incoming request to json
app.use(helmet()); //Adds security-related HTTP headers
app.use(morgan('dev'))

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'System is running smoothly' });
});

const newsletterSub = require('./services/newsletter')
const taskList = require('./services/task')
const auth = require('./services/auth')

app.use('/newSub', newsletterSub);
app.use('/tasks', taskList);
app.use('/auth', auth)

app.listen(PORT, () => {
    console.log(`Main app running on http://localhost:${PORT}`);
})