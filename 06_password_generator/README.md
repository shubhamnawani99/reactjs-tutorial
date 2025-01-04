# Password Generator
### Concepts - useEffect (for state propagration) and useCallback (for caching)
- The password is dependant on the following -
    1. Length of the password
    1. Are numbers included in the password?
    1. Are special characters included in the password?
- Thus, we require `4 useEffect()` states for `length (Number), password (String), numbersAllowed (Boolean) and splCharsAllowed (Boolean)`
## useCallback()
```js 
// Create a cached function using useCallback() to make optimized calls
const cachedFunction = useCallback(generatePassword, [length, isNumber, isSplChars, setPassword])
```
- used to implement cached functions for optimization.
- where `generatePassword` is a function with the logic to generate password. 
- and `[length, isNumber, isSplChars, setPassword]` is the dependency list.
- the function useCallback() caches the items mentioned in dependency list.
## useEffect()
```js
// Call the useEffect() method to propagate the changes to UI when states are changed
useEffect(() => {
    cachedFunction()  //  or you can use generatePassword()
  }, [length, isNumber, isSplChars])
```
- used to propagate the changes to UI when states are changed.
- where `cachedFunction()` is the function cached using useCallback()
- and `[length, isNumber, isSplChars]` is the dependency list. `Note: not to confuse this list with the one we have defined in useCallback()`
- `Note`: we can implement the code without useCallback() as well. 

## generatePassword() logic
```js
function generatePassword(){
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "1234567890"
    const specials = "!@#$%^&*(){}[]~_+"
    if(isNumber) str += numbers
    if(isSplChars) str += specials
    let pwd = ""
    for (let index = 1; index < length; index++) {
        pwd += str[Math.floor(Math.random()*str.length + 1)]
    }
    setPassword(pwd); // set the password
}
```
## App.jsx
```js
import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  // Declare the states
  const [length, setLength] = useState(8);
  const [isNumber, setNumber] = useState(false);
  const [isSplChars, setSplChars] = useState(false);
  let [password, setPassword] = useState("");
  // useRef hook
  const passwordRef = useRef(null)

  function copy(){
    passwordRef.current?.select() // highlight the copied text
    passwordRef.current?.setSelectionRange(0, 32) // set the max-value that the user can copy
    window.navigator.clipboard.writeText(password);
  }
  // Create the password generator using Math.random()
  function generatePassword(){
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "1234567890"
    const specials = "!@#$%^&*(){}[]~_+"
    if(isNumber) str += numbers
    if(isSplChars) str += specials
    let pwd = ""
    for (let index = 0; index < length; index++) {
      pwd += str[Math.floor(Math.random()*str.length)]
    }
    setPassword(pwd); // set the password
  }
  // Create a cached function using useCallback() to make optimized calls
  const cachedFunction = useCallback(generatePassword, [length, isNumber, isSplChars, setPassword])
  // Call the useEffect() method to propagate the changes to UI when states are changed
  useEffect(() => {
    cachedFunction()  //  or you can use generatePassword()
  }, [length, isNumber, isSplChars])
  
  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-800'>
      <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input ref={passwordRef} type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copy}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={32} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={isNumber} id="numberInput" onChange={(e)=>setNumber((prev) => !prev)}/>
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={isSplChars} id="splCharsInput" onChange={(e)=>setSplChars((prev) => !prev)}/>
          <label>Special Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}
export default App
```