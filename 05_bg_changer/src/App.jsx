import { useState } from "react"
function App() {
  let [color, setColor] = useState("Olive");
  return (
  // We are setting the background color using a setState variable called color
  // the onClick() method is applied on the buttons to call the setColor() Method which changes the color, then the changed color is applied to the background
  <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div id="bottom-bar" className="flex flex-wrap justify-center shadow-xl gap-3 bg-white px-3 py-2 rounded-xl">
      <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
      <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
      <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
      <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
    </div>
  </div>
  </div>
  )
}
export default App
