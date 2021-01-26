import React from "react"
import Heading from "../../widgets/typography/heading"
import { FaCalendarAlt, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa"
import './card.css'

const Card = (props) => {
    return (
        <div className="eventCard">
            <img src={props.image} width={320} height={180} />
            <Heading>{props.title}</Heading>
            <p className="fit">
                {" "}
                <FaCalendarAlt />
                Monday,9:00am ; Sunday,12:00pm
            </p>
            <p className="fit">
                {" "}
                <FaMapMarkerAlt />
                St.Anger Metallica
            </p>
            <p className="fit">
                {" "}
                <FaLocationArrow />
                510,102th Avenue,Wild West
            </p>

        </div>
    )
}

export default Card;