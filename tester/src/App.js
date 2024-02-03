// import Counter from "./Counter";

// function App() {
//  //const arr=['asd','fgh','jkl','qwe','rty','uio','zxc','vbn','pm'];
//   return (
//     <div className="App"> 
    
//     {/* {arr.map((i,index)=> <Para y={index+1} x={i}/>)}
    
//     <Button>Click Me!!</Button> for adding para with all the array */} 
//     <Counter/>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import React from "react";

export default function App() {
  const [city, setCities] = useState([]);

  const countries = [
    {
      name: "India",
      value: "IND",
      cities: ["Kolkata", "Hyderabad"],
    },
    {
      name: "Pakistan",
      value: "Pak",
      cities: ["Lahore", "Karachi"],
    },
    {
      name: "Bangladesh",
      value: "Ban",
      cities: ["Dhaka", "Chittagong"],
    },
  ];

  return (
    <div>
      <select
        onChange={(e) => {
          setCities(countries[e.target.selectedIndex - 1]?.cities || []);
        }}
      >
        <option>Select Country</option>
        {countries.map((country, index) => (
          <option key={country.value} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>
      <select>
        <option>Select City</option>
        { city.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
      </select>
    </div>
  );
}

