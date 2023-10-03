import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";
import ListingMap from "./ListingMap";


const Details = (props) => {
    const id = useParams().id;
     const bizz = (props.listings.find((b) => b.id == id));

    return (
        <>
        <Container>
            <h2>{bizz.name}</h2>
            <h3>{bizz.address}</h3>
            <h3>{bizz.hours}</h3>
            <p>{bizz.description}</p>
        </Container>
            <ListingMap address = {bizz.address} />
            </>
    )
}

export default Details