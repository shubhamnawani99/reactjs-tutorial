# Create a User Context
```js
import React from "react";
const UserContext = React.createContext()
export default UserContext;
```
- The context will give a provider, that can be used as a wrapper

# Create a User Context `Provider`
```jsx
import React from 'react'
import UserContext from './UserContext'

function UserContextProvider({children}) {
    const [user, setUser] = React.useState({name: 'John', age: 25})
  return (
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
```

# Login.jsx
```js
import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')    

    // How to use the user Context
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder='username'/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
```
# Profile.jsx
```js
import React, {useContext} from 'react'
import UserContext from '../context/UserContext'   

function Profile() {
    const {user} = useContext(UserContext)
    if (user) {
        return (
            <div>
                <h2>Profile</h2>
                <p>Username: {user.username}</p>
                <p>Password: {user.password}</p>
            </div>
        )
    }
    return (
        <div>
            <h2>Profile</h2>
            <p>No user logged in</p>
        </div>
    )
}

export default Profile 
```