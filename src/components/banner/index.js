import React from 'react'
import './banner.css'
import Button from '../../widgets/button'
import Title from '../../widgets/typography/title'
import {FaCalendarAlt,FaLocationArrow,FaMapMarkerAlt} from "react-icons/fa"

const Banner = () => {
    return (
        <div>
        <div classname="banner_container">
        <div classname ="banner">
        <div className="row">
        <Para><FaCalendarAlt/>Monday,10:00 AM; Friday,10:00am</Para>
        <Title>Welcome Once Again</Title>       
        </div>
        <div classname="row">
        <Para><FaLocationArrow/>510,102th Ave,23423</Para>
        </div>
        <div className="row">
        <Button>Read More</Button>
        </div>
        </div>
        </div>
        </div>
        

    )
}

export default Banner