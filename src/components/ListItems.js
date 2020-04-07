import React from "react";
import ListItem from "./ListItem";
import quartieri from "../utility/quartieri";

const ListItems = (props) => {
  return (
    <div className={`${props.municipio} relative py-5`}>
      <p className="text-2xl md:text-2xl">{props.municipio}</p>
      <p className="italyc">{quartieri[props.municipio]}</p>
      {props.content.map((item, index) => {
        return <ListItem key={index} {...item} />;
      })}
    </div>
  );
};
export default ListItems;
