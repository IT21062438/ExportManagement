import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ReactHtmlTableToExcel from "react-html-table-to-excel";

const generatePDF = (requests) => {
  const doc = new jsPDF();
  const tableColumn = [
    "Request ID",
    "Customer Name",
    "Date",
    "Category",
    "Product Name",
    "Net Weight(Kg)",
    "Package Qty",
  ];
  const tableRows = [];

  requests.forEach((request) => {
    const formattedDate = (() => {
      const date = new Date(request.date);
      const dd = String(date.getDate()).padStart(2, "0");
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const yyyy = date.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    })();

    const requestData = [
      request.requestID,
      request.customerName,
      formattedDate,
      request.category,
      request.productName,
      request.netWeight,
      request.packageQty,
    ];

    tableRows.push(requestData);
  });

  

  doc.setFontSize(16);
   doc.setTextColor(0, 0, 0);
   doc.text("Ceylon Exports", 105, 10, { align: 'center' });
   
   doc.setFontSize(12);
  doc.text("Requests Summary", 105, 18, { align: 'center' });
  
  doc.autoTable(tableColumn, tableRows, {
    styles: { fontSize: 8 },
    startY: 35,
    headStyles: {
      fillColor: [14, 54, 98], 
      textColor: 255,          
      fontStyle: 'bold'        
    }
  });
  doc.save("RequestsSummary.pdf");
};

export default class RequestReports extends Component {
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

  render() {
    return (
      <div id="wrapper" className="toggled">
        {/* custom navigation        */}
        <nav
          class="navbar navbar-expand-lg rounded-3"
          style={{ backgroundColor: "#006a4e", marginTop: "5px" }}
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
                  href="/reqrep"
                >
                  {" "}
                  &#62; Request Reports<span class="sr-only">
                    (current)
                  </span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <hr />

        <h4>All Customer Requests</h4>

        <div id="page-content-wrapper">
          <ReactHtmlTableToExcel
            id="test-table-xls-button"
            className="btn btn-info"
            table="tableee"
            filename="RequestSummary"
            sheet="tablexls"
            buttonText="Download as Excel"
          />
          &nbsp;
          <button
            type="button"
            style={{ backgroundColor: "#00000", padding: "7px" }}
            class="btn btn-info btn-sm"
            onClick={() => generatePDF(this.state.requests)}
          >
            Download as PDF
          </button>
          <table id="tableee" className="table">
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
                  <td>{requests.requestID}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
