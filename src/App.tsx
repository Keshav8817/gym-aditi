
// function App() {
  
//   return (
//     <>
//       <div>

//       </div>
//     </>
//   )
// }

// export default App
//import React from "react";

import Navbar from "./components/Navbar";
import FrontPageText from "./components/FrontPageText";

import "./index.css";

function App() {

  return (
    <div className="bg-black/90 w-full h-auto">

          <Navbar />
          <FrontPageText />
    </div>
  );

}

export default App;

