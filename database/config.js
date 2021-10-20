const mongoose = require("mongoose");

const dbConnection = async() => {
    try {
        //async await convierten a una promesa en un proceso sincrono (Espera a que se resulva para continuar ejecutandose)
        await mongoose.connect(process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("BD Online");

    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de inicializar la Base De Datos");
    }
}

module.exports = {
    dbConnection
}