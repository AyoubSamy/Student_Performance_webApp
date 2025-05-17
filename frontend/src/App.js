import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import IndexPage from "./Pages/IndexPage";
import Prediction from "./Pages/Prediction";
import WhatWeOffer from "./Pages/WhatWeOffer";
import Layout from "./Pages/Layout";

const App = () => {

  return (
    <AnimatePresence>
      
      <Router>
              
       
        <Routes>
          <Route exact path="/" element={<Layout><IndexPage /></Layout>} />
          <Route  path="/prediction" element={<Layout><Prediction /></Layout>} />
          <Route  path="/offer" element={<Layout><WhatWeOffer /></Layout>} />
        </Routes>
      </Router>
     
    </AnimatePresence>
  );
};
export default App;
