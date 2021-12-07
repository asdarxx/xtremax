import React from 'react'
import './Desc.css'
import { IoIosPin } from "react-icons/io"
import { FaGlobeAmericas } from "react-icons/fa"
import { useSelector } from 'react-redux'


function Desc() {
    const landmark = useSelector(state => state.selected)
    const { lat, lng, name, pic, place, address, link, desc } = landmark
    return (
        <div className='desc'>
            <div className='content'>
                <img src={`/IMG/${pic}`} alt='img-landmark'></img>
                <div className='title'>{name}</div>
            </div>
            <div className='detail'>
                <p>{desc}</p>
                {/* <p>Its name combines "mer" meaning the sea and "lion". The fish body
                   represents Singapore's origin as a fishing village when it was called Temasek,
                   which means "seatown" in Javanese. The lion head represents Singapore's original 
                   name-Singapura-meanig "lion city" or "kota singa"
                </p> */}
                <div className='address'><span><IoIosPin /></span><div>{address}</div></div>
                <div className='link'><span><FaGlobeAmericas /></span><div>{link}</div></div>
            </div>
        </div>
    )
}

export default Desc
