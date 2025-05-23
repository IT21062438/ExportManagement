import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import InventoryDashboard from "./components/InventoryDashboard";
import CreateInventory from "./components/CreateInventory";
import EditInventory from "./components/EditInventory";
import InventoryDetails from "./components/InventoryDetails";
import inventoryRep from "./components/inventoryRep";
import ProductionCreate from "./components/ProductionCreate";
import ProductionDash from "./components/ProductionDash";
import ProductionEdit from "./components/ProductionEdit";
import ProductionDetails from "./components/ProductionDetails";
import ProductionRep from "./components/ProductionRep";
import Chatbot from "./components/Chatbot";

import Home from "./components/Home";
import Admin from "./components/Admin";

import CreatePosted from "./components/CreatePosted";
import EditPosted from "./components/EditPosted";
import HomePosted from "./components/HomePosted";
import PostedDetails from "./components/PostedDetails";
import CreatePostbr from "./components/CreatePostbr";
import EditPostbr from "./components/EditPostbr";
import HomePostbr from "./components/HomePostbr";
import PostbrDetails from "./components/PostbrDetails";
import exportDetailsRep from "./components/exportDetailsRep";
import buyerRegisterRep from "./components/buyerRegisterRep";

import CreatePostQC from "./components/CreatepostQC";
import EditPostQC from "./components/EditPostQC";
import HomeQC from "./components/HomeQC";

import PostDetailsQC from "./components/PostDetailsQC";

import CreateTransport from "./components/CreateTransport";
import EditTransport from "./components/EditTransport";
import HomeTR from "./components/HomeTR";
import PostDetailsTR from "./components/PostDetailsTR";

import CreateRequest from "./components/CreateRequest";
import EditRequest from "./components/EditRequest";
import RequestDetails from "./components/RequestDetails";
import RequestList from "./components/RequestList.js";
import RequestReports from "./components/RequestReports";
import InquiryList from "./components/InquiryList";
import CreateInquiry from "./components/CreateInquiry";
import EditInquiry from "./components/EditInquiry";
import InquiryDetails from "./components/InquiryDetails";
import InquiryReports from "./components/InquiryReports";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import { ToastContainer } from "react-toastify";
import Profile from "./components/Profile.js";
import ProfileDetails from "./components/ProfileDetails.js";

//import RequestNavbar from './components/RequestNavbar';

export default class App extends Component {
  render() {
    const hideNavbarPaths = ["/", "/signup", "/home", "/profile"];
    return (
      <BrowserRouter>
        {/* {window.location.pathname !== "/" &&
          window.location.pathname !== "/signup" &&
          window.location.pathname !== "/home" &&
          window.location.pathname !== "/profile" &&
          <NavBar />} */}

        {!hideNavbarPaths.includes(window.location.pathname) && <NavBar />}

        <div className="page-content-wrapper">
          <ToastContainer />
          <Route path="/" exact component={Login}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Route
            path="/profiledetails"
            exact
            component={ProfileDetails}
          ></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/intdash" exact component={InventoryDashboard}></Route>
          <Route path="/intadd" exact component={CreateInventory}></Route>
          <Route path="/intedit/:id" exact component={EditInventory}></Route>
          <Route path="/intpost/:id" exact component={InventoryDetails}></Route>
          <Route path="/intrep" exact component={inventoryRep}></Route>
          <Route path="/procreate" exact component={ProductionCreate}></Route>
          <Route path="/prodash" exact component={ProductionDash}></Route>
          <Route path="/proedit/:id" exact component={ProductionEdit}></Route>
          <Route
            path="/propost/:id"
            exact
            component={ProductionDetails}
          ></Route>
          <Route path="/prorep" exact component={ProductionRep}></Route>
          <Route path="/admin" exact component={Admin}></Route>

          <Route path="/expDash" exact component={HomePosted}></Route>
          <Route path="/addexp" component={CreatePosted}></Route>
          <Route path="/expedit/:id" component={EditPosted}></Route>
          <Route path="/exppost/:id" component={PostedDetails}></Route>
          <Route path="/exprep" component={exportDetailsRep}></Route>
          <Route path="/buyerReg" exact component={HomePostbr}></Route>
          <Route path="/addPostbr" component={CreatePostbr}></Route>
          <Route path="/editPostbr/:id" component={EditPostbr}></Route>
          <Route
            path="/postPostbrDetails/:id"
            component={PostbrDetails}
          ></Route>
          <Route path="/buyerRegisterRep" component={buyerRegisterRep}></Route>

          <Route path="/requests" exact component={RequestList}></Route>
          <Route path="/reqadd" component={CreateRequest}></Route>
          <Route path="/reqedit/:id" component={EditRequest}></Route>
          <Route path="/request/:id" component={RequestDetails}></Route>
          <Route path="/reqrep" component={RequestReports}></Route>

          <Route path="/inquiries" component={InquiryList}></Route>
          <Route path="/inqadd" component={CreateInquiry}></Route>
          <Route path="/inqedit/:id" component={EditInquiry}></Route>
          <Route path="/inquiry/:id" component={InquiryDetails}></Route>
          <Route path="/inqrep" component={InquiryReports}></Route>

          <Route path="/homeqc" exact component={HomeQC}></Route>
          <Route path="/addqc" component={CreatePostQC}></Route>
          <Route path="/qcedit/:id" component={EditPostQC}></Route>
          <Route path="/post/:id" component={PostDetailsQC}></Route>

          <Route path="/hometr" exact component={HomeTR}></Route>
          <Route path="/addtr" component={CreateTransport}></Route>
          <Route path="/edittr/:id" component={EditTransport}></Route>
          <Route path="/posttr/:id" component={PostDetailsTR}></Route>
          <Route path="/chatbot" exact component={Chatbot}></Route>
        </div>
      </BrowserRouter>
    );
  }
}


