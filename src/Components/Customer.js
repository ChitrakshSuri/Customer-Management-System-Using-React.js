import React, { useState } from "react";
import {
  addCustomerBLL,
  cusArr,
  searchCustomerBLL,
  deleteCustomerBLL,
} from "../BLL/CustomerBLL";
import DisplayCustomer from "./DisplayCustomer";

var curIndex = 0; // globally create a variable so that we can use anywhere
const Customer = () => {
  // function Customer
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [customers, setCustomers] = useState([]); //--> video 6

  function id_change(e) {
    setId(e.target.value);
  }
  function name_change(e) {
    setName(e.target.value);
  }
  function address_change(e) {
    setAddress(e.target.value);
  }
  function mobileNo_change(e) {
    setMobileNo(e.target.value);
  }
  // Function for Button
  function add_Click(e) {
    // alert("Add Clicked");
    // alert(id);

    // We have 4 data in state variable --> id, name, address, mobile no.
    // But i am in Pl so I am not ready to add it, I have to call BLL Function to add customer

    addCustomerBLL(id, name, address, mobileNo); // call BLL
    // setCustomers([...customers]);
    // setCustomers(...[cusArr]);
    setCustomers([...customers, { id, name, address, mobileNo }]);
    //spread operator //...customers: The spread syntax is used here to create a new array that includes all the elements of the existing customers array. This ensures that we don't modify the original customers array directly but instead create a new array with the same elements.
    alert("Customer added successfully");
  }
  function search_Click(e) {
    // alert("Search Clicked");
    var cus = searchCustomerBLL(id);
    if (cus) {
      setName(cus.name);
      setAddress(cus.address);
      setMobileNo(cus.mobileNo);
      alert("Found");
    } else {
      alert("ID not found");
    }
  }
  function modify_Click(e) {
    alert("Modify Clicked");
  }
  function delete_Click(e) {
    // alert("Delete Clicked");
    var msg = deleteCustomerBLL(id);
    alert(msg);
    // after deletion we again have to render displaycustomer.js
    setCustomers([...cusArr]);
  }
  //

  function showCustomer(index){
    var cus = cusArr[index];
    setId(cus.id);
    setName(cus.name);
    setAddress(cus.address);
    setMobileNo(cus.mobileNo);
  }

  function first_Click(e) {
    // alert("First Clicked");
    showCustomer(curIndex);
  }
  function previous_Click(e) {
    // alert("Previous Clicked");
    if(curIndex > 0){
      curIndex--;
    }
    showCustomer(curIndex);
  }
  function next_Click(e) {
    // alert("Next Clicked")
    if(curIndex < cusArr.length - 1){
      curIndex++;
    }
    showCustomer(curIndex);
;
  }
  function last_Click(e) {
    // alert("Last Clicked");
    curIndex = cusArr.length - 1;
    showCustomer(curIndex);
  }
  return (
    <>
      <header>
        <h1>
          <b>Customer Management System</b>
        </h1>
      </header>
      <div className="main">
        <div className="input-element">
          <label htmlFor="txtId">ID: </label>
          <input type="text" onChange={id_change} value={id} id="txtId" />
          <label htmlFor="txtName">Name: </label>
          <input type="text" onChange={name_change} value={name} id="txtName" />
          <label htmlFor="txtAddress">Address: </label>
          <textarea
            onChange={address_change}
            value={address}
            id=""
            cols={30}
            rows={10}
          />
          <label htmlFor="txtMobileNo">Mobile No.: </label>
          <input
            type="text"
            onChange={mobileNo_change}
            value={mobileNo}
            id="txtMobileNo"
          />
        </div>
        <div className="input-btn">
          <input type="button" onClick={add_Click} defaultValue="Add" />
          <input type="button" onClick={search_Click} defaultValue="Search" />
          <input type="button" onClick={modify_Click} defaultValue="Modify" />
          <input type="button" onClick={delete_Click} defaultValue="Delete" />
        </div>
        <div className="input-btn">
          <input type="button" onClick={first_Click} defaultValue="First" />
          <input
            type="button"
            onClick={previous_Click}
            defaultValue="Previous"
          />
          <input type="button" onClick={next_Click} defaultValue="Next" />
          <input type="button" onClick={last_Click} defaultValue="Last" />
        </div>
        {/* Table from DisplayCustomer.js */}
        <br />
        <DisplayCustomer customers={customers} />
        {/* pass of state variable customers to DisplayCustomer.js */}
      </div>
    </>
  );
};

export default Customer;
