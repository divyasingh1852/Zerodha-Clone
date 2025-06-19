import React from 'react';

function Pricing() {
    return (
      <div className='container mb-5'>
        <div className='row'>
            <div className='col-6 text-start'>
                <h2 className='fs-2'>Unbeatable pricing</h2><br/>
                <p className='text-muted'>We poineered the concept of discount broking and price<br/>
                 transparency in India.Flat fees and no hidden charges.
                </p>
                <a href="">See pricing<i className="fas fa-arrow-right"></i></a>
            </div>

          

            <div className='col-6 mb-5 text-start'>
                <div className='row text-center'>
                    <div className='col p-3 border'>
                        <h1 className='mb-3'>&#8377; 0</h1>
                        <p>Free equity delivery and <br/>direct mutual funds</p>
                    </div>

                    <div className='col p-3 border'>
                        <h1 className='mb-3'>&#8377; 20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>


        </div>


        

      </div>
     );
}

export default Pricing;




































