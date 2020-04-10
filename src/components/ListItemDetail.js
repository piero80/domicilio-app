import React, { Fragment } from "react";

const ListItemDetail = ({ orari, note, name, address, servizi, icon }) => {
  return (
    <Fragment>
      <div className="flex items-baseline">
        <span className="inline-block bg-blue-600 text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
          {note}
        </span>
        <div className="ml-4 text-white bg-green-600 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
          {servizi}
        </div>
      </div>
      <div className="flex items-baseline">
        <div className="img-profile pr-2">{icon}</div>
        <h4 className="mt-4 font-semibold text-lg leading-tight truncate">
          {name}
        </h4>
      </div>
      <div className="mt-4">
        {address}
        <span className="text-gray-600 text-sm"></span>
      </div>
      <div className="mt-4 flex items-center">
        <span className="text-gray-600 text-sm">{orari}</span>
      </div>
    </Fragment>
  );
};

export default ListItemDetail;
