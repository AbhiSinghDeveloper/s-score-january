import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  // Box,
} from "@material-ui/core";
// import { currUser } from "../firebase";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import './Navbar.css';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    color: "#9e1c3f",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    
    <AppBar position="static" id="bg">
      <CssBaseline />
      <Toolbar>
      <img src="https://www.sathyabama.ac.in/themes/custom/sathyabama/logo.svg" width ="300" height ="80"  ></img>
       
          <DrawerComponent />
         
          {/* <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
             <Link to="/profile" className={classes.link}>
              Profile
            </Link> 
            <Link to="/index" className={classes.link}>
              Login
            </Link>
            
          </div> */}
        
      </Toolbar>
     </AppBar>
     );
}
export default Navbar;
