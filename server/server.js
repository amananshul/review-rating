// Import necessary packages
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import companyRoutes from './routes/companyRoutes.js';
// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
dotenv.config();

// Routes
app.use('/api', companyRoutes); // Assuming companies API endpoints are under '/api/companies'

// MongoDB connection

const PORT = 5000;

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(PORT, () => console.log('Server running on port', PORT)))
  .catch((error) => console.log('Connection error:', error));