import React from "react";
import ListItemsHome from "./ListItemsHome";
const ListCityHall = (props) => {
  return (
    <div>
      {Object.keys(props.data).map((type, index) => {
        return (
          <ListItemsHome
            key={index}
            municipio={type}
            content={props.data[type]}
          />
        );
      })}
    </div>
  );
};
export default ListCityHall;
