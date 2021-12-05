import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector } from "react-redux"
import { GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"
import { setSeleceted } from '../../redux/action'


function Gmap() {
    const [lati, setLat] = useState('1.286920')
    const [long, setLng] = useState('103.854570')
    const [defZoom, setDefZoom] = useState(15)
    const allLocations = useSelector(state=>state.locations)
    const selected =  useSelector(state=>state.selected)
    const {lat,lng,name,pic,place,address,link,desc} = selected
    const disatch =  useDispatch()

    const handleCLick = (id,lat,lng,name,pic,place,address,link,desc) =>{
        disatch(setSeleceted({id,lat,lng,name,pic,place,address,link,desc}))
        setLat(lat)
        setLng(lng)
        setDefZoom(17)  
      }

    const setDefCenter = (lat, lng) =>{
        setLat(lat)
        setLng(lng)
    }

    //google map
    const MyMapComponent =  withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={defZoom}
        defaultCenter={{ lat: Number(lati), lng: Number(long)}}
     >
    {
        props.marker.map(marker => (
        <Marker onClick={()=>handleCLick(marker.id,marker.lat, marker.lng,marker.name,marker.pic,marker.place,marker.address,marker.link,marker.desc)}  position={{ lat:Number(marker.lat), lng: Number(marker.lng) }}/>      
        ))
    }
    </GoogleMap>
  ))

    useEffect(()=>{
       if (selected.length !== 0) (setDefCenter(lat,lng))
    },[selected])

    return (
        <div>
            <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDoq9UGXD1xeWQTE76a67VgbGi8p3idiBE"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `87.6vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                marker={allLocations}
            />
        </div>
    )
}

export default Gmap
