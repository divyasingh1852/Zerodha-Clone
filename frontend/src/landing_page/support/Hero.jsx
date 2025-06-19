// import React from 'react'

// function Hero() {
//   return (
//     <div className='container'>
//         <div className='row'  style={{backgroundColor: "blue", color: "white"}}>
//             <div className='col-6 text-start p-5 '>
//               <div className='white'>
//                 <h6 className='mb-5'>Support Portal</h6>
//               </div>
//                 <h5 className='mb-3'>Search for an answer or browse help topics to create a ticket</h5>
//                  <button style={{backgroundColor: "white", color: "black", paddingTop: "10px", paddingBottom: "10px"}}>
//                     Eg: how do i activate F&O, why is my order getting rejected.
//                 </button>
//                 <div className="white mt-3" style={{display: "flex", gap: "10px"}}>
//                     <div><a href="">Track account opening</a></div>
//                     <div><a href="">Track segment activation</a></div>
//                     <div><a href="">Intraday</a></div>
//                 </div>
//                 <div className="white" style={{display: "flex", gap: "10px"}}>
//                     <div><a href="">margins</a></div>
//                     <div><a href="">Kite user manual</a></div>
//                 </div>
//             </div>
//             <div className='col-6 p-5'>
//               <div className='white'>
//                 <a href="">Track Tickets</a>
//                   <div className='mr-5 text-start'>
//                     <h3 className='mt-5'>Featured</h3>
//                     <p>1.<a href="">Current Takeovers and Delisting - January 2024</a></p>
//                     <p>2.<a href="">Latest Intraday leverages - MIS&CO</a></p>
//                   </div>
//               </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero






import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper1">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3" id="supportWrapper2">
        <div className="col-6 p-3 text-start">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br /><br/>
          
          <a href="">Track account opening</a>&nbsp;&nbsp;
          <a href="">Track segment activation</a>&nbsp;&nbsp;
          <a href="">Intraday margins</a>&nbsp;&nbsp;
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3 text-start">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;





































