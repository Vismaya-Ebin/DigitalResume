import { Resume } from "./Components/Resume";
import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import DownloadForOfflineSharpIcon from "@mui/icons-material/DownloadForOfflineSharp";
import resume from "./image/resume.pdf";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function App() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    gap: "0rem",
  };

  const style = {
    color: "white",
    backgroundColor: "red",
  };

  const appBar = {
    backgroundColor: "white",
  };
  const hideUnderline = {
    textDecoration: "none",
  };

  return (
    <div>
      <div>
        <AppBar position="static" style={appBar}>
          <Toolbar>
            <a href={resume} style={hideUnderline} download="Vismaya-Resume">
              <Button
                style={style}
                variant="contained"
                endIcon={<DownloadForOfflineSharpIcon />}
              >
                Download
              </Button>
            </a>
          </Toolbar>
        </AppBar>
      </div>
      <div style={styles}>
        <h2>VISMAYA WILSON</h2>
        <h3>SOFTWARE DEVELOPER</h3>
      </div>
      <Resume />
    </div>
  );
}

export default App;
