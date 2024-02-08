export const Option1 = ()=>{
    const arrayOfObjects = [
        { id: 1, url:'./../src/assets/products/p1.png',  name: 'John' },
        { id: 2, url:'./../src/assets/products/p2.png',  name: 'Jane' },
        { id: 3, url:'./../src/assets/products/p1.png',  name: 'Alice' },
        { id: 4, url:'./../src/assets/products/p2.png',  name: 'Alice' },
        { id: 5, url:'./../src/assets/products/p1.png',  name: 'Alice' },
        { id: 6, url:'./../src/assets/products/p2.png',  name: 'Alice' },


    ];

    return(
        <div className="flex justify-center items-center h-screen">
       
        <div className="grid grid-cols-2 gap-4 p-4">
                {arrayOfObjects.map((obj) => (
                    <div key={obj.id} className="flex items-center grid grid-cols-1 gap-4">                    
                    <img src={obj.url} alt={`Image ${obj.id}`} className="w-50 h-50" /> 
                 <p>Name: {obj.name}</p>
                    </div>
                ))}
            </div>
    </div>
    
    )
    }