import React from 'react';
import './RcitemS.css';
// import PrCategory from '../../components/PrCategory/PrCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../Drinks/Drinks.css'

const RcitemS = (props) => {
    return (
        <div >

            <div className='rci-style'>

                <img src={props.citem.img} alt="" />
                <div className='rci-details-style'>
                    <h4 >{props.citem.name}</h4>
                    <h5 >Price: <span>{props.citem.price} </span>Tk</h5>
                </div>

                <button className='rci-style-btn'>
                    <p>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

            </div>

        </div>
    );
};

export default RcitemS;