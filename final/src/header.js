import React from 'react';
import './header.css';
import logo from './logo.png';

function Header() {
    return (
        <div className='header'>
            <div className='header_title'>
                <h1>Header</h1>
            </div>
            <div className='header_content'>
                <p>insert nav bar</p>
                <p>- this is the header</p>
                <p>this is my logo <img src={logo} height={100} width={100} alt='my_logo'/></p>
            </div>
        </div>
    );
}

export default Header