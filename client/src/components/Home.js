import React, { Component } from "react";
import "./styles/Home.css";

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
