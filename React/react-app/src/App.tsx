//import Message  from "./message";
import ListGroup from "./Components/ListGroup";

function App() {
  //JSx : JavaScript XML
  //return <div><Message></Message></div>;
  //return <div><ListGroup></ListGroup></div>
  return (
    <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  );//parenthesis to spread jsx into multiple lines
}

export default App;
