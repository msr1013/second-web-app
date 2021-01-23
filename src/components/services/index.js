import React from 'react'
import Title from '../../widgets/typography/title'
import Heading from '../../widgets/typography/heading'
import SubTitle from '../../widgets/typography/subtitle'
import './services.css'


const Services = (props) => {
    return  <div className = "services_container">
        <Title color="#222">Statement of Purpose</Title>
        <br/> <br/>
        <div className ="services">
            <div className ="service">
                <SubTitle>LOGO</SubTitle>
                <Heading>What we Provide</Heading>
                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className ="service">
                <SubTitle>LOGO</SubTitle>
                <Heading>What we Provide</Heading>
                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className ="service">
                <SubTitle>LOGO</SubTitle>
                <Heading>What we Provide</Heading>
                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
        </div>
        </div>
}

export default Services