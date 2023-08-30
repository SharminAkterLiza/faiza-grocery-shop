import React from 'react';
import './Help.css';
import { FaBeer, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Help = () => {
    return (
        <div >
            <h1>Always Here for You</h1>
            <div className='help-design'>

                <div >

                    <p>Faiza Shop is dedicated to ensuring your complete satisfaction, and we are always happy to hear from you. If you have any questions or comments, or just want to share your thoughts, call our customer servive number:</p>
                    <h4><span className='help-span'>01624892372</span> (8am-10pm, Everyday)</h4>
                    <p>You can also contact us at our outlet:
                    </p>
                    <h5><span className='help-span'>Address:  </span> Doctorpara,Badurtala,Kanddirpar, Cumilla, Bangladesh</h5>
                    <h5><span className='help-span'>Email:  </span> shop@faiza.com</h5>
                    <h4>If you feel any problem to order please call us by avobe number , </h4>
                    <div className='fb-icon-flex'>
                        <h4>or message us in our facebook page : </h4>
                        <Link to="https://www.facebook.com/profile.php?id=100095536604344">
                            <button className='help-fb-btn'>
                                <IconContext.Provider
                                    value={{ color: 'blue', size: '30px' }}
                                >
                                    <div>
                                        <FaFacebook />
                                    </div>
                                </IconContext.Provider>
                            </button>
                        </Link>
                    </div>
                    {/* <Link to="https://www.facebook.com/profile.php?id=100095536604344">
                            <button>
                                Facebook   < FaFacebook />
                            </button>
                        </Link></h4> */}
                    <h3>Order System: </h3>
                    <ol>
                        <li> <h6>You can add product in cart from shop option. You can see the availave products from Categories.In shop all product are arranged in category wise.</h6></li>
                        <li><h6>
                            You can take screenshot your desire items and inbox us on facebook.
                        </h6></li>
                    </ol>




                </div>
                <div>
                    <img src="https://i.ibb.co/yP9JcP5/cover11.jpg" alt="" />
                    <Link to="/"><button className='back-btn-style'>Back</button></Link>
                </div>

            </div>


        </div>
    );
};

export default Help;