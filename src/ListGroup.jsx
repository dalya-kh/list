import React from "react";
import { useState } from "react";

export const ListGroup = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length == 0 ? <h2>No List Found</h2> : null}
      {/*items.length==0 && <h2>No List Found</h2>*/}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListGroup;

