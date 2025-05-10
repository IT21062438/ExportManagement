import React, { Component } from 'react'
import axios from 'axios'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import ReactHtmlTableToExcel from 'react-html-table-to-excel'

const generatePDF =inquiries =>{
  const doc =new jsPDF();
  const tableColumn =["Inquiry ID", "Date", "Customer Name", "Contact No", "Email", "Inquiry Type" , "Description"];
  const tableRows=[];

  inquiries.map(inquiries=>{
    const inquiryData=[
      inquiries.inquiryID,
      inquiries.date,
      inquiries.customerName,
      inquiries.contactNo,
      inquiries.email,
      inquiries.inquiryType,
      inquiries.description,
    ];

    tableRows.push(inquiryData);
  })
    doc.text("Ceylon Exports", 70,8).setFontSize(13);
    doc.text("CUSTOMER INQUIRY SUMMARY", 14, 16).setFontSize(13); 
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("InquirySummary.pdf");


}

export default class InquiryReports extends Component {

  constructor(props){
    super(props);

    this.state={
      inquiries:[]
    };
  }

  componentDidMount(){
    this.retrieveInquiries();
  }

  retrieveInquiries(){
    axios.get("/inquiries").then(res =>{
      if (res.data.success) {
        this.setState({
          inquiries:res.data.existingInquiries
        });

        console.log(this.state.inquiries)
      }
    });
  }


  render() {
    return (
      <div id='wrapper' className='toggled'>
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
                  href="/inqrep"
                >
                  {" "}
                  &#62; Inquiry Reports<span class="sr-only">
                    (current)
                  </span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <hr />

        <h4>All Customer Inquiries</h4>
      <div id="page-content-wrapper">

      <ReactHtmlTableToExcel
        id="test-table-xls-button"
        className="btn btn-info"
        table="tableee"
        filename="InquirySummary"
        sheet="tablexls"
        buttonText="Download as Excel"
      />
      &nbsp;

      <button 
      type='button'
      style={{backgroundColor:"#00000", padding: "7px"}}
      className="btn btn-info btn-sm"
      onClick={()=> generatePDF(this.state.inquiries)}
      >
        Download As PDF
      </button>

      <table id="tableee" className="table">
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
            {this.state.inquiries.map((inquiries,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{inquiries.inquiryID}</td>
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
      
              </tr>
            ))}
          </tbody>  
        </table>


      </div>
      </div>

    )
  }
}
