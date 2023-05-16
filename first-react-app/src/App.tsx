//import Message from "./message"
//import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["New York", "Paris", "Nairobi", "Nakuru"];


  //code duplication in programming is not advisable
  /* if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No items found!</p>
      </>
    );
  */
//const message = items.length === 0 ? <p>No item found!</p> : null;

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>NO item found!</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
