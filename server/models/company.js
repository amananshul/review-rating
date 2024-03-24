// models/company.js
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  foundedOn: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  reviews: [reviewSchema] // Array of review objects
});

export const Company = mongoose.model('Company', companySchema);
