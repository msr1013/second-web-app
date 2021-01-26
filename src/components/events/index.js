import React from "react"
import Title from "../../widgets/typography/title"
import Card from "./card"
import "./event.css"
import Image1 from "../images/img1.JPG";
import Image2 from "../images/img2.JPG";
import Image3 from "../images/img3.JPG";

class Events extends React.Component {
    render() {
        return (
            <div className="main_event">
                <div className="events_container">
                    <Title> OUR EVENTS </Title>
                    <div className="events">
                        <Card
                            image={Image1}
                            title="Morning Assembly"

                            description="There are many variations of passages of Lorem Ipsum available, but the majority have 
                    suffered alteration in some form, by injected humour, or randomised words which don't look even 
                    slightly believable. "/>
                        <Card

                            image={Image2}
                            title="Spirit and Truth"

                            description="There are many variations of passages of Lorem Ipsum available, but the majority have 
                    suffered alteration in some form, by injected humour, or randomised words which don't look even 
                    slightly believable. "/>
                        <Card

                            image={Image3}
                            title="Saturday School"

                            description="There are many variations of passages of Lorem Ipsum available, but the majority have 
                    suffered alteration in some form, by injected humour, or randomised words which don't look even 
                    slightly believable. "/>

                    </div>
                </div>
            </div>
        )
    }
}
export default Events