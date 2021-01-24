import React from "react"
import Heading from "../../widgets/typography/heading"
import Para from "../../widgets/typography/paragraph"

const Card = (props) => {
    return (
        <div className="eventCard">
            <img src={props.image} />
            <Heading>{props.title}</Heading>
            <Para>{props.pgraph}</Para>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;