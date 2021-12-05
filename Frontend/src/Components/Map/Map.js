import React, { useState } from 'react'
import './Map.css'
import { RiSettings5Fill, RiCloseCircleFill } from "react-icons/ri";
import { MdOutlineHelp } from "react-icons/md";
import Desc from '../Desc/Desc';
import Gmap from './Gmap';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelected } from '../../redux/action';

function Map() {
    const selected = useSelector(state=>state.selected)
    const dispatch = useDispatch()

    const handleClose = () =>{
        dispatch(removeSelected())
    }
    
    return (
        <div style={{width:'100%'}}>
            
            <div className='header'>
                <div className='title'><h2>TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE</h2></div>
                <div className='icons'>
                    <div className='icon'>
                         <RiSettings5Fill/>
                    </div>
                    <div className='icon'>
                         <MdOutlineHelp/>    
                    </div>
                    <div className='icon'>
                        <RiCloseCircleFill onClick={handleClose}/>   
                    </div>
                </div>
            </div>
            <div className='map'>
                <Gmap />
                {/* menampilkan desc box */}
                {
                    selected.length !== 0 ? <Desc/> : null
                }
            </div>
        </div>
    )
}

export default Map
