import React, { Component } from "react";
import Swal from "sweetalert2";
import "./styles/styleSideNav.css";

class NavBar extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <br />
            <br />
            <div className="text-center mb-4">
              <img
                src="%PUBLIC_URL%../../logo.png"
                className="rounded-circle shadow-sm"
                width="150"
                height="150"
                alt="logo"
                style={{
                  border: "3px solid #fff",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
              />
            </div>
            <hr
              className="my-4"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            />
            <li className="nav-item">
              <div className="dropdown">
                <i className="fas fa-sort-amount-up-alt me-2"></i>
                <span className="nav-link-text">Customer </span>
                <div className="dropdown-content shadow-lg">
                  <a href="/requests" className="dropdown-item">
                    <i className="fas fa-chart-line me-2"></i>Requests Dashboard
                  </a>
                  <a href="/reqadd" className="dropdown-item">
                    <i className="fas fa-plus-circle me-2"></i>Add request
                  </a>
                  <a href="/reqrep" className="dropdown-item">
                    <i className="fas fa-file-alt me-2"></i>Requests reports
                  </a>
                  <a href="/inquiries" className="dropdown-item">
                    <i className="fas fa-question-circle me-2"></i>Inquiries
                    Dashboard
                  </a>
                  <a href="/inqadd" className="dropdown-item">
                    <i className="fas fa-plus-circle me-2"></i>Add inquiry
                  </a>
                  <a href="/inqrep" className="dropdown-item">
                    <i className="fas fa-file-alt me-2"></i>Inquiry reports
                  </a>
                </div>
              </div>
            </li>
            <hr
              className="my-4"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            />
            <li className="nav-item">
              <div className="dropdown">
                <i className="fas fa-cubes me-2"></i>
                <span className="nav-link-text">Inventory</span>
                <div className="dropdown-content shadow-lg">
                  <a href="/intdash" className="dropdown-item">
                    <i className="fas fa-chart-line me-2"></i>Inventory
                    Dashboard
                  </a>
                  <a href="/intrep" className="dropdown-item">
                    <i className="fas fa-file-alt me-2"></i>Inventory Reports
                  </a>
                </div>
              </div>
            </li>
            <hr
              className="my-4"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            />
            <li className="nav-item">
              <div className="dropdown">
                <i className="fab fa-product-hunt me-2"></i>
                <span className="nav-link-text">Production </span>
                <div className="dropdown-content shadow-lg">
                  <a href="/prodash" className="dropdown-item">
                    <i className="fas fa-chart-line me-2"></i>Production
                    Dashboard
                  </a>
                  <a href="/prorep" className="dropdown-item">
                    <i className="fas fa-file-alt me-2"></i>Production Reports
                  </a>
                </div>
              </div>
            </li>
            <hr
              className="my-4"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            />
            <li className="nav-item">
              <div className="dropdown">
                <i className="fas fa-cubes me-2"></i>
                <span className="nav-link-text">Export</span>
                <div className="dropdown-content shadow-lg">
                  <a href="/expDash" className="dropdown-item">
                    <i className="fas fa-chart-line me-2"></i>Export Dashboard
                  </a>
                  
                  <a href="/exprep" className="dropdown-item">
                    <i className="fas fa-file-alt me-2"></i>Export reports
                  </a>
                </div>
              </div>
            </li>
            <hr
              className="my-4"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            />
            <li className="nav-item">
              <div className="dropdown">
                <i className="fas fa-cubes me-2"></i>
                <span className="nav-link-text">Quality check</span>
                <div className="dropdown-content shadow-lg">
                  <a href="/homeqc" className="dropdown-item">
                    <i className="fas fa-chart-line me-2"></i>QC Dashboard
                  </a>
                  <a href="/addqc" className="dropdown-item">
                    <i className="fas fa-plus-circle me-2"></i>QC Card
                  </a>
                </div>
              </div>
            </li>
            <hr
              className="my-4"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            />
            <li className="nav-item">
              <div className="dropdown">
                <i className="fas fa-cubes me-2"></i>
                <span className="nav-link-text">Transport</span>
                <div className="dropdown-content shadow-lg">
                  <a href="/hometr" className="dropdown-item">
                    <i className="fas fa-chart-line me-2"></i>TR Dashboard
                  </a>
                  <a href="/addtr" className="dropdown-item">
                    <i className="fas fa-plus-circle me-2"></i>TR Card
                  </a>
                </div>
              </div>
            </li>
            <hr
              className="my-4"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            />
            <li className="nav-item">
              <a href="/admin" className="nav-link">
                <i className="fas fa-users-cog me-2"></i>
                <span className="nav-link-text">Admin</span>
              </a>
            </li>
            <hr
              className="my-4"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            />
          </ul>
        </div>

        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#013220" }}
        >
          {/* <!-- Image and text --> */}
          <a class="navbar-brand" href="#"></a>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/home"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i class="fas fa-question-circle"></i>
                    &nbsp; HELP
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i class="fas fa-phone-square"></i> &nbsp;Contact
                  </a>
                </li>

                <div className="position-absolute top-50 end-0 translate-middle-y d-flex align-items-center gap-3">
                  <a href="/matNotification">
                    <button
                      type="button"
                      className="btn btn-success position-relative"
                      style={{ backgroundColor: "#006a4e" }}
                    >
                      <i className="fas fa-bell"></i>
                      <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                        <span className="visually-hidden">New alerts</span>
                      </span>
                    </button>
                  </a>

                  {/* <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={() => {
                      const confirmed = window.confirm(
                        "Are you sure you want to logout?"
                      );
                      if (confirmed) {
                        window.location.href = "/";
                      }
                    }}
                  >
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button> */}
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={async () => {
                      const result = await Swal.fire({
                        title: "Are you sure?",
                        text: "Do you really want to logout?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, logout!",
                        cancelButtonText: "Cancel",
                      });

                      if (result.isConfirmed) {
                        window.location.href = "/";
                      }
                    }}
                  >
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
