import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FullscreenControl } from 'react-leaflet-fullscreen';

const LocationMarker = ({ setLongitude, setLatitude }) => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
            setLatitude(e.latlng.lat);
            setLongitude(e.latlng.lng);
        },
    });

    const iconMarker = new L.Icon({
        iconUrl: require('../../assets/icons/map-marker.png'),
        iconRetinaUrl: require('../../assets/icons/map-marker.png'),
        iconSize: new L.Point(26, 26),
    });

    const markerRef = useRef(null);
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current;
                if (marker != null) {
                    const updatedPosition = marker.getLatLng();
                    setPosition(updatedPosition);
                    setLatitude(updatedPosition.lat);
                    setLongitude(updatedPosition.lng);
                }
            },
        }),
        []
    );

    return position === null ? null : (
        <Marker
            position={position}
            icon={iconMarker}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
        >
            <Popup>
                Latitude: {position.lat.toFixed(6)} <br />
                Longitude: {position.lng.toFixed(6)}
            </Popup>
        </Marker>
    );
}

const MapOwner = ({ setLatitude, setLongitude }) => {
    const [position, setPosition] = useState([-6.753652, 110.842876]);

    const iconMarker = new L.Icon({
        iconUrl: require('../../assets/icons/map-marker.png'),
        iconRetinaUrl: require('../../assets/icons/map-marker.png'),
        iconSize: new L.Point(26, 26),
    });

    return (
        <MapContainer
            center={position}
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
            <LocationMarker
                setLatitude={setLatitude}
                setLongitude={setLongitude}
            />
        </MapContainer>
    );
};


export default MapOwner;

// const MapOwner = ({ setLatitude, setLongitude }) => {
//     const initialPosition = [-6.753652, 110.842876];
//     const [position, setPosition] = useState(initialPosition);

//     useEffect(() => {
//         // Fungsi ini akan dipanggil setiap kali peta digeser.
//         const updateMarkerPosition = () => {
//             const map = document.querySelector('.leaflet-container'); // Mendapatkan elemen peta
//             if (map) {
//                 const mapCenter = map.getBoundingClientRect(); // Mendapatkan posisi tengah peta
//                 const marker = document.querySelector('.custom-marker'); // Mendapatkan elemen marker
//                 if (marker) {
//                     marker.style.left = mapCenter.width / 2 + 'px'; // Menyelaraskan marker ke tengah secara horizontal
//                     marker.style.top = mapCenter.height / 2 + 'px'; // Menyelaraskan marker ke tengah secara vertikal
//                 }
//             }
//         };

//         const map = L.map('map').setView(initialPosition, 14);

//         // Peta Leaflet
//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

//         // Menambahkan marker
//         const marker = L.marker(initialPosition).addTo(map);

//         // Memanggil fungsi untuk mengupdate posisi marker
//         updateMarkerPosition();

//         // Menambahkan event listener untuk mengupdate posisi marker saat peta digeser
//         map.on('move', () => {
//             updateMarkerPosition();
//         });

//     }, []);

//     return (
//         <div className="map-container">
//             <FullscreenControl
//                 position="topright"
//                 title="Fullscreen"
//                 titleCancel="Exit Fullscreen"
//                 forceSeparateButton={true}
//             />
//             <div className="custom-marker">
//                 {/* Isi marker di sini, misalnya ikon */}
//                 <img src={require('../../assets/icons/map-marker.png')} alt="Marker" />
//             </div>
//             <div id="map" style={{ height: '400px', borderRadius: '8px' }}></div>
//         </div>
//     );
// };

// export default MapOwner;