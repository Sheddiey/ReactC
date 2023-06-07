import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Kampala", "Nairobi", "Tunis", "Algiers"];
  const [selectedIndex, setSelectedIndex] = useState(-1);



  return (
    //a better way is to use fragments instead of a div element
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null}; */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className= {selectedIndex === index ? 'list-group-item active' : 'list-group'}
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  ); //parenthesis to spread jsx into multiple lines
}

export default ListGroup;
