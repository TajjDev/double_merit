import React from 'react'
import Links from '../../component/nav/links/Link';
import "./indexx.css"
import bgOne from "/src/assets/image/bgOne.jpg"

const Index = () => {
    return (
        <div style={{backgroundImage:`linear-gradient(to left, #00000093, #1fd104bd),url(${bgOne})`}} id='hom'>
            <h3>Unlock the Doors to a Future of Excellence</h3>
            <p>Experience a harmonious blend of academic brilliance and moral integrity, shaping well-rounded leaders for tomorrow.</p>

            <div id="homBtn">
            <Links className={`homeBtn`} to={'/about'} label={'Who Are We?'} />

            </div>
        </div>
    )
}


export default Index
