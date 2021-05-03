const mongoose = require('mongoose');


const dbConnection = async() =>{
    try {
        await mongoose.connect(process.env.DBCAFE,{
            useNewUrlParser: true,
            useUnifiedTopology : true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new error;
    }
};
module.exports = {
    dbConnection
};