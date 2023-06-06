//import Message  from "./message";
import ListGroup from "./Components/ListGroup";
//import { Fragment } from "react"; use empty angle brackets

function App() {
  //JSx : JavaScript XML
  //return <div><Message></Message></div>;
  //return <div><ListGroup></ListGroup></div>
  const items = ["New York", "Kampala", "Nairobi", "Tunis", "Algiers"];

  return (
    //a better way is to use fragments instead of a div element
    <>
      <h1>List</h1>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  ); //parenthesis to spread jsx into multiple lines
}

export default App;
