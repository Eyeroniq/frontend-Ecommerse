import { useState } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './../css/Button.css';

interface ImageData {
  tagName: string;
  id: number;
  url: string;
  name: string;
}

interface BagProps {
  bagItems?: ImageData[]; // Make bagItems optional
}

const Bag: React.FC<BagProps> = ({ bagItems = [] }) => {
  const [count, setCount] = useState<number>(1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (


    <div className="flex flex-col">
    
      <div className="flex">
        <h1>Bag</h1>
        {bagItems.length === 0 ? (
          <p>Your bag is empty.</p>
        ) : (
          <div>
            {bagItems.map((item, index) => (
              <div className="flex" key={index}>
                <div className="w-7/12">
                  <div className="grid grid-cols-4 grid-rows-1 gap-4 mt-40">
                    <div className="bg-gray-300 p-4 text-center"> <img src={item.url} alt={`Image ${item.id}`} /></div>
                    <div className="bg-gray-300 p-4 text-center"><p>{item.name}</p></div>
                    <div className="bg-gray-300 p-4 text-center"><p>color</p></div>
                    <div className="bg-gray-300 p-4 text-center"> <button onClick={handleDecrement}>-</button><span className="mx-2">{count}</span><button onClick={handleIncrement}>+</button></div>
                  </div>
                </div>
                <div className="w-5/12 mt-40 ml-4 mr-4">
            <div className="bg-gray-300 p-6 text-center">
            <div className="grid grid-cols-4 grid-rows-1 gap-4 ">
                    <div className="bg-gray-300 p-4 text-center"><p>{item.name}</p></div>
                    <div className="bg-gray-300 p-4 text-center"><p>color</p></div>
                    <div className="bg-gray-300 p-4 text-center"> <button onClick={handleDecrement}>-</button><span className="mx-2">{count}</span><button onClick={handleIncrement}>+</button></div>
                    <div className="bg-gray-300 p-4 text-center"><p>Amount</p></div>
                  </div>
                  <div className="grid grid-cols-4 grid-rows-1 gap-4 border border-black">
                    <h1>Total</h1><div></div><>quantity</> <h1>Amount</h1>
                  </div>
            <NavLink to="/"> <div className="flex item-center justify-center mt-4 " > <button className="button my-text pl-40 pr-40" >Checkout</button></div>
            </NavLink>
            </div>
            
          </div>

              </div>
            ))}
          </div>
        )}
       
      </div>
      <NavLink to="/">
              <div className="flex item-center justify-center mt-4 " >
                <button className="button my-text" >Continue Shopping</button>
              </div>
            </NavLink>
    </div>
  );
};

export default Bag;
