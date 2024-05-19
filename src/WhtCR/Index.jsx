import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../WhtCR/Header/AllHeader';
import Footer from '../WhtCR/Footer/AllFooter';
import AllMain from '../WhtCR/Main/AllMain';
import Contect from "../WhtCR/Contect/Contect";
import About from "../WhtCR/About/About";
import AllDetail from "../WhtCR/Detail/AllDetail";
import TermCondition from './Term&Condition/TermCondition';
import Refund from './Refund/Refund';
import Shipping from './Shipping/Shipping';
import AllCatagary from './Categary/AllCatagary';
import One199 from './SubCatagary/One199';
import FilterSidebar from './Categary/FilterSidebar';
import One from './SubCatagary/One199';

const Index = () => {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<AllMain />} />
        <Route path="/product-detail" element={<AllDetail />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/about" element={<About />} />
        <Route path="/term-condition" element={<TermCondition />} />
        <Route path="/return-refund" element={<Refund />} />
        <Route path="/shipping-delivery" element={<Shipping />} />
        <Route path="/product-category-shop/:id" element={<FilterSidebar />} />

      </Routes>
      <Footer />

    </>
  );
};

export default Index;
