import React, { useState, Component } from "react";
import { Link } from "react-router-dom";

class ListItem extends Component {
  render() {
    const { name, address, icon } = this.props;
    const location = {
      pathname: `mezzocammino/${name}`,
      state: { data: this.props, icon: icon },
    };
    return (
      <Link to={location}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2 px-2">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{address}</p>
          </div>
        </div>
      </Link>
    );
  }
}
export default ListItem;
