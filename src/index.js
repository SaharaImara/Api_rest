const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port',5000);
app.set('json spaces', 2)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//routes
//app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use("/users/todos",require('./routes/users'));


//starting the server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
});