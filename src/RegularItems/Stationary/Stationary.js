import React, { useEffect, useState } from 'react';
import PrCategory from '../../components/PrCategory/PrCategory';
import StationaryShow from './StationaryShow';

const Stationary = () => {
    const [stationaries, setStationaries] = useState([]);

    useEffect(() => {
        fetch('stationaryItem.json')
            .then(res => res.json())
            .then(data => setStationaries(data))

    }, [])
    return (
        <div>

            <h1>...Stationary Items...</h1>
            <div className='regular-items-design'>
                <div >
                    <PrCategory></PrCategory>
                </div>
                <div className='rci-items-style'>
                    {
                        stationaries.map(stationary => <StationaryShow
                            stationary={stationary}
                            key={stationary.sn}
                        ></StationaryShow>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Stationary;