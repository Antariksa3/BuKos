import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FullscreenControl } from 'react-leaflet-fullscreen';
import "react-leaflet-fullscreen/styles.css";

const LocationMarker = ({ position }) => {
    const iconMarker = new L.Icon({
        iconUrl: require('../../assets/icons/map-marker.png'),
        iconRetinaUrl: require('../../assets/icons/map-marker.png'),
        iconSize: new L.Point(26, 26),
    });

    return (
        <Marker position={position} icon={iconMarker} />
    );
}

const MapDetail = ({ latitude, longitude }) => {
    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={14}
            style={{ height: '400px', zIndex: 1, borderRadius: '8px' }}
        >
            <FullscreenControl
                position="topright"
                title="Fullscreen"
                titleCancel="Exit Fullscreen"
                forceSeparateButton={true}
            />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker position={[latitude, longitude]} />
        </MapContainer>
    );
};

export default MapDetail;
