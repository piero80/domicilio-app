import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListItemDetail from "../../components/ListItemDetail";
import InfoItemDetail from "../../components/InfoItemDetail";
import SidebarDetail from "../../components/SidebarDetail";
class Detail extends Component {
  render() {
    const { data } = this.props.location.state;
    return (
      <React.Fragment>
        <div className="px-6 pt-8 max-w-screen-lg">
          <Link to="/mezzocammino">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Torna alla lista
            </button>
          </Link>
        </div>
        <div className="px-6 pb-8 max-w-screen-lg mx-auto">
          <div className="flex mb-4 py-12">
            <div className="w-4/6 h-12">
              <ListItemDetail {...data} />
              <InfoItemDetail />
            </div>
            <div className="w-2/6 h-12">
              <SidebarDetail {...data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Detail;
