import React, { Fragment } from "react";
import ListCityHall from "./ListCityHall";
const ListCategory = (props) => {
  return (
    <Fragment>
      <div id={props.category.replace(" ", "_")} className="relative py-5">
        <p className="text-3xl md:text-4xl capitalize">
          {props.icon} {props.category}
        </p>
        <ListCityHall {...props} />
      </div>
    </Fragment>
  );
};

export default ListCategory;
