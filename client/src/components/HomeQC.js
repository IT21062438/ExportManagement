import React, { Component } from "react";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Footer from "./Footer";

// PDF generation function
const generatePDF = (qcData) => {
  try {
    if (!qcData || !Array.isArray(qcData) || qcData.length === 0) {
      Swal.fire("Error", "No QC data available to generate PDF", "error");
      return;
    }

    const doc = new jsPDF();
    
    // Set document properties
    doc.setProperties({
      title: 'QC Details Summary',
      subject: 'Quality Check Report',
      author: 'Ceylon Exports System',
    });

    // Add header
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Ceylon Exports", 105, 10, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text("Quality Check Details Summary", 105, 18, { align: 'center' });
    
    // Prepare table data
    const tableColumn = [
      "Product ID",
      "Buyer ID",
      "Product Type",
      "QTY",
      "Checked Date",
      "Requirement Satisfication",
      "Quality Rate",
      "Description"
    ];
    
    const tableRows = qcData.map((item) => [
      item.ProductID,
      item.BuyerID,
      item.ProductType,
      item.QTY,
      new Date(item.CheckedDate).toLocaleDateString(),
      item.RequirementSatisfication,
      item.QualityRate,
      item.Description
    ]);

    // Generate table
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 35,
      styles: { 
        fontSize: 8,
        cellPadding: 2,
        overflow: 'linebreak',
      },
      headStyles: {
        fillColor: [14, 54, 98], // Dark blue header
        textColor: 255, // White text
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240] // Light gray alternate rows
      },
      margin: { top: 10 },
      didDrawPage: (data) => {
        // Footer with page numbers
        const pageCount = doc.internal.getNumberOfPages();
        doc.setFontSize(8);
        doc.text(
          `Page ${data.pageNumber} of ${pageCount}`,
          105,
          doc.internal.pageSize.height - 10,
          { align: 'center' }
        );
      }
    });

    // Save the PDF
    doc.save("QC_Details_Summary.pdf");
   
    
  } catch (error) {
    console.error("Error generating PDF:", error);
    Swal.fire("Error", "Failed to generate PDF. Please try again.", "error");
  }
};

export default class HomeQC extends Component {
  //Binding event handler method
  constructor(props) {
    super(props);

    //Initializing local state by assigning an object to this.state
    this.state = {
      postsQC: [],
    };
  }

  //load data from a remote endpoint
  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    //get server side http module to get data to client side Http request
    axios.get("http://localhost:8000/qcpost").then((res) => {
      if (res.data.success) {
        this.setState({
          postsQC: res.data.existingPosts,
        });
        console.log(this.state.posts);
      }
    });
  }

  //delete a QC card
  onDelete = (id) => {
    axios.delete(`/qcpost/delete/${id}`).then((res) => {
      Swal.fire("Deleted", "Deleted Successfully", "success");
      this.retrivePosts();
    });
  };

  //filter data
  filterData(postsQC, searchKey) {
    const result = postsQC.filter(
      (postsQC) =>
        postsQC.ProductID.toString().includes(searchKey) ||
        postsQC.BuyerID.toString().includes(searchKey) ||
        postsQC.ProductType.toLowerCase().includes(searchKey) ||
        postsQC.RequirementSatisfication.toLowerCase().includes(searchKey) ||
        postsQC.QualityRate.toString().includes(searchKey) ||
        postsQC.QTY.toString().includes(searchKey) ||
        postsQC.Description.toLowerCase().includes(searchKey)
    );
    this.setState({ postsQC: result });
  }

  //Search Function
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/qcpost").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  //gather outputs
  render() {
    return (
      //component organizer
      <div id="wrapper" className="toggled">
        <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
          <div className="container-fluid"></div>

          {/* custom navigation        */}
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
                    &#62; QC Details <span className="sr-only">(current)</span>{" "}
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
              <b>All QC Cards</b>
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
            <a href="/addqc" style={{ textDecoration: "none", color: "white" }}>
              Add New QC&nbsp;
              <i className="fas fa-plus-circle"></i>
            </a>
          </button>

          {/* Export Buttons */}
          <div className="mb-3 mt-3">
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="btn btn-info mr-2"
              table="tableee"
              filename="Qualitycheck Summary"
              sheet="tablexls"
              buttonText="Download As Excel"
            />
            
            &nbsp;
              <button
              type="button"
              style={{ backgroundColor: "#00000", padding: "7px" }}
              class="btn btn-info btn-sm"
              onClick={() => generatePDF(this.state.postsQC)}
            >
              
              Download As PDF
            </button>
          </div>

          <div style={{ backgroundColor: "#faf0e6" }}>
            <table
              id="tableee"
              className="table table-hover"
              style={{ backgroundColor: "#faf0e6" }}
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product ID</th>
                  <th scope="col">Buyer Id</th>
                  <th scope="col">Product Type</th>
                  <th scope="col">QTY</th>
                  <th scope="col">Checked Date</th>
                  <th scope="col">Requirement Satisfication</th>
                  <th scope="col">Quality Rate</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Get data to the table using a map */}
                {this.state.postsQC.map((postsQC, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a
                        href={`/qcpost/${postsQC._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {postsQC.ProductID}
                      </a>
                    </td>

                    <td>{postsQC.BuyerID}</td>
                    <td>{postsQC.ProductType}</td>
                    <td>{postsQC.QTY}</td>
                    <td>
                      {(() => {
                        const date = new Date(postsQC.CheckedDate);
                        const dd = String(date.getDate()).padStart(2, "0");
                        const mm = String(date.getMonth() + 1).padStart(2, "0");
                        const yyyy = date.getFullYear();
                        return `${dd}/${mm}/${yyyy}`;
                      })()}
                    </td>

                    <td>{postsQC.RequirementSatisfication}</td>
                    <td>{postsQC.QualityRate}</td>
                    <td>{postsQC.Description}</td>

                    <td style={{ whiteSpace: "nowrap" }}>
                      {/* Edit button */}
                      <a
                        style={{
                          backgroundColor: "#0E3662",
                          textDecoration: "none",
                          color: "white",
                          marginRight: "5px",
                          display: "inline-block",
                        }}
                        className="btn btn-warning"
                        href={`/qcedit/${postsQC._id}`}
                      >
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>

                      {/* Delete Button */}
                      <a
                        style={{
                          display: "inline-block",
                        }}
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(postsQC._id)}
                      >
                        <i className="fas fa-trash-alt"></i>&nbsp;Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}