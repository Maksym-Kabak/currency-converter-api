import mongoose from 'mongoose';

const DB_URL = `mongodb+srv://admin:admin@cluster0.t3ffi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const PB_API = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;


const connectDb = async () => {
  try {
    const conn = await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDb Connected ${ conn.connection.host }`);
  } catch (e) {
    console.error(`Error ${ e.message }`);
    process.exit(1);
  }

};
export default connectDb;
