import React from "react";
import ListItems from "./ListItems";
const ListCityHall = (props) => {
  return (
    <div>
      {Object.keys(props.data).map((type, index) => {
        return (
          <ListItems key={index} municipio={type} content={props.data[type]} />
        );
      })}
    </div>
  );
};
export default ListCityHall;
