import React, { Component } from "react";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Footer from "./Footer";

// PDF generation function
const generateTransportPDF = (transportData) => {
  try {
    if (!transportData || !Array.isArray(transportData) || transportData.length === 0) {
      Swal.fire("Error", "No transport data available to generate PDF", "error");
      return;
    }

    const doc = new jsPDF();
    
    // Set document properties
    doc.setProperties({
      title: 'Transport Details Summary',
      subject: 'Transport Report',
      author: 'Ceylon Exports System',
    });

    // Add header
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Ceylon Exports", 105, 10, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text("Transport Details Summary", 105, 18, { align: 'center' });
    
   
    // Prepare table data
    const tableColumn = [
      "#",
      "Transport ID",
      "Vehicle ID",
      "Vehicle Type",
      "Destination",
      "Transport Date",
      "Shipment ID"
    ];
    
    const tableRows = transportData.map((item, index) => [
      index + 1,
      item.TransportID,
      item.VehicleID,
      item.VehicleType,
      item.Destination,
      new Date(item.TransportDate).toLocaleDateString(),
      item.ShipmentID
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
        textColor: 255,          // White text
        fontStyle: 'bold',       // Bold font
        halign: 'center'         // Center alignment
      },
      columnStyles: {
        0: { halign: 'center' }, // Center align index column
        5: { halign: 'center' }  // Center align date column
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

    doc.save("Transport_Details_Summary.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
    Swal.fire("Error", "Failed to generate PDF. Please try again.", "error");
  }
};

export default class HomeTR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transportModel: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8000/transport").then((res) => {
      if (res.data.success) {
        this.setState({
          transportModel: res.data.existingPosts,
        });
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/transport/delete/${id}`).then((res) => {
      Swal.fire("Deleted", "Deleted Successfully", "success");
      this.retrivePosts();
    });
  };

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
      <div id="wrapper" className="toggled">
        <div style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
          <div className="container-fluid"></div>

          <nav className="navbar navbar-expand-lg rounded-3" style={{ backgroundColor: "#006a4e" }}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a style={{ textDecoration: "none", color: "white" }} className="nav-link" href="/home">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a style={{ textDecoration: "none", color: "white" }} className="nav-link" href="/posttr">
                    &#62; TR Details <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <hr />

          <center>
            <h1 className="h3 mb-3 font-weight-normal text-info rounded-3" style={{ backgroundColor: "#0E3662", padding: "10px" }}>
              <b>All TR Cards</b>
            </h1>
          </center>

          <div className="col-lg-3 mt-2 mb-2">
            <input className="form-control" type="search" placeholder="Search" name="SearchQuery" onChange={this.handleSearchArea}></input>
          </div>

          <button className="btn btn-success" style={{ backgroundColor: "#0E3662" }}>
            <a href="/addtr" style={{ textDecoration: "none", color: "white" }}>
              Add New TR&nbsp;
              <i className="fas fa-plus-circle"></i>
            </a>
          </button>

          <div className="mb-3 mt-3">
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="btn btn-info mr-2"
              table="tableee"
              filename="Transport Summary"
              sheet="tablexls"
              buttonText="Download As Excel"
            />
             &nbsp;
            
              <button
              type="button"
              style={{ backgroundColor: "#00000", padding: "7px" }}
              class="btn btn-info btn-sm"
              onClick={() => generateTransportPDF(this.state.transportModel)}
            >             
              Download As PDF
            </button>
          </div>

          <div style={{ backgroundColor: "#faf0e6" }}>
            <table id="tableee" className="table table-hover" style={{ backgroundColor: "#faf0e6" }}>
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
                {this.state.transportModel.map((transportModel, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a href={`/transport/${transportModel._id}`} style={{ textDecoration: "none" }}>
                        {transportModel.TransportID}
                      </a>
                    </td>
                    <td>{transportModel.VehicleID}</td>
                    <td>{transportModel.VehicleType}</td>
                    <td>{transportModel.Destination}</td>
                    <td>
                      {new Date(transportModel.TransportDate).toLocaleDateString()}
                    </td>
                    <td>{transportModel.ShipmentID}</td>
                    <td>
                      <a
                        style={{ backgroundColor: "#0E3662", textDecoration: "none", color: "white" }}
                        className="btn btn-warning"
                        href={`/edittr/${transportModel._id}`}
                      >
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
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
        </div>
        <Footer />
      </div>
    );
  }
}