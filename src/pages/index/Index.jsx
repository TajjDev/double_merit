import React from 'react'
import Links from '../../component/nav/links/Link';
import "./indexx.css"
import image from "/src/assets/image/bgOnee.jpg"
// import bgOne from "/src/assets/image/bgOne.jpg"

const Index = () => {
    return (
        <div id="homee">
            <div id='hom'>
                <h3>Unlock the Doors to a Future of Excellence</h3>
                <p>Experience a harmonious blend of academic brilliance and moral integrity, shaping well-rounded leaders for tomorrow.</p>

                <div id="homBtn">
                    <Links className={`homeBtn`} to={'/about'} label={'Who Are We?'} />

                </div>
            </div>
            <div id="sec">
                <div id="secO">
                    <h3>Who Are We?</h3>
                    <p>Double Merit Children Academy, located in 7, Ishaga Road opposite Mabo junction Ojuelegba, Surulere Lagos State, Nigeria, is a private primary school established on September, 2002.The school was founded to provide comprehensive education that integrates academic excellence with moral and intellectual development, grounded in Islamic principles.</p>
                </div>
                <div id="secT">
                    <img src={image} alt="" />
                </div>
            </div>
            <div id="trd">
                <div id="stnd">
                    <h3> What We Stand For</h3>
                </div>
                <div id="visMis">
                    <div id="mis">
                        <p className='bol'>Our Mission</p>
                        <p className='boll'>To empower the next generation with a balanced blend of Western academic excellence,  Islamic knowledge, and madrasah education, enabling them to succeed in this world and the hereafter.</p>
                    </div>
                    <div id="vis">
                        <p className='bol'>Our Vision</p>
                        <p className='boll'>By providing a nurturing environment where children can develop intellectually, spiritually, and morally.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index