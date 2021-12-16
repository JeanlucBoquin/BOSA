import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const uri: string = process.env.MONGO_URI!;

const main = async () => {
    try {
        await mongoose.connect(uri);
        console.log('** DATABASE IS CONNECTED xD **');
    } catch (error) {
        console.log('CONNECTED IS FAILED', error);
    }
}


main();