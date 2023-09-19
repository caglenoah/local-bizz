import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import cookie from 'cookie';

import Listings from './components/Listings'


const Router = () => {
    return (

        <Routes>
            <Route path="/" element={<Listings/>} />
        </Routes>

    )
};

export default Router