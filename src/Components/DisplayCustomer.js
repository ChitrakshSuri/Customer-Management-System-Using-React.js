import React from "react";

function DisplayCustomer(props) {
  return (
    <div>
      <table id="customers">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile Number</th>
          </tr>
          {
            // to use JavaScript code use curly braces
            props.customers.map((e) => (
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.address}</td>
                <td>{e.mobileNo}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default DisplayCustomer;
