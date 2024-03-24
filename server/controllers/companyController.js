
import mongoose from 'mongoose';
import { Company } from '../models/company.js'; // Import named export 'Company'
import Review from '../models/review.js';

// AddCompany controller function
export const addCompany = async (req, res) => {
    const { companyName, location, foundedOn, city } = req.body;

    try {
        // Validate the request body
        if (!companyName || !location || !foundedOn || !city) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new company instance
        const newCompany = new Company({
            companyName,
            location,
            foundedOn,
            city
        });

        // Save the company to the database
        await newCompany.save();

        // Respond with success message and the created company
        res.status(201).json({ message: 'Company added successfully', company: newCompany });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// getAllCompanies controller function
export const getAllCompanies = async (req, res) => {
    try {
        // Fetch all companies from the database
        const companies = await Company.find();

        // Respond with the list of companies
        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
// SearchCompanies controller function
export const searchCompanies = async (req, res) => {
    const { term } = req.query;

    try {
        // Perform the search query using the provided term
        const companies = await Company.find({
            $or: [
                { companyName: { $regex: new RegExp(term, 'i') } }, // Case-insensitive search for company name
                { location: { $regex: new RegExp(term, 'i') } }, // Case-insensitive search for location
                // Add more fields to search if needed
            ]
        });

        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
// details controller
export const getCompanyDetails = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the company by its ID
        const company = await Company.findById(id);

        // Check if company exists
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        // If company found, return details
        res.status(200).json(company);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
// sort controller
export const sortCompanies = async (req, res) => {
    const { sortBy } = req.query;
    
    try {
        let companies;
        if (sortBy === 'companyName') {
            companies = await Company.find().sort({ companyName: 1 });
        } else if (sortBy === 'location') {
            companies = await Company.find().sort({ location: 1 });
        } else if (sortBy === 'foundedDate') {
            companies = await Company.find().sort({ foundedOn: 1 });
        } else if (sortBy === 'city') {
            companies = await Company.find().sort({ city: 1 });
        } else {
            companies = await Company.find();
        }

        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const addReview = async (req, res) => {
    const { companyId } = req.params; // Extract companyId from URL params
    const { name, subject, description, rating } = req.body; // Extract review details from request body

    try {
        // Create a new review instance
        const newReview = new Review({
            name,
            subject,
            description,
            rating,
            companyId // Assign the companyId to the review
        });

        // Save the review to the database
        await newReview.save();

        // Find the company by its ID and update its reviews array
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        company.reviews.push(newReview);
        await company.save();

        // Respond with success message and the created review
        res.status(201).json({ message: 'Review added successfully', review: newReview });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Other controller functions...

// Other controller functions...
