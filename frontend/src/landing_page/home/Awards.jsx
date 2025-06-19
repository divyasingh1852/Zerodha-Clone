import React from 'react';

function Awards() {
  return (
    <>
      <div className="container p-5 mb-50">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <img 
              src="/media/images/largestBroker.svg" 
              alt="Largest Broker" 
              style={{ width: "400px", height: "auto" }} 
            />
          </div>


          <div className="col-md-6 text-start">
            <h3>Largest stock broker in India</h3>
            <p>
              2+ million Zerodha clients contribute to over 15% of all retail order
              <br />
              volumes in India daily by trading and investing in:
            </p>
            <br />

            <div className="row mb-5">
              <div className="col-6">
               <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
               </ul>
              </div>

              <div className="col-6">
               <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Go</li>
               </ul>
             </div>
          </div>

           
            <img 
              src="/media/images/pressLogos.png" 
              alt="Largest Broker" 
              style={{ width: "500px", height: "auto" }} 
            />

        </div>


      </div>
    </div>
    </>
  );
}

export default Awards;









