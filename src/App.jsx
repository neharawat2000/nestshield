import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Style/responsive/tab.css';
import './Style/responsive/smallDevice.css';
import "animate.css/animate.min.css";

import Home from './Pages/Home/Home';
import HomeWarranty from './Pages/Home_Warranty/HomeWarranty';
import Support from './Pages/Support/Support';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-warranty" element={<HomeWarranty />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
