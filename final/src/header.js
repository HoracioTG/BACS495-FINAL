import React from 'react';
import './header.css';

function Header() {
    return (
        <div className='header'>
            <div className='header_title'>
                <h1>Header</h1>
            </div>
            <div className='header_content'>
                <p>- this is the header</p>
            </div>
            <div className='header_content'>
                <p>img src</p>
            </div>
        </div>
    );
}

export default Header