import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  handleClick = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  };

  render() {
    const { isVisible } = this.state;
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
            {/*<Link
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
            </Link>*/}
            <div
              onClick={this.handleClick}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Quartieri
            </div>
            {isVisible && (
              <div className="dropdown mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                <Link
                  to="/mezzocammino"
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                >
                  Mezzocammino
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
