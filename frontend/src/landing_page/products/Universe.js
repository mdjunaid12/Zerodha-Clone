import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5'>
                <h1 className='mb-4'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>


                <div className='col-4 p-3 mt-5'>
                    <img src='media\images\smallcaseLogo.png'></img>
                    <p className='text-muted text-small'>Thematic investment platform</p> 
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"40%"}} src='media\images\streakLogo.png'></img>
                    <p className='text-muted text-small'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"40%"}} src='media\images\sensibullLogo.svg'></img>
                    <p className='text-muted text-small'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"50%"}} src='media\images\zerodhaFundhouse.png'></img>
                    <p className='text-muted text-small'>Asset management</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"40%"}} src='media\images\goldenpiLogo.png'></img>
                    <p className='text-muted text-small'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"40%"}} src='media\images\dittoLogo.png'></img>
                    <p className='text-muted text-small'>Insurance</p>
                </div>
                <button className='p-2 mb-5 mt-5 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Signup now</button>

            </div>

        </div>
     );
}

export default Universe;