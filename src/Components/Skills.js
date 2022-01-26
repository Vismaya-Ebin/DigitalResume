import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import IconButton from "@mui/material/IconButton";
import '../App.css';

export function Skills() {
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
      >  <span className="spanStyle">SKILLS</span> {less?<ExpandMoreSharpIcon/>:<ExpandLessIcon/>}</IconButton>
      
      <div style={toggleStyle}>

      <ul>
        <li>React JS</li>
        <li>HTML</li>
        <li>Javascript</li>
        <li>Es6</li>
        <li>CSS</li>
        <li>Angular</li>
        <li>Git</li>
      </ul>
      </div>
    </div>
  );
}
