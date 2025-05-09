import React, { Component } from "react";
import axios from "../axiosConfig";
import Footer from "./Footer";
import Swal from "sweetalert2";

class CreatePosted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductID: "",
      ShipmentID: "",
      Date: "",
      UnitPrice: "",
      Qty: "",
      Type: "",
      Description: "",
      ProductIDError: "",
      ShipmentIDError: "",
      DateError: "",
      UnitPriceError: "",
      QtyError: "",
      TypeError: "",
      DescriptionError: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      [`${name}Error`]: "",
    });
  };

  // Validation method
  validate = () => {
    let isValid = true;
    const errors = {};

    if (!this.state.ProductID.trim()) {
      errors.ProductIDError = "*ProductID is required!";
      isValid = false;
    }

    if (!this.state.ShipmentID.trim()) {
      errors.ShipmentIDError = "*ShipmentID is required!";
      isValid = false;
    }

    if (!this.state.Date) {
      errors.DateError = "*Date is required!";
      isValid = false;
    }

    if (
      !this.state.UnitPrice ||
      isNaN(this.state.UnitPrice) ||
      Number(this.state.UnitPrice) <= 0
    ) {
      errors.UnitPriceError = "*Valid UnitPrice is required!";
      isValid = false;
    }

    if (
      !this.state.Qty ||
      isNaN(this.state.Qty) ||
      Number(this.state.Qty) <= 0
    ) {
      errors.QtyError = "*Valid Quantity is required!";
      isValid = false;
    }

    if (!this.state.Type.trim()) {
      errors.TypeError = "*Type is required!";
      isValid = false;
    }

    if (!this.state.Description.trim()) {
      errors.DescriptionError = "*Description is required!";
      isValid = false;
    }

    this.setState(errors);
    return isValid;
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      const { ProductID, ShipmentID, Date, UnitPrice, Qty, Type, Description } =
        this.state;
      const data = {
        ProductID,
        ShipmentID,
        Date,
        UnitPrice,
        Qty,
        Type,
        Description,
      };

      axios.post("/export-details/save", data).then((res) => {
        if (res.data.success) {
          Swal.fire("Added", "Export details added successfully!", "success");
          this.setState({
            ProductID: "",
            ShipmentID: "",
            Date: "",
            UnitPrice: "",
            Qty: "",
            Type: "",
            Description: "",
            ProductIDError: "",
            ShipmentIDError: "",
            DateError: "",
            UnitPriceError: "",
            QtyError: "",
            TypeError: "",
            DescriptionError: "",
          });
        }
      });
    }
  };

  render() {
    return (
      <div id="wrapper" className="toggled">
        <nav
          className="navbar navbar-expand-lg rounded-3"
          style={{ backgroundColor: "#006a4e", marginTop: "20px" }}
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
                  href="/expDash"
                >
                  &gt; Export Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  className="nav-link"
                  href="/addexp"
                >
                  &gt; Add Export Details
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="page-content-wrapper">
          <div className="container-fluid" style={{ paddingLeft: "40px" }}>
            <div className="col-md-8 mt-4">
              <h1 className="h3 mb-3 font-weight-normal">
                Create Export Details
              </h1>
              <form
                className="needs-validation"
                noValidate
                onSubmit={this.onSubmit}
              >
                {/* ProductID */}
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label>Product ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ProductID"
                    placeholder="Enter ProductID"
                    value={this.state.ProductID}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.ProductIDError}
                  </div>
                </div>

                {/* ShipmentID */}
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label>Shipment ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ShipmentID"
                    placeholder="Enter ShipmentID"
                    value={this.state.ShipmentID}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.ShipmentIDError}
                  </div>
                </div>

                {/* Date */}
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label>Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="Date"
                    value={this.state.Date}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.DateError}
                  </div>
                </div>

                {/* UnitPrice */}
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label>Unit Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="UnitPrice"
                    placeholder="Enter UnitPrice"
                    value={this.state.UnitPrice}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.UnitPriceError}
                  </div>
                </div>

                {/* Qty */}
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label>Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    name="Qty"
                    placeholder="Enter Quantity"
                    value={this.state.Qty}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.QtyError}
                  </div>
                </div>

                {/* Type */}
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label>Type</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Type"
                    placeholder="Enter Type"
                    value={this.state.Type}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.TypeError}
                  </div>
                </div>

                {/* Description */}
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Description"
                    placeholder="Enter Description"
                    value={this.state.Description}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.DescriptionError}
                  </div>
                </div>

                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ marginTop: "15px" }}
                >
                  <i className="far fa-check-square"></i>&nbsp; Save
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CreatePosted;
