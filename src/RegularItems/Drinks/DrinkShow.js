import React from 'react';
import './Drinks.css';
import '../regCook/RcitemS.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './DrinkShow.css';

const DrinkShow = (props) => {
    return (
        <div >

            <div className='rci-style'>

                <img src={props.drink.img} alt="" />
                <div className='rci-details-style'>
                    <h4>{props.drink.name}</h4>
                    <h5 >Price: <span>{props.drink.price}</span> Tk</h5>
                </div>

                <button className='rci-style-btn'>
                    <p>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

            </div>

        </div>
    );
};

export default DrinkShow;