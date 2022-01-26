import { Resume } from "./Components/Resume";
import "./App.css";
import * as React from "react";

function App() {
 const styles={
   display: "flex",
   flexDirection: "column",
   flexWrap: "wrap",
   justifyContent: "center",
   alignItems: "center",
   fontSize:"1.2rem",
   gap:"0rem"
  }
  return (
    <div >
    
     <div style={styles}>
      <h2>VISMAYA WILSON</h2>
     <h3>SOFTWARE DEVELOPER</h3>
     </div>
    
      
     

      <Resume />
    </div>
  );
}

export default App;
