import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MailIcon from "@mui/icons-material/Mail";
import {useState} from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import IconButton from "@mui/material/IconButton";
import '../App.css';

export function Contact() {
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
      >    <span className="spanStyle">CONTACTS</span> {initialState?<ExpandMoreSharpIcon/>:<ExpandLessIcon/>}</IconButton>
      
        <div  style={toggleStyle}>
      <div>
      
        <LocalPhoneIcon />
        <span>+91 8848342980</span>
        </div>
      <div>
      
        <LocationCityIcon />
     <span>INDIA</span>   
      </div>
      <div>
      
        <MailIcon />
       <span> vismayawilson3@gmail.com</span>
      </div>
      </div>
    </div>
  );
}
