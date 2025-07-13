import React from 'react';
import CreateTicket from './CreateTicket';
import Hero from './Hero.js';

import OpenAccount from "../OpenAccount.js";
import Navbar from '../Navbar.js';
import Footer from '../Navbar.js';


function SupportPage() {
    return ( 
        <>
            <Hero/>
            <CreateTicket/>
        </>
     );
}

export default SupportPage;