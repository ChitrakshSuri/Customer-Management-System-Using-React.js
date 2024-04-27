import React from "react";

function ShowCountry() {
  var country = ["India", "US", "Bangladesh", "Canada", "Afganistan", "Nepal"];
  //   var countryWithElement = [
  //     <option value="India">India</option>,
  //     <option value="US">US</option>,
  //     <option value="Bangladesh">Bangladesh</option>,
  //     <option value="Canada">Canada</option>,
  //     <option value="Afganistan">Afganistan</option>,
  //     <option value="UK">UK</option>
  //the array country did'nt have UK as an element but this array will create it dynamically because we rendered it in return() function
  //   ];

  // --> the below code can be done in single line
  // var countryWithElement = [];
  // var count = 0;

  // for (var c of country) {
  //   var e = "";
  //   if (count % 2 == 0) {
  //     e = (
  //       <option style={{ backgroundColor: "red" }} value={c}>
  //         {" "}
  //         {c}{" "}
  //       </option>
  //     );
  //   } else {
  //     e = (
  //       <option style={{ backgroundColor: "yellow" }} value={c}>
  //         {" "}
  //         {c}{" "}
  //       </option>
  //     );
  //   }
  //   count++;

  //   countryWithElement.push(e);
  // }
  // var countryWithElement = country.map(e=>(<option value={e}>{e}</option>));
  // --> the above code can also be minimized by writing the above code in return() in place of {countryWithElement}


  return (
    <>
      <label htmlFor="">Select Country</label>
      <select name="" id="">
        {/* {countryWithElement} */}
        {country.map(e => (<option value={e}>{e}</option>))}
        {/* {country} */}
        {/* <option value="India">India</option>
        <option value="US">US</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Canada">Canada</option>
        <option value="Afganistan">Afganistan</option> */}
        {/* this will create statically */}
      </select>
    </>
  );
}

export default ShowCountry;
