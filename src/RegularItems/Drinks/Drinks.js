import React, { useEffect, useState } from 'react';
import './Drinks.css';
import '../RegularCI.css';
import DrinkShow from './DrinkShow';
import PrCategory from '../../components/PrCategory/PrCategory';
import Cart from '../../components/Cart/Cart';


const Drinks = () => {
    const [drinks, setDrinks] = useState([]);
    useEffect(() => {
        fetch('drinksItem.json')
            .then(res => res.json())
            .then(data => setDrinks(data))

    }, [])
    return (
        <div>

            <h1>...Drinking Items...</h1>
            <div className='regular-items-design'>
                <div>

                    <PrCategory></PrCategory>
                    <div className='cart-container'>
                        <Cart cart={[]}></Cart>
                    </div>

                </div>
                <div className='rci-items-style'>

                    {
                        drinks.map(drink => <DrinkShow drink={drink}
                            key={drink.sn}></DrinkShow>)
                    }
                </div>



            </div>
        </div>
    );
};

export default Drinks;