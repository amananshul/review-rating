// routes/companyRoutes.js
import express from 'express';
import { addCompany, addReview, getAllCompanies, getCompanyDetails, searchCompanies, sortCompanies } from '../controllers/companyController.js'; // Import specific functions from companyController

const router = express.Router();

// Route to add a new company
router.post('/companies', addCompany);

// Route to get all companies
router.get('/companies', getAllCompanies);
// Route to search companies
router.get('/companies/search', searchCompanies);
router.post('/reviews/:companyId', addReview);
// Route to sort companies
router.get('/companies/sort', sortCompanies);
router.get('/companies/:id', getCompanyDetails);

export default router;
