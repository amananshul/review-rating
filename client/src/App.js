// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Pages/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';import AddCompanyPopup from './components/Pages/Form/AddCompany/AddCompanyPopup';
import CompanyList from './components/Pages/CompanyComponent/CompanyList';
import { SearchProvider } from './components/Context/SearchContext';
import CompanyDetails from './components/Pages/CompanyComponent/CompanyDetails';
import AddReviewPopup from './components/Pages/Form/AddReview/AddReviewPopup';

function App() {
  return (
<div>
<Router>
      <div className="App">
        <Navbar />
        <SearchProvider>
          <Routes>
            <Route path="/add-company" element={<AddCompanyPopup />} />
            <Route path="/add-review/:id" element={<AddReviewPopup />} />
            <Route path="/" element={<CompanyList />} />
            <Route path="/details/:id" element={<CompanyDetails />} /> {/* Add route for details page */}
          </Routes>
        </SearchProvider> 
      </div>
    </Router>
    <ToastContainer />

</div>
  );
}

export default App;
