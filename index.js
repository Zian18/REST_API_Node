const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/warriorgo');
mongoose.Promise =global.Promise


app.use("/public",express.static('./public'));

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));


//error handing middlware
app.use((err,req,res,next)=>{
//    console.log(err);
res.status(422).send({error:err.message});
})

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});