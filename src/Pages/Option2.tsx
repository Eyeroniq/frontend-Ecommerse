// Option2.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/data.json';
import backGround from '../assets/background/backGround.jpg';

interface ImageData {
  id: number;
  url: string;
  name: string;
}

const Option2: React.FC = () => {
  const imageData = data.dripped as ImageData[];
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div>
      <div className="justify-center items-center">
        <img src={backGround} alt="background image" className='w-full' />
      </div>
      <div className="justify-center items-center  mt-8 pt-12">
        <div className="grid grid-cols-2 ">
          {imageData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/Option2/${item.id}`}>
                <img
                  src={item.url}
                  alt={`Image ${item.id}`}
                  style={{ width: '20rem', height: '20rem' }}
                />
              </Link>
              {hoveredId === item.id && (
                <p className="text-center my-text mt-2  py-1 px-2 transition-opacity duration-300 ease-in-out pb-8">
                  Name: {item.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Option2;
