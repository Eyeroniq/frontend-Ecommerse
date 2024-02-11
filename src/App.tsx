import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Pages/Navbar';
import {Home} from './Pages/Home';
import Option1 from './Pages/Option1'
import Option2 from './Pages/Option2';
import Option3 from './Pages/Option3';
import ImageDetails from './Pages/ImageDetails'; // Import the new component

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Option1" element={<Option1 />} />
          <Route path="/Option1/:id" element={<ImageDetails source="new"/>} /> 
          <Route path="/Option2" element={<Option2 />} />
          <Route path="/Option2/:id" element={<ImageDetails source="dripped" />} />
          <Route path="/Option3" element={<Option3 />} />
          <Route path="/Option3/:id" element={<ImageDetails source="all" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
