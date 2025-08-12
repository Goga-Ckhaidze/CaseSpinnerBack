import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import itemRoutes from './routes/itemRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/adminpanel';

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const db = mongoose.connection;

db.on('error', (err) => console.error('MongoDB connection error:', err));

db.once('open', () => {
  console.log('MongoDB connected');

  // Mount routes
  app.use('/items', itemRoutes);

  // Start server after DB connection
  app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });
});
