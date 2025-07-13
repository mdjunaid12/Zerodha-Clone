import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
                <div className=' p-5' id='supportWrapper'>
                    <h4>Support Portal</h4>
                    <a href='' style={{color:"white"}}>Track Tickets</a>
                </div>

                <div className='row p-3 m-3' style={{lineHeight:"50px"}}>
                            <div className='col-6 p-5' >
                                <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                                <input className='fs-6' placeholder='Eg. how to I activate F&O, why is my order getting rejected.'></input> <br></br>
                                <a href=''>Track account opening </a> &nbsp;&nbsp;
                                <a href=''>Track segment activation</a> &nbsp;&nbsp;&nbsp;
                                <a href=''>Intraday margins </a> &nbsp;&nbsp;&nbsp;
                                <a href=''>Kite user manual</a> &nbsp;&nbsp;&nbsp;  
                            </div>
                            <div className='col-6 p-5 '>
                                <h1 className='fs-3'>Featured</h1>
                                <ol>
                                    <li><a href=''>Quarterly Settlement of Funds - July 2025</a></li>
                                    <li><a href=''>Exclusion of F&O contracts on 8 securities from August 29, 2025</a> </li>
                                </ol>
                                
                                
                            </div>
                </div>

                
        </section>
     );
}

export default Hero;