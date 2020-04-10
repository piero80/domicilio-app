import React from "react";
import ListItem from "./ListItem";

const ListCategory = ({ name = "", category = {} }) => {
  return (
    <div id={name.replace(" ", "_")} className="relative py-5">
      <p className="text-3xl md:text-4xl capitalize">
        {category.icon} {name}
      </p>
      <div>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {category.data.map((props, index) => (
            <ListItem key={index} icon={category.icon} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ListCategory;
