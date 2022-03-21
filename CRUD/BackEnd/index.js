import express, { Router } from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/users', route);

const PORT = 8000;
const URL = "mongodb://localhost:27017/CrudApp";


mongoose.connect(URL, { useNewUrlParser: true}).then(() => {
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})
