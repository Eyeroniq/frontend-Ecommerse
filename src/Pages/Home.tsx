import  { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/data.json'; // Assuming data is imported correctly

interface ImageData {
  tagName?: string; 
  id: number;
  url: string;
  name: string;
}

export const Home = () => {
    const newData = data
    .filter((item: any) => item.tagName === "new") // Filter items by tagName
    .slice(0, 4) as ImageData[]; // Take only the first four items
    const [hoveredId, setHoveredId] = useState<number | null>(null);
  

    return (
        <div className="flex flex-col bg-gray-400">
       
        <div className="justify-center items-center mt-40 p-24">
          <div className="grid grid-cols-2">
            {newData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to={`/Option1/${item.id}`}>
                  <img
                    src={item.url}
                    alt={`Image ${item.id}`}
                    style={{ width: '15rem', height: '15rem' }}
                  />
                </Link>
                {hoveredId === item.id && newData.indexOf(item) < 4 && (
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
