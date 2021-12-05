import React from 'react'
import './Dashboard.css'
import { FaGlobeAsia, FaLandmark, FaYoutubeSquare} from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import $ from "jquery";


function Dashboard() {

    $(document).ready(function () {
        $(".board").on("click", ".list", function () {
          $(".list").removeClass("active");
          $(this).addClass("active");
        });
      });
   

    return (
        <div>
            <div className='board'>
                <div className='list active'>
                        <span><FaGlobeAsia /></span>
                        <h4>Browse</h4>
                </div>
                <div className='list'>
                        <span><FaLandmark/></span>
                        <h4>Suggest Attraction</h4>
                </div>
                <div className='list'>
                    <span><FaYoutubeSquare/></span>
                    <h4>Videos</h4>
                </div>
                <div className='list'>
                    <span><BsChatLeftText/></span>
                    <h4>Blog</h4>
                </div>
                <div className='list'>
                    <span><AiFillInfoCircle/></span>
                    <h4>About</h4>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

 
