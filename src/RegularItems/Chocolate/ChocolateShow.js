import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ChocolateShow = (props) => {
    return (
        <div >

            <div className='rci-style'>

                <img src={props.chocolate.img} alt="" />
                <div className='rci-details-style'>
                    <h4>{props.chocolate.name}</h4>
                    <h5 >Price: <span>{props.chocolate.price}</span> Tk</h5>
                </div>

                <button className='rci-style-btn'>
                    <p>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

            </div>

        </div>
    );
};

export default ChocolateShow;