import React, { useEffect, useState } from 'react'
import { IoCaretDown, IoCaretUp} from "react-icons/io5";
import './Menu.css'
import $ from "jquery";
import api from '../../api/locations'
import { useDispatch, useSelector } from 'react-redux';
import { setLocations, setSeleceted } from '../../redux/action';

function Menu() {
    const [isOpen, setIsOpen] = useState(true)
    const dispatch = useDispatch()
    const AllLocations = useSelector(state=>state.locations)
    const selected = useSelector(state=>state.selected)
    
    $(document).ready(function () {
        $(".list").on("click", ".content", function () {
          $(".content").removeClass("selected");
          $(this).addClass("selected");
        });
      });

    //function set selected loation on click
    const handleClick = (id,lat,lng,name,pic,place,address,link,desc) =>{
        dispatch(setSeleceted({id,lat,lng,name,pic,place,address,link,desc}))
    }

    //function ambil data dari json-server
    const getLocations = async()=>{
        const response = await api.get("/data")
        dispatch(setLocations(response.data)) //kirim data ke redux
    }

    //remove class selected on landmark menu list when no landmark selected
    const removeSelected = () =>{
       $(document).ready(function () {
            $(`.content`).removeClass("selected");
        });
    }
    //
    const addSelected = (id) =>{
        $(document).ready(function () {
            $(".content").removeClass("selected");
            $(`#${id}`).addClass("selected");
        });
    }
   console.log('selected = ',selected)
    useEffect(()=>{
        getLocations() //call function getlocation on render
    },[])

    useEffect(()=>{
     if (selected.length === 0)(removeSelected())
    },[selected])

    useEffect(()=>{
        if (selected) (addSelected(selected.id))
    },[selected])

    return (
        <div style={{height:'100vh'}}>
            <div className='menu'>
                <div className='filter'>
                    <select>
                        <option>Filter by favorite</option>
                    </select>
                </div>
                <div className='landmark'>
                    {/* map data from local server */}
                    {
                        AllLocations.map((data,index)=>(
                            <div onClick={()=>handleClick(data.id,data.lat,data.lng,data.name,data.pic,data.place,data.address,data.link,data.desc)}  key={index}>
                                <div className='list'><div className='content' id={data.id}>{data.name}{data.place?<span onClick={()=>setIsOpen(!isOpen)}>{ isOpen ? <IoCaretUp/> : <IoCaretDown/>}</span>:null}</div></div> 
                                {
                                    data.place && isOpen ?
                                    <ul className='drop-menu'>
                                        {
                                            data.place.map((item,index)=>(
                                                <li key={index}>{item}</li>
                                            ))
                                        } 
                                    </ul> : null
                                }
                            </div>
                                ))
                    }
                    {/* <div className='list'><div className='content selected'>Merlion</div></div>
                    <div className='list'><div className='content'>Marina Bay Sands <span onClick={()=>setIsOpen(!isOpen)}>{ isOpen ? <IoCaretUp/> : <IoCaretDown/>}</span></div></div>
                      {
                          isOpen ?
                            <ul className='drop-menu'>
                                <li>ArtScienceMuseum</li>
                                <li>Marina Bay Sands Skypark</li>
                                <li>Double Helix Bridge</li>
                            </ul> : null
                        
                      }
                    <div className='list'><div className='content'>Garden by the Bay <span><IoCaretDown/></span></div></div>
                    <div className='list'><div className='content'>China Town <span><IoCaretDown/></span></div></div>
                    <div className='list'><div className='content'>Asian Civilisations Museum</div></div>
                    <div className='list'><div className='content'>Clarke Quay</div></div>
                    <div className='list'><div className='content'>Fort Canning Park</div></div>
                    <div className='list'><div className='content'>Singapore Flyer</div></div>
                    <div className='list'><div className='content'>Orchard Road</div></div> */}
                </div>
            </div>
        </div>
    )
}

export default Menu
