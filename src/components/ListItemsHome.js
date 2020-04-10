import React from "react";
import ListItemHome from "./ListItemHome";
import quartieri from "../utility/quartieri";

const ListItemsHome = (props) => {
  return (
    <div className={`${props.municipio} relative py-5`}>
      <p className="text-2xl md:text-2xl">{props.municipio}</p>
      <p className="italyc">{quartieri[props.municipio]}</p>
      {props.content.map((item, index) => {
        return <ListItemHome key={index} {...item} />;
      })}
    </div>
  );
};
export default ListItemsHome;
