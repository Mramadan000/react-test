import React from "react";

const Child = props => {
  const listItems = props.passData.map((item, id) => (
    <ul key={id}>
      <li>ID: {item.id} => my name is {item.name} and I have {item.age} years old</li>
    </ul>
  ));
  return(
    <div>
      {listItems}
    </div>
  );
};
export default Child;
