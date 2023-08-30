import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../Drinks/Drinks.css'
const IceCreamShow = (props) => {
    return (
        <div>
            <div className='rci-style'>

                <img src={props.icecream.img} alt="" />
                <div className='rci-details-style'>
                    <h4 >{props.icecream.name}</h4>
                    <h5 >Price: <span>{props.icecream.price}</span> Tk</h5>
                </div>

                <button className='rci-style-btn'>
                    <p>Add to cart</p>

                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

            </div>

        </div>
    );
};

export default IceCreamShow;