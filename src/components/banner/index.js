import React from 'react'
import './banner.css'
import Button from '../../widgets/button'
import Title from '../../widgets/typography/title'
import Para from '../../widgets/typography/paragraph'
import {FaCalendarAlt,FaLocationArrow,FaMapMarkerAlt} from "react-icons/fa"

const Banner = () => {
    return (
       
        <div className="banner_container">
        <div className ="banner">
        <div className="row">
        <Para><FaCalendarAlt/>Monday,10:00 AM; Friday,10:00am
        </Para>
        <Title>Welcome Once Again</Title>       
        </div>
        <div classname="row">
        <Para><FaMapMarkerAlt/>St.Perl Church
        </Para>
        <Para><FaLocationArrow/>510,102th Ave,23423</Para>
        </div>
        <div className="row">
        <Button>Read More</Button>
        </div>
        </div>
        </div>
   
        

    )
}

export default Banner