import { useState } from "react";
import AlertButton from "./Components/AlertButton";
import Button from "./Components/Button";
import Alert from "./Components/alert";


function App() {

const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Alert>
        Hello world <span>YOOH</span>
      </Alert>
      {alertVisible && <AlertButton onClose={() => setAlertVisibility(false)} >My Alert</AlertButton>}
      <Button color="secondary"  onClick={() => setAlertVisibility(true)}>My Button</Button>

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
