import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Pages/Navbar';
import { Home } from './Pages/Home';
import Option1 from './Pages/Option1';
import Option2 from './Pages/Option2';
import Option3 from './Pages/Option3';
import Bag from './Pages/Bag';
import ImageDetails from './Pages/ImageDetails'; // Import the new component

interface ImageData {
  id: number;
  url: string;
  name: string;
  tagName?: string;
}

interface BagItem {
  id: number;
  url:string;
  name: string;
  quantity: number;
}

const App: React.FC = () => {
  const [bagItems, setBagItems] = useState<BagItem[]>([]);

  const addToBag = (item: ImageData) => {
    const existingItemIndex = bagItems.findIndex(bagItem => bagItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedBagItems = [...bagItems];
      updatedBagItems[existingItemIndex].quantity++;
      setBagItems(updatedBagItems);
    } else {
      setBagItems(prevBagItems => [...prevBagItems, { id: item.id, name: item.name, url:item.url, quantity: 1 }]);
    }
  };

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Option1" element={<Option1 />} />
          <Route path="/Option1/:id" element={<ImageDetails addToBag={addToBag} />} />
          <Route path="/Option2" element={<Option2 />} />
          <Route path="/Option2/:id" element={<ImageDetails addToBag={addToBag} />} />
          <Route path="/Option3" element={<Option3 />} />
          <Route path="/Option3/:id" element={<ImageDetails addToBag={addToBag} />} />
          <Route path="/Bag" element={<Bag bagItems={bagItems.map(item => ({ id: item.id, name: item.name, url:item.url, tagName: '' }))} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
