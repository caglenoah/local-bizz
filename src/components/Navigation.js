import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
import MenuIcon from "@mui/material/Menu";

const Navigation = () => {
    const navigate = useNavigate;
    const cookies = cookie.parse(document.cookie)

    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
               <MenuIcon/> 
                </IconButton>
                <Typography varian="h6" style={{ flexGrow: "1" }}>
                Git Ur Har wyat
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/AddListing">Add New Listing</Link>
                    </li>
                    {
                        cookies.loggedIn ? 
                        <li className="nav-list-item">
                                <Link onClick={() => { document.cookie = "loggedIn="; window.location.replace("/login")}}>Logout</Link>
                            </li> : 
                    
                    <li className="nav-list-item">
                    <Link to="/login">Login</Link>
                    </li>
                            
                    }
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;
