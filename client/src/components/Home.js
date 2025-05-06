// import React, { Component } from "react";

// class Home extends Component {
//   render() {
//     return (
//       <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
//         <div className="container">
//           <h2>
//             {" "}
//             <center>
//               {" "}
//               <br />
//               <h1 class="display-2">CEYLON EXPORTS</h1>
//               <br />
//             </center>{" "}
//           </h2>
//           <hr />
//           <br />

//           <div class="row">
//             <div class="col-sm-6">
//               <div class="card">
//                 <img
//                   src="%PUBLIC_URL%../../cus.jpg "
//                   width="200"
//                   height="275"
//                   position="absolute"
//                   class="card-img-top"
//                   alt="..."
//                 />
//                 <div class="shadow bg-white rounded">
//                   <div class="card-body">
//                     {/*Customer Home Navigation*/}

//                     <h5 class="card-title">Customer Management</h5>

//                     <a href="/requests" class="btn btn-primary">
//                       <i class="fas fa-sort-amount-up-alt"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <br />
//               <br />
//             </div>

//             <div class="col-sm-6">
//               <div class="card">
//                 <img
//                   src="%PUBLIC_URL%../../int.jpg "
//                   width="200"
//                   height="275"
//                   position="absolute"
//                   class="card-img-top"
//                   alt="..."
//                 />
//                 <div class="shadow bg-white rounded">
//                   <div class="card-body">
//                     <h5 class="card-title"> Inventory Management</h5>

//                     <a href="/intdash" class="btn btn-primary">
//                       <i class="fas fa-cubes"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <br />
//               <br />
//             </div>

//             <div class="col-sm-6">
//               <div class="card">
//                 <img
//                   src="%PUBLIC_URL%../../pro.jpg "
//                   width="200"
//                   height="275"
//                   position="absolute"
//                   class="card-img-top"
//                   alt="..."
//                 />
//                 <div class="shadow bg-white rounded">
//                   <div class="card-body">
//                     <h5 class="card-title">Production Management</h5>

//                     <a href="/prodash" class="btn btn-primary">
//                       <i class="fab fa-product-hunt"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <br />
//               <br />
//             </div>

//             <div class="col-sm-6">
//               <div class="card">
//                 <img
//                   src="%PUBLIC_URL%../../exp.jpg "
//                   width="200"
//                   height="275"
//                   position="absolute"
//                   class="card-img-top"
//                   alt="..."
//                 />
//                 <div class="shadow bg-white rounded">
//                   <div class="card-body">
//                     <h5 class="card-title">Export Management</h5>

//                     <a href="/expDash" class="btn btn-primary">
//                       <i class="fas fa-file-import"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <br />
//               <br />
//             </div>

//             <div class="col-sm-6">
//               <div class="card">
//                 <img
//                   src="%PUBLIC_URL%../../qut.jpg "
//                   width="200"
//                   height="275"
//                   position="absolute"
//                   class="card-img-top"
//                   alt="..."
//                 />
//                 <div class="shadow bg-white rounded">
//                   <div class="card-body">
//                     <h5 class="card-title">Quality Check Management</h5>

//                     <a href="/homeqc" class="btn btn-primary">
//                       <i class="fas fa-tasks"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <br />
//               <br />
//             </div>

//             <div class="col-sm-6">
//               <div class="card">
//                 <img
//                   src="%PUBLIC_URL%../../trn.jpg "
//                   width="200"
//                   height="275"
//                   position="absolute"
//                   class="card-img-top"
//                   alt="..."
//                 />
//                 <div class="shadow bg-white rounded">
//                   <div class="card-body">
//                     <h5 class="card-title">Transport Management</h5>

//                     <a href="/hometr" class="btn btn-primary">
//                       <i class="fas fa-truck"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <br />
//               <br />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Home;

import React, { Component } from "react";
import "./Home.css"; // Link to your CSS file

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper" id="page-content-wrapper">
        <div className="home-container">
          <div className="home-header">
            <h1 className="home-title">CEYLON EXPORTS</h1>
            <hr />
          </div>

          <div className="home-cards-row">
            <div className="home-card-col">
              <div className="home-card">
                <img
                  src="%PUBLIC_URL%../../cus.jpg"
                  className="home-card-img"
                  alt="Customer"
                />
                <div className="home-card-body">
                  <h5 className="home-card-title">Customer Management</h5>
                  <a href="/requests" className="home-btn">
                    <i className="fas fa-sort-amount-up-alt"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="home-card-col">
              <div className="home-card">
                <img
                  src="%PUBLIC_URL%../../int.jpg"
                  className="home-card-img"
                  alt="Inventory"
                />
                <div className="home-card-body">
                  <h5 className="home-card-title">Inventory Management</h5>
                  <a href="/intdash" className="home-btn">
                    <i className="fas fa-cubes"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="home-card-col">
              <div className="home-card">
                <img
                  src="%PUBLIC_URL%../../pro.jpg"
                  className="home-card-img"
                  alt="Production"
                />
                <div className="home-card-body">
                  <h5 className="home-card-title">Production Management</h5>
                  <a href="/prodash" className="home-btn">
                    <i className="fab fa-product-hunt"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="home-card-col">
              <div className="home-card">
                <img
                  src="%PUBLIC_URL%../../exp.jpg"
                  className="home-card-img"
                  alt="Export"
                />
                <div className="home-card-body">
                  <h5 className="home-card-title">Export Management</h5>
                  <a href="/expDash" className="home-btn">
                    <i className="fas fa-file-import"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="home-card-col">
              <div className="home-card">
                <img
                  src="%PUBLIC_URL%../../qut.jpg"
                  className="home-card-img"
                  alt="Quality Check"
                />
                <div className="home-card-body">
                  <h5 className="home-card-title">Quality Check Management</h5>
                  <a href="/homeqc" className="home-btn">
                    <i className="fas fa-tasks"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="home-card-col">
              <div className="home-card">
                <img
                  src="%PUBLIC_URL%../../trn.jpg"
                  className="home-card-img"
                  alt="Transport"
                />
                <div className="home-card-body">
                  <h5 className="home-card-title">Transport Management</h5>
                  <a href="/hometr" className="home-btn">
                    <i className="fas fa-truck"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
