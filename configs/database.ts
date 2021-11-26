import mongoose from 'mongoose';


const main = async () => {

    try {
        // await mongoose.connect('');
        console.log('DATABASE IS CONNECTED');
    } catch (error) {
        console.log('CONNECTED IS FAILED', error);
    }


}


main();