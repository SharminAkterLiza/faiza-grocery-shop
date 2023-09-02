import React from 'react';
import './PrCategory.css';
import { Link } from 'react-router-dom';

const PrCategory = () => {
    return (
        <div className="category-style">
            <h2 className='category-name'>Categories </h2>

            <Link to="/regci" >
                <button>Regular Cooking</button>
            </Link>
            {/* <a href="/regci">Regular Cooking</a> */}


            <Link to="/regdrinks">
                <button>Drinks</button>
            </Link>



            <Link to="/icecream">
                <button>Ice Cream</button>
            </Link>


            <Link to="/chips"><button>Chips</button></Link>

            <Link to="/nodosDesert"><button>Noodles & Deserts</button></Link>


            <Link to="/stationary">
                <button>Stationary</button>
            </Link>
            <Link to="/chocolate">
                <button>Chocolate</button>
            </Link>
        </div>
    );
};

export default PrCategory;