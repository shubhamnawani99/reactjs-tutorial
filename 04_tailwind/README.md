# Tailwind.css

Refer [tailwind](https://tailwindcss.com/) official documentation for installation.

# Code
## Card.jsx (Re-usable React Component)
```js
import React from 'react'
function Card(props) {
    console.log(props.username);
    return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 ">
        <img
            src="https://images.pexels.com/photos/29835610/pexels-photo-29835610/free-photo-of-misty-mountain-retreat-in-madeira-portugal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">Card Title</h2>
            <p className="text-gray-400">
                The user is {props.username} {/* Using properties */}
            </p>
            </div>
            <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
            >
            {props.btnText || "Visit Me (Default)"}   {/* Handle Default Case */}

            </button>
        </div>
        </div>
  )
}
export default Card
```
## App.jsx
```js
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
```
## index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin-left: 0;
  display: flex;
  place-items: center;
  align-items: center;
  justify-content: center;
  min-width: 720px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
```
## main.jsx
```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
