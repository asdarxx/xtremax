import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import { setSeleceted } from '../../redux/action'
import style from './style.json'
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");


function Gmap() {
    const [lati, setLat] = useState('1.286920')
    const [long, setLng] = useState('103.854570')
    const [defZoom, setDefZoom] = useState(15)
    const allLocations = useSelector(state => state.locations)
    const selected = useSelector(state => state.selected)
    const { lat, lng, name, pic, place, address, link, desc } = selected
    const disatch = useDispatch()
    const markerIcon = {
        path: "M26.0552 6.8498C23.5839 2.66043 19.1945 0.100976 14.3133 0.00316406C14.1049 -0.00105469 13.8952 -0.00105469 13.6867 0.00316406C8.8056 0.100976 4.41614 2.66043 1.9448 6.8498C-0.581258 11.132 -0.65037 16.2757 1.75989 20.6094L11.8574 38.7646C11.8619 38.7727 11.8664 38.7807 11.8711 38.7887C12.3154 39.5472 13.1112 40 14.0001 40C14.889 40 15.6848 39.5471 16.129 38.7887C16.1337 38.7807 16.1383 38.7727 16.1428 38.7646L26.2402 20.6094C28.6503 16.2757 28.5812 11.132 26.0552 6.8498ZM14 18.125C10.8425 18.125 8.27378 15.6017 8.27378 12.5C8.27378 9.39839 10.8425 6.87503 14 6.87503C17.1574 6.87503 19.7262 9.39839 19.7262 12.5C19.7262 15.6017 17.1575 18.125 14 18.125Z",
        fillColor: "#e75959",
        fillOpacity: 1,
        strokeWeight: 0,
    };

    const handleCLick = (id, lat, lng, name, pic, place, address, link, desc) => {
        disatch(setSeleceted({ id, lat, lng, name, pic, place, address, link, desc }))
        setLat(lat)
        setLng(lng)
        setDefZoom(17)
    }

    const setDefCenter = (lat, lng) => {
        setLat(lat)
        setLng(lng)
    }

    //google map
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={defZoom}
            defaultCenter={{ lat: Number(lati), lng: Number(long) }}
            defaultOptions={{ styles: style }}
        >
            {
                props.marker.map((marker, index) => (
                    <Marker key={index} onClick={() => handleCLick(marker.id, marker.lat, marker.lng, marker.name, marker.pic, marker.place, marker.address, marker.link, marker.desc)}
                        position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
                        icon={markerIcon}
                    />
                ))
            }


        </GoogleMap>
    ))

    useEffect(() => {
        if (selected.length !== 0) (setDefCenter(lat, lng))
    }, [selected])

    return (
        <div>
            <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDoq9UGXD1xeWQTE76a67VgbGi8p3idiBE"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `calc(100vh - 120px)` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                marker={allLocations}
            />
        </div>
    )
}

export default Gmap
