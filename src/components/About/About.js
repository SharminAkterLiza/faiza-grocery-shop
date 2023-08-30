import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import './About.css';
import { Link } from 'react-router-dom';
const About = () => {

    return (
        <div className='about-style'>
            <img src="" alt="" />
            <div className='about-info-style'>
                <h2>Everyday A Better Life</h2>
                <p>Discover a world of freshness, warm service and value</p>

            </div>
            <div>
                <p>Our Shop is the grocery chain in Cumilla and Best Retail trusted shop in the city. As part of the Faiza family, your satisfaction and wellbeing are what we work diligently to ensure. Most of all, we want to always leave you with a smile, whether you visit our stores or order online, and we are happy to serve you in whatever way we can.

                    So expect more. Come and discover a different shopping experience. Welcome to Faiza Shop!</p>

                <h4>Faiza Shop Family</h4>
                <p>Since 2013, Our shop has been providing our customers with the very best fresh produce, local and imported household needs, as well as an exquisite range of fashions, home accessories, appliances, and more. </p>
            </div>
            <Link to="/"><button className=' back-btn-stylee'>Back</button></Link>
            {/* <img src="https://i.ibb.co/yP9JcP5/cover11.jpg" alt="" /> */}

        </div>
    );
};

export default About;