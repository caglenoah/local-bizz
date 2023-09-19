import React from 'react';

import {
    Container,
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material';

const Listings = (props) => {
    return (
        <Container>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Hours Of Operation</TableCell>
                    <TableCell>Adress</TableCell>
                </TableRow>
            </TableHead>
        </Container>
    )
};

export default Listings