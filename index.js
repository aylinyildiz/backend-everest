const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//middlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts',postsRoute);



//route
app.get('/',(req,res)=>{
    res.send('we are on home');
});
app.get('/posts',(req,res)=>{
    res.send('we are on post');
});

//connect db

//{ useNewUrlParser: true },
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () => 
 console.log("connected")
)

let port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`app is running at the port ${port}`);
});