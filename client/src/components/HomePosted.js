// // import React, { Component } from "react";
// // import axios from "../axiosConfig";
// // import Swal from 'sweetalert2';
// // import Footer from "./Footer";

// // export default class HomePosted extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       exportDetails: [],
// //     };
// //   }

// //   componentDidMount() {
// //     this.retriveExportDetails();
// //   }

// //   retriveExportDetails() {
// //     axios.get("http://localhost:8000/export-details").then((res) => {
// //       console.log(res.data);
// //       if (res.data.success) {
// //         this.setState({
// //           exportDetails: res.data.existingExportDetails,
// //         });
// //         console.log(this.state.exportDetails);
// //       }
// //     });
// //   }
// //   //filter data
// //    filterData(exportDetails, searchKey) {

// //     const result = exportDetails.filter(
// //       (exportDetails) =>
// //         exportDetails.ProductID.toLowerCase().includes(searchKey) ||
// //         exportDetails.ShipmentID.toLowerCase().includes(searchKey)
// //     );
// //     console.log(result)
// //     this.setState({ exportDetails: result });
// //   }
// //   //Search function
// //   handleSearchArea = (e) => {
// //     const searchKey = e.currentTarget.value;

// //     axios.get("http://localhost:8000/export-details").then( (res) => {
// //       if (res.data.success) {

// //          this.filterData(res.data.existingExportDetails, searchKey);
// //       }
// //     });
// //   };
// //   goToEdit = (recordId) => {
// //     this.props.history.push({
// //       pathname: `/expedit/${recordId}`,
// //     });
// //   };

// //   goToDelete = (recordId) => {
// //     axios.delete(`/export-details/delete/${recordId}`).then((res) => {
// //       if (res.data.success) {
// //         Swal.fire('Deleted','Deleted Successfully','success')
// //         this.retriveExportDetails();
// //       }
// //     });
// //   };
// //   render() {
// //     return (
// //       //component organizer
// //       <div id="wrapper" className="toggled">
// //         <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
// //           <div className="container-fluid"></div>

// //           {/* custom navigation        */}
// //           <nav
// //             class="navbar navbar-expand-lg rounded-3"
// //             style={{ backgroundColor: "#006a4e" }}
// //           >
// //             <button
// //               class="navbar-toggler"
// //               type="button"
// //               data-toggle="collapse"
// //               data-target="#navbarNav"
// //               aria-controls="navbarNav"
// //               aria-expanded="false"
// //               aria-label="Toggle navigation"
// //             >
// //               <span class="navbar-toggler-icon"></span>
// //             </button>
// //             <div class="collapse navbar-collapse" id="navbarNav">
// //               <ul class="navbar-nav">
// //                 <li class="nav-item active">
// //                   <a
// //                     style={{ textDecoration: "none", color: "white" }}
// //                     class="nav-link"
// //                     href="/home"
// //                   >
// //                     Dashboard
// //                   </a>
// //                 </li>
// //                 <li class="nav-item">
// //                   <a
// //                     style={{ textDecoration: "none", color: "white" }}
// //                     class="nav-link"
// //                     href=""
// //                   >
// //                     {" "}
// //                     &#62; Export Details <span class="sr-only">
// //                       (current)
// //                     </span>{" "}
// //                   </a>
// //                 </li>
// //               </ul>
// //             </div>
// //           </nav>

// //           <div className="container">
// //             <div className="row">
// //               <div className="col-lg-9 mt-2 mb-2">
// //                 <h4>All Export Details</h4>
// //               </div>
// //               <div className="col-lg-3 mt-2 mb-2">
// //                 <input
// //                   className="form-control"
// //                   type="search"
// //                   placeholder="Search"
// //                   name="SearchQuery"
// //                   onChange={this.handleSearchArea}>

// //                   </input>
// //               </div>
// //             </div>
// //           </div>
// //           <div id="page-content-wrapper">
// //             <div className="container-fluid">
// //               <table className="table">
// //                 <caption>
// //                   <a href="/addexp">
// //                     <button
// //                       className="btn btn-success"
// //                       type="button"
// //                       style={{ marginTop: "15px" }}
// //                     >
// //                       Add Export Details
// //                     </button>
// //                   </a>

// //                 </caption>
// //                 <thead>
// //                   <tr>
// //                     <th scope="col">#</th>
// //                     <th scope="col">ProductID</th>
// //                     <th scope="col">ShipmentID</th>
// //                     <th scope="col">Date</th>
// //                     <th scope="col">UnitPrice</th>
// //                     <th scope="col">Qty</th>
// //                     <th scope="col">Type</th>
// //                     <th scope="col">Description</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {this.state.exportDetails.map((exportDetails, index) => (
// //                     <tr>
// //                       <th scope="row">{index + 1}</th>
// //                       <td>
// //                         <a
// //                           href={`/exppost/${exportDetails._id}`}
// //                           style={{ textDecoration: "none" }}
// //                         >
// //                           {exportDetails.ProductID}
// //                         </a>
// //                       </td>

// //                       <td>{exportDetails.ShipmentID.substring(0, 7)}</td>
// //                       <td>{exportDetails.Date}</td>
// //                       <td>{exportDetails.UnitPrice}</td>
// //                       <td>{exportDetails.Qty}</td>
// //                       <td>{exportDetails.Type}</td>
// //                       <td>{exportDetails.Description}</td>

// //                       <td>
// //                         <a
// //                           className="btn btn-warning"
// //                           href="#"
// //                           onClick={() => this.goToEdit(exportDetails._id)}
// //                         >
// //                           <i className="fas fa-edit"></i>&nbsp;Edit
// //                         </a>
// //                         &nbsp;
// //                         <a
// //                           className="btn btn-danger"
// //                           href="#"
// //                           onClick={() => this.goToDelete(exportDetails._id)}
// //                         >
// //                           <i className="fas fa-trash-alt"></i>&nbsp;Delete
// //                         </a>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>

// //           <Footer />
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// import React, { Component } from "react";
// import axios from "../axiosConfig";
// import Swal from 'sweetalert2';
// import Footer from "./Footer";

// export default class HomePosted extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       exportDetails: [],
//     };
//   }

//   componentDidMount() {
//     this.retrieveExportDetails();
//   }

//   retrieveExportDetails() {
//     axios.get("/export-details").then((res) => {
//       if (res.data.success) {
//         this.setState({
//           exportDetails: res.data.existingExportDetails,
//         });
//       }
//     });
//   }

//   filterData(exportDetails, searchKey) {
//     const result = exportDetails.filter(
//       (item) =>
//         item.ProductID.toLowerCase().includes(searchKey.toLowerCase()) ||
//         item.ShipmentID.toLowerCase().includes(searchKey.toLowerCase())
//     );
//     this.setState({ exportDetails: result });
//   }

//   handleSearchArea = (e) => {
//     const searchKey = e.currentTarget.value;

//     axios.get("/export-details").then((res) => {
//       if (res.data.success) {
//         this.filterData(res.data.existingExportDetails, searchKey);
//       }
//     });
//   };

//   goToEdit = (recordId) => {
//     this.props.history.push({
//       pathname: `/expedit/${recordId}`,
//     });
//   };

//   goToDelete = (recordId) => {
//     axios.delete(`/export-details/delete/${recordId}`).then((res) => {
//       if (res.data.success) {
//         Swal.fire('Deleted', 'Deleted Successfully', 'success');
//         this.retrieveExportDetails();
//       }
//     });
//   };

//   render() {
//     return (
//       <div id="wrapper" className="toggled">
//         <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
//           <div className="container-fluid"></div>

//           <nav className="navbar navbar-expand-lg rounded-3" style={{ backgroundColor: "#006a4e" }}>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a style={{ textDecoration: "none", color: "white" }} className="nav-link" href="/home">
//                     Dashboard
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <span style={{ textDecoration: "none", color: "white" }} className="nav-link">
//                     {" "} &#62; Export Details <span className="sr-only">(current)</span>{" "}
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </nav>

//           <div className="container">
//             <div className="row">
//               <div className="col-lg-9 mt-2 mb-2">
//                 <h4>All Export Details</h4>
//               </div>
//               <div className="col-lg-3 mt-2 mb-2">
//                 <input
//                   className="form-control"
//                   type="search"
//                   placeholder="Search"
//                   name="SearchQuery"
//                   onChange={this.handleSearchArea}
//                 />
//               </div>
//             </div>
//           </div>

//           <div id="page-content-wrapper">
//             <div className="container-fluid">
//               <table className="table">
//                 <caption>
//                   <a href="/addexp">
//                     <button
//                       className="btn btn-success"
//                       type="button"
//                       style={{ marginTop: "15px" }}
//                     >
//                       Add Export Details
//                     </button>
//                   </a>
//                 </caption>
//                 <thead>
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">ProductID</th>
//                     <th scope="col">ShipmentID</th>
//                     <th scope="col">Date</th>
//                     <th scope="col">UnitPrice</th>
//                     <th scope="col">Qty</th>
//                     <th scope="col">Type</th>
//                     <th scope="col">Description</th>
//                     <th scope="col">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.exportDetails.map((exportDetails, index) => (
//                     <tr key={exportDetails._id}>
//                       <th scope="row">{index + 1}</th>
//                       <td>
//                         <a
//                           href={`/exppost/${exportDetails._id}`}
//                           style={{ textDecoration: "none" }}
//                         >
//                           {exportDetails.ProductID}
//                         </a>
//                       </td>
//                       <td>{exportDetails.ShipmentID ? exportDetails.ShipmentID.substring(0, 7) : ""}</td>
//                       <td>{exportDetails.Date}</td>
//                       <td>{exportDetails.UnitPrice}</td>
//                       <td>{exportDetails.Qty}</td>
//                       <td>{exportDetails.Type}</td>
//                       <td>{exportDetails.Description}</td>
//                       <td>
//                         <button
//                           className="btn btn-warning"
//                           onClick={() => this.goToEdit(exportDetails._id)}
//                         >
//                           <i className="fas fa-edit"></i>&nbsp;Edit
//                         </button>
//                         &nbsp;
//                         <button
//                           className="btn btn-danger"
//                           onClick={() => this.goToDelete(exportDetails._id)}
//                         >
//                           <i className="fas fa-trash-alt"></i>&nbsp;Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <Footer />
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import axios from "../axiosConfig";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Swal from "sweetalert2";
import Footer from "./Footer";

export default class HomePosted extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exportDetails: [],
    };
  }

  componentDidMount() {
    this.retrieveExportDetails();
  }

  retrieveExportDetails() {
    axios.get("/export-details").then((res) => {
      if (res.data.success) {
        this.setState({
          exportDetails: res.data.existingExportDetails,
        });
      }
    });
  }

  filterData(exportDetails, searchKey) {
    const result = exportDetails.filter(
      (item) =>
        item.ProductID.toLowerCase().includes(searchKey.toLowerCase()) ||
        item.ShipmentID.toLowerCase().includes(searchKey.toLowerCase()) ||
        item.Type.toLowerCase().includes(searchKey.toLowerCase()) ||
        item.Description.toLowerCase().includes(searchKey.toLowerCase()) ||
        item.Qty.toString().includes(searchKey)
    );
    this.setState({ exportDetails: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/export-details").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingExportDetails, searchKey);
      }
    });
  };

  onDelete = (id) => {
    axios.delete(`/export-details/delete/${id}`).then((res) => {
      Swal.fire("Deleted", "Deleted Successfully", "success");
      this.retrieveExportDetails();
    });
  };

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
          <div className="container-fluid"></div>
          <nav
            className="navbar navbar-expand-lg rounded-3"
            style={{ backgroundColor: "#006a4e" }}
          >
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    className="nav-link"
                    href="/home"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    className="nav-link"
                    href=""
                  >
                    {" "}
                    &#62; Export Details{" "}
                    <span className="sr-only">(current)</span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <hr />
          <center>
            <h1
              className="h3 mb-3 font-weight-normal text-info rounded-3 "
              style={{ backgroundColor: "#0E3662", padding: "10px" }}
            >
              <b>All Export Details</b>
            </h1>
          </center>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="SearchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div>
          <button
            className="btn btn-success"
            style={{ backgroundColor: "#0E3662" }}
          >
            <a
              href="/addexp"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add Export&nbsp;
              <i className="fas fa-plus-circle"></i>
            </a>
          </button>
        </div>

        <div style={{ backgroundColor: "#faf0e6" }}>
          <table
            id="exportTable"
            className="table table-hover"
            style={{ backgroundColor: "#faf0e6" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product ID</th>
                <th scope="col">Shipment ID</th>
                <th scope="col">Date</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.exportDetails.map((exportDetail, index) => (
                <tr key={exportDetail._id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a
                      href={`/exppost/${exportDetail._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {exportDetail.ProductID}
                    </a>
                  </td>
                  <td>{exportDetail.ShipmentID}</td>
                  <td>{exportDetail.Date}</td>
                  <td>{exportDetail.UnitPrice}</td>
                  <td>{exportDetail.Qty}</td>
                  <td>{exportDetail.Type}</td>
                  <td>{exportDetail.Description}</td>
                  <td>
                    <a
                      style={{
                        backgroundColor: "#0E3662",
                        textDecoration: "none",
                        color: "white",
                      }}
                      className="btn btn-warning"
                      href={`/expedit/${exportDetail._id}`}
                    >
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-danger"
                      href="#"
                      onClick={() => this.onDelete(exportDetail._id)}
                    >
                      <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}
