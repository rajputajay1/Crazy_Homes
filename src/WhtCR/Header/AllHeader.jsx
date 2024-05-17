import React from 'react';

import HeaderPart2 from './HeaderPart2';
import HederPart from './HeaderPart1';
import Navbar from './Navbar';
const Header = () => {
    return (
        <>
            <header className='shadow-md'>
                <Navbar />
                <HederPart />
                <HeaderPart2 />
            </header>


        </>
    );
}

export default Header;
