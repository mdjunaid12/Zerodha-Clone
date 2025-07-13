import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-top'>
                <div className='col-8 p-4'>
                    <a href='' style={{textDecoration:"none"}}>
                        <h3 className='fs-5'>Brokerage Calculator</h3></a>
                        <ul style={{lineHeight:"2.5"}} className='text-muted fs-6'>
                            <li>₹100 per order for futures and options.</li>
                            <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        </ul>
                </div>
                <div className='col-4 p-4 '>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>List of Charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;