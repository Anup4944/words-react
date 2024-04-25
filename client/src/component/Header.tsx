import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

// const styles = {
//   color: "white",
//   margin: "0.5rem",
//   textDecoration: "none",
// };
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          style={{
            marginRight: "auto",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            color: "#CCCCCC",
          }}
        >
          LanguageListen: Multilingual Vocabulary Builder with Audio Support
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
