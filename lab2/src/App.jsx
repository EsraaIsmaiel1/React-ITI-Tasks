import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import Student from "./components/student";
import { User } from "./components/User";

function App() {
  return (
    <div className="App">
      <User></User>
      {/* <Student /> */}
    </div>
  );
}

export default App;
