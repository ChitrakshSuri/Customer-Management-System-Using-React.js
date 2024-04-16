import logo from "./logo.svg";
import "./App.css";
import "./Components/cus.css"; //import here (you can also import in Customer.js) or write <link rel="stylesheet" href="./Static/CSS/cus.css"> in index.html

import Customer from "./Components/Customer";
import DisplayCustomer from "./Components/DisplayCustomer";
import ShowCountry from "./Components/ShowCountry";

function App() {
  return (
    <>
      {/* <Customer /> */}
      {/* <DisplayCustomer /> */}
      <ShowCountry/>
    </>
  );
}

export default App;
