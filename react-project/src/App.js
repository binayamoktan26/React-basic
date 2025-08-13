import "./App.css";
// import Profile from "./UserComponent";
import { useState } from "react";
import { UserProfile } from "./UserProfile";
// function App() {

// const name = "Kakashi Hatake";

// // const [counter, setCounter] = useState(1);
// // let counter = 1;
// //

// const increase = () => {
//   setCounter(counter + 1);
// };
// console.log(counter);
// decrease
// const decrease = () => {
//   setCounter(counter - 1);
// };
// console.log(counter);

// return (
// <>

/* <div>{counter}</div>
      <button onClick={increase}>+</button>
      <button onClick={() => setCounter(counter - 1 )}>-</button>
    </> */

//       <UserProfile />
//     <></>
//   );
// }

function App() {
  return (
    <>
      <div
        className="user-page"
        style={{
          color: "white",
        }}
      >
        <UserProfile />
      </div>
    </>
  );
}

export default App;
