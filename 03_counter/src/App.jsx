import { useState } from "react";

function App() {

  /* useState() method returns two elements
  1st element is the item you wish to update
  2nd element is the method used to update the said item
  The value in paranthesis is used to set a default value i.e. 5 (here) */
  let [counter, setCounter] = useState(5);

  const incrementCounter = () => {
    if(counter >= 20) //  setting upper-bound
      return;
    counter += 1;
    // useState() will provide us with a setter() that would enable us to update changes to UI
    setCounter(counter)
    console.log(counter); //  The value is incremented but not reflected back in UI
    // Thus, we need help of useState() function
  }

  const decrementCounter = () => {
    // setting lower-limit so that counter does not go below 0
    if(counter <= 0)
      return;
    counter--;
    setCounter(counter)
    console.log(counter);
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value Above the Buttons: {counter}</h2>
      <button onClick={incrementCounter}>Increment Value</button> &nbsp;
      <button onClick={decrementCounter}>Decrement Value</button> &nbsp;

      <h2>Counter Value Below the Buttons: {counter}</h2>
      <footer>Footer: All the Counter Values are updated simulaneously</footer>
      <h2>Counter Value Below the Footer: {counter}</h2>
    </>
  )
}

export default App