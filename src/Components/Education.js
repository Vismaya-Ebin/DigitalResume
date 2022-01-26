import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import IconButton from "@mui/material/IconButton";
import '../App.css';
export function Education() {
  const [less, more] = useState(false);
  const toggleStyle = {
    display: less ? "none" : "block",
  };
  const colorStyle={
    color: 'white'
  }
  return (
    <div>
    <IconButton
    style={colorStyle}
    aria-label="add to shopping cart"
    onClick={(e) => {
      more(!less);
    }}
  >    <span className="spanStyle">EDUCATION DETAILS </span> {less?<ExpandMoreSharpIcon/>:<ExpandLessIcon/>}</IconButton>
    <div style={toggleStyle}>
   
      <ul>
        <li>
         
          B. E in Computer Science and Engineering from Sri Eshwar College of
          Engineering, Coimbatore (2015).
        </li>
        <li>
          Higher Secondary Education in Computer Science from Govt. Higher
          Secondary School, Kizhakkencherry, Palakkad (2011).
        </li>
        <li>
         
          SSLC from Cherupushpam Girls Higher Secondary School, Vadakkencherry,
          Palakkad (2009).
        </li>
      </ul>
    </div>
    </div>
  );
}
