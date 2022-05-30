const express = require('express');
const app = express();
const upload = require('express-fileupload');
require('./db/db');
require('./models/esquemaUsuario');


app.use(upload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',require('./routes/rutas'));

app.listen(3000,()=>{
    console.log('Working🚀🚀');
    
})

