import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <div className='container p-5 mb-5'>
            <div className='row justify-content-center text-center'>
                <div className='col-md-8'>
                    <h1 className='mt-5 mb-4'>Open a Zerodha account</h1>
                    <p className='mb-4'>
                        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>
                    <button
                        className='btn btn-primary fs-5'
                        style={{ padding: "10px 30px" }}
                        onClick={handleSignupClick}
                    >
                        Sign up now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;
