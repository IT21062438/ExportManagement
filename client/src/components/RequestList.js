import React, { Component } from "react";
import axios from "axios";
import "./styles/styleSideNav.css";

export default class RequestList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
    };
  }

  componentDidMount() {
    this.retriveRequests();
  }

  retriveRequests() {
    axios.get("/requests").then((res) => {
      if (res.data.success) {
        this.setState({
          requests: res.data.existingRequests,
        });

        console.log(this.state.requests);
      }
    });
  }

  //onClick delete function
  onDelete = (id) => {
    axios.delete(`/request/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retriveRequests();
    });
  };

  //Search
  filterData(requests, searchKey) {
    const result = requests.filter(
      (request) =>
        request.customerName.toLowerCase().includes(searchKey) ||
        request.productName.toLowerCase().includes(searchKey) ||
        request.category.toLowerCase().includes(searchKey)
    );
    this.setState({ requests: result });
  }

  handleSearchArea = (e) => {
    console.log(e.currentTarget.value);
    const searchKey = e.currentTarget.value;

    axios.get("/requests").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingRequests, searchKey);
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
                    href="/requests"
                  >
                    {" "}
                    &#62; All Request <span class="sr-only">
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
                <h4>All Customer Requests</h4>
              </div>
            </div>
            <div className="col-lg-9 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search by entering Customer Name, Product Name or Category"
                name="searchQuery"
                onChange={this.handleSearchArea}
              />
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Request ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">ProductName</th>
                  <th scope="col">Net Weight(Kg)</th>
                  <th scope="col">Package Qty</th>
                </tr>
              </thead>
              <tbody>
                {this.state.requests.map((requests, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a
                        href={`/request/${requests._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {requests.requestID}
                      </a>
                    </td>

                    <td>
                      {(() => {
                        const date = new Date(requests.date);
                        const dd = String(date.getDate()).padStart(2, "0");
                        const mm = String(date.getMonth() + 1).padStart(2, "0");
                        const yyyy = date.getFullYear();
                        return `${dd}/${mm}/${yyyy}`;
                      })()}
                    </td>

                    <td>{requests.customerName}</td>
                    <td>{requests.category}</td>
                    <td>{requests.productName}</td>
                    <td>{requests.netWeight}</td>
                    <td>{requests.packageQty}</td>
                    <td>
                      <a
                        className="btn btn-warning"
                        href={`/reqedit/${requests._id}`}
                      >
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;&nbsp;
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(requests._id)}
                      >
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn btn-success">
              <a
                href="/reqadd"
                style={{ textDecoration: "none", color: "white" }}
              >
                Create New Request
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
