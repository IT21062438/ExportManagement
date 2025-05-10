import React, { Component } from "react";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Swal from "sweetalert2";
import Footer from "./Footer";

export default class HomeTR extends Component {
  //Binding event handler method
  constructor(props) {
    super(props);

    //Initializing local state by assigning an object to this.state
    this.state = {
      transportModel: [],
    };
  }

  //load data from a remote endpoint
  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    //get server side http module to get data to client side Http request
    axios.get("http://localhost:8000/transport").then((res) => {
      if (res.data.success) {
        this.setState({
          transportModel: res.data.existingPosts,
        });
        console.log(this.state.posts);
      }
    });
  }

  //delete a QC card
  onDelete = (id) => {
    axios.delete(`/transport/delete/${id}`).then((res) => {
      Swal.fire("Deleted", "Deleted Successfully", "success");
      this.retrivePosts();
    });
  };

  //filter data
  filterData(transportModel, searchKey) {
    const result = transportModel.filter(
      (transportModel) =>
        transportModel.TransportID.toString().includes(searchKey) ||
        transportModel.VehicleType.toLowerCase().includes(searchKey) ||
        transportModel.VehicleID.toString().includes(searchKey) ||
        transportModel.Destination.toLowerCase().includes(searchKey) ||
        transportModel.ShipmentID.toString().includes(searchKey)
    );
    this.setState({ transportModel: result });
  }

  //Search Function
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/transport").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  
  render() {
    return (
      //component organizer
      <div id="wrapper" className="toggled">
        <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
          <div className="container-fluid"></div>

         

          {/* custom navigation        */}
          <nav
            class="navbar navbar-expand-lg rounded-3"
            style={{ backgroundColor: "#006a4e" }}
          >
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    class="nav-link"
                    href="/home"
                  >
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    class="nav-link"
                    href="/posttr"
                  >
                    {" "}
                    &#62; TR Details <span class="sr-only">(current)</span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <hr />

          <center>
            {/* Title */}
            <h1
              className="h3 mb-3 font-weight-normal text-info rounded-3 "
              style={{ backgroundColor: "#0E3662", padding: "10px" }}
            >
              <b>All TR Cards</b>
            </h1>
          </center>

          <div className="col-lg-3 mt-2 mb-2">
            {/* Searchbar */}
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
            <a href="/addtr" style={{ textDecoration: "none", color: "white" }}>
              Add New TR&nbsp;
              <i class="fas fa-plus-circle"></i>
            </a>
          </button>
        </div>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="btn btn-info"
          table="tableee"
          filename="Transport Summary"
          sheet="tablexls"
          buttonText="Download As Excel"
        />

        <div style={{ backgroundColor: "#faf0e6" }}>
          <table
            id="tableee"
            className="table table-hover"
            style={{ backgroundColor: "#faf0e6" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Transport ID</th>
                <th scope="col">Vehicle ID</th>
                <th scope="col">Vehicle Type</th>
                <th scope="col">Destination</th>
                <th scope="col">Transport Date</th>
                <th scope="col">Shipment ID</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Get data to the table using a map */}
              {this.state.transportModel.map((transportModel, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a
                      href={`/transport/${transportModel._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {transportModel.TransportID}
                    </a>
                  </td>

                  <td>{transportModel.VehicleID}</td>
                  <td>{transportModel.VehicleType}</td>
                  <td>{transportModel.Destination}</td>

                  <td>
                    {(() => {
                      const date = new Date(transportModel.TransportDate);
                      const dd = String(date.getDate()).padStart(2, "0");
                      const mm = String(date.getMonth() + 1).padStart(2, "0");
                      const yyyy = date.getFullYear();
                      return `${dd}/${mm}/${yyyy}`;
                    })()}
                  </td>
                  <td>{transportModel.ShipmentID}</td>

                  <td>
                    {/* Edit button */}
                    <a
                      style={{
                        backgroundColor: "#0E3662",
                        textDecoration: "none",
                        color: "white",
                      }}
                      className="btn btn-warning"
                      href={`/edittr/${transportModel._id}`}
                    >
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    {/* Delete Button */}
                    <a
                      className="btn btn-danger"
                      href="#"
                      onClick={() => this.onDelete(transportModel._id)}
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
        {/* Footer Section */}
      </div>
    );
  }
}
