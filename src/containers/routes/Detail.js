import React, { Component } from "react";
import { Link } from "react-router-dom";

class Detail extends Component {
  render() {
    const {
      name,
      icon,
      address,
      note,
      orari,
      servizi,
    } = this.props.location.state.data;
    return (
      <React.Fragment>
        <div className="px-6 py-8 max-w-screen-lg mx-auto">
          <Link to="/mezzocammino">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Torna alla lista
            </button>
          </Link>
          <div className="py-12">
            <div className="flex items-baseline">
              <span className="inline-block bg-blue-600 text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                {note}
              </span>
              <div className="ml-2 text-white bg-green-600 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                {servizi}
              </div>
            </div>
            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
              {name}
            </h4>
            <div className="mt-2">
              {address}
              <span className="text-gray-600 text-sm"></span>
            </div>
            <div className="mt-2 flex items-center">
              <span className="text-gray-600 text-sm">{orari}</span>
            </div>
          </div>

          <div className="py-6">
            <div>Info consegna a domicilio</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Detail;
