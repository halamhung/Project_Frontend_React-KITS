import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <img src="./logo.png" alt="" className="w-100" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
