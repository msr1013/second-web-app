import React from "react";
import Heading from "../../widgets/typography/heading"
import "./card1.css"

const newsCard = (props) => {
    return (
        <div className="newsCard">
            <img src={props.image} width={300} height={180} />

        </div>
    )
}