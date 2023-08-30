import React, { useEffect, useState } from 'react';
import RcitemS from './regCook/RcitemS';
import './RegularCI.css';
import PrCategory from '../components/PrCategory/PrCategory';
import Cart from '../components/Cart/Cart';
import { Link } from 'react-router-dom';

const RegularCI = () => {
    const [citems, setCitems] = useState([]);
    useEffect(() => {
        fetch('regCookingItems.json')
            .then(res => res.json())
            .then(data => setCitems(data))

    }, [])
    return (
        <div>
            <h1> ...Regular Cooking Items...</h1>
            <div className='regular-items-design'>
                <div>

                    <PrCategory></PrCategory>
                    {/* <div className='cart-container'>

<Cart clearCart={clearCart} cart={cart} >
    <Link to='/delivery'>
        <button className='btn-procede-delivery'>Proceed Delivery</button>

    </Link>
    <Link to="/"><button className='back-btn-style'>Back</button></Link>
</Cart>
</div> */}
                </div>
                <div className='rci-items-style'>


                    {
                        citems.map(citem => <RcitemS citem={citem}
                            key={citem.sn}></RcitemS>)
                    }

                </div>
            </div>
        </div>

    );
};



export default RegularCI;