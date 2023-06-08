//import Message  from "./message";
import ListGroup from "./Components/ListGroup";
//import { Fragment } from "react"; use empty angle brackets

function App() {
  let items = ["New York", "Kampala", "Nairobi", "Tunis", "Algiers"];

const handleSelectItem = (item: string) => {
  console.log(item);
}

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;




 //JSx : JavaScript XML
  //return <div><Message></Message></div>;
  //return <div><ListGroup></ListGroup></div>
  


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
