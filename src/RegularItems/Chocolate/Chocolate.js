import React, { useEffect, useState } from 'react';
import PrCategory from '../../components/PrCategory/PrCategory';
import ChocolateShow from './ChocolateShow';

const Chocolate = () => {

    const [chocolates, SetChocolates] = useState([]);



    useEffect(() => {
        fetch('chocolateItem.json')
            .then(res => res.json())
            .then(data => SetChocolates(data))

    }, [])
    return (
        <div>

            <h1>...Chocolate Items...</h1>
            <div className='regular-items-design'>
                <div>

                    <PrCategory></PrCategory>
                </div>
                <div className='rci-items-style'>

                    {
                        chocolates.map(chocolate => <ChocolateShow chocolate={chocolate}
                            key={chocolate.sn}></ChocolateShow>)
                    }
                </div>



            </div>
        </div>
    );
};

export default Chocolate;