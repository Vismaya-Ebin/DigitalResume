import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import IconButton from "@mui/material/IconButton";
import "../App.css";
export function About() {
  const [less, more] = useState(false);
  const toggleStyle = { display: less ? "none" : "block" };

  const colorStyle = {
    color: "white",
  };
  return (
    <div>
      <IconButton
        style={colorStyle}
        aria-label="add to shopping cart"
        onClick={(e) => {
          more(!less);
        }}
      >
        <span className="spanStyle">ABOUT ME</span>{" "}
        {less ? <ExpandMoreSharpIcon /> : <ExpandLessIcon />}
      </IconButton>
      <div style={toggleStyle}>
        <p>
          An Experienced and passionate UI developer who is very enthusiastic
          about learning new technologies and showcasing skills on each
          development projects.
        </p>
      </div>
    </div>
  );
}
