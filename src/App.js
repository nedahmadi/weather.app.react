import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a href="nedahmadi83@gmail.com" traget="_blank">
            Neda Ahmadi
          </a>{" "}
          and is{" "}
          <a href="nedahmadi83@gmail.com" target="_blank">
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}
