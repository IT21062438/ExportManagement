import React, { Component } from "react";
import axios from "axios";

export default class Admin extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
          <div className="container-fluid"></div>

          {/* custom navigation        */}
          <nav
            class="navbar navbar-expand-lg  rounded-3"
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
                    href="/admin"
                  >
                    {" "}
                    &#62; Admin <span class="sr-only">(current)</span>{" "}
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
              <b>ADMIN DASHBOARD</b>
            </h1>
          </center>
          <hr />
          <center></center>

          <div className="container py-4">
            <div className="row g-4">
              <div className="col-sm-6">
                <div className="card h-100 shadow-sm hover-shadow transition-all">
                  <div className="card-body text-center p-4">
                    <h2 className="card-title h4 mb-3" style={{ color: "#2c3e50" }}>CUSTOMER MANAGEMENT REPORTS</h2>
                    <a href="/matRet" className="btn btn-primary rounded-pill px-4">
                      <i className="fas fa-arrow-alt-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card h-100 shadow-sm hover-shadow transition-all">
                  <div className="card-body text-center p-4">
                    <h2 className="card-title h4 mb-3" style={{ color: "#2c3e50" }}>INVENTORY REPORTS</h2>
                    <a href="/intrep" className="btn btn-primary rounded-pill px-4">
                      <i className="fas fa-arrow-alt-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card h-100 shadow-sm hover-shadow transition-all">
                  <div className="card-body text-center p-4">
                    <h2 className="card-title h4 mb-3" style={{ color: "#2c3e50" }}>PRODUCTION REPORTS</h2>
                    <a href="/prorep" className="btn btn-primary rounded-pill px-4">
                      <i className="fas fa-arrow-alt-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card h-100 shadow-sm hover-shadow transition-all">
                  <div className="card-body text-center p-4">
                    <h2 className="card-title h4 mb-3" style={{ color: "#2c3e50" }}>EXPORT REPORTS</h2>
                    <a href="/matins" className="btn btn-primary rounded-pill px-4">
                      <i className="fas fa-arrow-alt-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card h-100 shadow-sm hover-shadow transition-all">
                  <div className="card-body text-center p-4">
                    <h2 className="card-title h4 mb-3" style={{ color: "#2c3e50" }}>QUALITY CHECK REPORTS</h2>
                    <a href="/matRet" className="btn btn-primary rounded-pill px-4">
                      <i className="fas fa-arrow-alt-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card h-100 shadow-sm hover-shadow transition-all">
                  <div className="card-body text-center p-4">
                    <h2 className="card-title h4 mb-3" style={{ color: "#2c3e50" }}>TRANSPORT MANAGEMENT REPORTS</h2>
                    <a href="/lmo" className="btn btn-primary rounded-pill px-4">
                      <i className="fas fa-arrow-alt-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>

        <div class="footer">
          <div class="contain">
            <br />
            <div class="col">
              <h1>ABOUT US</h1>

              <ul>
                <li>
                  <i class="fas fa-phone-square"></i>&nbsp; &nbsp; Contact us
                </li>
                <li>
                  <i class="fas fa-comment-alt"></i>&nbsp; &nbsp;Suggestion
                </li>
              </ul>
            </div>
            <div class="col">
              <h1></h1>
              <ul>
                <li></li>
              </ul>
            </div>
            <div class="col">
              <div class="position-absolute top-50 start-50 translate-middle">
                <br />

                <img
                  src="%PUBLIC_URL%../../logo1.png"
                  class="rounded-circle"
                  width="60"
                  height="60"
                  alt="logo"
                />
                <a href="/home" style={{ textDecoration: "none" }}>
                  <h1>Ceylon Exports</h1>
                </a>

                <ul>
                  <li>@ Copyright reserved</li>
                </ul>
              </div>
            </div>
            <div class="col">
              <h1></h1>
              <ul></ul>
            </div>

            <div class="position-absolute top-50 end-0 translate-middle-y">
              <div class="col social">
                <h1>Help</h1>

                <ul>
                  <li>
                    <i class="fas fa-envelope"></i>&nbsp; &nbsp;{" "}
                    <i class="fas fa-map-marker-alt"></i>&nbsp; &nbsp;
                    <i class="fas fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}
