import app from './app';
import mongoose from 'mongoose';

const PORT = 3000;
const mongoURI = 'mongodb://localhost/virtua-overflow';

const start = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database');

    await app.listen(PORT);
    console.log(`Listening on port ${PORT}`);
  } catch (err) {
    console.log(err);
  }
};

start();
