import React, { useEffect, useState } from 'react';
import IceCreamShow from './IceCreamShow';
import PrCategory from '../../components/PrCategory/PrCategory';

const IceCream = () => {
    const [icecreams, setIcecreams] = useState([]);

    useEffect(() => {
        fetch('iceCream.json')
            .then(res => res.json())
            .then(data => setIcecreams(data))

    }, [])
    return (
        <div>

            <h1>...Delicious Ice Creams...</h1>
            <div className='regular-items-design'>
                <div >
                    <PrCategory></PrCategory>
                </div>
                <div className='rci-items-style'>
                    {
                        icecreams.map(icecream => <IceCreamShow
                            icecream={icecream}
                            key={icecream.sn}
                        ></IceCreamShow>)
                    }
                </div>
            </div>
        </div>
    );
};

export default IceCream;