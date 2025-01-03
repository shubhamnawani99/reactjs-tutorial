import Card from "./Components/Card"

function App() {
  let myObj = {
    username: "Shubham",
    age: 25
  }
  return (
    <div >
      <h1 className='bg-pink-200 text-black p-4 rounded-xl text-center mb-5'>Tailwind Cards</h1>
      {/* Calling Card Component */}
      {/* <Card someObj = {myObj}/>  {} are used to send objects*/}
      <div className="grid grid-cols-3 gap-4">
        <Card username="First User" btnText="Click Me"/>      
        <Card username="Second User" btnText="Visit Me"/>      
        <Card username="Third User" />      
      </div>
    </div>
  )
}

export default App
