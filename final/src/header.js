import React from 'react';
import './App.css';
import logo from './logo.png';

function Header() {
    return (
        <div className='header_section'>
            <div className='title'>
                <h1>Header</h1>
            </div>
            <div className='content'>
                <p>This is my header (need navbar))</p>
                <p>this is my logo <img src={logo} height={50} width={100} alt='my_logo'/></p>
            </div>
        </div>
    );
}

export default Header