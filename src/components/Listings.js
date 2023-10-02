import React from 'react';
import { Link } from 'react-router-dom';
import cookie from 'cookie';
import DeleteIcon from '@mui/icons-material/Delete';


import {
    Container,
    // Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material';

const Listings = (props) => {
    const cookies = cookie.parse(document.cookie)

        
    return (
        <Container>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Hours Of Operation</TableCell>
                        <TableCell>Address</TableCell>
                        { cookies.loggedIn ? (<TableCell>Delete</TableCell>) : null }
                </TableRow>
                </TableHead>    
                <TableBody>
                    {props.listings.map((listing, idx) => (
                        <TableRow>
                            <TableCell>   <Link to={`/bizz/${listing.id}`}>{listing.name}</Link></TableCell>
                            <TableCell>{listing.description}</TableCell>
                            <TableCell>{listing.hours}</TableCell>
                            <TableCell>{listing.address}</TableCell>
                            {cookies.loggedIn ? (<TableCell>
                                <DeleteIcon
                            onClick={() => props.deleteListing(idx)}
                                    className="icon text-red" />
                            </TableCell>
                            ) : null}
                       </TableRow>     
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
};

export default Listings