import React from 'react';

function Stats() {
    return ( 
     
     <div className="container p-3">
      <div className="row p-5">
        <div className='col-6  text-start'>
            <h2>Trust with confidence</h2><br/>

            <h5>Customer-first always</h5>
            <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with  &#8377;3.5+<br/>
               lakh crores worth of equity investments.</p><br/>
            
            <h5>No spam or gimmicks</h5>
             <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push <br/> notifications. High quality apps that you use at your pace, the <br/>
                way you like.
             </p><br/>

             <h5>The Zerodha universe</h5>
             <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in <br/>
             30+ fintech startups offer you tailored services specific to <br/>
             your needs.
             </p><br/>

             <h5>Do better with money</h5>
             <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just <br/>
             facilitate transactions, but actively help you do better with <br/>
             your money.
             </p><br/>
          </div>


          <div className="col-6 d-flex flex-column align-items-center">
                <img src="/media/images/ecosystem.png" alt="ecosystem" height="450px"/>
               <div className="mt-3 d-flex gap-3 text-center">
                    <a href="">Explore our products <i className="fas fa-arrow-right"></i></a> 
                    <a href="">Try Kite demo <i className="fas fa-arrow-right"></i></a>
               </div>
          </div>



     </div>
  </div>
  );
}

export default Stats;
































