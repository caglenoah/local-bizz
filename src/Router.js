import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import cookie from 'cookie';

import AddListing from './components/AddListing';
import Listings from './containers/Listings'
import Login from './components/Login'
import Details from './containers/Details'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
   return cookies["loggedIn"] ? true : false;
}


// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
    const { component: Component } = props;
    return checkAuth() === true ? <Component />  : <Navigate to='/login'/>
}



const Router = () => {
    return (

        <Routes>
            <Route path="/" element={<Listings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bizz/:id" element={<Details />} />
            <Route path="/addListing" element={<ProtectedRoute component={AddListing} /> } />
        </Routes>

    )
};

export default Router