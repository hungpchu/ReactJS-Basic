import React from "react";
import ".././styles/App.css";
import Search from "./Search";

function App() {
  return (
    <div className="app-body">
      <h1 className="search-header">ACME Search</h1>
      <Search />
    </div>
  );
}

export default App;
