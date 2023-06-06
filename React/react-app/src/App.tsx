//import Message  from "./message";
import ListGroup from "./Components/ListGroup";
//import { Fragment } from "react"; use empty angle brackets

function App() {
  //JSx : JavaScript XML
  //return <div><Message></Message></div>;
  //return <div><ListGroup></ListGroup></div>
  let items = ["New York", "Kampala", "Nairobi", "Tunis", "Algiers"];
  items = [];

  // if (items.length === 0) //repetion is not instead we are gonna render conditionally
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item found</p>;
  //     </>
  //   );

  //const message = items.length === 0 ? <p>No item found</p> : null;
  //the benefits of using functions is that they can have parameters
  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };
  return (
    //a better way is to use fragments instead of a div element
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null}; */}
      {items.length === 0 && <p>No item found</p>};
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  ); //parenthesis to spread jsx into multiple lines
}

export default App;
