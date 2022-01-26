
import {useState} from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import IconButton from "@mui/material/IconButton";
import '../App.css';

export function Experience() {
  const[initialState, updatedState] = useState(false);
  const toggleStyle = {display: initialState ? "none":"block"};
  const colorStyle={
    color: 'white'
  }
  return (
    <div>
        <IconButton
       style={colorStyle}
        aria-label="add to shopping cart"
        onClick={(e) => {
          updatedState(!initialState);
        }}
      >    <span className="spanStyle"> WORK EXPERIENCE</span> {initialState?<ExpandMoreSharpIcon/>:<ExpandLessIcon/>}</IconButton>
      
    <div style={toggleStyle}>
   
      <ul>
        <li>
          <p>
          
            <strong>Tata Consultancy Services, Kochi</strong>{" "}
          </p>
          <p>
        
            <strong>Duration:</strong> 25 July 2018 to till date.
          </p>
          <p>
         
            <strong> Designation: </strong>IT Analyst
          </p>
        </li>
        <li>
        <p>  <strong> UST Global, Trivandrum</strong></p>
        <p>  <strong>Duration:</strong> 27th October 2015 to 20 July 2018.</p>
         <p> <strong>Designation: </strong>Software Developer</p>
        </li>
      </ul>
    </div>
    </div>
  );
}
