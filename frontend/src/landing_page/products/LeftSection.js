import React from 'react';

function LeftSection({
    imageURL, 
    productName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore
    }) {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-6 '>
                    <img src={imageURL} style={{width:"90%"}}></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='mb-4'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='media\images\googlePlayBadge.svg'></img></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src='media\images\appstoreBadge.svg'></img></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;