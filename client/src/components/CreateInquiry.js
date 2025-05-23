import axios from "axios";
import React, { Component } from "react";
import moment from "moment";

export default class CreateInquiry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inquiryID: "",
      date: "",
      customerName: "",
      contactNo: "",
      email: "",
      inquiryType: "",
      description: "",

      //err
      err_inquiryID: "",
      err_date: "",
      err_customerName: "",
      err_contactNo: "",
      err_email: "",
      err_inquiryType: "",
      err_description: "",
    };
  }

  //Handling inputchange
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  //Onsubmit
  onSubmit = (e) => {
    e.preventDefault();

    const isValid = this.formValidation();

    const {
      inquiryID,
      date,
      customerName,
      contactNo,
      email,
      inquiryType,
      description,
    } = this.state;

    const data = {
      inquiryID: inquiryID,
      date: date,
      customerName: customerName,
      contactNo: contactNo,
      email: email,
      inquiryType: inquiryType,
      description: description,
    };

    //validation successful
    if (isValid) {
      console.log(data);
    }

    //POST data
    axios.post("/inq/save", data).then((res) => {
      if (res.data.success) {
        alert("Customer Inquiry created successfully");
        this.setState({
          inquiryID: "",
          date: "",
          customerName: "",
          contactNo: "",
          email: "",
          inquiryType: "",
          description: "",
        });
      }
    });
  };

  //form validation
  formValidation = () => {
    let err_inquiryID = "";
    let err_date = "";
    let err_customerName = "";
    let err_contactNo = "";
    let err_email = "";
    let err_inquiryType = "";
    let err_description = "";

    if (!this.state.inquiryID) {
      err_inquiryID = "Please enter a valid inquiry ID";
    }

    if (!this.state.date) {
      err_date = "Please enter a valid date";
    }

    if (!this.state.customerName) {
      err_customerName = "Please enter a valid Customer Name";
    }

    if (!this.state.contactNo) {
      err_contactNo = "Please enter a valid contact No";
    }

    if (!this.state.email) {
      err_email = "Please enter a valid email";
    }

    if (!this.state.inquiryType) {
      err_inquiryType = "Please enter a valid inquiry Type";
    }

    if (!this.state.description) {
      err_description = "Please enter a valid description";
    }

    if (
      err_inquiryID ||
      err_date ||
      err_customerName ||
      err_contactNo ||
      err_email ||
      err_inquiryType ||
      err_description
    ) {
      this.setState({
        err_inquiryID,
        err_date,
        err_customerName,
        err_contactNo,
        err_email,
        err_inquiryType,
        err_description,
      });
      return false;
    }
  };

  //demo
  //onclear

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
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
                            <li class="nav-item active">
                              <a
                                style={{ textDecoration: "none", color: "white" }}
                                class="nav-link"
                                href="/inquiries"
                              >
                                &#62; Inquiry Details
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                style={{ textDecoration: "none", color: "white" }}
                                class="nav-link"
                                href="/inqadd"
                              >
                                {" "}
                                &#62; Add Inquiry <span class="sr-only">
                                  (current)
                                </span>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                      <hr />
          <div className="container-fluid" style={{ paddingLeft: "40px" }}>
            <div className="col-md-8 mt-4">
              <h1 className="h3 mb-3 font-weight-normal">
                Create New Customer Inquiry
              </h1>
              <form className="needs-validation" noValidate>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Inquiry ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="inquiryID"
                    placeholder="Enter the Inquiry Id"
                    value={this.state.inquiryID}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.err_inquiryID}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    placeholder="Enter the date"
                    value={this.state.date}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.err_date}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Customer Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customerName"
                    placeholder="Enter the customer Name"
                    value={this.state.customerName}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.err_customerName}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Contact No</label>
                  <input
                    type="text"
                    className="form-control"
                    name="contactNo"
                    placeholder="Enter the Contact No"
                    value={this.state.contactNo}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.err_contactNo}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter the email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.err_email}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Inquiry Type</label>
                  <input
                    type="text"
                    className="form-control"
                    name="inquiryType"
                    placeholder="Enter the inquiryType"
                    value={this.state.inquiryType}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.err_inquiryType}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Enter the description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 15, color: "red" }}>
                    {this.state.err_description}
                  </div>
                </div>

                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ marginTop: "15px" }}
                  onClick={this.onSubmit}
                >
                  <i className="far fa-check-square"></i>
                  &nbsp; Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
