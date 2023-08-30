import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const StationaryShow = (props) => {
    return (
        <div >

            <div className='rci-style'>

                <img src={props.stationary.img} alt="" />
                <div className='rci-details-style'>
                    <h4>{props.stationary.name}</h4>
                    <h5 >Price: <span>{props.stationary.price}</span> Tk</h5>
                </div>

                <button className='rci-style-btn'>
                    <p>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

            </div>

        </div>
    );
};

export default StationaryShow;