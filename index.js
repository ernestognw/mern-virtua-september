import app from './app';
import mongoose from 'mongoose';
import { port, mongoURI } from './config';

const start = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database');

    await app.listen(port);
    console.log(`Listening on port ${port}`);
  } catch (err) {
    console.log(err);
  }
};

start();
