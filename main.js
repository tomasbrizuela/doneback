const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

app.use(cors()); //Allow cors
app.use(express.json()) //allow to parse all the incoming request to json
app.use(helmet()); //Adds security-related HTTP headers
app.use(morgan('dev'))

app.get('/status', (req, res) => {
    return res.status(200).json({"Status": "ok"})
})

const newsletterSub = require('./services/newsletter')
const taskList = require('./services/task')
const auth = require('./services/auth')

app.use('/newSub', newsletterSub);
app.use('/tasks', taskList);
app.use('/auth', auth)

app.listen(8080, () => {
    console.log(`Main app running on http://localhost:8080`);
})