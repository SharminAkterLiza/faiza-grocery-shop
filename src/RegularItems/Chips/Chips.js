import React, { useEffect, useState } from 'react';
import PrCategory from '../../components/PrCategory/PrCategory';
import ChipsShow from './ChipsShow';

const Chips = () => {
    const [chipses, setChipses] = useState([]);
    useEffect(() => {
        fetch('chipsItem.json')
            .then(res => res.json())
            .then(data => setChipses(data))

    }, [])
    return (

        <div>

            <h1>...Drinking Items...</h1>
            <div className='regular-items-design'>
                <div>

                    <PrCategory></PrCategory>
                </div>
                <div className='rci-items-style'>

                    {
                        chipses.map(chips => <ChipsShow chips={chips}
                            key={chips.sn}></ChipsShow>)
                    }
                </div>



            </div>
        </div>

    );
};

export default Chips;