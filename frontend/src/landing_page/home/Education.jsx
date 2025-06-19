import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img 
                        src="/media/images/education.svg" 
                        alt="education" 
                         style={{ width: "70%", height: "auto" }} 
                    />
                </div>


                <div className='col-6 text-start'>
                     <h2 className='mb-3 fs-2'>Free and open market education</h2>
                     <p>Varsity, the largest online stock market education book in the world<br/>
                     covering everything from the basics to advanced trading.
                     </p>
                     <a href="">Versity<i className="fas fa-arrow-right"></i></a>
                     <p className='mt-5'>TradingQ&A, the most active trading and investment community in<br/>
                      India for all your market related queries.
                     </p>
                     <a href="">TradingQ&A<i className="fas fa-arrow-right"></i></a>
                </div>

            </div>
        </div>
     );
}

export default Education;
















































