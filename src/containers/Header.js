import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 capitalize">
          <Link
            to="/"
            className="title-app font-semibold text-xl tracking-tight"
          >{`${process.env.REACT_APP_CITY}`}</Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              to="/mappa"
            >
              Mappa
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              to="/contatti"
            >
              Contatti
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
