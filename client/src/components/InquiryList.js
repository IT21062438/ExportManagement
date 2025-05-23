import React, { Component } from "react";
import axios from "axios";
import "./styles/styleSideNav.css";

export default class InquiryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inquiries: [],
    };
  }

  componentDidMount() {
    this.retrieveInquiries();
  }

  retrieveInquiries() {
    axios.get("/inquiries").then((res) => {
      if (res.data.success) {
        this.setState({
          inquiries: res.data.existingInquiries,
        });

        console.log(this.state.inquiries);
      }
    });
  }

  //onClick delete function
  onDelete = (id) => {
    axios.delete(`/inquiry/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrieveInquiries();
    });
  };

  //Search
  filterData(inquiries, searchKey) {
    const result = inquiries.filter(
      (inquiry) =>
        inquiry.customerName.toLowerCase().includes(searchKey) ||
        inquiry.email.toLowerCase().includes(searchKey) ||
        inquiry.inquiryType.toLowerCase().includes(searchKey) ||
        inquiry.description.toLowerCase().includes(searchKey)
    );
    this.setState({ inquiries: result });
  }

  handleSearchArea = (e) => {
    console.log(e.currentTarget.value);
    const searchKey = e.currentTarget.value;

    axios.get("/inquiries").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingInquiries, searchKey);
      }
    });
  };

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
                <li class="nav-item">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    class="nav-link"
                    href="/inquiries"
                  >
                    {" "}
                    &#62; All Inquiries <span class="sr-only">
                      (current)
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h4>All Customer Inquiries</h4>
              </div>
            </div>
            <div className="col-lg-9 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search by entering Customer Name, Email, Inquiry Type, Description"
                name="searchQuery"
                onChange={this.handleSearchArea}
              />
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Inquiry ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Contact No</th>
                  <th scope="col">Email</th>
                  <th scope="col">Inquiry Type</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.inquiries.map((inquiries, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a
                        href={`/inquiry/${inquiries._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {inquiries.inquiryID}
                      </a>
                    </td>
                    <td>
                      {(() => {
                        const date = new Date(inquiries.date);
                        const dd = String(date.getDate()).padStart(2, "0");
                        const mm = String(date.getMonth() + 1).padStart(2, "0");
                        const yyyy = date.getFullYear();
                        return `${dd}/${mm}/${yyyy}`;
                      })()}
                    </td>

                    <td>{inquiries.customerName}</td>
                    <td>{inquiries.contactNo}</td>
                    <td>{inquiries.email}</td>
                    <td>{inquiries.inquiryType}</td>
                    <td>{inquiries.description}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <a
                          className="btn btn-warning btn-sm"
                          href={`/inqedit/${inquiries._id}`}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        <a
                          className="btn btn-danger btn-sm"
                          href="#"
                          onClick={() => this.onDelete(inquiries._id)}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn btn-success">
              <a
                href="/inqadd"
                style={{ textDecoration: "none", color: "white" }}
              >
                Create New Inquiry
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
