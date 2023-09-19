import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
import MenuIcon from "@mui/material/Menu";

const Navigation = () => {
    const navigate = useNavigate;

    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
               <MenuIcon/> 
                </IconButton>
                <Typography varian="h6" style={{ flexGrow: "1" }}>
                Git Ur Har wyat
                </Typography>
                <ul ClassName="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/BizDetails">Biz Details</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/AddListing">Add New Listing</Link>
                    </li>
                    <li className="nav-list-item">
                    <Link to="/Login">Login</Link>
                    </li>
                
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;
