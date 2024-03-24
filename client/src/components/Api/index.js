import axios from 'axios';

const url = 'https://reviewandrating.onrender.com/api/companies';
const reviewURl='https://reviewandrating.onrender.com/api/reviews';
export const fetchCompanies = () => axios.get(url);
export const createCompany = (newCompany) => axios.post(url, newCompany);
export const fetchCompanyDetails = (id) => axios.get(`${url}/${id}`);
export const createReview = (id,newReview) => axios.post(`${reviewURl}/${id}`,newReview);
export const searchCompanies = (searchTerm) => axios.get(`${url}/search?term=${searchTerm}`);
export const sortCompanies = (sortBy) => axios.get(`${url}/sort?sortBy=${sortBy}`); // New function to sort companies
