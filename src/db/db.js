const mongoose = require('mongoose');
const conectarse = async ()=>{
    try {
        await mongoose.connect("mongodb://database/mydatabase");
        console.log("OK");
    } catch (error) {
        console.log('Error al conectarse');
        console.log("NOK");
    }
};
conectarse();

