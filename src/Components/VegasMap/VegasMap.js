import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './VegasMap.css'

const VegasMap = () => {
    const mapStyles = {
        height: "60vh",
        width: "80%",
    };

    const defaultCenter = {
        lat: 36.1699,
        lng: -115.1398,
    };

    return (
        <div className='map'>
            <LoadScript googleMapsApiKey="AIzaSyA5_bJ4Ymb7trtIB9aG9CWnwZpwdQPrjdo">
                <GoogleMap mapContainerStyle={mapStyles} zoom={11.5} center={defaultCenter}>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};


export default VegasMap;
