import { useMemo, useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export default function ListingMap(props) {
    console.log(props)
    const addressStr = props.address.replaceAll(/ /gi, "+");
    console.log(addressStr)
    const fetchURL = `https://maps.google.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&ADDRESS=${props.address}`;


    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fetchURL).then();
                const newData = await response.json();
                console.log(newData)
                setData(newData.results[0].geometry.location);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    
    if (data === null) {
        return <div>Loading...</div>;
    } else {
        return <Map lat={data.lat} lng={data.lng} />;
        }   
}

function Map(props) {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    const center = { lat: props.lat, lng: props.lng };
    console.log({ center });

    return isLoaded ? (
        <GoogleMap zoom={15} center={center}
            mapContainerClassName="dang-ol-map">
            <Marker position={center} />
        </GoogleMap>
    ) : (
        <></>
    );
}