import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import './Header.css';


const Header = () => {
    return (
        <>
        <header className='header'>
            <div>
              <h3>TECH-SHOP</h3>  
            </div>
            <div className='subheader2'>
                <li><FaSearch /></li>
                <li><FaCartShopping /></li>
                <li><CgProfile /></li>
            </div>
        </header>
            
        </>
    );
};

export default Header;