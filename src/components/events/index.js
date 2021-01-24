import React from "react"
import Title from "../../widgets/typography/title"
import Card from "./card"
import "./event.css"

const Events = () => {
    return (
        <div className="main_event">
            <div className="events_container">
                <Title> OUR EVENTS </Title>
                <div className="events">
                    <Card
                        image=" "
                        title="Morning Assembly"
                        pgraph=""
                        description="There are many variations of passages of Lorem Ipsum available, but the majority have 
                    suffered alteration in some form, by injected humour, or randomised words which don't look even 
                    slightly believable. "/>
                    <Card
                        image=" "
                        title="Spirit and Truth"
                        pgraph=""
                        description="There are many variations of passages of Lorem Ipsum available, but the majority have 
                    suffered alteration in some form, by injected humour, or randomised words which don't look even 
                    slightly believable. "/>
                    <Card
                        image=" "
                        title="Saturday School"
                        pgraph="<FaCalenderAlt/>Monday,10:00am;Friday,10:00am,
                    <FaMapMarkerAlt/>St.Paul,
                    <FaLocationArrow/>510,123th Ave"
                        description="There are many variations of passages of Lorem Ipsum available, but the majority have 
                    suffered alteration in some form, by injected humour, or randomised words which don't look even 
                    slightly believable. "/>

                </div>
            </div>
        </div>
    )
}