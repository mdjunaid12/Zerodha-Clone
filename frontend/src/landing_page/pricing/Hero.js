import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row border-bottom text-center p-5 mt-5'>
                <h1>Pricing</h1>
                <h4 className='fs-5 mt-3 text-muted'>Free equity investments and flat ₹20 traday and F&O trades</h4>
            </div>

            <div className='row p-5 mt-5 text-center text-muted'>
                <div className='col-4 p-4'>
                    <img src='media\images\pricingEquity.svg'></img>
                    <h1 className='fs-4 mb-4'>Free equity delivery</h1>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4 '>
                    <img src='media\images\intradayTrades.svg'></img>
                    <h1 className='fs-4 mb-4'>Intraday and F&O trades</h1>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4 '>
                    <img src='media\images\pricingEquity.svg'></img>
                    <h1 className='fs-4 mb-4'>Free direct MF</h1>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;